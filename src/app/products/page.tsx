
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import TrueFocusText from '@/components/ui/true-focus-text';
import Link from 'next/link';
import StarBorder from '@/components/ui/star-border';
import { Star } from 'lucide-react';
import { LoadingLink } from '@/components/ui/loading-link';

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
      <main className="flex-1 pt-24">
        
      </main>
      <Footer />
    </motion.div>
  );
}
