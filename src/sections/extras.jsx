import React from "react";
import { GraduationCap } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { BackgroundParticles } from "../components/ui/BackgroundParticles";
import ugbLogo from '../../Imagens/ugb.webp';
import { FaYoutube } from 'react-icons/fa';

// Helper para colorir nomes de tecnologias nos títulos dos cursos
const renderCourseTitle = (title) => {
  const parts = title.split(/(Python|TypeScript|JavaScript|HTML)/g);
  return parts.map((part, index) => {
    switch (part) {
      case "Python":
        return <span key={index} className="text-[#3776AB] font-semibold">{part}</span>;
      case "TypeScript":
        return <span key={index} className="text-[#3178C6] font-semibold">{part}</span>;
      case "JavaScript":
        return <span key={index} className="text-[#F7DF1E] font-semibold">{part}</span>;
      case "HTML":
        return <span key={index} className="text-[#E34F26] font-semibold">{part}</span>;
      default:
        return <React.Fragment key={index}>{part}</React.Fragment>;
    }
  });
};

// --- ESTRUTURAS DE DADOS ---

const academicData = {
  course: "Sistemas de Informação",
  institution: "Universidade Geraldo de Biase",
  date: "Metade de 2023 - Presente",
  description: "O curso de Sistemas de Informação forma profissionais capazes de administrar o fluxo de informações em redes de computadores, além de desenvolver e evoluir sistemas de informação para uso em processos organizacionais. A formação abrange desde a infraestrutura de TI e engenharia de software até a gestão de projetos e segurança da informação.",
  logo: ugbLogo
};

const freeCoursesData = [
  {
    title: "Curso de HTML5 e CSS3",
    institution: "Curso em Vídeo",
    date: "2024",
    description: "O curso ensina a criar sites usando as três linguagens fundamentais da web: HTML5 para estrutura, CSS3 para estilos e JavaScript para interatividade. Abrange desde o básico até a publicação de um site completo, com projetos práticos."
  },
  {
    title: "Curso de Python 3",
    institution: "Curso em Vídeo",
    date: "2024",
    description: "Dividido em 'Mundos', o curso cobre desde os fundamentos da linguagem Python até estruturas de controle, de dados (listas, tuplas, dicionários) e funções. Ideal para iniciantes, com foco em resolução de problemas."
  }
];

const aluraCoursesData = [
    {
      title: "Lógica de programação: mergulhe em programação com JavaScript",
      date: "03, fev., 2025",
    },
    {
      title: "JavaScript e HTML: desenvolva um jogo e pratique lógica de programação",
      date: "03, fev., 2025",
    },
    {
      title: "Lógica de programação: praticando com desafios",
      date: "03, fev., 2025",
    },
    {
      title: "Lógica de programação: explore funções e listas",
      date: "02, jan., 2025",
    },
    {
      title: "Viabilidade de Projetos & Negócios: fluxo de caixa, juros, VPL, TIR e payback",
      date: "17, abr., 2024",
    },
    {
      title: "Python: crie a sua primeira aplicação",
      date: "03, abr., 2024",
    }
];


// --- COMPONENTE PRINCIPAL ---

export function ExtrasSection() {
  return (
    <section id="extras" className="relative border-t border-white/5 overflow-hidden">
      <BackgroundParticles />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Formação & Certificações</h2>
        
        <div className="grid md:grid-cols-3 gap-10">

          {/* Coluna 1: Graduação Acadêmica */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={academicData.logo} alt="Logo UGB" className="h-8 w-8 object-contain" />
              <h3 className="text-xl font-semibold text-purple-400">Graduação Acadêmica</h3>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/10 space-y-4">
              <div>
                <h4 className="font-bold text-lg">{academicData.course}</h4>
                <p className="text-[#1E6BB8] font-semibold text-sm">{academicData.institution}</p>
                <Badge variant="secondary" className="mt-2 text-xs">{academicData.date}</Badge>
              </div>
              <p className="text-sm text-zinc-300 border-t border-white/10 pt-4 line-clamp-5">
                {academicData.description}
              </p>
            </div>
          </div>

          {/* Coluna 2: Cursos Gratuitos */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <FaYoutube className="text-red-600 h-8 w-8" />
              <h3 className="text-xl font-semibold text-purple-400">Cursos da Web Gratuitos</h3>
            </div>
            <div className="space-y-4">
              {freeCoursesData.map((course, index) => (
                <div key={index} className="p-6 rounded-2xl bg-zinc-900/40 border border-white/10 space-y-3">
                  <h4 className="font-bold">{course.title}</h4>
                  <p className="text-zinc-400 text-sm">{course.institution}</p>
                  <p className="text-xs text-zinc-300 border-t border-white/10 pt-3 line-clamp-4">{course.description}</p>
                  <Badge variant="secondary" className="text-xs">{course.date}</Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna 3: Alura */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
                <img src="https://www.alura.com.br/assets/img/alura-logo.svg" alt="Logo Alura" className="h-7 w-auto" />
                <h3 className="text-xl font-semibold text-purple-400">Alura</h3>
            </div>
            <div className="space-y-3">
              {aluraCoursesData.map((course, index) => (
                <div key={index} className="p-4 rounded-xl bg-zinc-900/40 border border-white/10 hover:bg-zinc-800/40 transition-colors">
                  <h4 className="font-medium text-sm">{renderCourseTitle(course.title)}</h4>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-zinc-500">{course.date}</span>
                    <Badge variant="outline" className="text-[10px] h-5 px-2 bg-green-500/10 text-green-400 border-green-500/20">
                      Concluído
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
