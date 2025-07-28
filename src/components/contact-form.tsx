
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import StarBorder from './ui/star-border';
import { Mail } from 'lucide-react';
import TrueFocusText from './ui/true-focus-text';

export default function ContactForm() {
  return (
    <section 
      id="contact" 
      className="w-full py-16 sm:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="mx-auto max-w-2xl text-center">
            <Mail className="mx-auto h-12 w-12 text-primary" />
          <TrueFocusText>
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl mt-4">
              Contact Us
            </h2>
          </TrueFocusText>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Have a question or a project in mind? Drop us a line!
          </p>
        </div>

        <Card className="w-full max-w-2xl mt-16">
          <CardContent className="p-6">
            <form action="https://formsubmit.co/pachouriutsav@gmail.com" method="POST" className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" type="text" placeholder="Your Name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="Email" type="email" placeholder="your@email.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" placeholder="Your Phone Number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="How can we help you?" required className="min-h-[150px]" />
              </div>
              <StarBorder>
                <Button type="submit" className="w-full font-bold rounded-full transition-transform duration-300 hover:scale-105 cursor-target" size="lg">
                  Send Message
                </Button>
              </StarBorder>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
