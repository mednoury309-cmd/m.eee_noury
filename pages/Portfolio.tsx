import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const projects = [
    { title: "E-Commerce Dashboard", cat: "React App", img: "https://picsum.photos/800/600?random=1" },
    { title: "Travel Agency", cat: "Web Design", img: "https://picsum.photos/800/600?random=2" },
    { title: "Finance Tracker", cat: "Mobile App", img: "https://picsum.photos/800/600?random=3" },
    { title: "AI Generator", cat: "SaaS Platform", img: "https://picsum.photos/800/600?random=4" },
    { title: "Restaurant Landing", cat: "Frontend", img: "https://picsum.photos/800/600?random=5" },
    { title: "Crypto Wallet", cat: "Web3", img: "https://picsum.photos/800/600?random=6" },
  ];

  return (
    <div className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-7xl font-black text-dark mb-4 tracking-tighter">PORTFOLIO</h1>
        <p className="text-brand text-xl mb-12 font-medium">SELECTED WORKS 2023-2024</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-5 shadow-xl aspect-[4/3] border border-gray-100">
                <div className="absolute inset-0 bg-brand/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 gap-4 backdrop-blur-sm">
                  <div className="bg-white text-brand p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:scale-110 shadow-lg">
                    <ExternalLink />
                  </div>
                   <div className="bg-accent text-white p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 hover:scale-110 shadow-lg">
                    <Github />
                  </div>
                </div>
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" />
              </div>
              <div className="flex justify-between items-start">
                  <div>
                      <h3 className="text-xl font-bold text-dark group-hover:text-brand transition-colors">{p.title}</h3>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">{p.cat}</p>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};