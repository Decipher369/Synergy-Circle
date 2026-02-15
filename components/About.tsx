
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-40 border-t border-slate-100 bg-[#fcfcfc]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="absolute -left-12 -top-12 text-[120px] font-black text-slate-100 -z-10 select-none">01</div>
            <div className="mono text-[#005bb7] mb-6 font-black uppercase tracking-widest">The Mission</div>
            <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[0.95] tracking-tighter text-slate-900">
              Forging the <br /> <span className="text-[#005bb7]">NEXT</span> standard.
            </h2>
            <div className="space-y-8 text-slate-600 text-xl font-medium leading-relaxed">
              <p>
                Synergy Circle is not just another workshop series. It is a high-octane professional engine designed to transform student founders into industry leaders.
              </p>
              <p>
                In partnership with the <strong className="text-slate-900 underline decoration-[#005bb7] decoration-4">SLIIT Business School</strong>, we provide the elite resources required for global-scale impact.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 p-10 rounded-3xl shadow-sm hover:border-[#005bb7]/30 transition-all group">
              <div className="text-5xl font-black mb-4 text-[#005bb7] group-hover:scale-110 origin-left transition-transform">100%</div>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-black mono">Industry Relevance</p>
            </div>
            <div className="bg-[#005bb7] p-10 rounded-3xl shadow-2xl shadow-[#005bb7]/20 flex flex-col justify-end min-h-[200px]">
              <div className="text-4xl font-black mb-2 text-white uppercase italic">Impact</div>
              <p className="text-xs text-white/70 uppercase tracking-widest font-black mono">Driven Curriculum</p>
            </div>
            <div className="bg-slate-900 p-10 rounded-3xl shadow-2xl">
              <div className="text-4xl font-black mb-2 text-white">Top 10</div>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-black mono">Finalist Track</p>
            </div>
            <div className="bg-slate-100 border border-slate-200 p-10 rounded-3xl shadow-sm">
              <div className="text-4xl font-black mb-2 text-slate-900">Expert</div>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-black mono">Mentorship</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
