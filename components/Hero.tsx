import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Animation: Fall from top (negative Y) with bounce
      tl.from(nameRef.current, {
        y: -150,
        opacity: 0,
        duration: 1.2,
        ease: 'bounce.out',
        delay: 0.2
      })
      .from(subRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: 'bounce.out'
      }, '-=0.8')
      .from(btnRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      }, '-=0.5');

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={containerRef} className="min-h-screen flex flex-col justify-center items-center relative pt-20 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full blur-[120px]"></div>
      </div>

      <div className="text-center z-10 max-w-4xl">
        <h2 className="text-accent font-medium tracking-widest mb-4 uppercase text-sm md:text-base">Creative Developer</h2>
        <h1 ref={nameRef} className="text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tighter mb-6 leading-tight">
          MOHAMMED <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">NOURY</span>
        </h1>
        <p ref={subRef} className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed">
          I craft responsive, high-performance digital experiences that blend artistic design with robust engineering.
        </p>
        
        <a 
          ref={btnRef}
          href="#portfolio" 
          className="inline-flex items-center gap-2 bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.3)]"
        >
          View My Work
          <ArrowDown size={20} />
        </a>
      </div>

      <div className="absolute bottom-10 animate-bounce text-gray-500">
        <span className="text-xs uppercase tracking-widest">Scroll Down</span>
      </div>
    </section>
  );
};