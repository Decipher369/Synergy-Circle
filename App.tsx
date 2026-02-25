import React, { useEffect, useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Phases from './components/Phases';
import Eligibility from './components/Eligibility';
import PrizePool from './components/PrizePool';
import ValueProp from './components/ValueProp';
import Timeline from './components/Timeline';
import Registration from './components/Registration';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);

      if (currentY > 300) {
        // Scrolling down → hide, scrolling up → show
        setNavVisible(currentY < lastScrollY.current);
      } else {
        setNavVisible(true);
      }

      lastScrollY.current = currentY;
    };
    const handleMouseMove = (e: MouseEvent) => {
      // If mouse is within top 50px, show nav
      if (e.clientY < 50) {
        setNavVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      {/* Global Watermark Elements */}
      <div className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Liquid Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-[#005bb7]/[0.03] blur-[120px] animate-morph"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-500/[0.02] blur-[100px] animate-morph" style={{ animationDelay: '4s' }}></div>

        <div className="absolute top-[20%] -left-[10%] text-[30vw] font-black text-slate-900/[0.02] rotate-[-15deg] whitespace-nowrap leading-none">
          SYNERGY
        </div>
        <div className="absolute bottom-[10%] -right-[5%] text-[25vw] font-black text-[#005bb7]/[0.02] rotate-[10deg] whitespace-nowrap leading-none">
          CIRCLE
        </div>
      </div>

      <div className="relative z-10">
        <Navbar scrolled={scrolled} visible={navVisible} />
        <main>
          <Hero />
          <About />
          <Phases />
          <Eligibility />
          <PrizePool />
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
