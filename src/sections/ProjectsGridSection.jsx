import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  LayoutGrid,
  CalendarDays,
  CheckCircle2,
  Wrench, // Alterado de Loader para Wrench
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { cx } from "../lib/utils";
import { BackgroundParticles } from "../components/ui/BackgroundParticles";

const ITEMS_PER_PAGE = 9; // 3x3 grid

// Variantes para o container da grade (Slide principal + Stagger)
const gridContainerVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Cascata rápida para efeito "wubble"
      type: "spring",
      bounce: 0,
      duration: 0.4,
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? 50 : -50,
    opacity: 0,
    transition: {
      staggerChildren: 0.03,
      type: "spring",
      bounce: 0,
      duration: 0.4,
    },
  }),
};

// Variantes para cada card (Wubble/Scale individual)
const cardVariants = {
  enter: { scale: 0.8, opacity: 0, y: 20 },
  center: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
  exit: { scale: 0.8, opacity: 0, y: -20, transition: { duration: 0.2 } },
};

const getTagColor = (tag) => {
  const colors = {
    python: "bg-[#3776AB]/10 text-[#3776AB] border-[#3776AB]/20",
    brython: "bg-[#3776AB]/10 text-[#3776AB] border-[#3776AB]/20",
    js: "bg-[#F7DF1E]/10 text-[#F7DF1E] border-[#F7DF1E]/20",
    ts: "bg-[#3178C6]/10 text-[#3178C6] border-[#3178C6]/20",
    html: "bg-[#E34F26]/10 text-[#E34F26] border-[#E34F26]/20",
    css: "bg-[#1572B6]/10 text-[#1572B6] border-[#1572B6]/20",
    react: "bg-[#61DAFB]/10 text-[#61DAFB] border-[#61DAFB]/20",
    tailwind: "bg-[#06B6D4]/10 text-[#06B6D4] border-[#06B6D4]/20",
    vite: "bg-[#646CFF]/10 text-[#646CFF] border-[#646CFF]/20",
    django: "bg-[#092E20]/50 text-[#44B78B] border-[#44B78B]/20",
    csharp: "bg-[#512BD4]/10 text-[#512BD4] border-[#512BD4]/20",
    git: "bg-[#F05032]/10 text-[#F05032] border-[#F05032]/20",
    github: "bg-white/10 text-white border-white/20",
    vscode: "bg-[#007ACC]/10 text-[#007ACC] border-[#007ACC]/20",
    windows: "bg-[#0078D6]/10 text-[#0078D6] border-[#0078D6]/20",
    web: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    code: "bg-green-500/10 text-green-400 border-green-500/20",
    music: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    design: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    game: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    automation: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  };
  return colors[tag.toLowerCase()] || "bg-zinc-800 text-zinc-400 border-transparent";
};

const ProjectCard = ({
  item,
  variants,
  onMouseEnter,
  isHovered,
  isAdjacent,
  isFaded,
  onClick,
}) => (
  <motion.div
    onMouseEnter={onMouseEnter}
    variants={variants}
    className={cx(
      "group flex h-full flex-col bg-zinc-950/50 border border-white/10 rounded-2xl transition-all duration-1000",
      isHovered ? "felixo-card-glow-intense-hover" : "hover:border-white/20",
      !isHovered && isAdjacent && "felixo-card-glow-subtle",
      isFaded && "card-faded"
    )}
    onClick={onClick}
  >
    <div
      className="flex flex-col h-full p-5 cursor-pointer"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="p-2 bg-black/40 rounded-lg text-purple-400">
          {item.icon}
        </div>
        <Badge className={cx("capitalize border", getTagColor(item.tag))}>
          {item.tag}
        </Badge>
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="font-bold text-zinc-100 group-hover:text-purple-400 transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-zinc-400 mt-1 line-clamp-2 flex-grow">
          {item.desc}
        </p>
      </div>

      {/* Seção de Status e Data */}
      {(item.createdAt || item.status) && (
        <div className="mt-4 pt-3 border-t border-white/10 text-xs text-zinc-500 flex items-center justify-between flex-wrap gap-2">
          {item.createdAt && (
            <div className="flex items-center gap-1.5">
              <CalendarDays size={14} />
              <span>
                {new Date(item.createdAt).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </span>
            </div>
          )}
          {item.status && (
            <div
              className={cx(
                "flex items-center gap-1.5 font-semibold",
                item.status === "Finalizado"
                  ? "text-green-400/80"
                  : "text-amber-400/80"
              )}
            >
              {item.status === "Finalizado" ? (
                <CheckCircle2 size={14} />
              ) : (
                <Wrench size={14} /> // Ícone alterado e classe de animação removida
              )}
              <span>{item.status}</span>
            </div>
          )}
        </div>
      )}
    </div>
  </motion.div>
);

export function ProjectsGridSection({
  items,
  setIsProjectsModalOpen,
  setInitialTagForProjectsModal,
  onOpenProject,
}) {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Filtra projetos que não são da categoria "web" para evitar duplicatas com o carrossel
  const filteredProjects = items;

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const COLS = 3;

  const areAdjacent = (index1, index2) => {
    if (index1 === null || index2 === null) return false;
    if (index1 === index2) return false;

    const row1 = Math.floor(index1 / COLS);
    const col1 = index1 % COLS;
    const row2 = Math.floor(index2 / COLS);
    const col2 = index2 % COLS;

    const rowDiff = Math.abs(row1 - row2);
    const colDiff = Math.abs(col1 - col2);

    return rowDiff <= 1 && colDiff <= 1;
  };

  const handleNext = () => {
    setDirection(1);
    setPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setDirection(-1);
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  let startIndex = page * ITEMS_PER_PAGE;

  // Se for a última página e houver itens suficientes, recua o início para preencher a grade com itens anteriores
  if (page === totalPages - 1 && filteredProjects.length >= ITEMS_PER_PAGE) {
    startIndex = filteredProjects.length - ITEMS_PER_PAGE;
  }

  const currentItems = filteredProjects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  if (filteredProjects.length === 0) {
    return null;
  }

  return (
    <section
      id="outros-projetos"
      className="relative border-t border-white/5 overflow-hidden"
    >
      <BackgroundParticles />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gradient-glow-python">
            Outros Projetos
          </h2>
          <div className="flex items-center gap-4">
            {totalPages > 1 && (
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrev}
                  aria-label="Página anterior"
                >
                  <ArrowLeft size={18} />
                </Button>
                <span className="text-sm text-zinc-400 font-mono w-12 text-center">
                  {page + 1} / {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNext}
                  aria-label="Próxima página"
                >
                  <ArrowRight size={18} />
                </Button>
              </div>
            )}
            <Button
              variant="outline"
              onClick={() => {
                // Garante que as funções existem antes de chamar
                if (setInitialTagForProjectsModal)
                  setInitialTagForProjectsModal("all");
                if (setIsProjectsModalOpen) setIsProjectsModalOpen(true);
              }}
            >
              <LayoutGrid size={16} className="mr-2" />
              Ver todos
            </Button>
          </div>
        </div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={gridContainerVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {currentItems.map((item, index) => (
              <ProjectCard
                key={item.title}
                item={item}
                variants={cardVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                isHovered={hoveredIndex === index}
                isAdjacent={areAdjacent(hoveredIndex, index)}
                isFaded={hoveredIndex !== null && hoveredIndex !== index}
                onClick={() => onOpenProject && onOpenProject(item)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}