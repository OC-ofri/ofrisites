import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { WhyUs } from '@/components/WhyUs';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <Contact />
      
      <footer className="bg-black text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2026 ofrisites. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
