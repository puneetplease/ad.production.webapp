import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown } from 'lucide-react';
import StarBorder from '@/components/ui/star-border';
import { CartIcon } from './cart-icon';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from '@/lib/utils';

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

const NavLink = ({ href, children, className }: { href: string, children: React.ReactNode, className?: string }) => (
    <Link
      href={href}
      className={cn("text-sm font-medium text-muted-foreground transition-colors hover:text-primary cursor-target", className)}
    >
      {children}
    </Link>
);


export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full p-4">
      <div className="container flex h-16 items-center justify-between rounded-full bg-background/50 backdrop-blur-sm border px-6">
        <Link href="/" className="flex items-center space-x-2 cursor-target">
          <Logo className="h-8 w-auto" />
        </Link>
        <div className="hidden md:flex flex-1 items-center justify-center">
            <nav className="flex items-center space-x-6">
                 <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary cursor-target">
                        Home
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {homeSections.map(({ href, label }) => (
                        <DropdownMenuItem key={label} asChild>
                          <Link href={href} className="cursor-target">{label}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                {navLinks.map(({ href, label }) => (
                    <NavLink key={label} href={href}>{label}</NavLink>
                ))}
            </nav>
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
                  <h3 className="px-4 py-2 text-lg font-semibold">Home</h3>
                  <div className="flex flex-col gap-1 pl-4">
                    {homeSections.map(({ href, label }) => (
                      <Link
                        key={label}
                        href={href}
                        className="block rounded-lg px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted"
                      >
                          {label}
                      </Link>
                    ))}
                  </div>
                   <div className="mt-4 border-t pt-4">
                    {navLinks.map(({ href, label }) => (
                        <Link
                          key={label}
                          href={href}
                          className="block rounded-lg px-4 py-3 text-lg font-medium text-foreground transition-colors hover:bg-muted"
                        >
                            {label}
                        </Link>
                    ))}
                  </div>
              </nav>
               <div className="mt-auto border-t p-6 flex items-center justify-between">
                <Button asChild variant="ghost" size="icon" className="rounded-full relative cursor-target">
                    <Link href="/cart">
                      <CartIcon />
                      <span className="sr-only">Open Cart</span>
                    </Link>
                </Button>
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
