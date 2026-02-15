
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        <div className="lg:col-span-8 flex flex-col items-start space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          
          <div className="flex items-center gap-4 px-5 py-2.5 bg-white border border-slate-100 rounded-full shadow-sm">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 100 100" className="w-6 h-6 text-slate-900 fill-current">
                <path d="M50 0c-27.6 0-50 22.4-50 50s22.4 50 50 50 50-22.4 50-50-22.4-50-50-50zm0 90c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"/>
                <circle cx="50" cy="50" r="15"/>
                <path d="M50 25l3 10h10l-8 6 3 10-8-6-8 6 3-10-8-6h10z"/>
              </svg>
              <div className="w-[1px] h-4 bg-slate-200 mx-1"></div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Rotaract <span className="text-slate-900">SLIIT</span>
              </span>
            </div>
            <div className="w-[1px] h-4 bg-slate-200"></div>
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">
              2024 Cohort
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold leading-[1.05] tracking-tight text-gradient">
            Where Ideas <br />
            <span className="accent-gradient">Turn Into Impact.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl font-light leading-relaxed">
            Synergy Circle is a premier professional development initiative for the next generation of startup founders and innovators. 
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#apply" className="px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-emerald-600 hover:scale-105 transition-all duration-300 text-center shadow-xl shadow-slate-900/10">
              Apply Now
            </a>
            <a href="#about" className="px-10 py-5 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-50 transition-all duration-300 text-center border border-slate-200">
              Learn More
            </a>
          </div>
          
          <div className="flex items-center gap-6 pt-12 border-t border-slate-100 w-full max-w-lg">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm hover:scale-110 hover:z-10 transition-transform cursor-pointer">
                  <img src={`https://picsum.photos/seed/user${i*2}/100/100`} alt="Participant" />
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-400 font-medium italic">
              Join <span className="text-slate-900 font-bold">150+</span> student founders this year.
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute right-0 bottom-20 hidden lg:block translate-x-1/4 select-none pointer-events-none opacity-[0.03]">
        <span className="text-[400px] font-black leading-none text-slate-900">SYNERGY</span>
      </div>
    </section>
  );
};

export default Hero;
