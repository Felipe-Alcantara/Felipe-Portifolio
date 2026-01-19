import React from "react";
import { BookOpen, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import Particles from "../components/ui/particles";

export function BlogSection() {
  return (
    <section id="blog" className="border-t border-white/5 bg-zinc-900/5">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 text-purple-400">
              <div className="p-2 rounded-lg bg-purple-500/10">
                <BookOpen size={24} />
              </div>
              <span className="font-semibold tracking-wide uppercase text-sm">Em Breve</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Blog & Conhecimento
            </h2>
            
            <p className="text-lg text-zinc-300 leading-relaxed">
              Estou preparando um ambiente dedicado ao ensino e à informação. 
              Este blog será o canal oficial para tutoriais, novidades e 
              aprofundamento técnico.
            </p>

            <div className="pt-2">
              <Button asChild variant="outline" className="relative group overflow-hidden border-purple-500/50 bg-purple-500/10 text-white shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:bg-purple-500/20 felixo-card-glow transition-all duration-300">
                <a href="/blog" className="inline-flex items-center gap-2">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-[150%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
                  <Particles variant="purple" />
                  <span className="relative z-10">Acessar o Blog</span>
                  <ArrowRight size={18} className="relative z-10" />
                </a>
              </Button>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-zinc-950 border border-white/10 rounded-3xl p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-zinc-900 border border-white/5 text-purple-400">
                  <Sparkles size={20} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">O que vem por aí?</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Vou utilizar este espaço para <strong>ensinar programação</strong> de forma descomplicada, 
                    postar <strong>informações e atualizações</strong> sobre o desenvolvimento do <em>FelixoVerse</em> e seus <strong>ARGs</strong>, 
                    e comentar <strong>notícias</strong> relevantes do mundo da tecnologia. 
                    A ideia é criar um repositório vivo de aprendizado e colaboração.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}