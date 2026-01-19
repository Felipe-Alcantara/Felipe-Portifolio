import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Menu, Search, Rocket, Music, Code, ExternalLink, Mail, BookOpen, Sparkles, ArrowRight } from "lucide-react";

/**
 * Preview note:
 * Para rodar como arquivo único aqui no preview, substituí os componentes do shadcn/ui
 * (Card, Button, Input, Badge) por implementações simples abaixo, estilizadas com Tailwind.
 * No seu projeto real, você pode manter os imports de "@/components/ui/*" normalmente.
 */

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

// ---------------- UI LITE ----------------
function Button({ asChild, variant = "default", size = "md", className = "", children, ...props }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium transition shadow-sm border";
  const variants = {
    default: "bg-white text-black border-white/10 hover:bg-zinc-100",
    outline: "bg-transparent text-white border-white/20 hover:bg-white/5",
    ghost: "bg-transparent text-white border-transparent hover:bg-white/5",
    secondary: "bg-zinc-800 text-white border-white/10 hover:bg-zinc-700",
  };
  const sizes = {
    md: "h-10",
    sm: "h-9 px-3",
    icon: "h-10 w-10 p-0",
  };
  const cls = cx(base, variants[variant] || variants.default, sizes[size] || sizes.md, className);

  // Se for asChild e a criança for elemento válido, clonamos e injetamos classes
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, { className: cx(children.props.className || "", cls), ...props });
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}

function Input({ className = "", ...props }) {
  return (
    <input
      className={cx(
        "w-full h-10 rounded-xl bg-zinc-800/50 border border-white/10 px-3 text-sm text-white outline-none focus:ring-0",
        className
      )}
      {...props}
    />
  );
}

function Badge({ className = "", children, ...props }) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border border-white/10",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

function Card({ className = "", children }) {
  return <div className={cx("rounded-3xl border bg-zinc-900/50 border-white/10", className)}>{children}</div>;
}
function CardHeader({ className = "", children }) {
  return <div className={cx("p-5 border-b border-white/5", className)}>{children}</div>;
}
function CardContent({ className = "", children }) {
  return <div className={cx("p-5", className)}>{children}</div>;
}
function CardFooter({ className = "", children }) {
  return <div className={cx("p-5 border-t border-white/5 flex items-center gap-3", className)}>{children}</div>;
}
function CardTitle({ className = "", children }) {
  return <div className={cx("text-base font-semibold", className)}>{children}</div>;
}
function CardDescription({ className = "", children }) {
  return <div className={cx("text-xs text-zinc-400", className)}>{children}</div>;
}
// -------------- FIM UI LITE --------------

// --------------------
// Demo data (troque livremente)
// --------------------
const items = [
  {
    title: "Landing FelixoVerse",
    tag: "web",
    desc: "Hero, navbar e carrossel contínuo.",
    link: "https://example.com/landing",
    icon: <Rocket size={16} />,
  },
  {
    title: "Mixer de Samples",
    tag: "music",
    desc: "Ferramenta para combinar loops no navegador.",
    link: "https://example.com/mixer",
    icon: <Music size={16} />,
  },
  {
    title: "Bots & Automação",
    tag: "code",
    desc: "Coleção de scripts Python úteis.",
    link: "https://example.com/bots",
    icon: <Code size={16} />,
  },
  {
    title: "ARG Blocks",
    tag: "game",
    desc: "Blocos base para puzzles criptográficos.",
    link: "https://example.com/arg",
    icon: <Rocket size={16} />,
  },
  {
    title: "Thumbnails DJ",
    tag: "design",
    desc: "Presets de capa no estilo neon/pastel.",
    link: "https://example.com/dj",
    icon: <Music size={16} />,
  },
];

const tags = [
  { id: "all", label: "Tudo" },
  { id: "web", label: "Web" },
  { id: "code", label: "Code" },
  { id: "music", label: "Music" },
  { id: "design", label: "Design" },
  { id: "game", label: "Game" },
];

// Duplicar a lista para o loop infinito do carrossel
const loop = (arr) => [...arr, ...arr, ...arr];

export default function App() {
  const [q, setQ] = useState("");
  const [activeTag, setActiveTag] = useState("all");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return items.filter((it) => {
      const byTag = activeTag === "all" || it.tag === activeTag;
      const byQuery =
        !query ||
        it.title.toLowerCase().includes(query) ||
        it.desc.toLowerCase().includes(query) ||
        it.tag.toLowerCase().includes(query);
      return byTag && byQuery;
    });
  }, [q, activeTag]);

  const marquee = loop(filtered.length ? filtered : items);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-zinc-50 selection:bg-cyan-500/40">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60 border-b border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu />
          </Button>
          <a href="#sobre" className="text-lg font-semibold tracking-tight">FelixoVerse</a>
          <nav className="ml-auto hidden md:flex items-center gap-6 text-sm">
            <a href="#sobre" className="opacity-80 hover:opacity-100">Sobre</a>
            <a href="#portfolio" className="opacity-80 hover:opacity-100">Portfólio</a>
            <a href="#projetos" className="opacity-80 hover:opacity-100">Projetos</a>
            <a href="#blog" className="opacity-80 hover:opacity-100">Blog</a>
            <a href="#felixoverse" className="opacity-80 hover:opacity-100">FelixoVerse</a>
            <a href="#contato" className="opacity-80 hover:opacity-100">Contato</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="sobre" className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Código, Música e Comunidade.</h1>
          <p className="mt-4 text-zinc-300">
            Um hub criativo que conecta desenvolvimento web, produção musical e projetos colaborativos. Bora construir algo incrível hoje.
          </p>
          <div className="mt-6 flex gap-3">
            <Button asChild>
              <a href="#portfolio" className="inline-flex items-center gap-2">
                <Rocket size={18} /> Ver Portfólio
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contato" className="inline-flex items-center gap-2">
                <Mail size={18} /> Falar comigo
              </a>
            </Button>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 p-6 bg-gradient-to-br from-zinc-800/50 to-zinc-900/30 shadow-2xl">
          <div className="text-sm text-zinc-300">Busca rápida</div>
          <div className="mt-3 flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2" size={16} />
              <Input
                className="pl-9 bg-zinc-800/50 border-white/10 focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="Pesquisar cards, tags, descrições…"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
            </div>
            <div className="hidden md:flex gap-2">
              {tags.map((t) => (
                <Badge
                  key={t.id}
                  onClick={() => setActiveTag(t.id)}
                  className={
                    "cursor-pointer transition " +
                    (activeTag === t.id ? "bg-white text-black" : "bg-zinc-800 hover:bg-zinc-700")
                  }
                >
                  {t.label}
                </Badge>
              ))}
            </div>
          </div>
          <div className="mt-2 md:hidden flex gap-2 flex-wrap">
            {tags.map((t) => (
              <Badge
                key={t.id}
                onClick={() => setActiveTag(t.id)}
                className={
                  "cursor-pointer transition " +
                  (activeTag === t.id ? "bg-white text-black" : "bg-zinc-800 hover:bg-zinc-700")
                }
              >
                {t.label}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFÓLIO – Carrossel contínuo e arrastável */}
      <section id="portfolio" className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold">Portfólio</h2>
              <p className="text-zinc-400">Cards passando lado a lado, com loop e drag.</p>
            </div>
            <Button variant="outline" asChild>
              <a href="#projetos">Ver Projetos</a>
            </Button>
          </div>

          <div className="mt-6 overflow-hidden">
            <motion.div
              className="flex gap-4"
              drag="x"
              dragConstraints={{ left: -400, right: 0 }}
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            >
              {marquee.map((it, idx) => (
                <PortfolioCard key={`${it.title}-${idx}`} item={it} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJETOS – grade simples */}
      <section id="projetos" className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold">Projetos</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.slice(0, 6).map((it, i) => (
              <Card key={i} className="bg-zinc-900/50 border-white/10">
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
                    <a href={it.link} className="inline-flex items-center gap-1">
                      Abrir <ExternalLink size={16} />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG – placeholders */}
      <section id="blog" className="border-t border-white/5 bg-zinc-900/5">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 text-purple-400">
                <div className="p-2 rounded-lg bg-purple-500/10">
                  <BookOpen size={24} />
                </div>
                <span className="font-semibold tracking-wide uppercase text-sm">Em Breve</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Blog & Conhecimento
              </h2>
              
              <p className="text-lg text-zinc-300 leading-relaxed">
                Estou preparando um ambiente dedicado ao ensino e à informação. 
                Este blog será o canal oficial para tutoriais, novidades e 
                aprofundamento técnico.
              </p>

              <div className="pt-2">
                <Button asChild>
                  <a href="/blog" className="inline-flex items-center gap-2">
                    Acessar o Blog <ArrowRight size={18} />
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-zinc-950 border border-white/10 rounded-3xl p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-zinc-900 border border-white/5 text-purple-400">
                    <Sparkles size={20} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">O que vem por aí?</h3>
                    <p className="text-zinc-400 leading-relaxed">
                      Vou utilizar este espaço para <strong>ensinar programação</strong> de forma descomplicada, 
                      postar <strong>informações e atualizações</strong> sobre o desenvolvimento do <em>FelixoVerse</em> e seus <strong>ARGs</strong>, 
                      e comentar <strong>notícias</strong> relevantes do mundo da tecnologia. 
                      A ideia é criar um repositório vivo de aprendizado e colaboração.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FELIXOVERSE – CTA */}
      <section id="felixoverse" className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold">O Hub FelixoVerse</h2>
            <p className="mt-2 text-zinc-300">
              Comunidade, e-sports, música e projetos indie. Quer participar, apoiar ou colaborar? Vem comigo.
            </p>
            <div className="mt-5 flex gap-3">
              <Button asChild>
                <a href="#contato">Entrar em contato</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#portfolio">Ver o que já existe</a>
              </Button>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 p-6 bg-zinc-900/40">
            <div className="text-sm text-zinc-400">Roadmap snapshot</div>
            <ol className="mt-3 space-y-2 text-sm">
              <li>1. Publicar landing responsiva</li>
              <li>2. Conectar blog (MDX ou Notion API)</li>
              <li>3. Criar microsserviço de músicas (pré‑escuta)</li>
              <li>4. Páginas dos torneios e rankings</li>
              <li>5. MVP do ARG (capítulo 1)</li>
            </ol>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold">Contato</h2>
          <p className="mt-2 text-zinc-300">Me chama para colaborar, dar feedback ou enviar ideias.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild>
              <a href="mailto:felixoverse@example.com" className="inline-flex items-center gap-2">
                <Mail size={18} /> Email
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="https://example.com" className="inline-flex items-center gap-2">
                <ExternalLink size={18} /> Site
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 text-center py-10 text-sm text-zinc-400">
        © {new Date().getFullYear()} Felipe Martin — construído ao vivo.
      </footer>
    </div>
  );
}

function PortfolioCard({ item }) {
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
