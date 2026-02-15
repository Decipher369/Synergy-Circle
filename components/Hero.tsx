
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 flex flex-col items-start space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          
          <div className="flex items-center gap-3 px-4 py-2 bg-slate-50 border border-slate-100 rounded-full animate-bounce duration-[3000ms]">
            <div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rotate-45"></div>
          

          <div className="mono text-xs uppercase tracking-[0.3em] text-emerald-600 font-bold px-4 py-2 border border-emerald-500/20 rounded-full bg-emerald-500/10">
            April — May 2024
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold leading-[1.1] tracking-tight text-gradient">
            Where Ideas <br />
            <span className="accent-gradient">Turn Into Impact.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl font-light leading-relaxed">
            Synergy Circle is a premier professional development initiative for the next generation of startup founders and innovators. 
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#apply" className="px-8 py-4 bg-emerald-500 text-white rounded-full font-bold text-lg hover:bg-emerald-600 hover:scale-105 transition-all duration-300 text-center shadow-lg shadow-emerald-500/20">
              Apply Now
            </a>
            <a href="#about" className="px-8 py-4 bg-slate-100 text-slate-900 rounded-full font-bold text-lg hover:bg-slate-200 transition-all duration-300 text-center border border-slate-200">
              Learn More
            </a>
          </div>
          
          <div className="flex items-center gap-6 pt-12 border-t border-slate-100 w-full">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm hover:scale-110 hover:z-10 transition-transform cursor-pointer">
                  <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="Participant" />
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-400 font-medium italic">
              Join 150+ student founders this cohort.
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute right-0 bottom-20 hidden lg:block translate-x-1/4 select-none pointer-events-none opacity-[0.03]">
        <span className="text-[300px] font-black leading-none text-slate-900">SC</span>
      </div>
    </section>
  );
};

export default Hero;
