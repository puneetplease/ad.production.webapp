
'use client';

import { useEffect } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/hooks/use-cart';
import { LoadingLink } from '@/components/ui/loading-link';


export default function ThankYouPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="flex min-h-screen flex-col text-foreground">
      <Header />
      <main className="flex-1 flex items-center justify-center py-16 sm:py-24 lg:py-32 pt-24">
        <div className="container mx-auto px-4 flex justify-center">
          <Card className="w-full max-w-lg text-center overflow-hidden">
             <CardHeader className="p-0 bg-card relative flex justify-center items-center h-[250px]">
                <div style={{transform: 'scale(1.5)'}}>
                    <dotlottie-wc src="https://lottie.host/5fc41e56-7d02-4255-999c-4b79060654ae/jP3045nJIB.lottie" style={{width: "300px", height: "300px"}} speed="1" autoplay loop></dotlottie-wc>
                </div>
            </CardHeader>
            <CardContent className="p-8">
              <CardTitle className="font-headline text-3xl">Thank You for Your Order!</CardTitle>
              <p className="text-lg text-muted-foreground mt-4 mb-8">
                Your payment was successful and your order is confirmed. A receipt has been sent to your email.
              </p>
              <LoadingLink href="/products" size="lg" className="font-bold rounded-full">
                Continue Shopping
              </LoadingLink>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
