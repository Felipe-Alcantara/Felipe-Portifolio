import React from "react";
import { Mail, ExternalLink } from "lucide-react";
import { Button } from "../components/ui/button";

export function ContactSection() {
  return (
    <section id="contato" className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold">Contato</h2>
        <p className="mt-2 text-zinc-300">Me chama para colaborar, dar feedback ou enviar ideias.</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button asChild>
            <a href="mailto:felixoverse@example.com" className="inline-flex items-center gap-2">
              <Mail size={18} /> Email
            </a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="https://example.com" className="inline-flex items-center gap-2">
              <ExternalLink size={18} /> Site
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
