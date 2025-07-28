import Link from 'next/link';
import { Logo } from '@/components/icons';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center space-x-2">
            <Logo className="h-6 w-6" />
            <span className="font-bold font-headline">AD. Production</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {year} AD. Production. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
