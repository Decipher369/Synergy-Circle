
import React, { useState, useCallback, useRef } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

interface Rocket {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  rotation: number;
  size: number;
  duration: number;
  char: string;
}

const Hero: React.FC = () => {
  const [rockets, setRockets] = useState<Rocket[]>([]);
  const [splitActive, setSplitActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const rocketIdRef = useRef(0);
  const splitTimeoutRef = useRef<number | null>(null);
  const [isSpawning, setIsSpawning] = useState(false);
  const { t } = useLanguage();

  const spawnRockets = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerY = rect.height / 2;

    const newRockets: Rocket[] = [];
    const count = 3 + Math.floor(Math.random() * 3);

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = 150 + Math.random() * 300;
      const spawnX = Math.random() * rect.width;
      rocketIdRef.current += 1;

      newRockets.push({
        id: rocketIdRef.current,
        x: spawnX,
        y: centerY + (Math.random() - 0.5) * 10,
        targetX: spawnX + Math.cos(angle) * distance,
        targetY: centerY + Math.sin(angle) * distance,
        rotation: (angle * 180) / Math.PI + 90,
        size: 14 + Math.random() * 10,
        duration: 1.5 + Math.random() * 1,
        char: ['🚀', '🎯', '💡', '💰', '\u2764'][Math.floor(Math.random() * 5)],
      });
    }

    setRockets((prev) => [...prev, ...newRockets]);

    setTimeout(() => {
      setRockets((prev) =>
        prev.filter((r) => !newRockets.find((nr) => nr.id === r.id))
      );
    }, 3000);
  }, []);

  const handleInteraction = useCallback(() => {
    setSplitActive(true);
    
    if (!isSpawning) {
      spawnRockets();
      setIsSpawning(true);
      setTimeout(() => setIsSpawning(false), 800);
    }
    
    if (splitTimeoutRef.current) {
      window.clearTimeout(splitTimeoutRef.current);
    }
    
    splitTimeoutRef.current = window.setTimeout(() => {
      setSplitActive(false);
    }, 2000);
  }, [spawnRockets, isSpawning]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 md:pt-32 overflow-hidden textured-bg">
      {/* Background Watermark Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <div className="hero-watermark-sc absolute text-[500px] md:text-[800px] font-black tracking-tighter leading-none text-slate-900/[0.03] -translate-y-10">
          SC
        </div>
        <div className="hero-watermark-text absolute text-[12vw] font-black text-[#005bb7]/[0.02] uppercase tracking-[0.5em] mt-80">
          Synergy Circle
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
          
          <div className="flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-1000">
             <div className="mono text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 mb-4 px-4 py-1.5 border border-slate-200 rounded-full bg-white/50 backdrop-blur-sm">
                {t.hero.badge}
             </div>
             
             <div 
               ref={containerRef}
               className="relative group cursor-pointer"
               onMouseEnter={handleInteraction}
               onMouseLeave={() => setSplitActive(false)}
               onTouchStart={handleInteraction}
             >
                {/* Rocket Particles */}
                {rockets.map((rocket) => (
                  <div
                    key={rocket.id}
                    className="absolute pointer-events-none z-30"
                    style={{
                      left: rocket.x,
                      top: rocket.y,
                      fontSize: rocket.size,
                      transform: `rotate(${rocket.rotation}deg)`,
                      animation: `rocketFly ${rocket.duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
                      '--tx': `${rocket.targetX - rocket.x}px`,
                      '--ty': `${rocket.targetY - rocket.y}px`,
                    } as React.CSSProperties}
                  >
                    <span style={{ 
                      color: rocket.char === '\u2764' ? '#005bb7' : 'inherit', 
                      filter: rocket.char === '\u2764' ? 'drop-shadow(0 0 4px rgba(0,91,183,0.4))' : 'none' 
                    }}>
                      {rocket.char}
                    </span>
                  </div>
                ))}

               {/* Sliced Effect Implementation - Mobile */}
               <div className="flex lg:hidden flex-wrap justify-center gap-[0.3em] text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-none uppercase select-none">
                 <div className="sliced-container">
                    <div className={`slice-top transition-transform duration-700 ${splitActive ? '-translate-y-2' : ''}`}>SYNERGY</div>
                    <div className={`slice-bottom transition-transform duration-700 ${splitActive ? 'translate-y-2' : ''}`}>SYNERGY</div>
                 </div>
                 <div className="sliced-container">
                    <div className={`slice-top transition-transform duration-700 ${splitActive ? '-translate-y-2' : ''}`}>CIRCLE</div>
                    <div className={`slice-bottom transition-transform duration-700 ${splitActive ? 'translate-y-2' : ''}`}>CIRCLE</div>
                 </div>
               </div>

               {/* Sliced Effect Implementation - Desktop */}
               <div className="hidden lg:inline-block relative sliced-container text-[100px] xl:text-[140px] font-black tracking-tighter leading-none uppercase select-none whitespace-nowrap">
                  <div className={`slice-top transition-transform duration-700 ${splitActive ? '-translate-y-2' : ''}`}>SYNERGY CIRCLE</div>
                  <div className={`slice-bottom transition-transform duration-700 ${splitActive ? 'translate-y-2' : ''}`}>SYNERGY CIRCLE</div>
               </div>
             </div>
          </div>

          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 md:mb-8 tracking-tight">
              <span className="text-slate-400">{t.hero.tagline}</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-xl mx-auto">
              {t.hero.description} <span className="text-slate-900 font-bold">{t.hero.rotaractSliit}</span> and <span className="text-[#005bb7] font-bold">{t.hero.sliitBs}</span>.
            </p>
          </div>

          <div className="flex flex-col gap-6 items-center animate-in fade-in duration-1000 delay-500">
            <button 
              onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-3 px-6 py-4 bg-white/80 backdrop-blur-sm border border-emerald-200 rounded-full shadow-sm mb-2 cursor-pointer hover:shadow-md hover:border-emerald-300 transition-all duration-300"
            >
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-black uppercase tracking-widest text-emerald-600">{t.hero.registrationOpen}</span>
                <svg className="w-4 h-4 text-emerald-500 group-hover:translate-y-1 transition-transform duration-300 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Graphic */}
      <div className="absolute bottom-12 right-12 hidden lg:flex flex-col items-end animate-float">
         <div className="relative w-24 h-24 mb-2">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#005bb7] opacity-20">
               <path d="M20 80 L80 20 M80 20 L60 20 M80 20 L80 40" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-10 h-10 border-4 border-[#005bb7] rounded-lg rotate-12"></div>
            </div>
         </div>
         <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#005bb7] origin-right">{t.hero.explore}</span>
      </div>

      {/* Rocket animation keyframes */}
      <style>{`
        @keyframes rocketFly {
          0% {
            transform: translate(0, 0) rotate(var(--rotation, 0deg)) scale(0.3);
            opacity: 1;
          }
          20% {
            opacity: 1;
            transform: translate(calc(var(--tx) * 0.15), calc(var(--ty) * 0.15)) scale(1);
          }
          100% {
            transform: translate(var(--tx), var(--ty)) scale(0.4);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
