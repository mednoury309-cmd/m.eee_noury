import React from 'react';
import { Terminal, Cpu, Layout, Globe } from 'lucide-react';

export const About: React.FC = () => {
  const skills = [
    { icon: <Layout />, title: "Responsive Design", desc: "Pixel-perfect layouts that work on any device." },
    { icon: <Terminal />, title: "Modern Frameworks", desc: "Expertise in React, Vue, and Next.js ecosystems." },
    { icon: <Cpu />, title: "Performance", desc: "Optimized code for lightning-fast load times." },
    { icon: <Globe />, title: "SEO Friendly", desc: "Structure that search engines love." },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-accent font-bold tracking-widest uppercase mb-2">About Me</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Engineering Digital <br/> Masterpieces
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              My name is <span className="text-white font-bold">Mohammed Noury</span>. I am a passionate developer who bridges the gap between design and engineering.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              With a strong foundation in standard web technologies (HTML, CSS, JavaScript) and deep expertise in modern libraries like React and GSAP, I build websites that are not just functional, but memorable. My philosophy is "Mobile First" — ensuring that the user experience is flawless whether on a 5-inch phone screen or a 27-inch monitor.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {['JavaScript (ES6+)', 'TypeScript', 'React.js', 'Tailwind CSS', 'GSAP Animation', 'Node.js'].map((skill) => (
                 <div key={skill} className="flex items-center gap-2 text-gray-300">
                   <div className="w-2 h-2 bg-accent rounded-full"></div>
                   {skill}
                 </div>
               ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((item, idx) => (
              <div key={idx} className="bg-primary p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-white/5 shadow-xl">
                <div className="text-accent mb-4 w-12 h-12 flex items-center justify-center bg-accent/10 rounded-lg">
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 24 })}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};