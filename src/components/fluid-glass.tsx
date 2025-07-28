
"use client";

import { useRef, useEffect } from 'react';
import './fluid-glass.css';

const FluidGlass = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number>();

  const mouse = useRef({ x: 0, y: 0 });
  const lastKnownMouse = useRef({ x: 0, y: 0 });
  const glassPos = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const glass = glassRef.current;

    if (!container || !glass) return;

    const updateMousePosition = (event: MouseEvent) => {
      lastKnownMouse.current = { x: event.clientX, y: event.clientY };
      const rect = container.getBoundingClientRect();
      mouse.current.x = event.clientX - rect.left;
      mouse.current.y = event.clientY - rect.top;
    };
    
    const handleScroll = () => {
        if(isHovering.current && container) {
            const rect = container.getBoundingClientRect();
            mouse.current.x = lastKnownMouse.current.x - rect.left;
            mouse.current.y = lastKnownMouse.current.y - rect.top;
        }
    }

    const animate = () => {
      if(!isHovering.current) return;
        
      const { x: targetX, y: targetY } = mouse.current;
      const { x: currentX, y: currentY } = glassPos.current;

      const dx = targetX - currentX;
      const dy = targetY - currentY;

      glassPos.current.x += dx * 0.1;
      glassPos.current.y += dy * 0.1;

      glass.style.transform = `translate(-50%, -50%) translate(${glassPos.current.x}px, ${glassPos.current.y}px)`;
      
      animationFrameId.current = requestAnimationFrame(animate);
    };

    const handleMouseEnter = (event: MouseEvent) => {
      isHovering.current = true;
      glass.style.opacity = '1';
      updateMousePosition(event);
      glassPos.current = { x: mouse.current.x, y: mouse.current.y };
      
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      animationFrameId.current = requestAnimationFrame(animate);
    };

    const handleMouseLeave = () => {
      isHovering.current = false;
      glass.style.opacity = '0';
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
    
    container.addEventListener('mousemove', updateMousePosition);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      container.removeEventListener('mousemove', updateMousePosition);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll, true);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
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
