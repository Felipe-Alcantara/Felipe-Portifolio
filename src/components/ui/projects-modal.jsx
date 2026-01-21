import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./button";
import { X, Search } from "lucide-react";
import { Input } from "./input";
import { Badge } from "./badge";
import { tags, items as allItems } from "../../data/projects.jsx";
import { cx } from "../../lib/utils";

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

export function ProjectsModal({ isOpen, onClose, initialTag = "all" }) {
  const [q, setQ] = useState("");
  const [activeTag, setActiveTag] = useState(initialTag);

  // Reset activeTag when modal opens with a new initialTag
  useEffect(() => {
    setActiveTag(initialTag);
  }, [initialTag, isOpen]);

  const filteredItems = useMemo(() => {
    const query = q.trim().toLowerCase();
    return allItems.filter((it) => {
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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex flex-col items-center pt-20 px-4 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            layoutId="projects-container"
            className="w-full max-w-5xl bg-zinc-950 border border-white/20 rounded-3xl p-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-zinc-300">Todos os Projetos</div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 hover:bg-white/10 rounded-full"
                onClick={onClose}
              >
                <X size={18} />
              </Button>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400" size={18} />
                <Input
                  autoFocus
                  className="pl-10 h-12 text-lg bg-black/50 border-white/10 focus-visible:ring-1 focus-visible:ring-purple-600"
                  placeholder="Filtrar projetos..."
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                />
              </div>
            </div>

            <div className="flex gap-2 flex-wrap mb-6 justify-center">
              {tags.map((t) => (
                <Badge
                  key={t.id}
                  onClick={() => setActiveTag(t.id)}
                  className={
                    "cursor-pointer px-4 py-2 text-sm transition-all " +
                    (activeTag === t.id
                      ? "bg-purple-600 text-black shadow-[0_0_15px_rgba(147,51,234,0.5)] scale-105"
                      : "bg-zinc-800 hover:bg-zinc-700")
                  }
                >
                  {t.label}
                </Badge>
              ))}
            </div>

            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 max-h-[60vh] overflow-y-auto overflow-x-hidden pr-2 custom-scrollbar"
            >
              <AnimatePresence>
                {filteredItems.map((item) => (
                  <motion.div
                    layout
                    key={item.title}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0, transition: { duration: 0.2 } }}
                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    className="group flex flex-col p-4 bg-zinc-800/50 hover:bg-zinc-800 border border-white/5 rounded-xl transition-colors cursor-pointer hover-felixo-card-glow"
                    onClick={() => window.location.href = item.link}
                  >
                    <div className="flex items-start justify-between mb-2">
                       <div className="p-2 bg-black/40 rounded-lg text-purple-400">
                         {item.icon}
                       </div>
                       <span className={cx("text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border", getTagColor(item.tag))}>
                         {item.tag}
                       </span>
                    </div>
                    <h3 className="font-bold text-zinc-100 group-hover:text-purple-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
              {filteredItems.length === 0 && (
                 <motion.div
                   initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                   className="col-span-full py-10 text-center text-zinc-500"
                 >
                   Nenhum projeto encontrado.
                 </motion.div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
