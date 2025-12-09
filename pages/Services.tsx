import React from 'react';
import { Check } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    { title: "Web Development", price: "$1,000+", features: ["React / Next.js", "Responsive Design", "SEO Optimized", "CMS Integration"] },
    { title: "UI/UX Design", price: "$800+", features: ["Figma Prototypes", "User Research", "Wireframing", "Design Systems"] },
    { title: "Performance", price: "$500+", features: ["Speed Optimization", "Core Web Vitals", "Code Audit", "Server Tuning"] },
  ];

  return (
    <div className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl md:text-7xl font-black text-dark mb-12 text-center tracking-tighter">SERVICES</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
             <div key={i} className="glass bg-white p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 flex flex-col border border-gray-200 hover:border-brand/30 relative group shadow-lg hover:shadow-2xl">
               {/* Glow effect on hover */}
               <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"></div>
               
               <h3 className="text-2xl font-bold text-dark mb-2">{s.title}</h3>
               <p className="text-brand font-black text-3xl mb-8">{s.price}</p>
               <ul className="space-y-4 mb-8 flex-1">
                 {s.features.map(f => (
                   <li key={f} className="text-gray-600 text-sm flex items-center gap-3">
                     <Check size={16} className="text-accent" />
                     {f}
                   </li>
                 ))}
               </ul>
               <button className="w-full py-3 rounded-xl border-2 border-brand text-brand font-bold hover:bg-brand hover:text-white transition-all duration-300">
                 Inquire Now
               </button>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};