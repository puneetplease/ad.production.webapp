
'use client';

import Link, { LinkProps } from 'next/link';
import { useLoading } from '@/hooks/use-loading';
import { Button, ButtonProps } from './button';
import { cn } from '@/lib/utils';
import React from 'react';

type LoadingLinkProps = LinkProps & Omit<ButtonProps, 'href'>;

export const LoadingLink = React.forwardRef<HTMLAnchorElement, LoadingLinkProps>(
    ({ onClick, className, children, href, ...props }, ref) => {
    const { isLoading, setLoading } = useLoading();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (isLoading) {
        e.preventDefault();
        return;
      }
      setLoading(true);
      if (onClick) {
        onClick(e);
      }
    };

    return (
      <Button asChild {...props}>
          <Link
            ref={ref}
            href={href}
            onClick={handleClick}
            className={cn(className)}
            aria-disabled={isLoading}
          >
            {children}
          </Link>
      </Button>
    );
  }
);

LoadingLink.displayName = 'LoadingLink';
