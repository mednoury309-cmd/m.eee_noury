import React from 'react';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-gray-200 text-dark py-10 mt-auto">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-black tracking-tighter text-brand">NOURY<span className="text-accent">.</span></h2>
          <p className="text-gray-500 text-sm mt-1">© {new Date().getFullYear()} Mohammed Noury. All rights reserved.</p>
        </div>
        
        <div className="flex gap-8">
          {/* Instagram */}
          <a 
            href="https://www.instagram.com/" 
            target="_blank" 
            rel="noreferrer" 
            className="text-gray-400 hover:text-[#E1306C] transition-colors duration-300 transform hover:scale-110" 
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          
          {/* WhatsApp */}
          <a 
            href="https://wa.me/212614095842" 
            target="_blank" 
            rel="noreferrer" 
            className="text-gray-400 hover:text-[#25D366] transition-colors duration-300 transform hover:scale-110" 
            aria-label="WhatsApp"
          >
            <MessageCircle size={24} />
          </a>
          
          {/* LinkedIn */}
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noreferrer" 
            className="text-gray-400 hover:text-[#0A66C2] transition-colors duration-300 transform hover:scale-110" 
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};