import React, { useMemo, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function BackgroundParticles({ count = 55 }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(() => {
    return typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;
  });

  // Detecta prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Pausa animações quando o container sai do viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const backgroundParticles = useMemo(() => {
    return Array.from({ length: Math.max(0, count) }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 8 + 4,
      delay: Math.random() * 2,
      opacity: Math.random() * 0.5 + 0.5,
    }));
  }, [count]);

  // Se o usuário prefere movimento reduzido, não renderiza nada
  if (reducedMotion) return null;

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none select-none z-0">
      {backgroundParticles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-purple-200 shadow-[0_0_15px_rgba(192,132,252,0.8)] blur-[0.5px]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={isVisible ? {
            y: [0, -150],
            opacity: [0, p.opacity, 0],
          } : false}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
