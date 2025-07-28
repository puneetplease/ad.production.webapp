
"use client";

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const roadmapData = [
  {
    step: '01',
    title: "Discovery Call",
    description: 'We start by understanding your goals, audience, and needs to tailor our approach.',
  },
  {
    step: '02',
    title: 'Research & Planning',
    description: 'We research your market and develop a detailed plan and strategy aligned with your vision.',
  },
  {
    step: '03',
    title: 'Design & Development',
    description: 'We create stunning designs and bring them to life with clean, efficient code and regular updates.',
  },
  {
    step: '04',
    title: 'Testing & Launch',
    description: 'We rigorously test everything for a flawless user experience before launching your project.',
  },
  {
    step: '05',
    title: 'Support & Growth',
    description: 'Our partnership continues with ongoing support, maintenance, and growth strategies.',
  },
];

export default function Roadmap() {
  const [lineHeight, setLineHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && contentRef.current) {
        const { top } = containerRef.current.getBoundingClientRect();
        const contentHeight = contentRef.current.offsetHeight;
        const screenHeight = window.innerHeight;
        
        const scrollY = window.scrollY;
        const componentTop = containerRef.current.offsetTop;
        const startOffset = screenHeight * 0.5;
        
        let progress = (scrollY - componentTop + startOffset) / (contentHeight);
        progress = Math.max(0, Math.min(1, progress));

        setLineHeight(progress * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="roadmap" className="w-full py-16 sm:py-24 lg:py-32" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Streamlined Process
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            From initial idea to final launch, we follow a structured path to ensure your project's success.
          </p>
        </div>

        <div className="relative mt-16 sm:mt-24" ref={contentRef}>
          <div className="absolute left-4 sm:left-1/2 -ml-px w-0.5 h-full bg-border" />
          <div
            className="absolute left-4 sm:left-1/2 -ml-px w-0.5 bg-primary"
            style={{ height: `${lineHeight}%` }}
          />

          {roadmapData.map((item, index) => (
            <div key={item.step} className={cn(
              "relative mb-12 sm:mb-24 last:mb-0",
              index % 2 === 0 ? "sm:right-timeline-step" : "sm:left-timeline-step"
            )}>
               <div className="absolute left-4 sm:left-1/2 -ml-[9px] h-[18px] w-[18px] rounded-full bg-background border-2 border-primary animate-pulse-dot" />

              <div className="p-4 pl-12 sm:p-4">
                <div>
                   <p className="font-headline text-6xl lg:text-8xl font-bold text-primary/20 mb-2">
                    {item.step}
                  </p>
                  <h3 className="font-headline text-2xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
