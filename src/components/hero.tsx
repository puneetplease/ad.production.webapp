import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-24 sm:py-32 lg:py-40">
      <div className="text-center">
        <h1 className="font-headline text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          AD Production Builds Brands That
          <br />
          <span className="text-primary">Last a Lifetime.</span>
        </h1>
        <p className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-muted-foreground">
          We are a full-service production agency that helps brands create stunning visuals and compelling stories that captivate audiences and drive growth.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="font-bold rounded-full w-full sm:w-auto">
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="ghost" className="font-bold rounded-full group w-full sm:w-auto">
            <PlayCircle className="mr-2 h-6 w-6 text-primary transition-colors" />
            Watch Our Reel
          </Button>
        </div>
      </div>
    </section>
  );
}
