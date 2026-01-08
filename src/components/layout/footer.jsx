import React from "react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 text-center py-10 text-sm text-zinc-400">
      © {new Date().getFullYear()} FelixoVerse — construído ao vivo.
    </footer>
  );
}
