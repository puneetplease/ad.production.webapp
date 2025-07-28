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
          <Card className="w-full max-w-lg text-center">
            <CardHeader>
              <CheckCircle className="mx-auto h-16 w-16 text-primary" />
              <CardTitle className="font-headline text-3xl mt-4">Thank You!</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground mb-8">
                Your message has been sent successfully. We will get back to you shortly.
              </p>
              <Link href="/">
                <Button size="lg" className="font-bold rounded-full">Return to Home</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
