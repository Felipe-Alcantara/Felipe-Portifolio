import React from "react";
import { Navbar } from "../components/layout/navbar";
import { Footer } from "../components/layout/footer";
import { Button } from "../components/ui/button";

export default function FelixoVersePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-zinc-50 font-sans">
      <Navbar />
      <main className="pt-20">
        <section id="felixoverse-hero" className="mx-auto max-w-6xl px-4 py-20 text-center">
            <h1 className="text-5xl font-bold mb-6">O Hub FelixoVerse</h1>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto mb-10">
                Comunidade, e-sports, música e projetos indie. 
                Um espaço dedicado à criatividade e colaboração.
            </p>
            
            <div className="rounded-3xl border border-white/10 p-8 bg-zinc-900/40 max-w-3xl mx-auto text-left">
                <div className="text-sm text-zinc-400 mb-4 uppercase tracking-widest">Roadmap Inicial</div>
                <ol className="space-y-4 text-lg">
                    <li className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center text-sm font-bold">1</span>
                        Publicar landing responsiva
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center text-sm font-bold">2</span>
                        Conectar blog (MDX ou Notion API)
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-zinc-700/50 text-zinc-400 flex items-center justify-center text-sm font-bold">3</span>
                        Criar microsserviço de músicas (pré‑escuta)
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-zinc-700/50 text-zinc-400 flex items-center justify-center text-sm font-bold">4</span>
                        Páginas dos torneios e rankings
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-zinc-700/50 text-zinc-400 flex items-center justify-center text-sm font-bold">5</span>
                        MVP do ARG (capítulo 1)
                    </li>
                </ol>
            </div>
            
            <div className="mt-12">
                <Button size="lg" disabled variant="secondary">
                    Em breve
                </Button>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
