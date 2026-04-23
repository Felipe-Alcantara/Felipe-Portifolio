import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Github, 
  Globe, 
  Youtube, 
  Download, 
  FileText, 
  Calendar, 
  BarChart, 
  Layers, 
  Clock, 
  HardDrive, 
  Wifi 
} from "lucide-react";
import { Button } from "./button";
import { Badge } from "./badge";
import { ProjectReadmeContent } from "./project-readme-content";
import { cx, getTagColor } from "../../utils/utils";
import { getReadmePlaceholder, loadReadme } from "../../utils/readme-loader";
import {
  getPrimaryProjectLabel,
  getPrimaryProjectUrl,
  isExternalUrl,
} from "../../utils/project-routes";

function formatCreatedAt(dateValue) {
  const parsedTimestamp = Date.parse(dateValue || "");

  if (Number.isNaN(parsedTimestamp)) {
    return "N/A";
  }

  return new Date(parsedTimestamp).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function calculateProjectDuration(createdAt) {
  const createdTimestamp = Date.parse(createdAt || "");

  if (Number.isNaN(createdTimestamp)) {
    return "N/A";
  }

  const createdDate = new Date(createdTimestamp);
  const now = new Date();

  let years = now.getFullYear() - createdDate.getFullYear();
  let months = now.getMonth() - createdDate.getMonth();
  let days = now.getDate() - createdDate.getDate();

  // Ajustar dias negativos
  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }

  // Ajustar meses negativos
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  // Formatar a saída
  const parts = [];
  if (years > 0) parts.push(`${years}a`);
  if (months > 0) parts.push(`${months}m`);
  if (days > 0 && years === 0) parts.push(`${days}d`);

  return parts.length > 0 ? parts.join(" ") : "Recente";
}

export function ProjectDetailsModal({ isOpen, onClose, project }) {
  const [readmeContent, setReadmeContent] = useState(() => getReadmePlaceholder(project));
  const primaryProjectUrl = getPrimaryProjectUrl(project);
  const primaryProjectLabel = getPrimaryProjectLabel(project);
  const primaryProjectIsExternal = isExternalUrl(primaryProjectUrl);
  
  useEffect(() => {
    if (!isOpen || !project) {
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
  }, [isOpen, project]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousBodyPaddingRight = document.body.style.paddingRight;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.paddingRight = previousBodyPaddingRight;
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            key={project.repoFolder || project.title}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-7xl max-h-[95vh] bg-zinc-950 border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-zinc-900/50">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-zinc-800 rounded-xl text-purple-400 border border-white/5">
                  {project.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge className={`capitalize ${project.tagColor}`}>{project.tag}</Badge>
                    {project.status && (
                      <Badge
                        className={
                          project.status === "Finalizado"
                            ? "bg-green-950/80 border-green-700/60 text-green-300"
                            : "bg-yellow-400/20 border-yellow-400/40 text-yellow-100"
                        }
                      >
                        {project.status}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full hover:bg-white/10">
                <X size={30} />
              </Button>
            </div>

            {/* Body: sidebar esquerda + README à direita */}
            <div className="flex flex-1 overflow-hidden min-h-0">

              {/* Sidebar Esquerda: Informações + Links + Propriedades */}
              <div className="flex flex-col gap-5 w-80 shrink-0 overflow-y-auto overflow-x-hidden custom-scrollbar p-6 border-r border-white/5">

                {/* Descrição */}
                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Sobre o Projeto</h3>
                  <p className="text-zinc-300 leading-relaxed text-sm">{project.desc}</p>
                </div>

                {/* Stack Tecnológica */}
                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-3 flex items-center gap-2">
                    <Layers size={18} /> Stack Utilizada
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack?.map((tech, i) => (
                      <Badge key={i} variant="outline" className={getTagColor(tech)}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Links de Ação */}
                <div className="flex flex-col gap-3">
                  <Button variant="outline" className="w-full justify-start gap-3 text-left" asChild>
                    <a
                      href={primaryProjectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe size={18} className="shrink-0" />
                      <span className="flex-1 text-left">{primaryProjectLabel}</span>
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-3 text-left" asChild>
                    <a href={project.links?.github} target="_blank" rel="noopener noreferrer">
                      <Github size={18} className="shrink-0" />
                      <span className="flex-1 text-left">Repositório GitHub</span>
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-3 text-left" asChild>
                    <a href={project.links?.demo} target="_blank" rel="noopener noreferrer">
                      <Youtube size={18} className="shrink-0" />
                      <span className="flex-1 text-left">Ver Demonstração</span>
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-3 text-left" asChild>
                    <a href={project.links?.download} target="_blank" rel="noopener noreferrer">
                      <Download size={18} className="shrink-0" />
                      <span className="flex-1 text-left">Download</span>
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-3 text-left" asChild>
                    <a href={project.links?.post} target="_blank" rel="noopener noreferrer">
                      <FileText size={18} className="shrink-0" />
                      <span className="flex-1 text-left">Ler Post sobre o Projeto</span>
                    </a>
                  </Button>
                </div>

                {/* Propriedades */}
                <div className="bg-zinc-900/50 rounded-2xl border border-white/10 p-5 space-y-4">
                  <h4 className="font-semibold text-sm text-zinc-400 uppercase tracking-wider">Propriedades</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="flex items-center gap-2 text-zinc-500"><Calendar size={14} /> Criado em</span>
                      <span className="text-zinc-200">{formatCreatedAt(project.createdAt)}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="flex items-center gap-2 text-zinc-500"><BarChart size={14} /> Complexidade</span>
                      <span className={cx(
                        "font-medium",
                        project.complexity === "Alta" ? "text-red-400" :
                        project.complexity === "Média" ? "text-amber-400" : "text-green-400"
                      )}>{project.complexity}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="flex items-center gap-2 text-zinc-500"><Clock size={14} /> Desde o último commit</span>
                      <span className="text-zinc-200">{calculateProjectDuration(project.lastCommitAt)}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="flex items-center gap-2 text-zinc-500"><HardDrive size={14} /> Tamanho</span>
                      <span className="text-zinc-200">{project.properties?.size}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="flex items-center gap-2 text-zinc-500"><Wifi size={14} /> Status</span>
                      <span className={project.properties?.online ? "text-green-400" : "text-zinc-500"}>
                        {project.properties?.online ? "Online" : "Offline"}
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* README: ocupa toda a altura disponível */}
              <div className="flex-1 flex flex-col min-w-0 p-6">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/5">
                  <h3 className="font-mono text-sm text-zinc-400 flex items-center gap-2">
                    <FileText size={16} /> README.md
                  </h3>
                </div>
                <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar rounded-xl border border-white/10 bg-zinc-800/50 p-4">
                  {readmeContent ? (
                    <ProjectReadmeContent content={readmeContent} project={project} />
                  ) : (
                    <div className="text-zinc-400 font-mono text-sm">Carregando README...</div>
                  )}
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
