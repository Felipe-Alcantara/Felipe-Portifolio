import React from "react";
import { GraduationCap } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { BackgroundParticles } from "../components/ui/background-particles";
import ugbLogo from '../assets/images/ugb.webp';
import { FaYoutube } from 'react-icons/fa';

// Helper para colorir nomes de tecnologias nos títulos dos cursos
const renderCourseTitle = (title) => {
  const parts = title.split(/(Python 3|Python|TypeScript|JavaScript|HTML5|HTML|CSS3)/g);
  return parts.map((part, index) => {
    switch (part) {
      case "Python 3":
      case "Python":
        return <span key={index} className="text-[#3776AB] font-semibold">{part}</span>;
      case "TypeScript":
        return <span key={index} className="text-[#3178C6] font-semibold">{part}</span>;
      case "JavaScript":
        return <span key={index} className="text-[#F7DF1E] font-semibold">{part}</span>;
      case "HTML5":
      case "HTML":
        return <span key={index} className="text-[#E34F26] font-semibold">{part}</span>;
      case "CSS3":
        return <span key={index} className="text-[#1572B6] font-semibold">{part}</span>;
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
  description: "O curso de Sistemas de Informação forma profissionais aptos a atuar na concepção, desenvolvimento, implantação e gestão de sistemas de informação. Abrangendo desde a administração do fluxo de dados em redes de computadores até a evolução de sistemas complexos para otimização de processos organizacionais, a formação aprofunda-se em infraestrutura de TI, engenharia de software, gestão de projetos, segurança da informação e análise de dados, preparando o estudante para os desafios do mercado tecnológico.",
  logo: ugbLogo
};

const freeCoursesData = [
  {
    title: "Curso de HTML5 e CSS3",
    institution: "Curso em Vídeo",
    date: "2024",
    description: "O curso ensina a criar sites usando as três linguagens fundamentais da web: HTML5 para estrutura, CSS3 para estilos e JavaScript para interatividade."
  },
  {
    title: "Curso de Python 3",
    institution: "Curso em Vídeo",
    date: "2024",
    description: "Dividido em 'Mundos', o curso cobre desde os fundamentos da linguagem Python até estruturas de controle, de dados e funções."
  }
];

const aluraCoursesData = [
    {
      title: "Lógica de programação: mergulhe em programação com JavaScript",
      date: "fev., 2025",
    },
    {
      title: "JavaScript e HTML: desenvolva um jogo e pratique lógica de programação",
      date: "fev., 2025",
    },
    {
      title: "Lógica de programação: praticando com desafios",
      date: "fev., 2025",
    },
    {
      title: "Lógica de programação: explore funções e listas",
      date: "jan., 2025",
    },
    {
      title: "Viabilidade de Projetos & Negócios: fluxo de caixa, juros, VPL, TIR e payback",
      date: "abr., 2024",
    },
    {
      title: "Python: crie a sua primeira aplicação",
      date: "abr., 2024",
    }
];


// --- COMPONENTE PRINCIPAL ---

export function ExtrasSection() {
  return (
    <section id="extras" className="relative border-t border-white/5 overflow-hidden">
      <BackgroundParticles />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-gradient-glow-amethyst">Formação & Certificações</h2>
        
        <div className="grid md:grid-cols-4 gap-10">

          {/* Coluna 1: Graduação Acadêmica */}
          <div className="flex flex-col space-y-6 col-span-1">
            <div className="flex items-center gap-3">
              <img src={academicData.logo} alt="Logo UGB" className="h-8 w-8 object-contain" />
              <h3 className="text-xl font-semibold text-purple-400">Graduação Acadêmica</h3>
            </div>
            <div className="flex-1 flex flex-col p-9 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-4 hover:ring-2 hover:ring-offset-2 hover:ring-offset-background hover:ring-purple-500 transition-all animate-tech-glow">
              <div>
                <h4 className="font-bold text-lg">{academicData.course}</h4>
                <p className="text-[#1E6BB8] font-semibold text-sm">{academicData.institution}</p>
                <Badge variant="secondary" className="mt-2 text-xs">{academicData.date}</Badge>
              </div>
              <p className="flex-1 text-xs text-zinc-300 border-t border-white/10 pt-4">
                {academicData.description}
              </p>
            </div>
          </div>

          {/* Coluna 2: Cursos Gratuitos */}
          <div className="flex flex-col space-y-6 col-span-1">
            <div className="flex items-center gap-3">
              <FaYoutube className="text-red-600 h-8 w-8" />
              <h3 className="text-xl font-semibold text-purple-400">Cursos da Web Gratuitos</h3>
            </div>
            <div className="flex-1 grid grid-rows-2 gap-4">
              {freeCoursesData.map((course, index) => (
                <div key={index} className="p-8 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-3 hover:ring-2 hover:ring-offset-2 hover:ring-offset-background hover:ring-purple-500 transition-all animate-tech-glow">
                  <h4 className="font-bold">{renderCourseTitle(course.title)}</h4>
                  <p className="text-zinc-400 text-sm">{course.institution}</p>
                  <p className="text-xs text-zinc-300 border-t border-white/10 pt-3 line-clamp-4">{course.description}</p>
                  <Badge variant="secondary" className="text-xs">{course.date}</Badge>
                </div>
              ))}
            </div>
          </div>

                              {/* Coluna 3: Alura */}

                              <div className="flex flex-col space-y-6 col-span-2">

                      <div className="flex items-center gap-3 justify-center">

                          <img src="https://www.alura.com.br/assets/img/alura-logo.svg" alt="Logo Alura" className="h-7 w-auto" />

                      </div>

                                  <div className="flex-1 space-y-4">

                                    {aluraCoursesData.map((course, index) => (

                                      <div key={index} className="p-4 rounded-2xl bg-zinc-900/60 border border-white/10 hover:ring-2 hover:ring-offset-2 hover:ring-offset-background hover:ring-purple-500 transition-all flex flex-col animate-tech-glow">
                  <h4 className="font-medium text-sm">{renderCourseTitle(course.title)}</h4>
                  <div className="flex justify-between items-end mt-auto pt-2 gap-4">
                    <Badge variant="secondary" className="text-[10px] h-5 px-2">{course.date}</Badge>
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
