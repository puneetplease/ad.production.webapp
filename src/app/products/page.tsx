
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { LoadingButton } from '@/components/ui/loading-button';
import TrueFocusText from '@/components/ui/true-focus-text';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 'digital-art-pack',
    name: 'Digital Art Pack',
    price: '$49',
    image: 'https://placehold.co/600x400.png',
    hint: 'digital art abstract',
  },
  {
    id: 'ui-kit-pro',
    name: 'UI Kit Pro',
    price: '$99',
    image: 'https://placehold.co/600x400.png',
    hint: 'user interface design',
  },
  {
    id: 'ebook-template',
    name: 'Ebook Template',
    price: '$29',
    image: 'https://placehold.co/600x400.png',
    hint: 'book template modern',
  },
  {
    id: 'social-media-graphics',
    name: 'Social Media Graphics',
    price: '$79',
    image: 'https://placehold.co/600x400.png',
    hint: 'social media icons',
  },
   {
    id: 'website-template',
    name: 'Website Template',
    price: '$129',
    image: 'https://placehold.co/600x400.png',
    hint: 'website design minimal',
  },
   {
    id: 'stock-video-bundle',
    name: 'Stock Video Bundle',
    price: '$199',
    image: 'https://placehold.co/600x400.png',
    hint: 'video reel cinematic',
  },
];

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
      <main className="flex-1">
        <section
          id="products"
          className="w-full py-16 sm:py-24 lg:py-32"
        >
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <TrueFocusText>
                <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Digital Products
                </h1>
              </TrueFocusText>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Browse our collection of high-quality digital assets to level up your projects.
              </p>
            </div>

            <div className="mx-auto mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product, i) => (
                <motion.div
                  key={product.name}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Card className="flex flex-col h-full border-primary/20 hover:border-primary/50 transition-colors bg-card shadow-lg hover:shadow-primary/10 overflow-hidden group">
                    <CardHeader className="p-0">
                      <div className="relative w-full h-64">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={product.hint}
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 p-6 flex flex-col">
                      <CardTitle className="font-headline text-xl mb-2">{product.name}</CardTitle>
                      <p className="text-2xl font-bold text-primary">{product.price}</p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <LoadingButton asChild className="w-full font-bold rounded-full" variant="secondary">
                        <Link href={`/products/${product.id}`}>View Product</Link>
                      </LoadingButton>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}
