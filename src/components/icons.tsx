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
