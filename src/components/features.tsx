
"use client";

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';
import TrueFocusText from './ui/true-focus-text';
import { motion } from 'framer-motion';

const servicesList = [
  {
    title: 'Website',
    highlight: 'Design',
    features: [
      'Personalized Designs',
      'Wireframe creation',
      'Premium theme designing',
      'Design mock-ups and prototyping',
    ],
  },
  {
    title: 'Web',
    highlight: 'Development',
    features: [
      'Design to development',
      'Premium Theme Development',
      'Animations',
      'Custom Code Creation',
    ],
  },
  {
    title: 'Conversion Rate',
    highlight: 'Optimization',
    features: [
      'A/B testing and analysis',
      'User experience (UX) improvements',
      'Funnel optimization strategies',
    ],
  },
  {
    title: 'SEO and',
    highlight: 'Content Marketing',
    features: [
      'Keyword research and optimization',
      'High-quality content creation',
      'Link building and outreach',
    ],
  },
  {
    title: 'Live Commerce',
    highlight: 'Integration',
    features: [
      'Live streaming setup and support',
      'Interactive features implementation',
      'Post-live analytics and reporting',
    ],
  },
  {
    title: 'Maintenance and',
    highlight: 'Support',
    features: [
      'Regular website updates and security checks',
      '24/7 technical support',
      'Backup and recovery solutions',
    ],
  },
];

const fullWidthService = {
  title: 'WhatsApp',
  highlight: 'Integration Setup',
  features: [
    'WhatsApp Commerce',
    'WhatsApp CRM',
    'WhatsApp Marketing',
    'WhatsApp Automation',
    'WhatsApp Chat Widget',
    'WhatsApp Notification Library',
    'Click To WhatsApp Ads',
  ],
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export default function Features() {
  return (
    <section
      id="features"
      className="w-full py-16 sm:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-block rounded-lg bg-secondary/20 border border-primary/50 px-3 py-1 text-sm text-primary font-headline mb-4">Our Services</div>
          <TrueFocusText>
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our best experience in service
            </h2>
          </TrueFocusText>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            We don't just tick boxes; we help you build, grow, and sell better online. From your first sale to scaling up, we bring the right mix of design, tech, and strategy to move your brand forward.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
          {servicesList.map((service, i) => (
            <motion.div
              key={service.title}
              className="metallic-paint-container rounded-lg cursor-target"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Card className="h-full border-primary/20 hover:border-primary/50 transition-colors shadow-lg shadow-primary/10 metallic-paint">
                <CardHeader className="p-6 pb-4">
                  <CardTitle className="font-headline text-xl">
                    {service.title} <span className="text-primary">{service.highlight}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-3">
                    {service.features.map((item) => (
                      <li key={item} className="flex items-center gap-x-3 text-muted-foreground">
                        <Check className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          <motion.div
            className="lg:col-span-3 metallic-paint-container rounded-lg cursor-target"
            custom={servicesList.length}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Card className="h-full border-primary/20 hover:border-primary/50 transition-colors shadow-lg shadow-primary/10 metallic-paint">
              <CardHeader className="p-6 pb-4">
                <CardTitle className="font-headline text-xl">
                  {fullWidthService.title} <span className="text-primary">{fullWidthService.highlight}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <ul className="space-y-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                  {fullWidthService.features.map((item) => (
                    <li key={item} className="flex items-center gap-x-3 text-muted-foreground">
                      <Check className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
