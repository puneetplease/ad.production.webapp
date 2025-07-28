import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import StarBorder from '@/components/ui/star-border';
import GooeyNav from './gooey-nav';

const navLinks = [
    { href: '#features', label: 'Projects' },
    { href: '#pricing', label: 'Services' },
    { href: '/products', label: 'Store' },
    { href: '#team', label: 'Our Team' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full p-4">
      <div className="container flex h-16 items-center justify-between rounded-full bg-background/50 backdrop-blur-sm border px-6">
        <Link href="/" className="flex items-center space-x-2 cursor-target">
          <Logo className="h-8 w-auto" />
        </Link>
        <div className="hidden md:flex flex-1 items-center justify-center">
            <GooeyNav links={navLinks} />
        </div>
        <div className="hidden md:flex items-center justify-end">
          <StarBorder>
            <a href="tel:+919389486209" className="cursor-target inline-flex items-center justify-center h-11 px-8 font-bold rounded-full bg-transparent text-primary-foreground text-sm transition-transform duration-300 hover:scale-105">
              Book a Free Call
            </a>
          </StarBorder>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col bg-background p-0">
              <div className="border-b p-6">
                <Link href="/" className="flex items-center space-x-2">
                    <Logo className="h-8 w-auto" />
                </Link>
              </div>
              <nav className="flex flex-col gap-2 p-6 flex-1">
                  {navLinks.map(({ href, label }) => (
                      <Link
                        key={label}
                        href={href}
                        className="block rounded-lg px-4 py-3 text-lg font-medium text-foreground transition-colors hover:bg-muted"
                      >
                          {label}
                      </Link>
                  ))}
              </nav>
              <div className="mt-auto border-t p-6">
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
