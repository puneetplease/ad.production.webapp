"use client";

import React, { useState, useEffect } from 'react';

const SPLASH_COUNT = 5;

interface Splash {
  id: number;
  x: number;
  y: number;
}

const SplashCursor: React.FC = () => {
  const [splashes, setSplashes] = useState<Splash[]>([]);

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      const newSplashes = Array.from({ length: SPLASH_COUNT }).map((_, i) => ({
        id: Date.now() + i,
        x: e.clientX,
        y: e.clientY,
      }));
      setSplashes(prev => [...prev, ...newSplashes]);
    };

    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {splashes.map(splash => (
        <SplashDot
          key={splash.id}
          x={splash.x}
          y={splash.y}
          onCompleted={() => setSplashes(prev => prev.filter(s => s.id !== splash.id))}
        />
      ))}
    </div>
  );
};

interface SplashDotProps {
  x: number;
  y: number;
  onCompleted: () => void;
}

const SplashDot: React.FC<SplashDotProps> = ({ x, y, onCompleted }) => {
  useEffect(() => {
    const timer = setTimeout(onCompleted, 1000); 
    return () => clearTimeout(timer);
  }, [onCompleted]);

  return (
    <div
      className="absolute rounded-full animate-splash"
      style={{
        left: x,
        top: y,
        width: '50px',
        height: '50px',
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, hsl(var(--primary) / 0.5) 0%, hsl(var(--primary) / 0) 70%)',
        animationDuration: `${0.5 + Math.random() * 0.5}s`,
      }}
    />
  );
};

export default SplashCursor;
