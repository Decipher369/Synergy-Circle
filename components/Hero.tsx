
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden textured-bg">
      {/* Background Watermark Logo - Layered SC and Full Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <div className="absolute text-[500px] md:text-[800px] font-black tracking-tighter leading-none text-slate-900/[0.03] -translate-y-10">
          SC
        </div>
        <div className="absolute text-[12vw] font-black text-[#005bb7]/[0.02] uppercase tracking-[0.5em] mt-80">
          Synergy Circle
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          
          <div className="flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-1000">
             <div className="mono text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 mb-4 px-4 py-1.5 border border-slate-200 rounded-full bg-white/50 backdrop-blur-sm">
                Professional Development Initiative
             </div>
             
             <div className="relative group">
               {/* Sliced Effect Implementation */}
               <div className="sliced-container text-7xl md:text-[140px] font-black tracking-tighter leading-none uppercase select-none cursor-default">
                  <div className="slice-top transition-transform duration-700 group-hover:-translate-y-4">COMING SOON</div>
                  <div className="slice-bottom transition-transform duration-700 group-hover:translate-y-4">COMING SOON</div>
               </div>
             </div>
          </div>

          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">
              Synergy Circle <br />
              <span className="text-slate-400">Where Ideas Turn Into Impact.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-xl mx-auto">
              Bridging the gap between student innovation and corporate excellence. A collaboration between <span className="text-slate-900 font-bold">Rotaract SLIIT</span> and <span className="text-[#005bb7] font-bold">SLIIT Business School</span>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-center animate-in fade-in duration-1000 delay-500">
            <a href="#apply" className="px-12 py-5 bg-slate-900 text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-[#005bb7] hover:scale-105 transition-all duration-300 shadow-2xl shadow-slate-900/20">
              Get Notified
            </a>
            <div className="flex items-center gap-3 px-6 py-4 bg-white border border-slate-100 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-[#005bb7] rounded-full animate-pulse"></div>
                <span className="text-xs font-black uppercase tracking-widest text-slate-400">Launching Very Soon</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Graphic from Image */}
      <div className="absolute bottom-12 right-12 hidden lg:flex flex-col items-end animate-float">
         <div className="relative w-24 h-24 mb-2">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#005bb7] opacity-20">
               <path d="M20 80 L80 20 M80 20 L60 20 M80 20 L80 40" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-10 h-10 border-4 border-[#005bb7] rounded-lg rotate-12"></div>
            </div>
         </div>
         <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#005bb7] origin-right">Very Soon</span>
      </div>
    </section>
  );
};

export default Hero;
