import React, { useMemo } from "react";
import { Rocket, Mail, Search, X, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../components/ui/button";
import Particles from "../components/ui/particles";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { tags, items } from "../data/projects.jsx";
import { cx, getTagColor } from "../utils/utils";
import { smoothScrollToHash } from "../utils/smooth-scroll";

export function HeroSection({ q, setQ, activeTag, setActiveTag, isSearchOpen, setIsSearchOpen, onOpenProject }) {
  const handleSectionLinkClick = (e, href) => {
    smoothScrollToHash(e, href);
  };

  // Filtra itens para o overlay
  const filteredItems = useMemo(() => {
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
    <section id="inicio" className="relative w-full overflow-hidden pt-24 md:pt-28">
      <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-2 gap-10 items-center relative z-10">
      {/* Overlay de Busca Focada */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col items-center pt-20 px-4 overflow-y-auto"
            onClick={() => setIsSearchOpen(false)}
          >
            {/* Container da Busca que "cresce" */}
            <motion.div
              layoutId="search-container"
              className="w-full max-w-3xl bg-zinc-950 border border-white/20 rounded-3xl p-6 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-zinc-300">Busca Interativa</div>
                <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 hover:bg-white/10 rounded-full"
                    onClick={() => setIsSearchOpen(false)}
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
                    placeholder="O que você procura?"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                  />
                </div>
              </div>

              {/* Tags no overlay */}
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

              {/* Grid de Resultados (Bolhas) */}
              <motion.div 
                layout 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[50vh] overflow-y-auto overflow-x-hidden pr-2 custom-scrollbar"
              >
                <AnimatePresence>
                  {filteredItems.map((item) => (
                    <motion.div
                      layout
                      key={item.title} // Idealmente use um ID único se tiver
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0, transition: { duration: 0.2 } }}
                      transition={{ type: "spring", damping: 20, stiffness: 300 }}
                      className="group flex flex-col p-4 bg-zinc-800/50 hover:bg-zinc-800 border border-white/5 rounded-xl transition-colors cursor-pointer hover-felixo-card-glow"
                      onClick={() => onOpenProject ? onOpenProject(item) : window.location.href = item.link}
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
                     Nenhum projeto encontrado. Tente outra busca.
                   </motion.div>
                )}
              </motion.div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gradient-glow-purple">
          Programação simples, criativa, e colaborativa
        </h1>
        <div className="mt-4 text-zinc-300 space-y-4 text-glow-white">
          <p>
            Olá, eu sou{" "}
            <a href="#contato" onClick={(e) => handleSectionLinkClick(e, "#contato")} className="text-felixo-purple-glow font-bold hover:underline">
              Felipe Martin
            </a>
            : desenvolvo aplicações, bots, extensões e automações, também atuo com produção musical e sound design, e crio experiências colaborativas.
          </p>
          <p>
            Aqui você encontra meus projetos, demos e colaborações e um link dedicado ao meu projeto{" "}
            <a href="#felixoverse" onClick={(e) => handleSectionLinkClick(e, "#felixoverse")} className="text-felixo-purple-glow hover:underline font-semibold" title="Em breve">
              FelixoVerse
            </a>
            , minha comunidade e plataforma de divulgação artística, de desenvolvimento e entretenimento!
          </p>
        </div>
        <div className="mt-6 flex gap-3">
          <Button asChild variant="outline" className="relative group overflow-hidden border-purple-500/50 bg-purple-500/10 text-white shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:bg-purple-500/20 felixo-card-glow transition-all duration-300">
            <a href="#portfolio" onClick={(e) => handleSectionLinkClick(e, "#portfolio")} className="inline-flex items-center gap-2">
              {/* Brilho passando (Shimmer) */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-[150%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />

              <Particles variant="purple" />

              <Rocket size={18} className="relative z-10" />
              <span className="relative z-10">Ver projetos</span>
            </a>
          </Button>
          <Button asChild variant="outline" className="relative group overflow-hidden border-purple-500/50 bg-purple-500/10 text-white shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:bg-purple-500/20 felixo-card-glow transition-all duration-300">
            <a href="https://drive.google.com/file/d/1RNGx0D_yLZCelClUo0XJNvT9AJdgCs47/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              {/* Brilho passando (Shimmer) */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-[150%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />

              <Particles variant="purple" />

              <FileText size={18} className="relative z-10" />
              <span className="relative z-10">Ver currículo</span>
            </a>
          </Button>
          <Button variant="outline" asChild className="relative group overflow-hidden border-white/30 bg-white/5 text-white shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:bg-white/10 felixo-card-glow-white transition-all duration-300">
            <a href="#contato" onClick={(e) => handleSectionLinkClick(e, "#contato")} className="inline-flex items-center gap-2">
              {/* Brilho passando (Shimmer) */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-[150%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent z-0" />

              <Particles variant="white" />

              <Mail size={18} className="relative z-10" /> 
              <span className="relative z-10">Falar comigo</span>
            </a>
          </Button>
        </div>
      </div>
      
      {/* Card Original (Estático) */}
      {/* Quando focado (isSearchOpen), mostramos um placeholder INVISÍVEL para manter o espaço no layout */}
      {/* mas não renderizamos o componente real com layoutId para evitar conflito na animação de saída */}
      {isSearchOpen ? (
        <div className="rounded-3xl border border-transparent p-6 opacity-0 pointer-events-none">
          {/* Replica altura aproximada para não quebrar o grid */}
          <div className="h-40"></div>
        </div>
      ) : (
        <motion.div 
          layoutId="search-container"
          className="rounded-3xl border border-white/10 p-6 bg-gradient-to-br from-zinc-800/50 to-zinc-950/30 shadow-xl cursor-pointer felixo-card-glow transition-colors group"
          onClick={() => setIsSearchOpen(true)}
        >
          <div className="text-sm text-purple-400 transition-colors">Busca rápida</div>
          <div className="mt-3 flex items-center gap-2">
            <div className="relative flex-1 pointer-events-none"> 
              <Search className="absolute left-3 top-1/2 -translate-y-1/2" size={16} />
              <Input
                readOnly 
                className="pl-9 bg-zinc-800/50 border-white/10"
                placeholder="Pesquisar cards..."
                value={q}
              />
            </div>
            <div className="hidden md:flex gap-2">
              {tags.slice(0, 3).map((t) => (
                <Badge
                  key={t.id}
                  className="bg-zinc-800 text-zinc-400 pointer-events-none"
                >
                  {t.label}
                </Badge>
              ))}
            </div>
          </div>
          <div className="mt-2 md:hidden flex gap-2 flex-wrap">
            {tags.slice(0, 3).map((t) => (
              <Badge key={t.id} className="bg-zinc-800 text-zinc-400 pointer-events-none">
                {t.label}
              </Badge>
            ))}
          </div>
        </motion.div>
      )}
      </div>
    </section>
  );
}
