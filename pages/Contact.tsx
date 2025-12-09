import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl md:text-7xl font-black text-dark mb-12 text-center tracking-tighter">CONTACT</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 glass bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200">
          <div>
            <h3 className="text-2xl font-bold text-brand mb-6">Let's build something amazing</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center text-brand border border-brand/20">
                  <Mail />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email</p>
                  <p className="font-bold text-dark text-lg">mednoury309@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-5">
                 <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center text-brand border border-brand/20">
                  <Phone />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Phone</p>
                  <p className="font-bold text-dark text-lg">+212 614-095842</p>
                </div>
              </div>

               <div className="flex items-center gap-5">
                 <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center text-brand border border-brand/20">
                  <MapPin />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Location</p>
                  <p className="font-bold text-dark text-lg">Morocco</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
                <input type="text" placeholder="Your Name" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-dark placeholder-gray-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-all" />
            </div>
            <div>
                <input type="email" placeholder="Your Email" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-dark placeholder-gray-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-all" />
            </div>
            <div>
                <textarea rows={4} placeholder="How can I help you?" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-dark placeholder-gray-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand resize-none transition-all"></textarea>
            </div>
            <button className="w-full bg-brand text-white font-bold py-4 rounded-xl hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg shadow-md">
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};