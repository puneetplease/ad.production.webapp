"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import './gooey-nav.css';

type NavLink = {
  href: string;
  label: string;
};

type GooeyNavProps = {
  links: NavLink[];
};

export default function GooeyNav({ links }: GooeyNavProps) {
  const [bubbleStyle, setBubbleStyle] = useState({});

  useEffect(() => {
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
      setBubbleStyle({ ...bubbleStyle, opacity: 0 });
    };

    const nav = document.querySelector('.gooey-nav');
    if (nav) {
      nav.addEventListener('mousemove', handleMouseMove);
      nav.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        nav.removeEventListener('mousemove', handleMouseMove);
        nav.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [bubbleStyle]);

  return (
    <nav className="gooey-nav">
      {links.map((link) => (
        <Link href={link.href} key={link.label} className="gooey-nav-link">
          {link.label}
        </Link>
      ))}
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
