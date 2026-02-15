
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Phases from './components/Phases';
import ValueProp from './components/ValueProp';
import Timeline from './components/Timeline';
import Registration from './components/Registration';
import Footer from './components/Footer';

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
    <div className="flex flex-col min-h-screen">
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
    </div>
  );
};

export default App;
