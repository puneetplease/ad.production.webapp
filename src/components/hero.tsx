
"use client";

import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';
import VerticalTicker from './vertical-ticker';
import StarBorder from '@/components/ui/star-border';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Hero() {
  return (
    <section
      className="container mx-auto px-4 flex items-center justify-center py-24 sm:py-32 lg:py-40 text-center"
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
                  <DialogContent className="p-0 border-0 bg-transparent w-[90vw] h-auto max-w-4xl">
                    <div style={{position:"relative", width:"100%", height:"0px", paddingBottom:"56.25%"}}><iframe allow="fullscreen;autoplay" allowFullScreen height="100%" src="https://streamable.com/e/xxbi6o?autoplay=1" width="100%" style={{border:"none", width:"100%", height:"100%", position:"absolute", left:"0px", top:"0px", overflow:"hidden"}}></iframe></div>
                  </DialogContent>
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
