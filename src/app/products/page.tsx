
"use client";

import { motion } from 'framer-motion';
import Header from '@/components/header';
import Footer from '@/components/footer';
import TrueFocusText from '@/components/ui/true-focus-text';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function ProductsPage() {
  return (
    <motion.div 
      className="flex min-h-screen flex-col text-foreground"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <Header />
      <main className="flex-1 pt-24 flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-md w-full">
            <TrueFocusText>
                <h1 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                    Coming Soon!
                </h1>
            </TrueFocusText>
            <p className="mt-4 text-lg text-muted-foreground">
                Our online store is currently under construction. Sign up for our newsletter to be the first to know when we launch!
            </p>
            <form action="https://formsubmit.co/adproduction.in@gmail.com" method="POST" className="mt-8 flex flex-col sm:flex-row gap-4 w-full">
                <Input 
                    type="email" 
                    name="email"
                    placeholder="Enter your email" 
                    className="flex-grow text-base" 
                    required 
                />
                <Button type="submit" size="lg" className="font-bold rounded-full">
                    Subscribe
                </Button>
            </form>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
}
