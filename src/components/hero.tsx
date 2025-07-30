
"use client";

import { Button } from '@/components/ui/button';
import { PlayCircle, X } from 'lucide-react';
import VerticalTicker from './vertical-ticker';
import StarBorder from '@/components/ui/star-border';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogPortal,
  DialogOverlay
} from "@/components/ui/dialog"

export default function Hero() {
  return (
    <section
      className="container mx-auto px-4 flex items-center justify-center text-center py-12 sm:py-16 md:py-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center w-full">
        <div className="hidden lg:flex justify-center">
          <VerticalTicker />
        </div>
        <div className="lg:col-span-1">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            AD Production Builds Brands That
            <br />
            <span className="text-primary">Last a Lifetime.</span>
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-muted-foreground">
            We are a full-service production agency that helps brands create stunning visuals and compelling stories that captivate audiences and drive growth.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <div className="w-full sm:w-auto">
              <StarBorder className="w-full">
                <a href="tel:+911169272965" className="cursor-target inline-flex items-center justify-center h-11 px-8 font-bold rounded-full bg-transparent text-primary-foreground text-base transition-transform duration-300 hover:scale-105 w-full">
                  BOOK NOW!
                </a>
              </StarBorder>
            </div>
            <div className="w-full sm:w-auto">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      variant="outline"
                      className="font-bold rounded-full group text-base hover:bg-primary/20 hover:text-foreground border-border w-full cursor-target"
                    >
                      <PlayCircle className="mr-2 h-6 w-6 text-primary transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
                      Watch Our Reel
                    </Button>
                  </DialogTrigger>
                   <DialogPortal>
                    <DialogOverlay className="bg-transparent backdrop-blur-none" />
                    <DialogContent className="w-screen h-screen max-w-none p-8 bg-transparent border-0">
                      <div className="relative w-full h-full">
                          <iframe 
                              src="https://streamable.com/e/xxbi6o?autoplay=1"
                              allow="autoplay; fullscreen"
                              width="100%" 
                              height="100%" 
                              style={{border: "none"}}
                              allowFullScreen>
                          </iframe>
                           <DialogClose className="fixed right-8 top-8 rounded-full p-2 bg-black/50 text-white z-50 opacity-100 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground cursor-target">
                              <X className="h-6 w-6" />
                              <span className="sr-only">Close</span>
                          </DialogClose>
                      </div>
                    </DialogContent>
                  </DialogPortal>
                </Dialog>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex justify-center">
           <VerticalTicker direction="reverse" />
        </div>
      </div>
    </section>
  );
}
