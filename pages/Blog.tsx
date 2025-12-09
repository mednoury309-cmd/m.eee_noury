import React from 'react';

export const Blog: React.FC = () => {
  return (
    <div className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-7xl font-black text-dark mb-12 tracking-tighter">INSIGHTS</h1>
        
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <article key={i} className="glass bg-white p-8 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer border-l-4 border-brand group shadow-md hover:shadow-xl">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                  <span className="text-xs font-bold text-accent uppercase tracking-wider">Development</span>
                  <h2 className="text-xl md:text-2xl font-bold text-dark mt-1 group-hover:text-brand transition-colors">Understanding React 18 Concurrency</h2>
                </div>
                <span className="text-gray-400 text-sm font-medium whitespace-nowrap">Oct {10 + i}, 2024</span>
              </div>
              <p className="text-gray-600 mt-4 line-clamp-2 leading-relaxed">
                Concurrency is a major update in React 18 that allows React to interrupt rendering to handle high-priority updates. This leads to smoother user interfaces and better perceived performance...
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};