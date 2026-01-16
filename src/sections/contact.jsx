import React from "react";
import { Mail, Github, Send } from "lucide-react";
import { FaWhatsapp, FaTwitter, FaDiscord } from "react-icons/fa";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import Particles from "../components/ui/particles";

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

        <div 
          className="relative bg-zinc-950/50 border border-white/10 rounded-3xl p-6 md:p-8 
                     shadow-2xl shadow-purple-500/20 
                     transition-all duration-300 hover:border-purple-400/50 hover:shadow-purple-500/40"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
           <form 
             className="space-y-4" 
             action="mailto:FelipeTheFeh@Gmail.com" 
             method="POST" 
             encType="text/plain"
           >
              <div>
                <label className="block text-sm text-zinc-400 mb-2">Nome / E-mail</label>
                <Input name="contact_info" placeholder="Digite seu nome ou e-mail..." className="input-glowing-border" />
              </div>
              
              <div>
                <label className="block text-sm text-zinc-400 mb-2">Mensagem</label>
                <textarea 
                  name="message"
                  className="w-full min-h-[120px] rounded-xl bg-zinc-800/50 border border-white/10 p-3 text-sm text-white outline-none focus:ring-1 focus:ring-purple-600/50 resize-y input-glowing-border"
                  placeholder="Digite sua mensagem..."
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col md:flex-row items-center justify-between gap-6">
                <Button variant="outline" asChild className="w-full md:w-auto relative group overflow-hidden border-white/30 bg-white/5 text-white shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:bg-white/10 felixo-card-glow-white transition-all duration-300" type="submit">
                  <a href="mailto:FelipeTheFeh@Gmail.com" className="inline-flex items-center gap-2">
                    {/* Brilho passando (Shimmer) */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-[150%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent z-0" />
                    <Particles variant="white" />
                    <Mail size={18} className="relative z-10 mr-2" />
                    <span className="relative z-10">Enviar mensagem</span>
                  </a>
                </Button>

                <div className="flex items-center gap-4">
                    <a href="https://wa.me/24998545803" target="_blank" rel="noreferrer" className="group p-2 rounded-xl bg-black/20 border border-white/5 hover:border-white/20 hover:scale-125 hover:z-50 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all duration-200 flex items-center justify-center text-[#25D366]" title="WhatsApp">
                        <FaWhatsapp size={24} />
                    </a>
                    
                    <a href="https://x.com/Felixo_Tech" target="_blank" rel="noreferrer" className="group p-2 rounded-xl bg-black/20 border border-white/5 hover:border-white/20 hover:scale-125 hover:z-50 hover:shadow-[0_0_30px_rgba(29,161,242,0.4)] transition-all duration-200 flex items-center justify-center text-[#1DA1F2]" title="Twitter">
                        <FaTwitter size={24} />
                    </a>
                    
                    <a href="mailto:FelipeTheFeh@Gmail.com" className="group p-2 rounded-xl bg-black/20 border border-white/5 hover:border-white/20 hover:scale-125 hover:z-50 hover:shadow-[0_0_30px_rgba(248,113,113,0.4)] transition-all duration-200 flex items-center justify-center text-red-400" title="Email">
                        <Mail size={24} />
                    </a>
                    
                    <a href="http://discord.gg/DmW9tHcGpV" target="_blank" rel="noreferrer" className="group p-2 rounded-xl bg-black/20 border border-white/5 hover:border-white/20 hover:scale-125 hover:z-50 hover:shadow-[0_0_30px_rgba(88,101,242,0.4)] transition-all duration-200 flex items-center justify-center text-[#5865F2]" title="Discord">
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
