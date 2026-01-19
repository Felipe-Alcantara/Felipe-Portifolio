import React from "react";
import { Button } from "../components/ui/button";

export function FelixoVerseSection() {
  return (
    <section id="felixoverse" className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-14 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold">O Hub FelixoVerse</h2>
          <p className="mt-2 text-zinc-300">
            Comunidade, e-sports, música e projetos indie. Quer participar, apoiar ou colaborar? Vem comigo.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:scale-105 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 ease-in-out" asChild>
              <a href="#contato">Entrar em contato</a>
            </Button>
            <Button variant="outline" className="font-bold py-3 px-6 rounded-lg border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300 ease-in-out" asChild>
              <a href="#portfolio">Ver o que já existe</a>
            </Button>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 p-6 bg-zinc-900/40">
          <div className="text-sm text-zinc-400">Roadmap snapshot</div>
          <ol className="mt-3 space-y-2 text-sm">
            <li>1. Publicar landing responsiva</li>
            <li>2. Conectar blog (MDX ou Notion API)</li>
            <li>3. Criar microsserviço de músicas (pré‑escuta)</li>
            <li>4. Páginas dos torneios e rankings</li>
            <li>5. MVP do ARG (capítulo 1)</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
