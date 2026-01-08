/**
 * COMPONENTE PRINCIPAL - APP.JSX
 * ==============================
 * 
 * Este é o "coração" da aplicação. Ele:
 * 1. Importa todas as seções do site
 * 2. Gerencia o estado de busca e filtros
 * 3. Monta a página na ordem correta
 * 
 * ORDEM DAS SEÇÕES (de cima para baixo):
 * - Navbar (menu fixo no topo)
 * - HeroSection (cabeçalho com busca)
 * - PortfolioSection (carrossel animado)
 * - ProjectsSection (grade de projetos)
 * - BlogSection (lista de posts)
 * - FelixoVerseSection (sobre o hub)
 * - ContactSection (informações de contato)
 * - Footer (rodapé)
 * 
 * PARA REORDENAR: Mova os componentes <NomeSection /> na ordem desejada
 * PARA REMOVER: Delete ou comente a linha do componente
 * PARA ADICIONAR: Importe uma nova seção e adicione na estrutura
 */
import React, { useMemo, useState } from "react";
import { items } from "./data/projects.jsx";
import { Navbar } from "./components/layout/navbar";
import { Footer } from "./components/layout/footer";
import { HeroSection } from "./sections/hero";
import { PortfolioSection } from "./sections/portfolio";
import { ProjectsSection } from "./sections/projects";
import { BlogSection } from "./sections/blog";
import { FelixoVerseSection } from "./sections/felixoverse";
import { ContactSection } from "./sections/contact";

export default function App() {
  // Estado da busca por texto
  const [q, setQ] = useState("");
  
  // Estado da tag/categoria ativa ("all" mostra todos)
  const [activeTag, setActiveTag] = useState("all");

  /**
   * LÓGICA DE FILTROS
   * Combina busca por texto + filtro por categoria
   * Atualiza automaticamente quando q ou activeTag mudam
   */
  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return items.filter((it) => {
      const byTag = activeTag === "all" || it.tag === activeTag;
      const byQuery =
        !query ||
        it.title.toLowerCase().includes(query) ||
        it.desc.toLowerCase().includes(query) ||
        it.tag.toLowerCase().includes(query);
      return byTag && byQuery;
    });
  }, [q, activeTag]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-zinc-50 selection:bg-cyan-500/40">
      <Navbar />
      <HeroSection q={q} setQ={setQ} activeTag={activeTag} setActiveTag={setActiveTag} />
      <PortfolioSection items={filtered.length ? filtered : items} />
      <ProjectsSection items={filtered} />
      <BlogSection />
      <FelixoVerseSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
