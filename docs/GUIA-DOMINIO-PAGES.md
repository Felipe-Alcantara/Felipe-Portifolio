# Guia: configurar `felixo.com.br` no GitHub Pages

Este guia mostra exatamente o que fazer no **Registro.br** e no **GitHub** para publicar o site com domínio próprio.

## 1. O que já está pronto neste repositório

O arquivo `public/CNAME` já existe com:

```txt
felixo.com.br
```

Ou seja: no deploy, o GitHub Pages já recebe a instrução de usar esse domínio.

## 2. Configuração no GitHub

1. Abra o repositório no GitHub.
2. Vá em **Settings** → **Pages**.
3. Em **Source**, confirme a branch/pasta usada para publicar (ex.: `main` + `/root`, ou GitHub Actions).
4. Em **Custom domain**, informe:

   ```txt
   felixo.com.br
   ```

5. Salve.
6. Aguarde alguns minutos e depois ative **Enforce HTTPS** (quando disponível).

> Se o campo de domínio “sumir” ou não salvar, normalmente é DNS ainda não propagado ou domínio já usado em outro repositório.

## 3. Configuração no Registro.br (DNS)

No painel do Registro.br:

1. Acesse o domínio `felixo.com.br`.
2. Entre em **DNS** (zona DNS).
3. Crie/edite os registros abaixo para o domínio raiz.

> No editor DNS do Registro.br, o campo `Nome` do domínio raiz normalmente deve ficar **vazio**.  
> Não use `@` se o painel acusar `Nome do record inválido - @`.

| Tipo | Nome | Valor |
|---|---|---|
| A | *(vazio)* | 185.199.108.153 |
| A | *(vazio)* | 185.199.109.153 |
| A | *(vazio)* | 185.199.110.153 |
| A | *(vazio)* | 185.199.111.153 |

4. (Recomendado) Crie também o `www`:

| Tipo | Nome | Valor |
|---|---|---|
| CNAME | www | `<seu-usuario>.github.io` |

> Troque `<seu-usuario>` pelo seu usuário real do GitHub.
> No Registro.br, informe o `Nome` como apenas `www` e o destino como `<seu-usuario>.github.io`, sem `https://` e sem `/` no final.

5. Salve a zona DNS.

## 4. Tempo de propagação

- Pode funcionar em minutos, mas considere até **24h** (às vezes 48h) para propagação completa.

## 5. Checklist rápido

- [ ] `public/CNAME` com `felixo.com.br` (já está certo)
- [ ] Domínio preenchido em **Settings → Pages**
- [ ] 4 registros **A** do domínio raiz configurados no Registro.br
- [ ] `www` como **CNAME** para `<seu-usuario>.github.io` (recomendado)
- [ ] **Enforce HTTPS** ativado no GitHub

## 6. Se não funcionar

1. Verifique se não existe registro conflitante no domínio raiz (ex.: CNAME no raiz).
2. Confira se o domínio não está apontado para outro provedor.
3. Reabra **Settings → Pages** e confirme que o domínio foi salvo corretamente.
4. Aguarde a propagação DNS e teste novamente.
