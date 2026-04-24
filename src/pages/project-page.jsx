import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  Calendar,
  Download,
  ExternalLink,
  FileText,
  Github,
  Globe,
  Layers,
  Youtube,
} from "lucide-react";
import { Navbar } from "../components/layout/navbar";
import { Footer } from "../components/layout/footer";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { BackgroundParticles } from "../components/ui/background-particles";
import { ProjectReadmeContent } from "../components/ui/project-readme-content";
import { getReadmePlaceholder, loadReadme } from "../utils/readme-loader";
import {
  getPrimaryProjectLabel,
  getPrimaryProjectUrl,
  hasOwnProjectSite,
  isExternalUrl,
} from "../utils/project-routes";

function formatCreatedAt(dateValue) {
  const parsedTimestamp = Date.parse(dateValue || "");

  if (Number.isNaN(parsedTimestamp)) {
    return "N/A";
  }

  return new Date(parsedTimestamp).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function ActionLink({ href, icon, children }) {
  if (typeof href !== "string" || !href.trim() || href.trim() === "#") {
    return null;
  }

  const external = isExternalUrl(href);

  return (
    <Button variant="outline" className="justify-start gap-3 text-left" asChild>
      <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
        {icon}
        <span className="flex-1 text-left">{children}</span>
        {external ? <ExternalLink size={16} className="text-zinc-500" /> : null}
      </a>
    </Button>
  );
}

export default function ProjectPage({ project }) {
  const [readmeContent, setReadmeContent] = useState(() => getReadmePlaceholder(project));
  const primaryProjectUrl = getPrimaryProjectUrl(project);
  const primaryProjectLabel = getPrimaryProjectLabel(project);
  const projectHasOwnSite = hasOwnProjectSite(project);

  useEffect(() => {
    if (!project) {
      return undefined;
    }

    let isCancelled = false;

    setReadmeContent(getReadmePlaceholder(project));

    loadReadme(project).then((content) => {
      if (!isCancelled) {
        setReadmeContent(content);
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [project]);

  if (!project) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(88,28,135,0.35),_transparent_35%),linear-gradient(180deg,_#050505_0%,_#111111_45%,_#050505_100%)] text-zinc-50">
      <BackgroundParticles count={28} />
      <Navbar />
      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 pb-20 pt-28 sm:px-6">
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="ghost" asChild>
            <a href="/">
              <ArrowLeft size={16} />
              Voltar ao portfólio
            </a>
          </Button>
          <Badge className={project.tagColor}>{project.tag}</Badge>
          {project.status ? (
            <Badge className="border border-white/10 bg-white/5 text-zinc-200">{project.status}</Badge>
          ) : null}
        </div>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(320px,0.8fr)]">
          <div className="rounded-[2rem] border border-white/10 bg-zinc-950/75 p-8 shadow-2xl shadow-black/30">
            <div className="mb-5 inline-flex rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-purple-200">
              Projeto detalhado
            </div>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">{project.desc}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="outline" className="justify-start gap-3 text-left" asChild>
                <a href={primaryProjectUrl} target={projectHasOwnSite ? "_blank" : undefined} rel={projectHasOwnSite ? "noopener noreferrer" : undefined}>
                  <Globe size={18} className="shrink-0" />
                  <span className="flex-1 text-left">{primaryProjectLabel}</span>
                  {projectHasOwnSite ? <ExternalLink size={16} className="text-zinc-500" /> : null}
                </a>
              </Button>
              <ActionLink href={project.links?.github} icon={<Github size={18} className="shrink-0" />}>
                Repositório GitHub
              </ActionLink>
              <ActionLink href={project.links?.demo} icon={<Youtube size={18} className="shrink-0" />}>
                Ver Demonstração
              </ActionLink>
              <ActionLink href={project.links?.download} icon={<Download size={18} className="shrink-0" />}>
                Download
              </ActionLink>
              <ActionLink href={project.links?.post} icon={<FileText size={18} className="shrink-0" />}>
                Ler Post sobre o Projeto
              </ActionLink>
            </div>
          </div>

          <aside className="flex flex-col gap-4">
            <div className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-6">
              <div className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
                Resumo rápido
              </div>
              <div className="space-y-4 text-sm text-zinc-300">
                <div className="flex items-center gap-3">
                  <Calendar size={16} className="text-purple-300" />
                  <span>Criado em {formatCreatedAt(project.createdAt)}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Layers size={16} className="mt-0.5 text-purple-300" />
                  <div>
                    <div className="mb-2">Stack principal</div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack?.map((tech) => (
                        <Badge
                          key={tech}
                          className="border border-white/10 bg-white/5 text-zinc-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                {!projectHasOwnSite ? (
                  <div className="rounded-2xl border border-amber-400/20 bg-amber-400/10 p-4 text-amber-100">
                    Este projeto ainda não tem site próprio publicado. Esta página funciona como landing interna,
                    reunindo contexto, links e README.
                  </div>
                ) : null}
              </div>
            </div>
          </aside>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-zinc-950/75 p-6 shadow-2xl shadow-black/20 sm:p-8">
          <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-4">
            <FileText size={18} className="text-purple-300" />
            <div>
              <h2 className="text-xl font-semibold text-white">README do projeto</h2>
              <p className="text-sm text-zinc-400">
                Conteúdo carregado automaticamente do repositório e renderizado dentro do portfólio.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-4 sm:p-5">
            <ProjectReadmeContent content={readmeContent} project={project} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
