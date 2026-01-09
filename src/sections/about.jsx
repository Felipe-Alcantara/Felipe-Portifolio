import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../components/ui/button";
import felipeFoto from "../../Imagens/IMG_20240605_212259_494 cortado.jpg";

function ExperienceTimer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const startDate = new Date("2024-03-26T00:00:00");

    const updateTimer = () => {
      const now = new Date();
      let diff = now - startDate;

      // Cálculos básicos de tempo
      const seconds = Math.floor((diff / 1000) % 60);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      
      // Cálculo aproximado de anos e dias restantes para simplicidade visual
      const years = Math.floor(days / 365);
      const remainingDays = days % 365;

      setTime(`${years} ano${years !== 1 ? 's' : ''}, ${remainingDays} dias, ${hours}h, ${minutes}m e ${seconds}s`);
    };

    const interval = setInterval(updateTimer, 1000);
    updateTimer(); // Executa imediatamente para não esperar 1s

    return () => clearInterval(interval);
  }, []);

  return <span className="font-mono text-cyan-400 font-bold whitespace-nowrap inline-block">{time}</span>;
}

export function AboutSection() {
  return (
    <section id="sobre" className="border-t border-white/5 bg-zinc-900/20">
      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-[280px_1fr] gap-8 items-start">
        {/* Coluna da Foto e Redes */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <div className="relative group">
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              {/* Glow cinematográfico */}
              <div className="pointer-events-none absolute -inset-8 rounded-[28px] bg-gradient-to-tr from-cyan-500/20 via-white/5 to-transparent blur-2xl animate-photo-glow-1" style={{backgroundSize: '200% 200%'}} />
              <div className="pointer-events-none absolute -inset-6 rounded-[26px] bg-gradient-to-b from-white/10 to-transparent blur-xl animate-photo-glow-2" style={{backgroundSize: '200% 200%'}} />

              {/* Quadro da foto */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-zinc-700 shadow-xl bg-zinc-800">
                <img src={felipeFoto} alt="Felipe Martin" className="w-full h-full object-cover" />
                {/* Vinheta sutil (cinema) */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
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
        <div className="space-y-6 text-zinc-300 leading-relaxed md:text-lg text-glow-white">
          <p>
            Sou o <a href="https://github.com/Felipe-Alcantara" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl text-cyan-400 font-bold hover:text-cyan-300 transition-colors underline decoration-cyan-400/30 hover:decoration-cyan-300">Felipe</a>, estudante de <strong className="text-cyan-400">Sistemas de Informação</strong> na <strong className="text-cyan-400">Universidade Geraldo de Biase</strong> e programo há <ExperienceTimer />. Trabalho com <strong>Python</strong> para automações, scraping e aplicações desktop, e com <strong>TypeScript</strong> para construir aplicações web modernas e escaláveis. Tenho diversos projetos e sites criativos; mesmo os mais simples valem muito para mim porque priorizo simplicidade e aprendizado contínuo.
          </p>
          <p>
            Meus projetos abrangem áreas como produtividade, música, jogos, comunidade e ferramentas que facilitem o dia a dia das pessoas. Gosto de transformar ideias em protótipos funcionais: desde pequenos utilitários que economizam tempo até experiências interativas que conectam pessoas. Acredito que <strong>código bem pensado e interfaces claras</strong> tornam qualquer solução mais útil e acessível.
          </p>

        </div>
      </div>
    </section>
  );
}
