
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Phases from './components/Phases';
import ValueProp from './components/ValueProp';
import Timeline from './components/Timeline';
import Registration from './components/Registration';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      {/* Global Watermark Elements */}
      <div className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <div className="absolute top-[20%] -left-[10%] text-[30vw] font-black text-slate-900/[0.02] rotate-[-15deg] whitespace-nowrap leading-none">
          SYNERGY
        </div>
        <div className="absolute bottom-[10%] -right-[5%] text-[25vw] font-black text-[#005bb7]/[0.02] rotate-[10deg] whitespace-nowrap leading-none">
          CIRCLE
        </div>
      </div>

      <div className="relative z-10">
        <Navbar scrolled={scrolled} />
        <main>
          <Hero />
          <About />
          <Phases />
          <ValueProp />
          <Timeline />
          <Registration />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default App;
