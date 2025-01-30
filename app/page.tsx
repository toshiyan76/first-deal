import Header from './components/Header';
import Navbar from './components/Navbar';
import PainPoints from './components/PainPoints';
import Features from './components/Features';
import Process from './components/Process';
import CaseStudy from './components/CaseStudy';
import CTASection from './components/CTASection';
import { Footerdemo } from './components/ui/footer-section';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <PainPoints />
      <Features />
      <Process />
      <CaseStudy />
      <CTASection />
      <Footerdemo />
    </main>
  );
}