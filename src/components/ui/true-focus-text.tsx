
'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface TrueFocusTextProps {
  children: React.ReactElement;
  className?: string;
}

const TrueFocusText: React.FC<TrueFocusTextProps> = ({
  children,
  className,
}) => {
  const child = React.Children.only(children);

  const clonedChild = React.cloneElement(child, {
    className: cn(
      child.props.className,
      'animate-true-focus text-transparent bg-clip-text'
    ),
    style: {
      ...child.props.style,
      backgroundImage: 'linear-gradient(90deg, hsl(var(--foreground)) 0%, hsl(var(--primary)) 50%, hsl(var(--foreground)) 100%)',
      backgroundSize: '200% 100%',
    },
  });

  return (
    <div className={cn('relative w-full', className)}>
      <style>
        {`
          @keyframes true-focus-animation {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
          .animate-true-focus {
            animation: true-focus-animation 5s linear infinite;
          }
        `}
      </style>
      {clonedChild}
    </div>
  );
};

export default TrueFocusText;
