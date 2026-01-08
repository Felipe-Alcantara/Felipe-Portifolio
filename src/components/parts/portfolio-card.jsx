import React from "react";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export function PortfolioCard({ item }) {
  return (
    <Card className="w-[300px] shrink-0 bg-zinc-900/50 border-white/10 hover:border-white/20 transition">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {item.icon} {item.title}
        </CardTitle>
        <CardDescription className="capitalize">{item.tag}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-zinc-300">{item.desc}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <Badge className="bg-zinc-800 capitalize">{item.tag}</Badge>
        <Button asChild size="sm" variant="secondary">
          <a href={item.link} className="inline-flex items-center gap-1">
            Abrir <ExternalLink size={16} />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
