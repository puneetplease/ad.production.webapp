
"use client";

import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import TrueFocusText from './ui/true-focus-text';
import { motion } from 'framer-motion';

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
    <motion.section 
      id="faq" 
      className="w-full py-16 sm:py-24 lg:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <TrueFocusText>
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </TrueFocusText>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Have questions? We have answers. If you don't see your question here, feel free to contact us.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <motion.div 
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1698510047345-ff32de8a3b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxwcm9maWxlJTIwaW1hZ2V8ZW58MHx8fHwxNzUzNjMyNDM4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Question mark"
              width={500}
              height={500}
              className="rounded-lg object-cover shadow-lg aspect-square w-full max-w-md"
              data-ai-hint="questions teamwork"
            />
          </motion.div>
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqsList.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="font-headline text-lg text-left hover:no-underline transition-all duration-300 ease-in-out hover:text-primary transform hover:scale-105 origin-left cursor-none">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
