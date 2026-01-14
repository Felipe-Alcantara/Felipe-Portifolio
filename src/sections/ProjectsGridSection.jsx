import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

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
      duration: 0.4
    }
  },
  exit: (direction) => ({
    x: direction < 0 ? 50 : -50,
    opacity: 0,
    transition: {
      staggerChildren: 0.03,
      type: "spring",
      bounce: 0,
      duration: 0.4
    }
  })
};

// Variantes para cada card (Wubble/Scale individual)
const cardVariants = {
  enter: { scale: 0.8, opacity: 0, y: 20 },
  center: { scale: 1, opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } },
  exit: { scale: 0.8, opacity: 0, y: -20, transition: { duration: 0.2 } }
};

const ProjectCard = ({ item, variants }) => (
  <motion.div
    variants={variants}
    className="group flex h-full flex-col bg-zinc-900/50 border border-white/10 rounded-2xl transition-colors hover:border-white/20 hover-felixo-card-glow"
  >
    <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full p-5">
      <div className="flex items-start justify-between mb-3">
        <div className="p-2 bg-black/40 rounded-lg text-purple-400">
          {item.icon}
        </div>
        <Badge className="bg-zinc-800 capitalize border-transparent">{item.tag}</Badge>
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="font-bold text-zinc-100 group-hover:text-purple-400 transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-zinc-400 mt-1 line-clamp-2 flex-grow">
          {item.desc}
        </p>
      </div>
    </a>
  </motion.div>
);

export function ProjectsGridSection({ items }) {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  // Filtra projetos que não são da categoria "web" para evitar duplicatas com o carrossel
  const otherProjects = items.filter(it => it.tag.toLowerCase() !== 'web');
  
  const totalPages = Math.ceil(otherProjects.length / ITEMS_PER_PAGE);

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
  if (page === totalPages - 1 && otherProjects.length >= ITEMS_PER_PAGE) {
    startIndex = otherProjects.length - ITEMS_PER_PAGE;
  }

  const currentItems = otherProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  if (otherProjects.length === 0) {
    return null;
  }

  return (
    <section id="outros-projetos" className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Outros Projetos</h2>
          {totalPages > 1 && (
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={handlePrev} aria-label="Página anterior">
                <ArrowLeft size={18} />
              </Button>
              <span className="text-sm text-zinc-400 font-mono w-12 text-center">
                {page + 1} / {totalPages}
              </span>
              <Button variant="outline" size="icon" onClick={handleNext} aria-label="Próxima página">
                <ArrowRight size={18} />
              </Button>
            </div>
          )}
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
          >
            {currentItems.map((item) => (
              <ProjectCard key={item.title} item={item} variants={cardVariants} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}