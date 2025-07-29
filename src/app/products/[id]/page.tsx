

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
import { ShoppingCart, Minus, Plus, CheckCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { LoadingButton } from '@/components/ui/loading-button';
import StarBorder from '@/components/ui/star-border';

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
    image: 'https://placehold.co/600x400.png',
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
    const { description, oldPrice, rating, reviews, ...cartProduct } = product;
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
    setTimeout(() => setAddedToCart(false), 3000);
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
              <div className="flex items-baseline space-x-2 mt-2">
                <span className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</span>
                <span className="text-xl text-muted-foreground line-through">${product.oldPrice.toFixed(2)}</span>
              </div>
              <Separator className="my-6" />
              <p className="text-lg text-muted-foreground">{product.description}</p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex items-center rounded-full border">
                    <Button variant="ghost" size="icon" className="rounded-r-none hover:bg-destructive/20 text-destructive" onClick={decrementQuantity}>
                        <Minus className="h-4 w-4" />
                    </Button>
                    <Input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                        className="w-16 h-10 text-center border-y-0 border-x focus-visible:ring-0"
                    />
                     <Button variant="ghost" size="icon" className="rounded-l-none hover:bg-primary/20 text-primary" onClick={incrementQuantity}>
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>
                {!addedToCart ? (
                    <Button size="lg" className="font-bold rounded-full" onClick={handleAddToCart}>
                        <ShoppingCart className="mr-2 h-5 w-5" />
                        Add to Cart
                    </Button>
                ) : (
                    <Button size="lg" className="font-bold rounded-full cursor-target" onClick={() => router.push('/cart')}>
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
                <div key={recProduct.id}>
                  <Card className="flex flex-col h-full bg-card shadow-lg overflow-hidden transition-all duration-300 hover:shadow-primary/20 hover:scale-105 border border-primary/20 hover:border-primary/50 group">
                    <CardHeader className="p-0">
                      <div className="relative w-full h-64 overflow-hidden">
                        <Image
                          src={recProduct.image}
                          alt={recProduct.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                          data-ai-hint={recProduct.hint}
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 p-6 flex flex-col">
                        <h3 className="text-xl font-bold font-headline text-foreground mb-1">{recProduct.name}</h3>
                        <div className="flex items-center mb-3">
                            <div className="flex text-primary">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-4 h-4 ${i < Math.round(recProduct.rating) ? 'fill-current' : ''}`} />
                                ))}
                            </div>
                            <span className="text-muted-foreground text-sm ml-2">({recProduct.reviews} reviews)</span>
                        </div>
                        <div className="flex items-baseline space-x-2 my-4">
                            <span className="text-2xl font-bold text-primary">${recProduct.price.toFixed(2)}</span>
                            <span className="text-lg text-muted-foreground line-through">${recProduct.oldPrice.toFixed(2)}</span>
                        </div>
                        <div className="flex-grow" />
                         <LoadingButton asChild className="w-full mt-4">
                           <Link href={`/products/${recProduct.id}`} className="!h-auto !p-0 cursor-target">
                              <StarBorder className="w-full">
                                <div className="inline-flex items-center justify-center h-11 px-8 font-bold rounded-full bg-transparent text-primary-foreground text-sm transition-transform duration-300 hover:scale-105 w-full">
                                    View Product
                                </div>
                              </StarBorder>
                           </Link>
                        </LoadingButton>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
