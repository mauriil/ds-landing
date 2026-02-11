import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Pain from '@/components/sections/Pain';
import Insight from '@/components/sections/Insight';
import Solution from '@/components/sections/Solution';
import Cases from '@/components/sections/Cases';
import HowItWorks from '@/components/sections/HowItWorks';
import Benefits from '@/components/sections/Benefits';
import FAQ from '@/components/sections/FAQ';
import Differentiator from '@/components/sections/Differentiator';
import Audience from '@/components/sections/Audience';
import Contact from '@/components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <Hero />
        <div className="section-gradient-separator" />
        <Pain />
        <div className="section-gradient-separator" />
        <Insight />
        <div className="section-gradient-separator" />
        <Solution />
        <div className="section-gradient-separator" />
        <Cases />
        <div className="section-gradient-separator" />
        <HowItWorks />
        <div className="section-gradient-separator" />
        <Benefits />
        <div className="section-gradient-separator" />
        <FAQ />
        <Differentiator />
        <Audience />
        <div className="section-gradient-separator" />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
