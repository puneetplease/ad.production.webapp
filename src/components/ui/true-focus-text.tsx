
'use client';

import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TrueFocusTextProps {
  children: React.ReactElement;
  className?: string;
}

const TrueFocusText: React.FC<TrueFocusTextProps> = ({
  children,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
    };
    
    const handleMouseLeave = () => {
        setMousePosition({ x: -1000, y: -1000 });
    }

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const child = React.Children.only(children);
  
  const clonedChild = React.cloneElement(child, {
    className: cn(child.props.className, 'text-transparent bg-clip-text transition-all duration-500'),
    style: {
      ...child.props.style,
      backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--foreground)) 0%, hsl(var(--muted-foreground)) 30%, hsl(var(--foreground) / 0.2) 50%)`,
    },
  });

  return (
    <div ref={containerRef} className={cn('relative w-full', className)}>
      {clonedChild}
    </div>
  );
};

export default TrueFocusText;
