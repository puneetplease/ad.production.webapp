import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Link from 'next/link';
import TrueFocusText from './ui/true-focus-text';

const pricingTiers = [
  {
    name: 'Starter',
    price: '$999',
    description: 'Perfect for startups and small businesses testing the waters.',
    features: ['1 Explainer Video', 'Basic Scriptwriting', 'Standard Graphics', '2 Rounds of Revisions'],
    cta: 'Choose Starter',
  },
  {
    name: 'Pro',
    price: '$2,499',
    description: 'Ideal for growing businesses looking to scale their content.',
    features: ['3 Ad Creatives', 'Advanced Scriptwriting', 'Custom Graphics', '4 Rounds of Revisions', 'Performance Analytics'],
    cta: 'Choose Pro',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large organizations with specific needs.',
    features: ['Unlimited Projects', 'Dedicated Account Manager', 'Advanced Analytics', 'Brand Strategy', 'Priority Support'],
    cta: 'Contact Us',
    isContact: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <TrueFocusText>
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Flexible Pricing for Every Need
            </h2>
          </TrueFocusText>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Choose a plan that aligns with your business goals and budget. No hidden fees, just transparent pricing.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-stretch gap-8 lg:max-w-none lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <Card key={tier.name} className="flex flex-col border-primary/20 hover:border-primary/50 transition-colors bg-card shadow-lg hover:shadow-primary/10">
              <CardHeader className="relative p-6 pb-4">
                {tier.popular && <div className="absolute top-0 -translate-y-1/2 rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground font-headline">Most Popular</div>}
                <CardTitle className="font-headline text-2xl mt-4">{tier.name}</CardTitle>
                <div className="mt-4 flex items-baseline gap-x-2">
                  <span className="text-4xl font-bold tracking-tight text-foreground">{tier.price}</span>
                  {tier.price !== 'Custom' && <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">/project</span>}
                </div>
                <CardDescription className="mt-4 text-base">{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 p-6">
                <ul role="list" className="space-y-3 text-sm leading-6 text-muted-foreground">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6">
                {tier.isContact ? (
                   <Button asChild className="w-full font-bold rounded-full group cursor-none" size="lg" variant='outline'>
                     <Link href="/contact">
                       <span className="group-hover:animate-gradient-shine">{tier.cta}</span>
                     </Link>
                   </Button>
                ) : (
                  <Button className="w-full font-bold rounded-full group" size="lg" variant={tier.popular ? 'default' : 'secondary'}>
                    <span className="group-hover:animate-gradient-shine">{tier.cta}</span>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
