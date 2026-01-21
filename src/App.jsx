/**
 * @file Componente principal da aplicação (App.jsx).
 * @description Este arquivo serve como o "coração" da aplicação, orquestrando
 * a renderização de todas as seções, gerenciando o estado global (como
 * filtros e modais) e montando a estrutura da página.
 *
 * @module App
 */

// ================================================================================================
// IMPORTAÇÕES
// ================================================================================================
// Hooks e funcionalidades do React.
import React, { useMemo, useState, useEffect } from "react";

// Dados centralizados de projetos.
import { allProjects } from "./data/projects.jsx";

// Componentes de layout e UI reutilizáveis.
import { Navbar } from "./components/layout/navbar";
import { Footer } from "./components/layout/footer";
import { ProjectsModal } from "./components/ui/projects-modal";
import { ProjectDetailsModal } from "./components/ui/project-details-modal";
import { BackgroundParticles } from "./components/ui/BackgroundParticles";

// Seções principais que compõem a página.
import { HeroSection } from "./sections/hero";
import { AboutSection } from "./sections/about";
import { PortfolioSection } from "./sections/portfolio";
import { ProjectsGridSection } from "./sections/ProjectsGridSection";
import { BlogSection } from "./sections/blog";
import { FelixoVerseSection } from "./sections/felixoverse";
import { ExtrasSection } from "./sections/extras";
import { ContactSection } from "./sections/contact";

// ================================================================================================
// COMPONENTE PRINCIPAL (APP)
// ================================================================================================
/**
 * Renderiza a aplicação completa, gerenciando o estado e a composição das seções.
 * @returns {JSX.Element} A aplicação renderizada.
 */
export default function App() {
  // ================================================================================================
  // GERENCIAMENTO DE ESTADO (STATE)
  // ================================================================================================

  // Estado para o valor do campo de busca de texto.
  const [q, setQ] = useState("");
  // Estado para a tag de categoria ativa (ex: "web", "code", "all").
  const [activeTag, setActiveTag] = useState("all");
  // Estado para controlar a visibilidade da interface de busca na HeroSection.
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  // Estado para controlar a visibilidade do modal de projetos.
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);
  // Estado para definir a tag inicial ao abrir o modal de projetos.
  const [initialTagForProjectsModal, setInitialTagForProjectsModal] = useState("all");
  // Estado para o projeto selecionado no modal de detalhes
  const [selectedProject, setSelectedProject] = useState(null);

  // ================================================================================================
  // EFEITOS COLATERAIS (SIDE EFFECTS)
  // ================================================================================================

  /**
   * Garante que a página sempre inicie no topo ao ser recarregada.
   * Isso previne que o navegador restaure a posição de scroll anterior.
   */
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // ================================================================================================
  // MANIPULADORES DE EVENTOS (EVENT HANDLERS)
  // ================================================================================================

  /**
   * Ativado ao clicar em uma tag de tecnologia na seção "Sobre".
   * Define a tag como ativa e abre a interface de busca.
   * @param {string} tag - A tag de tecnologia a ser filtrada.
   */
  const handleTechClick = (tag) => {
    setActiveTag(tag);
    setIsSearchOpen(true);
  };
  
  /**
   * Manipulador para fechar o modal de projetos, resetando os estados relacionados.
   */
  const handleCloseProjectsModal = () => {
    setIsProjectsModalOpen(false);
    setInitialTagForProjectsModal("all");
  };

  /**
   * Abre o modal de detalhes para um projeto específico.
   */
  const handleOpenProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const handleCloseProjectDetails = () => {
    setSelectedProject(null);
  };

  // ================================================================================================
  // DADOS MEMORIZADOS (MEMOIZED DATA)
  // ================================================================================================

  /**
   * Lógica de filtragem que combina a busca por texto (`q`) e o filtro por categoria (`activeTag`).
   * `useMemo` garante que o filtro só seja reexecutado quando as dependências mudarem.
   */
  const filteredProjects = useMemo(() => {
    const query = q.trim().toLowerCase();
    
    // Se não há filtro, não há necessidade de iterar
    if (activeTag === "all" && !query) {
      return allProjects;
    }

    return allProjects.filter((project) => {
      const byTag = activeTag === "all" || project.tag === activeTag;
      const byQuery =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.desc.toLowerCase().includes(query) ||
        project.tag.toLowerCase().includes(query);
      return byTag && byQuery;
    });
  }, [q, activeTag]);

  // ================================================================================================
  // RENDERIZAÇÃO DO COMPONENTE (JSX)
  // ================================================================================================

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-zinc-50 selection:bg-purple-600/40 font-sans relative">
      {/* Componente de partículas para o fundo */}
      <BackgroundParticles />

      {/* Layout Principal */}
      <Navbar />
      <main>
        <HeroSection 
          q={q} 
          setQ={setQ} 
          activeTag={activeTag} 
          setActiveTag={setActiveTag}
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
          onOpenProject={handleOpenProjectDetails}
        />
        <AboutSection 
          onTechClick={handleTechClick} 
          activeTag={activeTag} 
          isSearchOpen={isSearchOpen} 
        />
        <PortfolioSection 
          key={`portfolio-${activeTag}`} // Chave para forçar re-renderização se a tag mudar
          items={filteredProjects.length ? filteredProjects : allProjects} 
          setIsProjectsModalOpen={setIsProjectsModalOpen}
          setInitialTagForProjectsModal={setInitialTagForProjectsModal}
          sectionTag="web" // Filtra apenas projetos web para o carrossel
        />
        <ProjectsGridSection 
          items={allProjects} 
          setIsProjectsModalOpen={setIsProjectsModalOpen}
          setInitialTagForProjectsModal={setInitialTagForProjectsModal}
          onOpenProject={handleOpenProjectDetails}
        />
        <BlogSection />
        <FelixoVerseSection />
        <ExtrasSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Componentes de UI sobrepostos (Modais, etc.) */}
      <ProjectsModal 
        isOpen={isProjectsModalOpen}
        onClose={handleCloseProjectsModal}
        initialTag={initialTagForProjectsModal}
      />

      <ProjectDetailsModal 
        isOpen={!!selectedProject}
        onClose={handleCloseProjectDetails}
        project={selectedProject}
      />
    </div>
  );
}