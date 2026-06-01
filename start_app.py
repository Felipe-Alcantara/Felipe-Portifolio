#!/usr/bin/env python3
"""
start_app.py — Inicializador do FelixoVerse Portfolio.

O que faz, em ordem:
  1. Verifica se Node.js e npm estão instalados.
  2. Instala as dependências (npm install) apenas se ainda não estiverem.
  3. Sobe o servidor de desenvolvimento do Vite (npm run dev).
  4. Detecta a URL real impressa pelo Vite e abre no navegador padrão.

Uso:
    python3 start_app.py

Encerrar: Ctrl+C (desliga o servidor e libera a porta).
"""

import os
import re
import shutil
import socket
import subprocess
import sys
import threading
import time
import webbrowser
from urllib.parse import urlparse

# Diretório raiz do projeto = pasta onde este script está.
PROJECT_DIR = os.path.dirname(os.path.abspath(__file__))

# Regex que captura a URL "Local:" que o Vite imprime ao subir.
# Ex.: "  ➜  Local:   http://localhost:5173/"
VITE_URL_RE = re.compile(r"Local:\s+(https?://\S+)")

# Host e porta padrão do Vite, usados enquanto a URL real não é detectada.
DEFAULT_HOST = "localhost"
DEFAULT_PORT = 5173

# Tempo máximo (s) aguardando o servidor aceitar conexões antes de desistir.
SERVER_WAIT_TIMEOUT = 60


def info(msg):
    print(f"\033[1;35m[start]\033[0m {msg}")


def erro(msg):
    print(f"\033[1;31m[erro]\033[0m {msg}", file=sys.stderr)


def comando_existe(nome):
    """Retorna o caminho do executável ou None se não existir no PATH."""
    return shutil.which(nome)


def verificar_pre_requisitos():
    """Garante que node e npm estão disponíveis. Encerra se faltar algum."""
    node = comando_existe("node")
    npm = comando_existe("npm")

    if not node:
        erro("Node.js não encontrado. Instale em https://nodejs.org e tente de novo.")
        sys.exit(1)
    if not npm:
        erro("npm não encontrado. Ele acompanha o Node.js — reinstale o Node.js.")
        sys.exit(1)

    versao_node = subprocess.run(
        [node, "--version"], capture_output=True, text=True
    ).stdout.strip()
    info(f"Node.js {versao_node} detectado.")
    return npm


def precisa_instalar():
    """
    Decide se roda npm install. Instala se node_modules não existir
    ou se package.json for mais novo que a pasta node_modules.
    """
    node_modules = os.path.join(PROJECT_DIR, "node_modules")
    package_json = os.path.join(PROJECT_DIR, "package.json")

    if not os.path.isdir(node_modules):
        return True

    # Se o package.json mudou depois da última instalação, reinstala.
    try:
        return os.path.getmtime(package_json) > os.path.getmtime(node_modules)
    except OSError:
        return True


def instalar_dependencias(npm):
    """Roda npm install na raiz do projeto, mostrando a saída em tempo real."""
    info("Instalando dependências (npm install)...")
    resultado = subprocess.run([npm, "install"], cwd=PROJECT_DIR)
    if resultado.returncode != 0:
        erro("npm install falhou. Verifique a saída acima.")
        sys.exit(resultado.returncode)
    info("Dependências instaladas.")


def porta_aceita_conexao(host, porta):
    """Retorna True se há algo escutando em host:porta (servidor no ar)."""
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
        sock.settimeout(0.5)
        return sock.connect_ex((host, porta)) == 0


def abrir_navegador_quando_pronto(processo, url_detectada, navegador_aberto):
    """
    Roda em thread separada: espera o servidor aceitar conexões e então
    abre o navegador uma única vez.

    Usa a URL anunciada pelo Vite (via stdout) se disponível; caso contrário
    faz polling no host/porta padrão. Isso torna a abertura confiável mesmo
    quando o Vite não emite a linha "Local:" (ex.: sem TTY).
    """
    inicio = time.time()
    while time.time() - inicio < SERVER_WAIT_TIMEOUT:
        if navegador_aberto.is_set() or processo.poll() is not None:
            return

        # Prefere a URL real anunciada pelo Vite; senão, o padrão.
        url = url_detectada.get("url")
        if url:
            parsed = urlparse(url)
            host = parsed.hostname or DEFAULT_HOST
            porta = parsed.port or DEFAULT_PORT
        else:
            host, porta = DEFAULT_HOST, DEFAULT_PORT
            url = f"http://{host}:{porta}/"

        # localhost pode resolver para ::1; testa o host como informado.
        alvo = "127.0.0.1" if host == "localhost" else host
        if porta_aceita_conexao(alvo, porta):
            info(f"Servidor no ar. Abrindo {url} no navegador...")
            webbrowser.open(url)
            navegador_aberto.set()
            return

        time.sleep(0.5)

    if not navegador_aberto.is_set():
        erro("Servidor não respondeu a tempo; abra a URL manualmente.")


def iniciar_servidor(npm):
    """
    Sobe `npm run dev`, espelha a saída do Vite no terminal e abre o
    navegador assim que o servidor aceitar conexões.
    """
    info("Iniciando servidor de desenvolvimento (npm run dev)...")

    processo = subprocess.Popen(
        [npm, "run", "dev"],
        cwd=PROJECT_DIR,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
        bufsize=1,  # line-buffered
    )

    navegador_aberto = threading.Event()
    # Compartilhado entre threads: a URL real assim que o Vite a anunciar.
    url_detectada = {"url": None}

    threading.Thread(
        target=abrir_navegador_quando_pronto,
        args=(processo, url_detectada, navegador_aberto),
        daemon=True,
    ).start()

    try:
        for linha in processo.stdout:
            print(linha, end="")  # espelha a saída do Vite no terminal

            # Captura a URL real (porta pode diferir se 5173 estiver ocupada).
            if url_detectada["url"] is None:
                achou = VITE_URL_RE.search(linha)
                if achou:
                    url_detectada["url"] = achou.group(1)

        # Se o loop terminou, o processo morreu.
        processo.wait()
    except KeyboardInterrupt:
        info("Encerrando servidor (Ctrl+C)...")
        processo.terminate()
        try:
            processo.wait(timeout=10)
        except subprocess.TimeoutExpired:
            processo.kill()
        info("Servidor encerrado. Até logo!")
        return

    if processo.returncode not in (0, None):
        erro(f"O servidor encerrou com código {processo.returncode}.")
        sys.exit(processo.returncode)


def main():
    info("FelixoVerse Portfolio — inicializando ambiente local.")
    npm = verificar_pre_requisitos()

    if precisa_instalar():
        instalar_dependencias(npm)
    else:
        info("Dependências já instaladas — pulando npm install.")

    iniciar_servidor(npm)


if __name__ == "__main__":
    main()
