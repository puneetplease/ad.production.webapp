
"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import './gooey-nav.css';

type GooeyNavProps = {
  children: React.ReactNode;
};

export default function GooeyNav({ children }: GooeyNavProps) {
  const [bubbleStyle, setBubbleStyle] = useState({});
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const navLink = target.closest('.gooey-nav-link');

      if (navLink) {
        const { offsetWidth, offsetLeft, offsetTop, offsetHeight } = navLink as HTMLElement;
        setBubbleStyle({
          width: `${offsetWidth}px`,
          left: `${offsetLeft}px`,
          top: `${offsetTop}px`,
          height: `${offsetHeight}px`,
          opacity: 1,
        });
      }
    };

    const handleMouseLeave = () => {
      setBubbleStyle(prev => ({ ...prev, opacity: 0 }));
    };
    
    nav.addEventListener('mousemove', handleMouseMove);
    nav.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      nav.removeEventListener('mousemove', handleMouseMove);
      nav.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <nav className="gooey-nav" ref={navRef}>
      {children}
      <div className="gooey-bubble" style={bubbleStyle}></div>
      <svg width="0" height="0">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </nav>
  );
}
