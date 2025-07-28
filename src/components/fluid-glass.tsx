
"use client";

import { useRef, useEffect } from 'react';
import './fluid-glass.css';

const FluidGlass = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const glass = glassRef.current;

    if (!container || !glass) return;

    const handleMouseMove = (event: MouseEvent) => {
      const { left, top } = container.getBoundingClientRect();
      const x = event.clientX - left;
      const y = event.clientY - top;

      glass.style.left = `${x}px`;
      glass.style.top = `${y}px`;
    };
    
    const handleMouseEnter = () => {
        glass.style.opacity = '1';
    }

    const handleMouseLeave = () => {
        glass.style.opacity = '0';
    }

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="fluid-glass-container" ref={containerRef}>
      {children}
      <div className="fluid-glass-effect" ref={glassRef}></div>
    </div>
  );
};

export default FluidGlass;
