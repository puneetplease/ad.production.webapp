import Header from '@/components/header';
import Hero from '@/components/hero';
import Features from '@/components/features';
import Pricing from '@/components/pricing';
import Faq from '@/components/faq';
import Footer from '@/components/footer';
import Roadmap from '@/components/roadmap';
import Team from '@/components/team';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Roadmap />
        <Team />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
