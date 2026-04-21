import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, CheckCircle2, ListOrdered, Wrench, X } from "lucide-react";
import { Button } from "./button";
import { Badge } from "./badge";
import { cx, getTagColor } from "../../utils/utils";
import { tags } from "../../data/projects.jsx";

function toTimestamp(dateValue) {
  const parsed = Date.parse(dateValue || "");
  return Number.isNaN(parsed) ? -Infinity : parsed;
}

function formatDate(dateValue) {
  const parsed = toTimestamp(dateValue);

  if (parsed === -Infinity) {
    return "Data não disponível";
  }

  return new Date(parsed).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export function ProjectsListModal({ isOpen, onClose, items = [], onOpenProject }) {
  const [activeTag, setActiveTag] = useState("all");

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        const dateDifference = toTimestamp(b.createdAt) - toTimestamp(a.createdAt);

        if (dateDifference !== 0) {
          return dateDifference;
        }

        return String(a.title || "").localeCompare(String(b.title || ""), "pt-BR");
      }),
    [items]
  );

  const filteredItems = useMemo(
    () =>
      sortedItems.filter(
        (item) => activeTag === "all" || String(item.tag || "").toLowerCase() === activeTag
      ),
    [sortedItems, activeTag]
  );

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousBodyPaddingRight = document.body.style.paddingRight;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.paddingRight = previousBodyPaddingRight;
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setActiveTag("all");
    }
  }, [isOpen]);

  const handleOpenProject = (project) => {
    if (!onOpenProject) {
      return;
    }

    onClose();
    onOpenProject(project);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 8 }}
            className="w-full max-w-5xl bg-zinc-950 border border-white/20 rounded-3xl p-7 md:p-8 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 text-zinc-200">
                  <ListOrdered size={18} className="text-purple-400" />
                  <h3 className="text-base md:text-lg font-semibold">
                    Projetos por criação (mais novos primeiro)
                  </h3>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge
                      key={tag.id}
                      onClick={() => setActiveTag(tag.id)}
                      className={
                        "cursor-pointer px-3 py-1.5 text-xs md:text-sm transition-all " +
                        (activeTag === tag.id
                          ? "bg-purple-600 text-black shadow-[0_0_15px_rgba(147,51,234,0.5)] scale-105"
                          : "bg-zinc-800 hover:bg-zinc-700 text-zinc-200")
                      }
                    >
                      {tag.label}
                    </Badge>
                  ))}
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full hover:bg-white/10"
                onClick={onClose}
                aria-label="Fechar modal de lista"
              >
                <X size={18} />
              </Button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto p-1 md:p-2 custom-scrollbar space-y-4">
              {filteredItems.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => handleOpenProject(item)}
                  className="w-full text-left rounded-2xl border border-white/10 bg-zinc-900/40 p-5 transition-colors hover:bg-zinc-900/70 hover:border-white/20"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-purple-400">{item.icon}</span>
                        <h4 className="font-semibold text-zinc-100 truncate">{item.title}</h4>
                      </div>
                      <p className="text-sm text-zinc-400 line-clamp-2">{item.desc}</p>
                    </div>
                    <Badge className={cx("capitalize border shrink-0", getTagColor(item.tag))}>
                      {item.tag}
                    </Badge>
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-1.5 text-zinc-400">
                      <CalendarDays size={14} />
                      <span>{formatDate(item.createdAt)}</span>
                    </div>
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
                          <Wrench size={14} />
                        )}
                        <span>{item.status}</span>
                      </div>
                    )}
                  </div>
                </button>
              ))}

              {filteredItems.length === 0 && (
                <div className="py-10 text-center text-zinc-500">
                  Nenhum projeto encontrado para a tag selecionada.
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
