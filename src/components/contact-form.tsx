
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import StarBorder from './ui/star-border';
import { Mail, Phone, MapPin, Linkedin, Twitter, Dribbble } from 'lucide-react';
import TrueFocusText from './ui/true-focus-text';

export default function ContactForm() {
  return (
    <section 
      id="contact" 
      className="w-full py-16 sm:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
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

        <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary"/>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Call Us</h3>
                        <p className="text-muted-foreground">Let's talk about your project.</p>
                        <a href="tel:+911169272965" className="text-primary hover:underline cursor-target">+91 11 6927 2965</a>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary"/>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Email Us</h3>
                        <p className="text-muted-foreground">Send us your questions or ideas.</p>
                        <a href="mailto:pachouriutsav@gmail.com" className="text-primary hover:underline cursor-target">pachouriutsav@gmail.com</a>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary"/>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Our Office</h3>
                        <p className="text-muted-foreground">Come visit us at our headquarters.</p>
                        <p className="text-primary">123 Creative Lane, Innovation City, 45678</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Linkedin className="w-6 h-6 text-primary"/>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Follow Us</h3>
                        <p className="text-muted-foreground">Stay connected on social media.</p>
                        <div className="flex space-x-3 mt-2">
                          <a href="#" target="_blank" rel="noopener noreferrer" className="cursor-target">
                            <Button variant="secondary" size="icon" className="rounded-full">
                              <Linkedin className="h-5 w-5" />
                            </Button>
                          </a>
                          <a href="#" target="_blank" rel="noopener noreferrer" className="cursor-target">
                            <Button variant="secondary" size="icon" className="rounded-full">
                              <Twitter className="h-5 w-5" />
                            </Button>
                          </a>
                          <a href="#" target="_blank" rel="noopener noreferrer" className="cursor-target">
                            <Button variant="secondary" size="icon" className="rounded-full">
                              <Dribbble className="h-5 w-5" />
                            </Button>
                          </a>
                        </div>
                    </div>
                </div>
            </div>

            <Card className="w-full">
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
      </div>
    </section>
  );
}
