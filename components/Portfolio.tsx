import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

gsap.registerPlugin(ScrollTrigger);

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    category: "React / Tailwind",
    image: "https://picsum.photos/800/600?random=1",
    description: "A comprehensive analytics dashboard featuring dark mode, real-time data visualization, and responsive tables."
  },
  {
    id: 2,
    title: "Travel Agency Landing",
    category: "GSAP / HTML",
    image: "https://picsum.photos/800/600?random=2",
    description: "High-conversion landing page with parallax scrolling effects and immersive image galleries."
  },
  {
    id: 3,
    title: "FinTech Mobile App",
    category: "React Native",
    image: "https://picsum.photos/800/600?random=3",
    description: "Secure and swift mobile banking interface designed with a mobile-first approach and strict accessibility standards."
  },
  {
    id: 4,
    title: "AI Content Generator",
    category: "Gemini API / Node",
    image: "https://picsum.photos/800/600?random=4",
    description: "Web application leveraging Google's Gemini API to generate marketing copy and blog posts instantly."
  },
  {
    id: 5,
    title: "3D Product Configurator",
    category: "Three.js / React",
    image: "https://picsum.photos/800/600?random=5",
    description: "Interactive 3D model viewer allowing users to customize colors and parts of furniture."
  },
  {
    id: 6,
    title: "Social Media Platform",
    category: "Full Stack",
    image: "https://picsum.photos/800/600?random=6",
    description: "Scalable social network architecture supporting real-time messaging and media sharing."
  }
];

export const Portfolio: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 bg-primary relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-accent font-bold tracking-widest uppercase mb-2">My Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Selected Works</h3>
          </div>
          <div className="hidden md:block w-1/3 h-[1px] bg-white/20 mb-4"></div>
        </div>

        {/* Responsive Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project) => (
            <div key={project.id} className="project-card group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4">
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                  <div className="bg-primary/90 p-2 rounded-full text-white hover:text-accent">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-accent text-sm font-medium">{project.category}</span>
                  <h4 className="text-xl font-bold text-white mt-1 group-hover:text-accent transition-colors">{project.title}</h4>
                </div>
                <Github size={20} className="text-gray-500 hover:text-white transition-colors mt-1" />
              </div>
              <p className="text-gray-400 mt-2 text-sm leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
