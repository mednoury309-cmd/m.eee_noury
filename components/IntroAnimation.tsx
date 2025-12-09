import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftGateRef = useRef<HTMLDivElement>(null);
  const rightGateRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(containerRef.current, { display: 'none' });
          onComplete();
        }
      });

      // 1. Initial State
      // Gates are fully closed (width 50% each)
      
      // 2. Open Gates
      tl.to([leftGateRef.current, rightGateRef.current], {
        width: 0,
        duration: 1.5,
        ease: 'power4.inOut',
        delay: 0.5
      })
      
      // 3. Text Reveal (Right to Left)
      .fromTo(textRef.current, 
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power2.out' },
        "-=1.0" // Start before gates fully open
      )
      
      // 4. Fade out container
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        delay: 0.8
      });

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] flex justify-center items-center pointer-events-none">
      {/* Left Gate - Brand Purple */}
      <div 
        ref={leftGateRef} 
        className="absolute top-0 left-0 h-full w-1/2 bg-brand z-20 border-r border-white/10 shadow-[5px_0_30px_rgba(0,0,0,0.5)]"
      ></div>
      
      {/* Right Gate - Brand Purple */}
      <div 
        ref={rightGateRef} 
        className="absolute top-0 right-0 h-full w-1/2 bg-brand z-20 border-l border-white/10 shadow-[-5px_0_30px_rgba(0,0,0,0.5)]"
      ></div>

      {/* Centered Text */}
      <div ref={textContainerRef} className="z-10 absolute inset-0 flex items-center justify-center overflow-hidden">
         <h1 
           ref={textRef} 
           className="text-4xl md:text-7xl font-black text-brand tracking-tighter"
         >
           MOHAMMED <span className="text-dark">NOURY</span>
         </h1>
      </div>
    </div>
  );
};