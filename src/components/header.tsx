import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#optimizer', label: 'Optimizer' },
    { href: '#faq', label: 'FAQ' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full p-4">
      <div className="container flex h-16 items-center justify-between rounded-full bg-black/50 backdrop-blur-sm border border-primary/20 px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo className="h-8 w-auto" />
        </Link>
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-8">
            {navLinks.map(({ href, label }) => (
                <Link key={label} href={href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                    {label}
                </Link>
            ))}
        </nav>
        <div className="hidden md:flex items-center justify-end">
          <Button className="font-bold rounded-full" size="lg">Book a Free Call</Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 py-6">
                <Link href="/" className="flex items-center space-x-2">
                    <Logo className="h-8 w-auto" />
                </Link>
                <nav className="grid gap-4">
                    {navLinks.map(({ href, label }) => (
                        <Link key={label} href={href} className="text-base font-medium text-muted-foreground hover:text-primary transition-colors">
                            {label}
                        </Link>
                    ))}
                </nav>
                <Button className="font-bold rounded-full mt-4" size="lg">Book a Free Call</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
