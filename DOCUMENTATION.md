# 📚 Documentação do Portfólio FelixoVerse

> Guia completo para personalizar, modificar e adicionar conteúdo ao seu portfólio

---

## 📁 Estrutura de Pastas

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes visuais básicos (Button, Card, Input)
│   ├── layout/         # Estrutura da página (Navbar, Footer)
│   └── parts/          # Componentes específicos (PortfolioCard)
├── data/               # Dados estáticos do site
│   └── projects.jsx    # ⭐ AQUI você adiciona seus projetos
├── lib/                # Funções utilitárias
│   └── utils.js
├── sections/           # Seções da landing page
│   ├── hero.jsx
│   ├── portfolio.jsx
│   ├── projects.jsx
│   ├── blog.jsx
│   ├── felixoverse.jsx
│   └── contact.jsx
├── App.jsx            # Componente principal que monta tudo
├── main.jsx           # Ponto de entrada do React
└── index.css          # Estilos globais (Tailwind)
```

---

## 🎨 Como Personalizar

### 1️⃣ Adicionar um Novo Projeto

**Arquivo:** `src/data/projects.jsx`

```jsx
{
  title: "Nome do Seu Projeto",        // Título que aparece no card
  tag: "web",                          // Categoria (web, music, code, game, design)
  desc: "Descrição curta do projeto.", // Texto descritivo
  link: "https://seusite.com",         // Link para o projeto
  icon: <Rocket size={16} />,          // Ícone (importar do lucide-react)
}
```

**Ícones disponíveis:** Veja todos em [lucide.dev/icons](https://lucide.dev/icons)

**Exemplo prático:**
```jsx
import { Globe } from "lucide-react"; // Adicionar no topo do arquivo

export const items = [
  // ... projetos existentes
  {
    title: "Meu Novo Site",
    tag: "web",
    desc: "Site pessoal criado com React",
    link: "https://meusite.com",
    icon: <Globe size={16} />,
  },
];
```

---

### 2️⃣ Adicionar uma Nova Categoria/Tag

**Arquivo:** `src/data/projects.jsx`

**Passo 1:** Adicione a nova tag na lista:
```jsx
export const tags = [
  { id: "all", label: "Tudo" },
  { id: "web", label: "Web" },
  // ... outras tags
  { id: "video", label: "Vídeos" }, // Nova categoria
];
```

**Passo 2:** Use o mesmo `id` nos projetos:
```jsx
{
  title: "Meu Canal",
  tag: "video", // Deve corresponder ao id da tag
  desc: "Canal de tutoriais no YouTube",
  // ...
}
```

---

### 3️⃣ Modificar o Estilo dos Cards

**Arquivo:** `src/components/ui/card.jsx`

#### Alterar cor de fundo:
```jsx
// Linha 4 - Função Card
className={cx("rounded-3xl border bg-zinc-900/50 border-white/10", className)}
//                                  ↑ Mude aqui
// Exemplos: bg-slate-800, bg-black, bg-gradient-to-br from-purple-900 to-pink-900
```

#### Alterar bordas/cantos:
```jsx
rounded-3xl  // Cantos muito arredondados
rounded-xl   // Cantos médios
rounded-lg   // Cantos pequenos
rounded-none // Sem cantos arredondados
```

#### Alterar padding interno:
```jsx
// CardContent (linha 12)
className={cx("p-5", className)}
//            ↑ Mude para p-3 (menor) ou p-8 (maior)
```

---

### 4️⃣ Customizar o Layout dos Cards

**Arquivo:** `src/sections/projects.jsx`

#### Alterar número de colunas:
```jsx
// Linha 8
<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//                            ↑              ↑
//                      Tablet (2 cols)  Desktop (3 cols)
// Para 4 colunas no desktop: lg:grid-cols-4
// Para 2 colunas sempre: grid-cols-2
```

#### Alterar espaçamento entre cards:
```jsx
gap-5  // Espaçamento médio
gap-3  // Menor
gap-8  // Maior
```

---

### 5️⃣ Modificar o Menu de Navegação

**Arquivo:** `src/components/layout/navbar.jsx`

```jsx
<nav className="ml-auto hidden md:flex items-center gap-6 text-sm">
  <a href="#sobre" className="opacity-80 hover:opacity-100">Sobre</a>
  {/* Adicione novos links aqui */}
  <a href="#nova-secao" className="opacity-80 hover:opacity-100">Nova Seção</a>
</nav>
```

---

### 6️⃣ Mudar Cores do Site

**Arquivo:** `src/App.jsx` (linha 34)

```jsx
<div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black ...">
//                              ↑                    ↑              ↑
//                          Cor topo            Cor meio        Cor fundo
```

**Paletas de exemplo:**
```jsx
// Azul escuro
from-blue-950 via-slate-900 to-black

// Roxo/Rosa
from-purple-950 via-fuchsia-900 to-black

// Verde escuro
from-emerald-950 via-zinc-900 to-black
```

---

### 7️⃣ Adicionar uma Nova Seção

**Exemplo:** Criar seção "Depoimentos"

**Passo 1:** Criar arquivo `src/sections/testimonials.jsx`
```jsx
import React from "react";

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold">Depoimentos</h2>
        <p className="mt-2 text-zinc-400">O que as pessoas dizem...</p>
        {/* Seu conteúdo aqui */}
      </div>
    </section>
  );
}
```

**Passo 2:** Importar e adicionar em `src/App.jsx`
```jsx
// No topo
import { TestimonialsSection } from "./sections/testimonials";

// Dentro do return, na ordem desejada
<ProjectsSection items={filtered} />
<TestimonialsSection />  {/* Nova seção */}
<BlogSection />
```

---

### 8️⃣ Personalizar Animações do Carrossel

**Arquivo:** `src/sections/portfolio.jsx`

```jsx
transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
//                                         ↑
//                                 Velocidade em segundos
//                                 Menor = mais rápido
```

**Desabilitar animação automática:**
```jsx
// Remova a prop animate:
<motion.div
  className="flex gap-4"
  drag="x"
  dragConstraints={{ left: -400, right: 0 }}
  // animate={{ x: ["0%", "-50%"] }}  // ← Comente esta linha
>
```

---

### 9️⃣ Modificar Informações de Contato

**Arquivo:** `src/sections/contact.jsx`

```jsx
<Button asChild>
  <a href="mailto:SEU_EMAIL@example.com" className="inline-flex items-center gap-2">
    <Mail size={18} /> Email
  </a>
</Button>
<Button variant="secondary" asChild>
  <a href="https://SEU_SITE.com" className="inline-flex items-center gap-2">
    <ExternalLink size={18} /> Site
  </a>
</Button>
```

---

### 🔟 Alterar Textos da Hero Section

**Arquivo:** `src/sections/hero.jsx`

```jsx
<h1 className="text-4xl md:text-5xl font-bold leading-tight">
  Seu Novo Título Aqui
</h1>
<p className="mt-4 text-zinc-300">
  Sua nova descrição personalizada.
</p>
```

---

## 🎯 Componentes UI Básicos

### Button (Botão)

**Arquivo:** `src/components/ui/button.jsx`

**Variantes disponíveis:**
```jsx
<Button variant="default">Padrão (branco)</Button>
<Button variant="outline">Com borda</Button>
<Button variant="ghost">Transparente</Button>
<Button variant="secondary">Secundário (cinza)</Button>
```

**Tamanhos:**
```jsx
<Button size="sm">Pequeno</Button>
<Button size="md">Médio (padrão)</Button>
<Button size="icon">Apenas ícone</Button>
```

**Como link:**
```jsx
<Button asChild>
  <a href="/destino">Clique aqui</a>
</Button>
```

---

### Card (Cartão)

**Arquivo:** `src/components/ui/card.jsx`

**Estrutura completa:**
```jsx
<Card>
  <CardHeader>
    <CardTitle>Título do Card</CardTitle>
    <CardDescription>Subtítulo/descrição</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Conteúdo principal aqui</p>
  </CardContent>
  <CardFooter>
    <Button>Ação</Button>
  </CardFooter>
</Card>
```

---

### Input (Campo de texto)

**Arquivo:** `src/components/ui/input.jsx`

```jsx
<Input 
  placeholder="Digite algo..." 
  value={valor}
  onChange={(e) => setValor(e.target.value)}
/>
```

---

### Badge (Etiqueta)

**Arquivo:** `src/components/ui/badge.jsx`

```jsx
<Badge className="bg-blue-500">Tag Azul</Badge>
<Badge className="bg-green-500 text-white">Verde</Badge>
```

---

## 🚀 Comandos Úteis

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Criar build de produção
npm run build

# Visualizar build de produção localmente
npm run preview
```

---

## 📦 Dependências do Projeto

| Biblioteca | Função |
|------------|--------|
| **React** | Framework principal |
| **Vite** | Ferramenta de build rápida |
| **Tailwind CSS** | Framework de estilos utilitários |
| **Framer Motion** | Animações (carrossel) |
| **Lucide React** | Biblioteca de ícones |

---

## 💡 Dicas Rápidas

### ✅ Boas Práticas

1. **Sempre teste após modificar** - Execute `npm run dev` e verifique no navegador
2. **Use nomes descritivos** - Facilita encontrar coisas depois
3. **Mantenha backup** - Faça commits regulares no Git
4. **Comece pequeno** - Modifique uma coisa por vez

### ⚠️ Problemas Comuns

**Erro: "Cannot find module"**
- Verifique se o caminho do import está correto
- Arquivos JSX devem ter extensão `.jsx` se contiverem tags HTML/React

**Cards não aparecem**
- Confira se adicionou vírgula após o último projeto em `projects.jsx`
- Verifique se o objeto tem todos os campos obrigatórios (title, tag, desc, link, icon)

**Estilos não aplicam**
- Classes do Tailwind devem estar completas (não use variáveis em nomes de classe)
- Execute `npm run dev` novamente se modificou arquivos de configuração

---

## 🎓 Recursos para Aprender Mais

- **React:** [react.dev](https://react.dev)
- **Tailwind CSS:** [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Ícones Lucide:** [lucide.dev](https://lucide.dev)
- **Framer Motion:** [framer.com/motion](https://framer.com/motion)

---

## 📞 Estrutura de Arquivos Importantes

| Arquivo | O que faz | Quando modificar |
|---------|-----------|------------------|
| `src/data/projects.jsx` | Lista de projetos | Adicionar/remover projetos |
| `src/App.jsx` | Estrutura da página | Reordenar seções |
| `src/sections/*.jsx` | Conteúdo das seções | Alterar textos/layout |
| `src/components/ui/*.jsx` | Componentes visuais | Mudar estilo dos elementos |
| `tailwind.config.js` | Config do Tailwind | Adicionar cores/fontes personalizadas |
| `package.json` | Dependências | Instalar novas bibliotecas |

---

**✨ Pronto! Agora você tem todas as informações para personalizar seu portfólio.**

**Dúvidas? Consulte os comentários no código ou esta documentação.**
