import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqsList = [
  {
    question: 'What types of projects do you handle?',
    answer: 'We handle a wide range of projects, including corporate videos, commercials, social media content, and animated explainers. Our team is equipped to manage projects of any scale, from small startups to large enterprises.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'The timeline for a project varies depending on its complexity and scope. A simple video can take a few weeks, while a large-scale ad campaign might take several months. We provide a detailed timeline after our initial consultation.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'Our pricing is project-based. We provide a custom quote after understanding your specific needs and goals. We offer packages that cater to different budgets, which you can see in our pricing section.',
  },
  {
    question: 'How involved will I be in the creative process?',
    answer: 'We believe in collaboration. You can be as involved as you want to be. We have a structured feedback and approval process at each stage of production to ensure the final product aligns with your vision.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="w-full bg-secondary/50 py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Have questions? We have answers. If you don't see your question here, feel free to contact us.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex items-center justify-center">
            <Image
              src="https://placehold.co/500x500.png"
              alt="Question mark"
              width={500}
              height={500}
              className="rounded-lg object-cover shadow-lg"
              data-ai-hint="questions teamwork"
            />
          </div>
          <div className="flex items-center">
            <Accordion type="single" collapsible className="w-full">
              {faqsList.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="font-headline text-lg text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
