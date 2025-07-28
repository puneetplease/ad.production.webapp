import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import Background from './background';
import './globals.css';
import { Open_Sans, Montserrat } from 'next/font/google';
import TargetCursor from '@/components/ui/target-cursor';
import { Suspense } from 'react';
import Loading from './loading';
import { CartProvider } from '@/hooks/use-cart';
import { LoadingProvider } from '@/hooks/use-loading';

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'AD Production',
  description: 'We don\'t just tick boxes we help you build, grow, and sell better online.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${openSans.variable} ${montserrat.variable}`} style={{ colorScheme: 'dark' }} suppressHydrationWarning>
      <head>
          <script src="https://unpkg.com/@lottiefiles/dotlottie-wc@0.6.2/dist/dotlottie-wc.js" type="module"></script>
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <LoadingProvider>
          <CartProvider>
            <TargetCursor spinDuration={2} hideDefaultCursor={true} />
            <Background />
            <div className="relative z-10">
              <Suspense fallback={<Loading />}>
                {children}
              </Suspense>
            </div>
            <Toaster />
          </CartProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
