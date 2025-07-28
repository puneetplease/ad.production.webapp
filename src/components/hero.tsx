import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const stats = [
    { value: '150+', label: 'Projects Completed' },
    { value: '99%', label: 'Client Satisfaction' },
    { value: '10+', label: 'Years of Experience' },
  ];

  return (
    <section className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Creative Solutions,
            <br />
            <span className="text-primary">Measurable Results.</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We are a full-service production agency that helps brands create stunning visuals and compelling stories that captivate audiences and drive growth.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <Button size="lg" className="font-headline">
              Get Started
            </Button>
            <Button size="lg" variant="ghost" className="font-headline">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="relative h-80 w-full lg:h-full">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Team working on a project"
              fill
              className="rounded-lg object-cover shadow-2xl"
              data-ai-hint="creative team collaboration"
            />
        </div>
      </div>
      <div className="mt-16 border-t border-border pt-8 sm:mt-20 lg:mt-24 lg:pt-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-y-2">
              <p className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                {stat.value}
              </p>
              <p className="text-sm font-medium leading-6 text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
