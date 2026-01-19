import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import logo from "../../../Imagens/CATT transparente.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Aplicações Web", href: "#portfolio" },
    { name: "Outros Projetos", href: "#outros-projetos" },
    { name: "Blog", href: "#blog" },
    { name: "FelixoVerse", href: "#felixoverse" },
    { name: "Formação", href: "#extras" },
    { name: "Contato", href: "#contato" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace(/.*#/, "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      const startPosition = window.scrollY;
      const distance = offsetPosition - startPosition;
      const duration = 2000; // 2000ms = 2 segundos (mais lento e suave)
      let start = null;

      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        
        // Função de Easing (Cubic Ease In Out) para suavidade no início e fim
        const ease = (t, b, c, d) => {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t * t + b;
          t -= 2;
          return c / 2 * (t * t * t + 2) + b;
        };

        window.scrollTo({ top: ease(progress, startPosition, distance, duration), behavior: "auto" });

        if (progress < duration) window.requestAnimationFrame(step);
      }

      window.requestAnimationFrame(step);
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
        scrolled || isOpen
          ? "bg-zinc-950/80 backdrop-blur-md border-white/10 py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#inicio" onClick={(e) => handleLinkClick(e, "#inicio")} className="text-xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity">
          <img src={logo} alt="Logo" className="w-8 h-8 object-contain inline-block mr-2" /> Felixo<span className="text-purple-500">.</span>com<span className="text-purple-500">.</span>br
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-zinc-300 hover:bg-white/10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-950 border-b border-white/10 p-4 flex flex-col gap-2 shadow-2xl animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-zinc-400 hover:text-white hover:bg-white/5 transition-all py-3 px-4 rounded-xl font-medium"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}