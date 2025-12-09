import React from 'react';
import { CheckCircle2, Download } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl md:text-7xl font-black text-dark mb-12 tracking-tighter">ABOUT <span className="text-brand">ME</span></h1>
        
        <div className="glass rounded-3xl p-8 md:p-12 mb-12 border border-white/50 bg-white/50">
          <h2 className="text-2xl font-bold text-brand mb-6 uppercase tracking-widest text-sm">Professional Biography</h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 font-light">
            My name is <span className="text-dark font-semibold">Mohammed Noury</span>, a Senior Frontend Engineer based in Morocco. I specialize in building digital products that blend technical excellence with artistic design.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            With over 5 years of experience in the industry, I have honed my skills in the modern web stack. My philosophy revolves around "Mobile First" design, ensuring that every user has a seamless experience regardless of their device. I love solving complex problems with simple, clean code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-brand to-purple-800 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
             {/* Decor */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
             
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-1 bg-accent rounded-full"></span> 
              Tech Stack
            </h3>
            <ul className="space-y-4 relative z-10">
              {['React.js & Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP Animation', 'Node.js', 'UI/UX Design'].map(skill => (
                <li key={skill} className="flex items-center gap-3 text-lg font-medium">
                  <CheckCircle2 className="text-accent" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="glass bg-white rounded-3xl p-8 md:p-12 flex flex-col justify-center items-start border border-gray-200 hover:border-brand/30 transition-colors shadow-lg">
             <h3 className="text-2xl font-bold text-dark mb-4">Resume</h3>
             <p className="text-gray-600 mb-8 max-w-sm">
               Interested in my full work history and educational background? Download my professional CV.
             </p>
             <button className="flex items-center gap-3 bg-brand text-white py-4 px-8 rounded-full font-bold hover:bg-accent hover:text-white transition-all hover:shadow-xl shadow-md">
               <Download size={20} />
               Download Resume
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};