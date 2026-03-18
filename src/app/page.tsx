import Navigation from '@/components/Navigation';
import HeroNew from '@/components/HeroNew';
import ServiceGrid from '@/components/ServiceGrid';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navigation />
      <HeroNew />
      <ServiceGrid />
      <Contact />
      <Footer />
    </main>
  );
}
