import React from "react";
import { Rocket, Mail, Search } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { tags } from "../data/projects.jsx";

export function HeroSection({ q, setQ, activeTag, setActiveTag }) {
  return (
    <section id="inicio" className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Programação simples, criativa, e colaborativa
        </h1>
        <div className="mt-4 text-zinc-300 space-y-4">
          <p>
            Olá, eu sou <strong>Felipe Martin</strong>: desenvolvo aplicações, produzo música e crio experiências colaborativas.
          </p>
          <p>
            Aqui você encontra meus projetos, demos e colaborações e um link dedicado ao meu projeto{" "}
            <a href="/felixoverse" className="text-cyan-400 hover:underline font-semibold" title="Em breve">
              FelixoVerse
            </a>
            , minha comunidade e plataforma de divulgação artística, de desenvolvimento e entretenimento!
          </p>
        </div>
        <div className="mt-6 flex gap-3">
          <Button asChild>
            <a href="#portfolio" className="inline-flex items-center gap-2">
              <Rocket size={18} /> Ver Portfólio
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contato" className="inline-flex items-center gap-2">
              <Mail size={18} /> Falar comigo
            </a>
          </Button>
        </div>
      </div>
      <div className="rounded-3xl border border-white/10 p-6 bg-gradient-to-br from-zinc-800/50 to-zinc-900/30 shadow-2xl">
        <div className="text-sm text-zinc-300">Busca rápida</div>
        <div className="mt-3 flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2" size={16} />
            <Input
              className="pl-9 bg-zinc-800/50 border-white/10 focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="Pesquisar cards, tags, descrições…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
          <div className="hidden md:flex gap-2">
            {tags.map((t) => (
              <Badge
                key={t.id}
                onClick={() => setActiveTag(t.id)}
                className={
                  "cursor-pointer transition " +
                  (activeTag === t.id ? "bg-white text-black" : "bg-zinc-800 hover:bg-zinc-700")
                }
              >
                {t.label}
              </Badge>
            ))}
          </div>
        </div>
        <div className="mt-2 md:hidden flex gap-2 flex-wrap">
          {tags.map((t) => (
            <Badge
              key={t.id}
              onClick={() => setActiveTag(t.id)}
              className={
                "cursor-pointer transition " +
                (activeTag === t.id ? "bg-white text-black" : "bg-zinc-800 hover:bg-zinc-700")
              }
            >
              {t.label}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
