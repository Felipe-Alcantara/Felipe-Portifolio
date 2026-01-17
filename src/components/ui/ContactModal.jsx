import React from 'react';
import { Button } from './button';
import { X } from 'lucide-react';
import { FaWhatsapp, FaTwitter, FaDiscord, FaLinkedin } from "react-icons/fa";
import { Mail } from 'lucide-react';

export function ContactModal({ isOpen, onClose, message, contactInfo }) {
  if (!isOpen) {
    return null;
  }

  const encodedMessage = encodeURIComponent(message);

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedMessage}&via=Felixo_Tech`;
  const whatsappUrl = `https://wa.me/5524998545803?text=${encodedMessage}`;
  const emailUrl = `mailto:FelipeTheFeh@gmail.com?subject=Contato%20pelo%20Portfólio&body=${encodedMessage}%0A%0AContato:%20${encodeURIComponent(contactInfo)}`;


  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div 
        className="relative border border-purple-500/30 rounded-2xl w-11/12 max-w-md p-6 shadow-2xl shadow-purple-500/30 felixo-card-glow"
        onClick={(e) => e.stopPropagation()}
        style={{ backgroundColor: '#101010' }}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors">
          <X size={20} />
        </button>
        
        <h3 className="text-xl font-bold text-center mb-6 text-white glowing-text">Selecione o método de envio</h3>

        <div className="grid grid-cols-1 gap-4">
          <Button asChild variant="outline" className="justify-start gap-3 text-lg py-6 border-white/10 hover:bg-red-500/20 hover:border-red-500/50 hover:text-white">
            <a href={emailUrl} target="_blank" rel="noopener noreferrer">
              <Mail className="text-red-400" size={24} /> Email
            </a>
          </Button>

          <Button asChild variant="outline" className="justify-start gap-3 text-lg py-6 border-white/10 hover:bg-green-500/20 hover:border-green-500/50 hover:text-white">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-green-400" size={24} /> WhatsApp
            </a>
          </Button>

          <Button asChild variant="outline" className="justify-start gap-3 text-lg py-6 border-white/10 hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-white">
            <a href="https://linkedin.com/in/felipealcantaramartins" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-400" size={24} /> LinkedIn
            </a>
          </Button>

          <Button asChild variant="outline" className="justify-start gap-3 text-lg py-6 border-white/10 hover:bg-indigo-500/20 hover:border-indigo-500/50 hover:text-white">
            <a href="http://discord.gg/DmW9tHcGpV" target="_blank" rel="noopener noreferrer">
              <FaDiscord className="text-indigo-400" size={24} /> Discord
            </a>
          </Button>

          <Button asChild variant="outline" className="justify-start gap-3 text-lg py-6 border-white/10 hover:bg-sky-500/20 hover:border-sky-500/50 hover:text-white">
            <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-sky-400" size={24} /> Twitter (Tweet)
            </a>
          </Button>
          
          <Button variant="outline" disabled className="justify-start gap-3 text-lg py-6 border-white/10 text-zinc-500">
            <Mail size={24} /> Mensagem Interna (em breve)
          </Button>
        </div>
      </div>
    </div>
  );
}
