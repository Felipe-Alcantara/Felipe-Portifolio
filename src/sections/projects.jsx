import React from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/ui/card";

export function ProjectsSection({ items }) {
  return (
    <section id="projetos" className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold">Projetos</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.slice(0, 6).map((it, i) => (
            <Card key={i} className="bg-zinc-900/50 border-white/10 hover-felixo-card-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {it.icon} {it.title}
                </CardTitle>
                <CardDescription className="capitalize">{it.tag}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-300 text-sm">{it.desc}</p>
              </CardContent>
              <CardFooter>
                <Button asChild size="sm" variant="secondary">
                  <a href={it.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
                    Abrir <ExternalLink size={16} />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
