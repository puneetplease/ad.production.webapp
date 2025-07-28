
import Header from '@/components/header';
import Footer from '@/components/footer';
import ContactForm from '@/components/contact-form';

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col text-foreground">
      <Header />
      <main className="flex-1">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
