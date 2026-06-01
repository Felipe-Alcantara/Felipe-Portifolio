import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpDown, CalendarDays, CheckCircle2, ListOrdered, Wrench, X } from "lucide-react";
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

export function ProjectsListModal({
  isOpen,
  onClose,
  items = [],
  onOpenProject,
  activeTag: controlledActiveTag,
  onActiveTagChange,
  sortDirection: controlledSortDirection,
  onSortDirectionChange,
}) {
  // Permite uso controlado (estado mantido pelo pai para sobreviver ao fechar/reabrir)
  // ou autônomo (fallback para estado interno).
  const [internalActiveTag, setInternalActiveTag] = useState("all");
  const [internalSortDirection, setInternalSortDirection] = useState("desc");

  const activeTag = controlledActiveTag ?? internalActiveTag;
  const sortDirection = controlledSortDirection ?? internalSortDirection;

  const setActiveTag = (value) => {
    if (onActiveTagChange) onActiveTagChange(value);
    else setInternalActiveTag(value);
  };

  const setSortDirection = (updater) => {
    const next = typeof updater === "function" ? updater(sortDirection) : updater;
    if (onSortDirectionChange) onSortDirectionChange(next);
    else setInternalSortDirection(next);
  };

  const isNewestFirst = sortDirection === "desc";

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        const timestampA = toTimestamp(a.createdAt);
        const timestampB = toTimestamp(b.createdAt);

        if (timestampA === -Infinity || timestampB === -Infinity) {
          if (timestampA !== timestampB) {
            return timestampA === -Infinity ? 1 : -1;
          }
        } else {
          const dateDifference =
            sortDirection === "desc"
              ? timestampB - timestampA
              : timestampA - timestampB;

          if (dateDifference !== 0) {
            return dateDifference;
          }
        }

        return String(a.title || "").localeCompare(String(b.title || ""), "pt-BR");
      }),
    [items, sortDirection]
  );

  const filteredItems = useMemo(
    () =>
      sortedItems.filter(
        (item) => activeTag === "all" || (item.tags ?? [item.tag]).map(t => String(t || "").toLowerCase()).includes(activeTag)
      ),
    [sortedItems, activeTag]
  );

  const chronologicalRank = useMemo(() => {
    const byOldest = [...items].sort((a, b) => {
      const timestampA = toTimestamp(a.createdAt);
      const timestampB = toTimestamp(b.createdAt);
      if (timestampA === -Infinity || timestampB === -Infinity) {
        return timestampA === -Infinity ? 1 : -1;
      }
      const diff = timestampA - timestampB;
      return diff !== 0 ? diff : String(a.title || "").localeCompare(String(b.title || ""), "pt-BR");
    });
    const rankMap = new Map();
    byOldest.forEach((item, index) => rankMap.set(item.title, index + 1));
    return rankMap;
  }, [items]);

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

  const handleOpenProject = (project) => {
    if (!onOpenProject) {
      return;
    }

    // Não chama onClose() aqui: o fechamento da lista é responsabilidade do
    // pai (App) ao abrir os detalhes, para preservar filtro/ordenação ao voltar.
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
            <div className="mb-6 space-y-3">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-zinc-200">
                  <ListOrdered size={18} className="text-purple-400" />
                  <h3 className="text-base md:text-lg font-semibold">
                    Projetos por criação ({isNewestFirst ? "mais novos primeiro" : "mais antigos primeiro"})
                  </h3>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full hover:bg-white/10 shrink-0"
                  onClick={onClose}
                  aria-label="Fechar modal de lista"
                >
                  <X size={18} />
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-2">
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
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-white/20 bg-zinc-900/70 text-xs md:text-sm hover:bg-zinc-800/80"
                  onClick={() =>
                    setSortDirection((currentDirection) =>
                      currentDirection === "desc" ? "asc" : "desc"
                    )
                  }
                  aria-label={
                    isNewestFirst
                      ? "Inverter para mais antigos primeiro"
                      : "Inverter para mais novos primeiro"
                  }
                >
                  <ArrowUpDown size={14} />
                  {isNewestFirst ? "Mais novos" : "Mais antigos"}
                </Button>
              </div>
            </div>

            <motion.div
              layout
              className="max-h-[70vh] overflow-y-auto p-1 md:p-2 custom-scrollbar space-y-4"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => (
                  <motion.button
                    layout
                    key={item.title}
                    type="button"
                    initial={{ scale: 0.96, opacity: 0, y: 8 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.94, opacity: 0, y: -8, transition: { duration: 0.18 } }}
                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
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
                      <div className="flex flex-wrap gap-1 justify-end">
                        {(item.tags ?? [item.tag]).map((t) => (
                          <Badge key={t} className={cx("capitalize border shrink-0", getTagColor(t))}>
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-1.5 text-zinc-400">
                        <CalendarDays size={14} />
                        <span>{formatDate(item.createdAt)}</span>
                        <span className="text-zinc-600">·</span>
                        <span className="font-mono text-zinc-500">#{chronologicalRank.get(item.title)}</span>
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
                  </motion.button>
                ))}
              </AnimatePresence>

              {filteredItems.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-10 text-center text-zinc-500"
                >
                  Nenhum projeto encontrado para a tag selecionada.
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
