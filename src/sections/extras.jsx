import React from "react";
import { GraduationCap, CheckCircle2 } from "lucide-react";
import { Badge } from "../components/ui/badge";

export function ExtrasSection() {
  const renderCourseTitle = (title) => {
    const parts = title.split(/(Python|TypeScript|JavaScript|HTML)/g);

    return parts.map((part, index) => {
      if (part === "Python") {
        return (
          <span key={index} className="text-[#3776AB] font-semibold">
            {part}
          </span>
        );
      }

      if (part === "TypeScript") {
        return (
          <span key={index} className="text-[#3178C6] font-semibold">
            {part}
          </span>
        );
      }

      if (part === "JavaScript") {
        return (
          <span key={index} className="text-[#F7DF1E] font-semibold">
            {part}
          </span>
        );
      }

      if (part === "HTML") {
        return (
          <span key={index} className="text-[#E34F26] font-semibold">
            {part}
          </span>
        );
      }

      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

  const courses = [
    {
      title: "Lógica de programação: mergulhe em programação com JavaScript",
      date: "03, fev., 2025",
      status: "Concluído"
    },
    {
      title: "JavaScript e HTML: desenvolva um jogo e pratique lógica de programação",
      date: "03, fev., 2025",
      status: "Concluído"
    },
    {
      title: "Lógica de programação: praticando com desafios",
      date: "03, fev., 2025",
      status: "Concluído"
    },
    {
      title: "Lógica de programação: explore funções e listas",
      date: "02, jan., 2025",
      status: "Concluído"
    },
    {
      title: "Viabilidade de Projetos & Negócios: fluxo de caixa, juros, VPL, TIR e payback",
      date: "17, abr., 2024",
      status: "Concluído"
    },
    {
      title: "Python: crie a sua primeira aplicação",
      date: "03, abr., 2024",
      status: "Concluído"
    }
  ];

  return (
    <section id="extras" className="border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-3xl font-bold mb-8">Formação & Extras</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Coluna Acadêmica */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-purple-400 flex items-center gap-2">
              <GraduationCap /> Acadêmico
            </h3>
            
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 space-y-4">
              <div>
                <h4 className="font-bold text-lg">Sistemas de Informação</h4>
                <p className="text-[#1E6BB8] font-semibold">Universidade Geraldo de Biase</p>
                <Badge variant="secondary" className="mt-2 text-xs">2024 - Presente</Badge>
              </div>
              <p className="text-sm text-zinc-300 border-t border-white/5 pt-4">
                Projetando, desenvolvendo, testando e mantendo sistemas. Foco em engenharia de software e soluções computacionais.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5">
              <h4 className="font-bold text-lg">Curso de <span className="text-[#E34F26]">HTML5</span></h4>
              <p className="text-zinc-400">Curso em Vídeo</p>
              <Badge variant="secondary" className="mt-2 text-xs">2024</Badge>
            </div>
          </div>

          {/* Coluna Cursos Livres/Alura */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-purple-400 flex items-center gap-2">
              <CheckCircle2 /> Cursos & Certificações
            </h3>
            
            <div className="space-y-3">
              {courses.map((course, index) => (
                <div key={index} className="p-4 rounded-xl bg-zinc-900/20 border border-white/5 hover:bg-zinc-800/40 transition-colors">
                  <h4 className="font-medium text-sm md:text-base">{renderCourseTitle(course.title)}</h4>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-zinc-500">{course.date}</span>
                    <Badge variant="outline" className="text-[10px] h-5 px-2 bg-green-500/10 text-green-400 border-green-500/20">
                      {course.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
