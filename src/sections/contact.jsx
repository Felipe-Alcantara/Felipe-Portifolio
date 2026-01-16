import React from "react";
import { Mail, Github, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export function ContactSection() {
  return (
    <section id="contato" className="border-t border-white/5">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <h2 className="text-3xl font-bold text-center mb-8 glowing-spinning-text">Entre em contato</h2>
        
        <div className="flex justify-center gap-6 mb-12">
           <a href="mailto:seuemail@exemplo.com" className="flex items-center gap-2 text-zinc-400 hover:text-purple-400 transition-colors">
              <Mail size={20} />
              <span className="glowing-spinning-text">seuemail@exemplo.com</span>
           </a>
           <a href="https://github.com/SeuUsuario" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-purple-400 transition-colors">
              <Github size={20} />
              <span className="glowing-spinning-text">GitHub</span>
           </a>
        </div>

        <div className="bg-zinc-950/50 border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl">
           <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm text-zinc-400 mb-2">Nome / E-mail</label>
                <Input placeholder="Digite seu nome ou e-mail..." />
              </div>
              
              <div>
                <label className="block text-sm text-zinc-400 mb-2">Mensagem</label>
                <textarea 
                  className="w-full min-h-[120px] rounded-xl bg-zinc-800/50 border border-white/10 p-3 text-sm text-white outline-none focus:ring-1 focus:ring-purple-600/50 resize-y"
                  placeholder="Digite sua mensagem..."
                ></textarea>
              </div>

              <div className="pt-2">
                <Button className="w-full md:w-auto" type="submit">
                  <Send size={16} className="mr-2" />
                  Enviar mensagem
                </Button>
              </div>
           </form>
        </div>
      </div>
    </section>
  );
}
