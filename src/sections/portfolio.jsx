import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { PortfolioCard } from "../components/parts/portfolio-card";
import Particles from "../components/ui/particles";
import { loop } from "../lib/utils";

export function PortfolioSection({ items }) {
  const marquee = loop(items.length ? items : []);

  return (
    <section id="portfolio" className="border-t border-white/5">
      <div className="py-14">
        <div className="mx-auto max-w-6xl px-4 flex items-end justify-between gap-4">
          <div className="relative">
            <h2 className="relative text-2xl md:text-3xl font-bold leading-tight bg-gradient-to-r from-white via-[#3178C6] to-white bg-clip-text text-transparent animate-title-glow-ts text-glow-white z-10">Aplicações Web</h2>
            <Particles variant="white" />
            <p className="text-zinc-400">Cards passando lado a lado, com loop e drag.</p>
          </div>
          <Button variant="outline" asChild>
            <a href="#projetos">Ver projetos</a>
          </Button>
        </div>

        <div className="mt-6 overflow-hidden">
          <motion.div
            className="flex gap-4"
            drag="x"
            dragConstraints={{ left: -400, right: 0 }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {marquee.map((it, idx) => (
              <PortfolioCard key={`${it.title}-${idx}`} item={it} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
