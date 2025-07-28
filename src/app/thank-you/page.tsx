
'use client';

import { useEffect } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { useCart } from '@/hooks/use-cart';


export default function ThankYouPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="flex min-h-screen flex-col text-foreground">
      <Header />
      <main className="flex-1 flex items-center justify-center py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 flex justify-center">
          <Card className="w-full max-w-lg text-center overflow-hidden">
             <CardHeader className="p-0 bg-card relative flex justify-center items-center">
                <dotlottie-wc src="https://lottie.host/5fc41e56-7d02-4255-999c-4b79060654ae/jP3045nJIB.lottie" style={{width: "300px", height: "300px"}} speed="1" autoplay loop></dotlottie-wc>
            </CardHeader>
            <CardContent className="p-8 pt-0">
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
