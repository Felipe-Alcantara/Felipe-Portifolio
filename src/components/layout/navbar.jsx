import React from "react";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import cattLogo from "../../../Imagens/CATT transparente.png";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60 border-b border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-3">
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
        <a href="#sobre" className="text-lg font-semibold tracking-tight flex items-center gap-2">
          <img src={cattLogo} alt="Logo" className="w-8 h-8 object-contain" />
          Felixo.com.br
        </a>
        <nav className="ml-auto hidden md:flex items-center gap-6 text-sm">
          <a href="#sobre" className="opacity-80 hover:opacity-100">
            Sobre
          </a>
          <a href="#portfolio" className="opacity-80 hover:opacity-100">
            Portfólio
          </a>
          <a href="#projetos" className="opacity-80 hover:opacity-100">
            Projetos
          </a>
          <a href="#blog" className="opacity-80 hover:opacity-100">
            Blog
          </a>
          <a href="#felixoverse" className="opacity-80 hover:opacity-100">
            FelixoVerse
          </a>
          <a href="#contato" className="opacity-80 hover:opacity-100">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
