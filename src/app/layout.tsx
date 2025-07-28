import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import Background from './background';
import './globals.css';
import { Open_Sans, Montserrat } from 'next/font/google';

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
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <Background />
        <div className="relative z-10">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
