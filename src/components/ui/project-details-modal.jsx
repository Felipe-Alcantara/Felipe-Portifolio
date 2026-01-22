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
import { cx, getTagColor } from "../../lib/utils";
import { loadReadme } from "../../utils/readmeLoader";

export function ProjectDetailsModal({ isOpen, onClose, project }) {
  const [readmeContent, setReadmeContent] = useState(project?.readme || "");
  
  useEffect(() => {
    if (isOpen && project) {
      loadReadme(project.title).then(setReadmeContent);
    }
  }, [isOpen, project]);

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
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-zinc-950 border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
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

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-8">
              
              {/* Grid Principal */}
              <div className="grid lg:grid-cols-3 gap-8">
                
                {/* Coluna Esquerda: Informações Principais */}
                <div className="lg:col-span-2 space-y-6">
                  
                  {/* Descrição */}
                  <div>
                    <h3 className="text-lg font-semibold text-purple-400 mb-2">Sobre o Projeto</h3>
                    <p className="text-zinc-300 leading-relaxed">{project.desc}</p>
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

                  {/* README Preview Area */}
                  <div className="bg-zinc-900/30 rounded-2xl border border-white/5 p-6 h-96">
                    <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
                      <h3 className="font-mono text-sm text-zinc-400 flex items-center gap-2">
                        <FileText size={16} /> README.md
                      </h3>
                    </div>
                    <div className="h-80 overflow-y-auto custom-scrollbar prose prose-invert prose-sm max-w-none text-zinc-400 font-mono text-sm whitespace-pre-wrap">
                      {readmeContent}
                    </div>
                  </div>
                </div>

                {/* Coluna Direita: Metadados e Links */}
                        <div className="space-y-6">
                          
                          {/* Links de Ação */}
                          <div className="flex flex-col gap-3">
                          <Button variant="outline" className="w-full justify-start gap-3" asChild>
                            <a href={project.links?.site} target="_blank" rel="noopener noreferrer">
                            <Globe size={18} /> Ver Site Online
                            </a>
                          </Button>
                          <Button variant="outline" className="w-full justify-start gap-3" asChild>
                            <a href={project.links?.github} target="_blank" rel="noopener noreferrer">
                            <Github size={18} /> Repositório GitHub
                            </a>
                          </Button>
                          <Button variant="outline" className="w-full justify-start gap-3" asChild>
                            <a href={project.links?.demo} target="_blank" rel="noopener noreferrer">
                            <Youtube size={18} /> Ver Demonstração
                            </a>
                          </Button>
                          <Button variant="outline" className="w-full justify-start gap-3" asChild>
                            <a href={project.links?.download} target="_blank" rel="noopener noreferrer">
                            <Download size={18} /> Download
                            </a>
                          </Button>
                          <Button variant="outline" className="w-full justify-start gap-3" asChild>
                            <a href={project.links?.post} target="_blank" rel="noopener noreferrer">
                            <FileText size={18} /> Ler Post sobre o Projeto
                            </a>
                          </Button>
                          </div>

                          {/* Propriedades e Estatísticas */}
                  <div className="bg-zinc-900/50 rounded-2xl border border-white/10 p-5 space-y-4">
                    <h4 className="font-semibold text-sm text-zinc-400 uppercase tracking-wider">Propriedades</h4>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span className="flex items-center gap-2 text-zinc-500"><Calendar size={14} /> Criado em</span>
                        <span className="text-zinc-200">{project.createdAt || "N/A"}</span>
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
                        <span className="flex items-center gap-2 text-zinc-500"><Clock size={14} /> Tempo Est.</span>
                        <span className="text-zinc-200">{project.properties?.timeEstimated}</span>
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
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}