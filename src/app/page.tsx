import { LangProvider } from "@/context/LangContext";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollBackground from "@/components/ScrollBackground";
import ParticleCanvas from "@/components/ParticleCanvas";
import ScrollFlowLine from "@/components/ScrollFlowLine";

export default function Home() {
  return (
    <LangProvider>
      <ScrollBackground />
      <ParticleCanvas />
      <main className="site-wrapper" style={{ position: "relative" }}>
        <ScrollFlowLine />
        <Nav />
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <About />
        <Pricing />
        <FAQ />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </main>
    </LangProvider>
  );
}
