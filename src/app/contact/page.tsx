
"use client"
import Header from '@/components/header';
import Footer from '@/components/footer';
import ContactForm from '@/components/contact-form';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <motion.div 
      className="flex min-h-screen flex-col text-foreground"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <Header />
      <main className="flex-1 pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ContactForm />
        </div>
      </main>
      <Footer />
    </motion.div>
  );
}
