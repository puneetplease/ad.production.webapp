
'use client';

import { Button, ButtonProps } from '@/components/ui/button';
import { useLoading } from '@/hooks/use-loading';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import React from 'react';
import { Slot } from '@radix-ui/react-slot';

export const LoadingButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick, className, children, asChild = false, variant, size, ...props }, ref) => {
    const { isLoading, setLoading } = useLoading();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isLoading) {
        e.preventDefault();
        return;
      }
      setLoading(true);
      if (onClick) {
        onClick(e);
      }
    };

    if (asChild) {
      const Child = Slot as any;
      return (
        <Child
          ref={ref}
          onClick={handleClick}
          className={cn(className)}
          disabled={isLoading}
          {...props}
        >
          {children}
        </Child>
      );
    }
    
    return (
      <Button
        ref={ref}
        onClick={handleClick}
        className={cn('relative', className)}
        disabled={isLoading}
        variant={variant}
        size={size}
        {...props}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="h-5 w-5 animate-spin" />
          </div>
        )}
        <span className={cn({ 'opacity-0': isLoading })}>{children}</span>
      </Button>
    );
  }
);

LoadingButton.displayName = 'LoadingButton';
