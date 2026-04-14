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
import { cx, getTagColor } from "../../utils/utils";
import { loadReadme } from "../../utils/readme-loader";

// Componente simples para renderizar markdown
function SimpleMarkdown({ content }) {
  if (!content) return null;
  
  // Converte markdown básico para HTML
  const formatContent = (text) => {
    return text
      .replace(/^# (.*$)/gm, '<h1 class="text-xl font-bold text-purple-400 mb-3">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-lg font-semibold text-purple-300 mb-2">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-base font-medium text-purple-200 mb-2">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-purple-300">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      .replace(/`(.*?)`/g, '<code class="bg-zinc-800 px-2 py-1 rounded text-purple-300 font-mono text-sm">$1</code>')
      .replace(/^> (.*$)/gm, '<blockquote class="border-l-4 border-purple-500 pl-4 italic text-zinc-400 mb-3">$1</blockquote>')
      .replace(/^- (.*$)/gm, '<li class="mb-1 list-disc list-inside">$1</li>')
      .replace(/\n\n/g, '</p><p class="text-zinc-300 mb-3 leading-relaxed">')
      .replace(/^(?!<[h|l|b])(.+)$/gm, '<p class="text-zinc-300 mb-3 leading-relaxed">$1</p>');
  };
  
  return (
    <div 
      className="text-zinc-300 leading-relaxed"
      dangerouslySetInnerHTML={{ __html: formatContent(content) }}
    />
  );
}

export function ProjectDetailsModal({ isOpen, onClose, project }) {
  const [readmeContent, setReadmeContent] = useState(project?.readme || "");
  
  useEffect(() => {
    if (isOpen && project) {
      loadReadme(project).then(setReadmeContent);
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

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
              
              {/* Grid Principal */}
              <div className="flex gap-8 min-h-full">
                
                {/* Coluna Esquerda: Informações Principais */}
                <div className="flex-1 space-y-6">
                  
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
                    <div className="h-80 overflow-y-auto custom-scrollbar prose prose-invert prose-sm max-w-none">
                      {readmeContent ? (
                        <SimpleMarkdown content={readmeContent} />
                      ) : (
                        <div className="text-zinc-400 font-mono text-sm">Carregando README...</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Coluna Direita: Metadados e Links */}
                        <div className="flex flex-col space-y-4 w-80 min-h-full">
                          
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
                  <div className="bg-zinc-900/50 rounded-2xl border border-white/10 p-5 space-y-4 flex-1">
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
