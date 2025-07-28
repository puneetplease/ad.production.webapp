"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import StarBorder from './ui/star-border';
import { Mail } from 'lucide-react';

export default function ContactForm() {
  return (
    <section id="contact" className="w-full py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 flex justify-center">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center">
            <Mail className="mx-auto h-12 w-12 text-primary" />
            <CardTitle className="font-headline text-3xl mt-4">Contact Us</CardTitle>
            <CardDescription className="mt-2 text-lg">
              Have a question or a project in mind? Drop us a line!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action="https://formsubmit.co/pachouriutsav@gmail.com" method="POST" className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" type="text" placeholder="Your Name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="your@email.com" required />
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
                <Button type="submit" className="w-full font-bold rounded-full" size="lg">
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
