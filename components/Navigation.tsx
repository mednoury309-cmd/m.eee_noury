import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Me', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Styling: Normal = Brand Purple, Hover = Accent Gold
  const linkClass = ({ isActive }: { isActive: boolean }) => 
    `text-sm font-bold uppercase tracking-wider transition-all duration-300 relative group ${
      isActive ? 'text-accent' : 'text-brand hover:text-accent'
    }`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) => 
    `text-2xl font-bold uppercase tracking-wider py-2 transition-colors duration-300 ${
      isActive ? 'text-accent' : 'text-brand hover:text-accent'
    }`;

  return (
    <nav className="sticky top-0 w-full z-40 bg-surface/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-black tracking-tighter text-brand">
          NOURY<span className="text-accent">.</span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink key={item.label} to={item.href} className={linkClass}>
              {({ isActive }) => (
                <>
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand hover:text-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[71px] bg-bg/95 backdrop-blur-xl z-50 md:hidden flex flex-col items-center justify-center gap-8 animate-in slide-in-from-right duration-300">
          {navItems.map((item) => (
            <NavLink 
              key={item.label} 
              to={item.href}
              className={mobileLinkClass}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};