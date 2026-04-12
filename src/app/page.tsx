import Navigation from '@/components/Navigation';
import HeroNew from '@/components/HeroNew';
import ServiceGrid from '@/components/ServiceGrid';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <div className="w-full max-w-7xl mx-auto overflow-x-hidden">
        <Navigation />
        <HeroNew />
        <ServiceGrid />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
