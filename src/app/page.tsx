import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import LocalSeoAccordion from '@/components/LocalSeoAccordion';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Header />
      <Hero />
      <Services />
      <Features />
      <LocalSeoAccordion />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}