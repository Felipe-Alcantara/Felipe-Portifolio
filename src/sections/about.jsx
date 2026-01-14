import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import felipeFoto from "../../Imagens/IMG_20240605_212259_494 cortado.jpg";
import brythonLogo from "../../Imagens/Gemini_Generated_Image_k6r461k6r461k6r4.png";
import {
  TbBrandCSharp,
  TbBrandCss3,
  TbBrandDjango,
  TbBrandGit,
  TbBrandGithub,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandPython,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandTypescript,
  TbBrandVite,
  TbBrandVscode,
  TbBrandWindows,
} from "react-icons/tb";

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

  return <span className="font-mono text-felixo-purple font-bold whitespace-nowrap inline-block">{time}</span>;
}

export function AboutSection({ onTechClick, activeTag, isSearchOpen }) {
  const tech = [
    { label: "HTML", Icon: TbBrandHtml5, color: "#E34F26" },
    { label: "CSS", Icon: TbBrandCss3, color: "#1572B6" },
    { label: "JS", Icon: TbBrandJavascript, color: "#F7DF1E" },
    { label: "TypeScript", Icon: TbBrandTypescript, color: "#3178C6" },
    { label: "Tailwind", Icon: TbBrandTailwind, color: "#06B6D4" },
    { label: "React", Icon: TbBrandReact, color: "#61DAFB" },
    { label: "Vite", Icon: TbBrandVite, color: "#646CFF" },
    { label: "Python", Icon: TbBrandPython, color: "#3776AB" },
    { label: "Brython", isImage: true, src: brythonLogo },
    { label: "Django", Icon: TbBrandDjango, color: "#0C4B33" },
    { label: "C#", Icon: TbBrandCSharp, color: "#512BD4" },
    { label: "Git", Icon: TbBrandGit, color: "#F05032" },
    { label: "GitHub", Icon: TbBrandGithub, color: "#FFFFFF" },
    { label: "VSCode", Icon: TbBrandVscode, color: "#007ACC" },
    { label: "Windows", Icon: TbBrandWindows, color: "#0078D4" },
  ];

  return (
    <section id="sobre" className="border-t border-white/5 bg-zinc-950/20">
      <div className="mx-auto max-w-7xl pl-6 pr-6 lg:pr-0 py-14 grid md:grid-cols-[280px_1fr] lg:grid-cols-[280px_1fr_240px] gap-8 items-start">
        {/* Coluna da Foto e Redes */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="relative group">
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              {/* Glow cinematográfico */}
              <div className="pointer-events-none absolute -inset-8 rounded-[28px] bg-gradient-to-tr from-purple-600/20 via-white/5 to-transparent blur-2xl animate-photo-glow-1" style={{backgroundSize: '200% 200%'}} />
              <div className="pointer-events-none absolute -inset-6 rounded-[26px] bg-gradient-to-b from-white/10 to-transparent blur-xl animate-photo-glow-2" style={{backgroundSize: '200% 200%'}} />

              {/* Quadro da foto */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-zinc-700 shadow-xl bg-zinc-800">
                <img src={felipeFoto} alt="Felipe Martin" className="w-full h-full object-cover" />
                {/* Vinheta sutil (cinema) */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
              </div>
            </div>
          </div>
          
          <div className="flex gap-3 w-full justify-start">
            <a 
              href="mailto:FelipeTheFeh@Gmail.com" 
              className="flex items-center gap-2 text-zinc-300 hover:text-purple-400 transition-colors group"
              title="E-mail"
            >
              <Mail size={28} className="text-felixo-purple-glow group-hover:scale-200 transition-transform" />
            </a>
            <a 
              href="https://github.com/Felipe-Alcantara" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-300 hover:text-purple-400 transition-colors group"
              title="GitHub"
            >
              <Github size={28} className="text-felixo-purple-glow group-hover:scale-200 transition-transform" />
            </a>
            <a 
              href="https://www.linkedin.com/in/felipealcantaramartins/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-300 hover:text-purple-400 transition-colors group"
              title="LinkedIn"
            >
              <Linkedin size={28} className="text-felixo-purple-glow group-hover:scale-200 transition-transform" />
            </a>
          </div>
        </div>

        {/* Coluna do Texto */}
        <div className="space-y-6 text-zinc-300 leading-relaxed md:text-lg">
          <p>
            Sou estudante de <strong className="text-felixo-purple">Sistemas de Informação</strong> na <strong className="text-[#1E6BB8]">Universidade Geraldo de Biase</strong> e programo há <ExperienceTimer />. Trabalho com <strong className="text-[#3776AB]">Python</strong> para <strong className="text-felixo-purple">automações, scraping e aplicações desktop</strong>, e com <strong className="text-[#3178C6]">TypeScript</strong> para construir <strong className="text-felixo-purple">aplicações web modernas e escaláveis</strong>. Tenho diversos projetos e sites criativos; mesmo os mais simples valem muito para mim porque priorizo <strong className="text-felixo-purple">simplicidade e aprendizado contínuo</strong>.
          </p>
          <p>
            Meus projetos abrangem áreas como <strong className="text-felixo-purple">produtividade, música, jogos, comunidade e ferramentas que facilitem o dia a dia das pessoas</strong>. Gosto de transformar ideias em protótipos funcionais: desde pequenos <strong className="text-felixo-purple">utilitários que economizam tempo</strong> até <span className="text-felixo-purple font-semibold">experiências interativas que conectam pessoas</span>. Acredito que <strong className="text-felixo-purple">código bem pensado e interfaces claras</strong> tornam qualquer solução mais útil e acessível.
          </p>

        </div>

        {/* Coluna de Tecnologias (usa o espaço à direita no desktop) */}
        <div className="flex flex-col items-center md:items-end justify-start md:col-span-2 lg:col-span-1 gap-4 lg:-mt-4">
          {/* Wrapper para agrupar Título e Logos */}
          <div className="w-full max-w-[280px] flex flex-col items-center gap-4">
            <div className="relative w-full">
              {/* Glow cinematográfico */}
              <div className="pointer-events-none absolute -inset-4 rounded-3xl blur-2xl animate-tech-glow" />
              <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-b from-white/10 to-transparent blur-xl animate-photo-glow-2" style={{backgroundSize: '200% 200%'}} />
              
              <div className="relative w-full rounded-2xl bg-zinc-950/30 border border-white/5 p-4">
                {/* Camada escura para suavizar o brilho */}
                <div className="absolute inset-0 rounded-2xl bg-black/40 pointer-events-none" />
                
                <h2 className="relative text-2xl md:text-3xl font-bold leading-tight bg-gradient-to-r from-white via-purple-800 to-white bg-clip-text text-transparent text-center mb-4">
                  minha stack
                </h2>
              
              <div className="relative grid grid-cols-3 gap-3 justify-items-center">
              {tech.map(({ label, Icon, color, isImage, src }) => (
                <span
                  key={label}
                  onClick={() => onTechClick && onTechClick(label)}
                  title={label}
                  aria-label={label}
                  className={`group relative p-2 rounded-xl bg-black/20 border border-white/5 hover:border-white/20 hover:scale-150 hover:z-50 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-200 cursor-pointer flex items-center justify-center ${
                    activeTag === label && isSearchOpen 
                      ? "border-white/20 scale-150 z-50 shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                      : ""
                  }`}
                  style={!isImage ? { color } : undefined}
                >
                  {/* Tooltip com nome da tecnologia */}
                  <span
                    className={`absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-black/90 text-xs font-semibold whitespace-nowrap transition-opacity duration-200 pointer-events-none ${
                      activeTag === label && isSearchOpen 
                        ? "opacity-100" 
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                    style={{ color: isImage ? '#F7DF1E' : color }}
                  >
                    {label}
                  </span>
                  
                  {isImage ? (
                    <img src={src} alt={label} className="w-7 h-7 object-contain" />
                  ) : (
                    <Icon size={28} strokeWidth={1.6} />
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
}
