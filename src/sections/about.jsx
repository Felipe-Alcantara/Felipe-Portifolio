import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../components/ui/button";

export function AboutSection() {
  return (
    <section id="sobre" className="border-t border-white/5 bg-zinc-900/20">
      <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-[1fr_2fr] gap-12 items-start">
        {/* Coluna da Foto e Redes */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <div className="relative group">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-2 border-zinc-700 shadow-xl bg-zinc-800">
              {/* Placeholder para foto - Substitua pelo arquivo real quando disponível */}
              <div className="w-full h-full flex items-center justify-center text-zinc-500 bg-zinc-800 text-center p-4">
                Foto do Felipe
              </div>
            </div>
          </div>
          
          <div className="flex gap-2 w-full justify-center md:justify-start">
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com/SeuUsuario" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://linkedin.com/in/SeuUsuario" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:seuemail@exemplo.com">
                <Mail size={20} />
              </a>
            </Button>
          </div>
        </div>

        {/* Coluna do Texto */}
        <div className="space-y-6 text-zinc-300 leading-relaxed md:text-lg">
          <p>
            Sou o <strong>Felipe</strong>, estudante de Sistemas de Informação na Universidade Geraldo de Biase e programo há 2 anos. Trabalho com <strong>Python</strong> para automações, scraping e aplicações desktop, e com <strong>TypeScript</strong> para construir aplicações web modernas e escaláveis. Tenho diversos projetos e sites criativos; mesmo os mais simples valem muito para mim porque priorizo simplicidade e aprendizado contínuo.
          </p>
          <p>
            Meus projetos abrangem áreas como produtividade, música, jogos, comunidade e ferramentas que facilitem o dia a dia das pessoas. Gosto de transformar ideias em protótipos funcionais: desde pequenos utilitários que economizam tempo até experiências interativas que conectam pessoas. Acredito que <strong>código bem pensado e interfaces claras</strong> tornam qualquer solução mais útil e acessível.
          </p>
          <p>
            Se você quer ver algo prático, colaborar ou trocar uma ideia sobre desenvolvimento e música, meus projetos estão listados no portfólio, cada um com demo e código quando possível.
          </p>
        </div>
      </div>
    </section>
  );
}
