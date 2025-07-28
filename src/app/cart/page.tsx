
'use client';

import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { Trash2 } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import TrueFocusText from '@/components/ui/true-focus-text';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="flex min-h-screen flex-col text-foreground">
        <Header />
        <main className="flex-1 flex items-center justify-center text-center">
            <div>
                <p className="text-xl text-muted-foreground">Your cart is empty.</p>
                <Button asChild size="lg" className="mt-4">
                    <Link href="/products">Go Shopping</Link>
                </Button>
            </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col text-foreground">
      <Header />
      <main className="flex-1 py-16 sm:py-24">
        <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center mb-12">
                 <TrueFocusText>
                    <h1 className="font-headline text-4xl font-bold">Shopping Cart</h1>
                 </TrueFocusText>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Your Items ({cartCount})</CardTitle>
                        </CardHeader>
                        <CardContent className="divide-y divide-border">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex items-center gap-6 py-6">
                                    <div className="relative h-24 w-24 rounded-md overflow-hidden flex-shrink-0">
                                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                                    </div>
                                    <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-lg">{item.name}</h3>
                                            <p className="text-primary font-bold text-xl mt-1">${item.price.toFixed(2)}</p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Input
                                                type="number"
                                                min="1"
                                                value={item.quantity}
                                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                                className="w-20 h-10 text-center"
                                            />
                                            <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                                                <Trash2 className="h-5 w-5 text-muted-foreground hover:text-destructive" />
                                            </Button>
                                        </div>
                                        <div className="w-24 text-right">
                                            <p className="font-semibold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
                <div className="lg:col-span-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>Order Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>${cartTotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between font-bold text-xl">
                                <span>Total</span>
                                <span>${cartTotal.toFixed(2)}</span>
                            </div>
                            <Button asChild size="lg" className="w-full mt-4 font-bold rounded-full">
                                <Link href="/checkout">Proceed to Checkout</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
