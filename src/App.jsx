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
import React, { useMemo, useState, useEffect } from "react";
import { items } from "./data/projects.jsx";
import { Navbar } from "./components/layout/navbar";
import { Footer } from "./components/layout/footer";
import { HeroSection } from "./sections/hero";
import { AboutSection } from "./sections/about";
import { PortfolioSection } from "./sections/portfolio";
import { ProjectsModal } from "./components/ui/projects-modal";
import { ExtrasSection } from "./sections/extras";
import { ProjectsGridSection } from "./sections/ProjectsGridSection";
import { ContactSection } from "./sections/contact";
import FelixoVersePage from "./pages/FelixoVersePage";
import { BackgroundParticles } from "./components/ui/BackgroundParticles"; // Importação do componente de partículas

export default function App() {
  // Estado TEMPORÁRIO para visualizar a página do FelixoVerse
  const [showFelixoVerse, setShowFelixoVerse] = useState(false);

  // Estado da busca por texto
  const [q, setQ] = useState("");
  
  // Estado da tag/categoria ativa ("all" mostra todos)
  const [activeTag, setActiveTag] = useState("all");

  // Estado para controlar se a busca está aberta
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Estado para controlar se o modal de projetos está aberto
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);

  // Estado para controlar a tag inicial do modal de projetos
  const [initialTagForProjectsModal, setInitialTagForProjectsModal] = useState("all");

  // Garante que a página inicie sempre no topo (Hero) ao recarregar
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // Função para abrir busca filtrada por tecnologia
  const handleTechClick = (tag) => {
    setActiveTag(tag);
    setIsSearchOpen(true);
  };

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

  if (showFelixoVerse) {
    return (
      <>
        <button 
          onClick={() => setShowFelixoVerse(false)}
          className="fixed top-4 right-4 z-[9999] bg-red-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg hover:bg-red-700 transition"
        >
          Voltar para Portfólio
        </button>
        <FelixoVersePage />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-zinc-50 selection:bg-purple-600/40 font-sans relative">
      <BackgroundParticles /> {/* Adiciona o componente de partículas */}
      <button 
        onClick={() => setShowFelixoVerse(true)}
        className="fixed bottom-4 right-4 z-50 bg-purple-700 text-white px-4 py-2 rounded-lg font-bold shadow-lg hover:bg-purple-800 transition"
      >
        Ver FelixoVerse (Preview)
      </button>

      <Navbar />
      <HeroSection 
        q={q} 
        setQ={setQ} 
        activeTag={activeTag} 
        setActiveTag={setActiveTag}
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />
      <AboutSection 
        onTechClick={handleTechClick} 
        activeTag={activeTag} 
        isSearchOpen={isSearchOpen} 
      />
      <PortfolioSection 
        key={activeTag}
        items={filtered.length ? filtered : items} 
        setIsProjectsModalOpen={setIsProjectsModalOpen}
        setInitialTagForProjectsModal={setInitialTagForProjectsModal}
        sectionTag="web"
      />
      <ProjectsGridSection 
        items={items} 
        setIsProjectsModalOpen={setIsProjectsModalOpen}
        setInitialTagForProjectsModal={setInitialTagForProjectsModal}
      />
      <ExtrasSection />
      <ContactSection />
      <Footer />

      <ProjectsModal 
        isOpen={isProjectsModalOpen}
        onClose={() => {
          setIsProjectsModalOpen(false);
          setInitialTagForProjectsModal("all");
        }}
        initialTag={initialTagForProjectsModal}
      />
    </div>
  );
}
