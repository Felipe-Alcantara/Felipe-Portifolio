import React from "react";

export function BlogSection() {
  return (
    <section id="blog" className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold">Blog</h2>
        <p className="mt-2 text-zinc-400">Ideias, estudos e devlogs do hub.</p>
        <ul className="mt-6 space-y-3 text-sm text-zinc-300 list-disc list-inside">
          <li>Como projetei o carrossel infinito com Framer Motion</li>
          <li>Pipeline simples para publicar projetos do Vite/Next</li>
          <li>ARG: ideias de puzzles com criptografia e esteganografia</li>
        </ul>
      </div>
    </section>
  );
}
