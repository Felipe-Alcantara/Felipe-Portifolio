import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { Button } from "../components/ui/button";
import { PortfolioCard } from "../components/parts/portfolio-card";
import Particles from "../components/ui/particles";
import { loop } from "../lib/utils";

export function PortfolioSection({ items }) {
  const marquee = loop(items.length ? items : []);
  const carouselRef = useRef(null);
  const x = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    const calculateWidth = () => {
      if (carouselRef.current) {
        setItemWidth(carouselRef.current.scrollWidth / 3);
      }
    };
    calculateWidth();
    window.addEventListener("resize", calculateWidth);
    return () => window.removeEventListener("resize", calculateWidth);
  }, [marquee]);

  useAnimationFrame((t, delta) => {
    if (!isDragging && itemWidth > 0) {
      const moveBy = delta * 0.04; // Velocidade do auto-scroll
      let newX = x.get() - moveBy;
      if (newX <= -itemWidth) newX += itemWidth;
      if (newX > 0) newX -= itemWidth;
      x.set(newX);
    }
  });

  const handleDrag = () => {
    if (itemWidth > 0) {
      const currentX = x.get();
      let newX = currentX % itemWidth;
      if (newX > 0) newX -= itemWidth;
      x.set(newX);
    }
  };

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
            ref={carouselRef}
            className="flex gap-4 py-10 px-4 cursor-grab active:cursor-grabbing"
            style={{ x }}
            drag="x"
            dragMomentum={false}
            onDragStart={() => setIsDragging(true)}
            onDrag={handleDrag}
            onDragEnd={() => setIsDragging(false)}
          >
            {marquee.map((it, idx) => (
              <div key={`${it.title}-${idx}`} className="relative shrink-0 rounded-3xl felixo-card-glow-intense border border-transparent w-80 md:w-96 overflow-hidden flex flex-col [&>*]:h-full [&>*]:w-full">
                <PortfolioCard item={it} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
