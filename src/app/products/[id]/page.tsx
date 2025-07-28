
'use client';

import { useMemo, useState } from 'react';
import { notFound, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/hooks/use-cart';
import Header from '@/components/header';
import Footer from '@/components/footer';
import TrueFocusText from '@/components/ui/true-focus-text';
import { ShoppingCart, Minus, Plus, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const allProducts = [
  {
    id: 'digital-art-pack',
    name: 'Digital Art Pack',
    price: 49,
    image: 'https://placehold.co/600x400.png',
    hint: 'digital art abstract',
    description: 'A stunning collection of 50 high-resolution abstract digital art pieces. Perfect for backgrounds, social media, or personal projects. Provided in PNG and JPG formats.',
  },
  {
    id: 'ui-kit-pro',
    name: 'UI Kit Pro',
    price: 99,
    image: 'https://placehold.co/600x400.png',
    hint: 'user interface design',
    description: 'A comprehensive UI kit for Figma with over 200 components, including buttons, forms, and navigation elements. Kickstart your next web or mobile application design.',
  },
  {
    id: 'ebook-template',
    name: 'Ebook Template',
    price: 29,
    image: 'https://placehold.co/600x400.png',
    hint: 'book template modern',
    description: 'A professionally designed ebook template for Canva and Adobe InDesign. Includes 30 unique pages, fully customizable to fit your brand.',
  },
  {
    id: 'social-media-graphics',
    name: 'Social Media Graphics',
    price: 79,
    image: 'https://placehold.co/600x400.png',
    hint: 'social media icons',
    description: 'A bundle of 100+ templates for Instagram, Facebook, and Twitter. Includes posts, stories, and banner templates. Easily editable in Canva.',
  },
   {
    id: 'website-template',
    name: 'Website Template',
    price: 129,
    image: 'https://placehold.co/600x400.png',
    hint: 'website design minimal',
    description: 'A minimal and modern website template built with Next.js and Tailwind CSS. Fully responsive and easy to customize. Includes documentation.',
  },
   {
    id: 'stock-video-bundle',
    name: 'Stock Video Bundle',
    price: 199,
    image: 'https://placehold.co/600x400.png',
    hint: 'video reel cinematic',
    description: 'A collection of 20 high-quality, 4K stock video clips. Features a variety of cinematic shots perfect for any video project.',
  },
];

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const router = useRouter();

  const product = allProducts.find(p => p.id === params.id);

  const recommendedProducts = useMemo(() => {
    return allProducts.filter(p => p.id !== params.id).slice(0, 3);
  }, [params.id]);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    const { description, ...cartProduct } = product;
    addToCart(cartProduct, quantity);
    setAddedToCart(true);
    toast({
      title: (
        <div className="flex items-center">
          <CheckCircle className="mr-2 h-5 w-5 text-primary" />
          <span>Added to cart!</span>
        </div>
      ),
      description: `${quantity} x ${product.name} has been added to your cart.`,
    });
    setTimeout(() => setAddedToCart(false), 3000); // Hide the "View Cart" button after 3 seconds
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));


  return (
    <div className="flex min-h-screen flex-col text-foreground">
      <Header />
      <main className="flex-1 py-16 sm:py-24 lg:py-32">
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
              <p className="text-3xl font-bold text-primary mt-2">${product.price.toFixed(2)}</p>
              <Separator className="my-6" />
              <p className="text-lg text-muted-foreground">{product.description}</p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex items-center rounded-full border">
                    <Button variant="ghost" size="icon" className="rounded-r-none" onClick={decrementQuantity}>
                        <Minus className="h-4 w-4" />
                    </Button>
                    <Input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                        className="w-16 h-10 text-center border-y-0 border-x focus-visible:ring-0"
                    />
                     <Button variant="ghost" size="icon" className="rounded-l-none" onClick={incrementQuantity}>
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>
                {!addedToCart ? (
                    <Button size="lg" className="font-bold rounded-full" onClick={handleAddToCart}>
                        <ShoppingCart className="mr-2 h-5 w-5" />
                        Add to Cart
                    </Button>
                ) : (
                    <Button size="lg" className="font-bold rounded-full" onClick={() => router.push('/cart')}>
                        View Cart
                    </Button>
                )}
              </div>
            </motion.div>
          </div>

          <Separator className="my-16 sm:my-24" />

          <div>
            <div className="mx-auto max-w-2xl text-center">
                <TrueFocusText>
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Recommended Products
                    </h2>
                </TrueFocusText>
            </div>
            <div className="mx-auto mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {recommendedProducts.map((recProduct) => (
                <Card key={recProduct.id} className="flex flex-col h-full border-primary/20 hover:border-primary/50 transition-colors bg-card shadow-lg hover:shadow-primary/10 overflow-hidden group">
                  <CardHeader className="p-0">
                    <div className="relative w-full h-64">
                      <Image
                        src={recProduct.image}
                        alt={recProduct.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={recProduct.hint}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 p-6 flex flex-col">
                    <CardTitle className="font-headline text-xl mb-2">{recProduct.name}</CardTitle>
                    <p className="text-2xl font-bold text-primary">${recProduct.price.toFixed(2)}</p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button asChild className="w-full font-bold rounded-full" variant="secondary">
                        <Link href={`/products/${recProduct.id}`}>View Product</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
