
"use client";

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const roadmapData = [
  {
    step: '01',
    title: "Let's Talk First on a Discovery Call",
    description: 'We begin by understanding your business goals, target audience, and specific requirements. This helps us tailor our approach to best meet your needs.',
  },
  {
    step: '02',
    title: 'Research and Planning',
    description: 'Our team conducts thorough research on your industry, competitors, and market trends. We then develop a detailed project plan and strategy to ensure we are aligned with your vision.',
  },
  {
    step: '03',
    title: 'Design & Development',
    description: 'We create stunning, user-friendly designs and bring them to life with clean, efficient code. We keep you in the loop with regular updates and feedback sessions.',
  },
  {
    step: '04',
    title: 'Testing & Launch',
    description: 'Before going live, we rigorously test everything to ensure a flawless user experience. Once everything is perfect, we deploy the project and make it live for the world to see.',
  },
  {
    step: '05',
    title: 'Support & Growth',
    description: 'Our partnership doesn’t end at launch. We provide ongoing support, maintenance, and strategies for growth to ensure your continued success.',
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
        
        // Calculate the scroll progress within the component
        const scrollY = window.scrollY;
        const componentTop = containerRef.current.offsetTop;
        const startOffset = screenHeight * 0.5; // Start drawing when component is halfway up the screen
        
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
          <div className="absolute left-1/2 -ml-px w-0.5 h-full bg-primary/20" />
          <div
            className="absolute left-1/2 -ml-px w-0.5 bg-primary"
            style={{ height: `${lineHeight}%` }}
          />

          {roadmapData.map((item, index) => (
            <div key={item.step} className={cn(
              "relative mb-12 sm:mb-24 last:mb-0 flex justify-center items-center",
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            )}>
              <div className="absolute left-1/2 -ml-[9px] h-[18px] w-[18px] rounded-full bg-background border-2 border-primary animate-pulse-dot" />

              <div className={cn(
                "w-full sm:w-5/12 p-4",
                index % 2 === 0 ? "sm:pr-12" : "sm:pl-12"
              )}>
                <div className={cn(
                  "relative",
                  index % 2 === 0 ? "text-left" : "sm:text-right"
                )}>
                  <p className="font-headline text-6xl lg:text-8xl font-bold text-primary/40 leading-none absolute -top-8 -z-10"
                     style={index % 2 === 0 ? { left: '-2rem' } : { right: '-2rem' }}>
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
