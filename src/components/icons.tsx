
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
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="0"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 12c0 1.77.46 3.45 1.28 4.95L2.05 22l5.25-1.36c1.44.75 3.06 1.16 4.74 1.16h.01c5.46 0 9.91-4.45 9.91-9.91c0-5.46-4.45-9.9-9.91-9.9zM17.18 15.4c-.28-.14-1.65-.81-1.9-0.9c-.26-.1-.45-.14-.64.14c-.19.28-.72.9-.88 1.08c-.16.19-.32.21-.6.07c-1.02-.51-1.94-1.13-2.78-1.9c-.75-.68-1.25-1.46-1.47-1.96c-.19-.45-.02-.68.12-0.9c.12-.19.28-.48.42-.72c.14-.24.19-.4.28-.67c.1-.28.05-.51-.09-.68c-.14-.17-.64-1.53-.87-2.1c-.24-.57-.48-.49-.64-.5c-.17-.01-.36-.01-.54-.01c-.19 0-.48.07-.73.35c-.25.28-.97.94-.97 2.28c0 1.34 1 2.65 1.14 2.83c.14.19 1.98 3.1 4.8 4.25c.7.3 1.2.47 1.6.6c.68.21 1.3.18 1.78.11c.52-.08 1.65-.68 1.88-1.33c.24-.65.24-1.2.17-1.34c-.07-.14-.26-.23-.54-.37z"/>
  </svg>
);


