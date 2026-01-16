import React from "react";
import { Mail, Github, Send } from "lucide-react";
import { FaWhatsapp, FaTwitter, FaDiscord } from "react-icons/fa";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export function ContactSection() {
  return (
    <section id="contato" className="border-t border-white/5">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <h2 className="text-3xl font-bold text-center mb-8 glowing-spinning-text">Entre em contato</h2>
        
        <div className="flex justify-center gap-6 mb-12">
           <a href="mailto:FelipeTheFeh@Gmail.com" className="flex items-center gap-2 text-zinc-400 hover:text-purple-400 transition-colors">
              <Mail size={20} />
              <span className="glowing-spinning-text">FelipeTheFeh@Gmail.com</span>
           </a>
           <a href="https://github.com/Felipe-Alcantara" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-purple-400 transition-colors">
              <Github size={20} />
              <span className="glowing-spinning-text">Felipe-Alcantara</span>
           </a>
        </div>

        <div className="bg-zinc-950/50 border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl">
           <form 
             className="space-y-4" 
             action="mailto:FelipeTheFeh@Gmail.com" 
             method="POST" 
             encType="text/plain"
           >
              <div>
                <label className="block text-sm text-zinc-400 mb-2">Nome / E-mail</label>
                <Input name="contact_info" placeholder="Digite seu nome ou e-mail..." />
              </div>
              
              <div>
                <label className="block text-sm text-zinc-400 mb-2">Mensagem</label>
                <textarea 
                  name="message"
                  className="w-full min-h-[120px] rounded-xl bg-zinc-800/50 border border-white/10 p-3 text-sm text-white outline-none focus:ring-1 focus:ring-purple-600/50 resize-y"
                  placeholder="Digite sua mensagem..."
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col md:flex-row items-center justify-between gap-6">
                <Button className="w-full md:w-auto" type="submit">
                  <Send size={16} className="mr-2" />
                  Enviar mensagem
                </Button>

                <div className="flex items-center gap-4">
                    <span className="text-sm text-zinc-500 hidden md:inline-block">Outros canais:</span>
                    
                    <a href="https://wa.me/" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-[#25D366] transition-colors p-2 hover:bg-white/5 rounded-full" title="WhatsApp">
                        <FaWhatsapp size={24} />
                    </a>
                    
                    <a href="https://x.com/Felixo_Tech" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-[#1DA1F2] transition-colors p-2 hover:bg-white/5 rounded-full" title="Twitter">
                        <FaTwitter size={24} />
                    </a>
                    
                    <a href="mailto:FelipeTheFeh@Gmail.com" className="text-zinc-400 hover:text-red-400 transition-colors p-2 hover:bg-white/5 rounded-full" title="Email">
                        <Mail size={24} />
                    </a>
                    
                    <a href="http://discord.gg/DmW9tHcGpV" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-[#5865F2] transition-colors p-2 hover:bg-white/5 rounded-full" title="Discord">
                        <FaDiscord size={24} />
                    </a>
                </div>
              </div>
           </form>
        </div>
      </div>
    </section>
  );
}
