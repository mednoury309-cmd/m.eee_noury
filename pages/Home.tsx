import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, User, Briefcase, Mail, PenTool } from 'lucide-react';

export const Home: React.FC = () => {
  const links = [
    { title: 'About Me', to: '/about', icon: <User />, desc: 'Biography & Skills' },
    { title: 'Portfolio', to: '/portfolio', icon: <Briefcase />, desc: 'Selected Works' },
    { title: 'Services', to: '/services', icon: <Code2 />, desc: 'What I Offer' },
    { title: 'Blog', to: '/blog', icon: <PenTool />, desc: 'Insights' },
    { title: 'Contact', to: '/contact', icon: <Mail />, desc: 'Get in Touch' },
  ];

  return (
    <main className="min-h-[calc(100vh-80px)] flex flex-col justify-center px-6 py-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto w-full z-10">
        <div className="mb-20">
          <h2 className="text-brand font-bold tracking-[0.2em] mb-4 uppercase text-sm">Frontend Engineer & Creative Developer</h2>
          <h1 className="text-5xl md:text-8xl font-black text-dark mb-6 tracking-tighter leading-none">
            CRAFTING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-accent">DIGITAL REALITY</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed border-l-4 border-accent pl-6">
            I build responsive, high-performance web applications with a focus on modern aesthetics and robust engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link) => (
            <Link 
              key={link.title} 
              to={link.to}
              className="group glass p-8 rounded-2xl hover:bg-white hover:border-brand/30 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden shadow-lg hover:shadow-2xl"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-brand transform scale-150 group-hover:scale-125 duration-500">
                {React.cloneElement(link.icon as React.ReactElement, { size: 64 })}
              </div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-brand/10 text-brand rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-colors border border-brand/10">
                  {link.icon}
                </div>
                <h3 className="text-2xl font-bold text-dark mb-1 group-hover:text-brand transition-colors">{link.title}</h3>
                <p className="text-gray-600 text-sm mb-6">{link.desc}</p>
                <div className="flex items-center gap-2 text-brand font-bold text-xs uppercase tracking-wider group-hover:text-accent transition-colors">
                  Explore <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};