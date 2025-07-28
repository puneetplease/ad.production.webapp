
'use client';

import { useState, Fragment } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/hooks/use-cart';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import TrueFocusText from '@/components/ui/true-focus-text';

const steps = ['Shipping', 'Payment', 'Review'];

export default function CheckoutPage() {
  const { cartItems, cartTotal } = useCart();
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Handle order placement
      alert('Order placed successfully!');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (cartItems.length === 0 && currentStep < steps.length) {
     return (
       <div className="flex min-h-screen flex-col text-foreground">
         <Header />
         <main className="flex-1 flex items-center justify-center text-center">
            <div>
                <p className="text-xl text-muted-foreground">Your cart is empty.</p>
                <Button asChild size="lg" className="mt-4 cursor-target">
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
                <h1 className="font-headline text-4xl font-bold">Checkout</h1>
             </TrueFocusText>
          </div>

          <div className="w-full max-w-2xl mx-auto mb-12">
            <div className="flex items-center">
              {steps.map((step, index) => (
                <Fragment key={step}>
                  <div className="flex flex-col items-center cursor-target">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${index <= currentStep ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                      {index + 1}
                    </div>
                    <p className="mt-2 text-sm font-medium">{step}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`flex-1 h-1 mx-4 transition-colors ${index < currentStep ? 'bg-primary' : 'bg-muted'}`} />
                  )}
                </Fragment>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                >
                    {currentStep === 0 && <ShippingForm />}
                    {currentStep === 1 && <PaymentForm />}
                    {currentStep === 2 && <ReviewOrder />}
                </motion.div>
            </AnimatePresence>

            <div className="row-start-1 lg:col-start-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <div className="relative h-16 w-16 rounded-md overflow-hidden">
                                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <p>{item.name}</p>
                                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                                    </div>
                                </div>
                                <p>${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        ))}
                        <Separator />
                        <div className="flex justify-between font-semibold">
                            <p>Subtotal</p>
                            <p>${cartTotal.toFixed(2)}</p>
                        </div>
                         <div className="flex justify-between font-semibold">
                            <p>Shipping</p>
                            <p>Free</p>
                        </div>
                        <Separator />
                        <div className="flex justify-between font-bold text-lg">
                            <p>Total</p>
                            <p>${cartTotal.toFixed(2)}</p>
                        </div>
                    </CardContent>
                </Card>

                 <div className="mt-8 flex justify-between">
                    <Button variant="outline" onClick={handleBack} disabled={currentStep === 0} className="cursor-target">
                        Back
                    </Button>
                    <Button onClick={handleNext} className="cursor-target">
                        {currentStep === steps.length - 1 ? 'Place Order' : 'Next'}
                    </Button>
                </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

const ShippingForm = () => (
    <Card>
      <CardHeader>
        <CardTitle>Shipping Information</CardTitle>
        <CardDescription>Enter your shipping details.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" placeholder="John" />
            </div>
             <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" placeholder="Doe" />
            </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input id="address" placeholder="123 Main St" />
        </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="New York" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Input id="state" placeholder="NY" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="zip">ZIP Code</Label>
                <Input id="zip" placeholder="10001" />
            </div>
        </div>
      </CardContent>
    </Card>
  );
  
  const PaymentForm = () => (
    <Card>
      <CardHeader>
        <CardTitle>Payment Details</CardTitle>
        <CardDescription>Enter your payment information.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
            <Label htmlFor="card-number">Card Number</Label>
            <Input id="card-number" placeholder="**** **** **** ****" />
        </div>
        <div className="grid grid-cols-2 gap-4">
             <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input id="expiry" placeholder="MM/YY" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="123" />
            </div>
        </div>
         <div className="space-y-2">
            <Label htmlFor="card-name">Name on Card</Label>
            <Input id="card-name" placeholder="John Doe" />
        </div>
      </CardContent>
    </Card>
  );

  const ReviewOrder = () => {
    const { cartItems } = useCart();
    return (
        <Card>
            <CardHeader>
                <CardTitle>Review Your Order</CardTitle>
                <CardDescription>Please check your order details below before placing the order.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="font-semibold">Items:</p>
                <ul className="list-disc list-inside text-muted-foreground">
                    {cartItems.map(item => <li key={item.id}>{item.name} (x{item.quantity})</li>)}
                </ul>
                <Separator className="my-4"/>
                <p className="font-semibold">Shipping to:</p>
                <p className="text-muted-foreground">123 Main St, New York, NY 10001</p>
            </CardContent>
        </Card>
    )
  }
