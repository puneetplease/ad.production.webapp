
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

const products = [
  {
    id: 'digital-art-pack',
    name: 'Digital Art Pack',
    price: 49,
    oldPrice: 69,
    image: 'https://i.postimg.cc/652MQby4/74dbf034-f79c-479f-916b-0634c2b6dd76.png',
    hint: 'digital art abstract',
    rating: 4.5,
    reviews: 120,
  },
  {
    id: 'ui-kit-pro',
    name: 'UI Kit Pro',
    price: 99,
    oldPrice: 129,
    image: 'https://i.postimg.cc/pLdzTp0G/2.png',
    hint: 'user interface design',
    rating: 5,
    reviews: 230,
  },
  {
    id: 'ebook-template',
    name: 'Ebook Template',
    price: 29,
    oldPrice: 39,
    image: 'https://i.postimg.cc/PrVNSK4y/3.png',
    hint: 'book template modern',
    rating: 4,
    reviews: 88,
  },
  {
    id: 'social-media-graphics',
    name: 'Social Media Graphics',
    price: 79,
    oldPrice: 99,
    image: 'https://i.postimg.cc/DzkvNNbr/4.png',
    hint: 'social media icons',
    rating: 4.5,
    reviews: 150,
  },
   {
    id: 'website-template',
    name: 'Website Template',
    price: 129,
    oldPrice: 159,
    image: 'https://i.postimg.cc/yxq26qsj/5.png',
    hint: 'website design minimal',
    rating: 5,
    reviews: 94,
  },
   {
    id: 'stock-video-bundle',
    name: 'Stock Video Bundle',
    price: 199,
    oldPrice: 249,
    image: 'https://i.postimg.cc/wBw6BjGV/6.png',
    hint: 'video reel cinematic',
    rating: 4,
    reviews: 72,
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
      <main className="flex-1 pt-24">
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
                  <Card className="flex flex-col h-full bg-card shadow-lg overflow-hidden transition-all duration-300 hover:shadow-primary/20 hover:scale-105 border border-primary/20 hover:border-primary/50 group">
                    <CardHeader className="p-0">
                      <div className="relative w-full h-64 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                          data-ai-hint={product.hint}
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 p-6 flex flex-col">
                        <h3 className="text-xl font-bold font-headline text-foreground mb-1">{product.name}</h3>
                        <div className="flex items-center mb-3">
                            <div className="flex text-primary">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-current' : ''}`} />
                                ))}
                            </div>
                            <span className="text-muted-foreground text-sm ml-2">({product.reviews} reviews)</span>
                        </div>
                        <div className="flex items-baseline space-x-2 my-4">
                            <span className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</span>
                            <span className="text-lg text-muted-foreground line-through">${product.oldPrice.toFixed(2)}</span>
                        </div>
                        <div className="flex-grow" />
                        <LoadingLink href={`/products/${product.id}`} className="w-full mt-4 !h-auto !p-0">
                            <StarBorder className="w-full">
                            <div className="inline-flex items-center justify-center h-11 px-8 font-bold rounded-full bg-transparent text-primary-foreground text-sm transition-transform duration-300 hover:scale-105 w-full">
                                View Product
                            </div>
                            </StarBorder>
                        </LoadingLink>
                    </CardContent>
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
