
'use client';

import { useRef } from 'react';
import VariableProximity from './ui/VariableProximity';

export const Logo = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const containerRef = useRef(null);
  
  return (
    <div ref={containerRef} style={{ position: 'relative', color: 'hsl(var(--primary))' }} {...props}>
      <VariableProximity
        label={'Ad Production'}
        className={'variable-proximity-logo'}
        fromFontVariationSettings="'wght' 400, 'opsz' 40"
        toFontVariationSettings="'wght' 1000, 'opsz' 100"
        containerRef={containerRef}
        radius={100}
        falloff='linear'
      />
    </div>
  );
};

export const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    <path d="M14.05 2.9A10.33 10.33 0 0 1 22 10.45c0 5.5-4.5 10-10 10a10.33 10.33 0 0 1-7.55-2.95" />
    <path d="M14 2.9A10.33 10.33 0 0 1 22 10.45c0 5.5-4.5 10-10 10a10.33 10.33 0 0 1-7.55-2.95" />
  </svg>
);
