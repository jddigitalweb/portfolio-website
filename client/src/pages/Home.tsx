import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Features } from "@/components/sections/Features";
import { About } from "@/components/sections/About";
import { CtaSection } from "@/components/sections/CtaSection";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <Process />
      <Features />
      <About />
      <CtaSection />
      <Contact />
      <Footer />
    </main>
  );
}
