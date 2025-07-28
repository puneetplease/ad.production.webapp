
'use client';

import { useEffect } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Player } from '@lottiefiles/react-lottie-player';
import Link from 'next/link';
import { useCart } from '@/hooks/use-cart';

export default function ThankYouPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="flex min-h-screen flex-col text-foreground">
      <Header />
      <main className="flex-1 flex items-center justify-center py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 flex justify-center">
          <Card className="w-full max-w-lg text-center overflow-hidden">
             <CardHeader className="p-8 bg-card relative">
                <Player
                  autoplay
                  loop={false}
                  src="https://lottie.host/87f242ad-a531-44da-9d1b-a8bb7587a3a2/EdzkMw9aMc.lottie"
                  style={{ height: '150px', width: '150px' }}
                  className="mx-auto z-10"
                />
            </CardHeader>
            <CardContent className="p-8">
              <CardTitle className="font-headline text-3xl">Thank You for Your Order!</CardTitle>
              <p className="text-lg text-muted-foreground mt-4 mb-8">
                Your payment was successful and your order is confirmed. A receipt has been sent to your email.
              </p>
              <Button asChild size="lg" className="font-bold rounded-full cursor-target">
                <Link href="/products">Continue Shopping</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
