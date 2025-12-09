import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Instagram, ArrowRight, MessageCircle, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from('.contact-header', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Buttons Animation (Staggered from left)
      gsap.from('.contact-btn', {
        scrollTrigger: {
          trigger: '.contact-grid',
          start: 'top 85%',
        },
        x: -50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'back.out(1.5)',
        delay: 0.2
      });

      // Form Animation (From right)
      gsap.from('.contact-form', {
        scrollTrigger: {
          trigger: '.contact-grid',
          start: 'top 85%',
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const contactOptions = [
    {
      icon: <Mail size={24} />,
      label: "Email Me",
      value: "mednoury309@gmail.com",
      href: "mailto:mednoury309@gmail.com",
      color: "text-blue-400",
      bgHover: "group-hover:bg-blue-500/10",
      borderHover: "group-hover:border-blue-500/50"
    },
    {
      icon: <MessageCircle size={24} />,
      label: "WhatsApp",
      value: "+212 614-095842",
      href: "https://wa.me/212614095842",
      color: "text-green-400",
      bgHover: "group-hover:bg-green-500/10",
      borderHover: "group-hover:border-green-500/50"
    },
    {
      icon: <Instagram size={24} />,
      label: "Instagram",
      value: "@n_jesus2.0",
      href: "https://www.instagram.com/n_jesus2.0/",
      color: "text-pink-400",
      bgHover: "group-hover:bg-pink-500/10",
      borderHover: "group-hover:border-pink-500/50"
    }
  ];

  return (
    <section id="contact" ref={containerRef} className="py-24 bg-primary relative border-t border-white/10">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 contact-header">
          <h2 className="text-accent font-bold tracking-widest uppercase mb-2">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Let's Work Together</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto contact-grid">
          {/* Contact Links Column */}
          <div className="space-y-6">
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              Have a project in mind or want to discuss a potential collaboration? 
              Connect with me directly through your preferred platform.
            </p>
            
            {contactOptions.map((opt, idx) => (
              <a 
                key={idx} 
                href={opt.href}
                target={opt.label !== "Email Me" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`contact-btn flex items-center gap-5 p-5 bg-secondary/30 rounded-2xl border border-white/5 transition-all duration-300 group cursor-pointer ${opt.borderHover} hover:bg-secondary hover:-translate-y-1 hover:shadow-xl`}
              >
                <div className={`p-4 rounded-xl bg-primary ${opt.color} ${opt.bgHover} transition-colors duration-300`}>
                  {opt.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white text-lg group-hover:text-accent transition-colors">{opt.label}</h4>
                  <p className="text-gray-400 text-sm">{opt.value}</p>
                </div>
                <ArrowRight className="text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
              </a>
            ))}

            {/* Static Location Indicator */}
            <div className="contact-btn mt-8 flex items-center gap-4 px-5 py-3 opacity-60">
              <MapPin size={20} className="text-gray-400" />
              <span className="text-gray-400 text-sm">Based in Morocco • Available Worldwide</span>
            </div>
          </div>

          {/* Form Column */}
          <form className="contact-form bg-secondary/30 p-8 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden group"
                onSubmit={(e) => { e.preventDefault(); alert('Thank you! This is a demo form.'); }}
          >
            {/* Decorative background glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors duration-700 pointer-events-none"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 relative z-10">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">Your Name</label>
                <input type="text" className="w-full bg-primary/50 border border-white/10 rounded-xl p-4 text-white focus:border-accent focus:bg-primary focus:outline-none transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">Your Email</label>
                <input type="email" className="w-full bg-primary/50 border border-white/10 rounded-xl p-4 text-white focus:border-accent focus:bg-primary focus:outline-none transition-all" placeholder="john@example.com" />
              </div>
            </div>
            
            <div className="space-y-2 mb-8 relative z-10">
              <label className="text-sm font-medium text-gray-300 ml-1">Message</label>
              <textarea rows={4} className="w-full bg-primary/50 border border-white/10 rounded-xl p-4 text-white focus:border-accent focus:bg-primary focus:outline-none transition-all resize-none" placeholder="Tell me about your project..."></textarea>
            </div>

            <button className="w-full bg-accent text-primary font-bold py-4 rounded-xl hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] relative z-10">
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-center items-center gap-2">
           <span>&copy; {new Date().getFullYear()} Mohammed Noury.</span>
           <span className="hidden md:inline">•</span>
           <span>Designed & Built with <span className="text-red-500">♥</span> and React</span>
        </div>
      </div>
    </section>
  );
};
