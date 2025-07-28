import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Film, Megaphone, BarChart2, ShieldCheck } from 'lucide-react';

const featuresList = [
  {
    icon: <Film className="h-8 w-8 text-primary" />,
    title: 'Video Production',
    description: 'High-quality video content that tells your story and engages your audience.',
  },
  {
    icon: <Megaphone className="h-8 w-8 text-primary" />,
    title: 'Ad Campaigns',
    description: 'Strategic ad campaigns that deliver results and maximize your ROI.',
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-primary" />,
    title: 'Analytics & Reporting',
    description: 'In-depth analytics to track performance and optimize for success.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Brand Safety',
    description: 'Ensuring your brand is represented in a safe and positive environment.',
  },
];

export default function Features() {
  return (
    <section id="features" className="w-full bg-secondary/50 py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything You Need to Succeed
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            We provide a comprehensive suite of services to take your brand to the next level.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {featuresList.map((feature) => (
            <Card key={feature.title} className="hover:shadow-lg transition-shadow bg-background">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                <CardDescription className="pt-2">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
