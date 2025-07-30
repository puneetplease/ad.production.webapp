

'use client';

import { useMemo } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/header';
import Footer from '@/components/footer';
import TrueFocusText from '@/components/ui/true-focus-text';
import { Star, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import StarBorder from '@/components/ui/star-border';
import { LoadingLink } from '@/components/ui/loading-link';

const allProducts = [
  {
    id: 'digital-art-pack',
    name: 'Digital Art Pack',
    price: 49,
    oldPrice: 69,
    image: 'https://i.postimg.cc/652MQby4/74dbf034-f79c-479f-916b-0634c2b6dd76.png',
    hint: 'digital art abstract',
    description: 'A stunning collection of 50 high-resolution abstract digital art pieces. Perfect for backgrounds, social media, or personal projects. Provided in PNG and JPG formats.',
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
    description: 'A comprehensive UI kit for Figma with over 200 components, including buttons, forms, and navigation elements. Kickstart your next web or mobile application design.',
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
    description: 'A professionally designed ebook template for Canva and Adobe InDesign. Includes 30 unique pages, fully customizable to fit your brand.',
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
    description: 'A bundle of 100+ templates for Instagram, Facebook, and Twitter. Includes posts, stories, and banner templates. Easily editable in Canva.',
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
    description: 'A minimal and modern website template built with Next.js and Tailwind CSS. Fully responsive and easy to customize. Includes documentation.',
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
    description: 'A collection of 20 high-quality, 4K stock video clips. Features a variety of cinematic shots perfect for any video project.',
    rating: 4,
    reviews: 72,
  },
];

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = allProducts.find(p => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col text-foreground">
      <Header />
      <main className="flex-1 py-16 sm:py-24 lg:py-32 pt-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              className="relative w-full h-[400px] lg:h-full rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                data-ai-hint={product.hint}
              />
            </motion.div>
            <motion.div 
              className="flex flex-col"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="font-headline text-4xl font-bold">{product.name}</h1>
              <Separator className="my-6" />
              <p className="text-lg text-muted-foreground">{product.description}</p>
              <div className="mt-8">
                <Button size="lg" className="font-bold rounded-full flex items-center justify-center" disabled>
                    Coming Soon
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
