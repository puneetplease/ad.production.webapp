import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col text-foreground">
      <Header />
      <main className="flex-1 flex items-center justify-center py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 flex justify-center">
          <Card className="w-full max-w-lg text-center overflow-hidden">
             <CardHeader className="p-8 bg-card relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-24 h-24 bg-primary/20 rounded-full animate-pulse-dot" />
                </div>
                <CheckCircle className="mx-auto h-20 w-20 text-primary z-10" />
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
