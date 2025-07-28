
'use client';

import { useCart } from '@/hooks/use-cart';
import { ShoppingCart } from 'lucide-react';

export const CartIcon = () => {
  const { cartCount } = useCart();

  return (
    <>
      <ShoppingCart className="h-6 w-6" />
      {cartCount > 0 && (
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
          {cartCount}
        </span>
      )}
    </>
  );
};
