import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./button";
import { X, Search } from "lucide-react";
import { Input } from "./input";
import { Badge } from "./badge";
import { tags, items as allItems } from "../../data/projects.jsx";
import { cx, getTagColor } from "../../utils/utils";

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
