import Header from '@/components/header';
import Hero from '@/components/hero';
import Features from '@/components/features';
import CtaOptimizer from '@/components/cta-optimizer';
import Faq from '@/components/faq';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <CtaOptimizer />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
