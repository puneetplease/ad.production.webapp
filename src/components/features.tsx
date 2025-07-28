import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

const featuresList = [
  {
    title: 'Video Production',
    highlight: '',
    features: [
      'High-quality video content',
      'Corporate videos and commercials',
      'Social media content',
      'Animated explainers',
    ],
  },
  {
    title: 'Ad',
    highlight: 'Campaigns',
    features: [
      'Strategic ad campaigns',
      'Audience targeting & segmentation',
      'A/B testing for creatives',
      'Maximizing your ROI',
    ],
  },
  {
    title: 'Analytics &',
    highlight: 'Reporting',
    features: [
      'In-depth performance analytics',
      'Custom dashboards',
      'Conversion tracking',
      'Monthly performance reports',
    ],
  },
  {
    title: 'Brand',
    highlight: 'Safety',
    features: [
      'Safe and positive brand representation',
      'Content monitoring',
      'Ad placement verification',
      'Contextual targeting',
    ],
  },
];

export default function Features() {
  return (
    <section id="features" className="w-full py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Best Experience in Service
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            We don't just tick boxes, we help you build, grow, and sell better online.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 md:grid-cols-2 lg:mx-0 lg:max-w-none">
          {featuresList.map((feature) => (
            <Card key={feature.title} className="hover:shadow-lg transition-all bg-background/50 border-white/10 hover:-translate-y-2 hover:border-primary/50">
              <CardHeader className="p-6 pb-4">
                <CardTitle className="font-headline text-xl">
                  {feature.title} <span className="text-primary">{feature.highlight}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <ul className="space-y-3">
                  {feature.features.map((item) => (
                    <li key={item} className="flex items-center gap-x-3 text-muted-foreground">
                      <Check className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
