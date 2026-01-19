import React from "react";
import { Mail, Rocket } from "lucide-react";
import { Button } from "../components/ui/button";
import Particles from "../components/ui/particles";
import { FaDiscord } from "react-icons/fa";

export function FelixoVerseSection() {
  return (
    <section id="felixoverse" className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-14 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold">O Hub FelixoVerse</h2>
          <p className="mt-2 text-zinc-300">
            Comunidade, e-sports, música e projetos indie. Quer participar, apoiar ou colaborar? Vem comigo.
          </p>
          <div className="mt-5 flex gap-3 items-center">
            <Button asChild variant="outline" className="relative group overflow-hidden border-purple-500/50 bg-purple-500/10 text-white shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:bg-purple-500/20 felixo-card-glow transition-all duration-300">
              <a href="#felixoverse" className="inline-flex items-center gap-2">
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-[150%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
                <Particles variant="purple" />
                <Rocket size={18} className="relative z-10" />
                <span className="relative z-10">Saber mais</span>
              </a>
            </Button>
            <Button variant="outline" asChild className="relative group overflow-hidden border-white/30 bg-white/5 text-white shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:bg-white/10 felixo-card-glow-white transition-all duration-300">
              <a href="#contato" className="inline-flex items-center gap-2">
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-[150%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent z-0" />
                <Particles variant="white" />
                <Mail size={18} className="relative z-10" />
                <span className="relative z-10">Entrar em contato</span>
              </a>
            </Button>
            <a 
              href="http://discord.gg/DmW9tHcGpV" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-300 hover:text-purple-400 transition-colors group"
              title="Discord"
            >
              <FaDiscord size={28} className="text-felixo-purple-glow group-hover:scale-150 transition-transform" />
            </a>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000" />
          <div className="relative rounded-3xl border border-white/10 p-6 bg-zinc-950 space-y-4 text-sm text-zinc-300 leading-relaxed">
            <h3 className="text-lg font-bold text-purple-400">FelixoVerse</h3>
            <p>
              O <strong>FelixoVerse</strong> é um projeto autoral que funciona como um <strong>hub criativo</strong>, integrando tecnologia e colaboração. Mais que uma comunidade, ele serve como um laboratório prático onde aplico conceitos de automação, desenvolvimento e gestão de sistemas em um ambiente real.
            </p>
            <p>
              O projeto reúne entusiastas de programação, arte e jogos, demonstrando minha capacidade de <strong>conceber, estruturar e evoluir uma ideia do zero</strong>, unindo visão estratégica e execução técnica para criar experiências digitais engajadoras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
