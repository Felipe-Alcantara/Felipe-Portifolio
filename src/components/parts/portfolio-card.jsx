import React from "react";
import { ExternalLink, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export function PortfolioCard({ item }) {
  const { title, icon, tag, desc, link, status, createdAt, tagColor } = item;

  // Formata a data para o padrão brasileiro (DD/MM/YYYY)
  const formattedDate = new Date(createdAt).toLocaleDateString('pt-BR', {
    timeZone: 'UTC', // Garante que a data não mude por causa do fuso horário
  });

  return (
    <Card className="flex flex-col w-[300px] shrink-0 bg-zinc-900/50 border-white/10 hover:border-white/20 transition">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="flex items-start gap-2 text-base leading-snug">
            <span className="shrink-0 mt-0.5">{icon}</span>
            <span className="line-clamp-2">{title}</span>
          </CardTitle>
          <Badge
            className={
              status === "Finalizado"
                ? "bg-green-950/80 border-green-700/60 text-green-300 shrink-0"
                : "bg-yellow-400/20 border-yellow-400/40 text-yellow-100 shrink-0"
            }
          >
            {status}
          </Badge>
        </div>
        <CardDescription className="capitalize">{tag}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-zinc-300 line-clamp-3">{desc}</p>
        <div className="flex items-center gap-2 mt-4 text-xs text-zinc-400">
          <Calendar size={14} />
          <span>{formattedDate}</span>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between mt-auto pt-4">
        <Badge className={`${tagColor} capitalize`}>{tag}</Badge>
        <Button asChild size="sm" variant="secondary">
          <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
            Abrir <ExternalLink size={16} />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
