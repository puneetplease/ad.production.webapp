
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import StarBorder from '@/components/ui/star-border';
import { CartIcon } from './cart-icon';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import GooeyNav from './gooey-nav';

const homeSections = [
    { href: '/#features', label: 'Features' },
    { href: '/#roadmap', label: 'Roadmap' },
    { href: '/#team', label: 'Our Team' },
    { href: '/#pricing', label: 'Pricing' },
    { href: '/#faq', label: 'FAQ' },
];

const navLinks = [
    { href: '/products', label: 'Store' },
    { href: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full p-4">
      <div className="container flex h-16 items-center justify-between rounded-full bg-background/50 backdrop-blur-sm border px-6">
        <div className="flex items-center justify-start">
          <Link href="/" className="flex items-center space-x-2 cursor-target">
            <Logo className="h-8 w-auto flex items-center" />
          </Link>
        </div>
        
        <div className="hidden md:flex flex-1 items-center justify-center">
             <GooeyNav>
                 <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="gooey-nav-link flex items-center gap-1 cursor-target">
                        Home
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {homeSections.map(({ href, label }) => (
                        <DropdownMenuItem key={label} asChild onSelect={(e) => e.preventDefault()}>
                          <Link href={href} className="cursor-target">{label}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                {navLinks.map(({ href, label }) => (
                    <Link href={href} key={label} className="gooey-nav-link cursor-target">
                      {label}
                    </Link>
                ))}
            </GooeyNav>
        </div>
        
        <div className="hidden md:flex items-center justify-end gap-2">
          <Button asChild variant="ghost" size="icon" className="rounded-full relative cursor-target">
            <Link href="/cart">
              <CartIcon />
              <span className="sr-only">Open Cart</span>
            </Link>
          </Button>
          <StarBorder>
            <a href="tel:+919389486209" className="cursor-target inline-flex items-center justify-center h-11 px-8 font-bold rounded-full bg-transparent text-primary-foreground text-sm transition-transform duration-300 hover:scale-105">
              Book a Free Call
            </a>
          </StarBorder>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <Button asChild variant="ghost" size="icon" className="rounded-full relative cursor-target">
            <Link href="/cart">
              <CartIcon />
              <span className="sr-only">Open Cart</span>
            </Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full cursor-target">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="flex flex-col bg-background p-0 w-screen h-screen">
               <div className="border-b p-4 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2 cursor-target">
                    <Logo className="h-8 w-auto flex items-center" />
                </Link>
                 <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <X className="h-6 w-6" />
                    </Button>
                  </SheetClose>
              </div>
              <nav className="flex flex-col gap-2 p-6 flex-1 justify-center items-center text-center">
                  <h3 className="px-4 py-2 text-2xl font-semibold text-foreground">Home</h3>
                  <div className="flex flex-col gap-1">
                    {homeSections.map(({ href, label }) => (
                      <SheetClose asChild key={label}>
                        <Link
                          href={href}
                          className="block rounded-lg px-4 py-3 text-xl font-medium text-muted-foreground transition-colors hover:bg-muted cursor-target"
                        >
                            {label}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                   <div className="mt-4 border-t pt-4 w-full max-w-xs">
                    {navLinks.map(({ href, label }) => (
                      <SheetClose asChild key={label}>
                        <Link
                          href={href}
                          className="block rounded-lg px-4 py-3 text-2xl font-medium text-foreground transition-colors hover:bg-muted cursor-target"
                        >
                            {label}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
              </nav>
               <div className="mt-auto border-t p-6 text-center">
                <StarBorder>
                  <a href="tel:+919389486209" className="cursor-target inline-flex items-center justify-center h-11 px-8 w-full font-bold rounded-full bg-transparent text-primary-foreground text-sm transition-transform duration-300 hover:scale-105">
                    Book a Free Call
                  </a>
                </StarBorder>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
