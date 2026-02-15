
import React from 'react';

const Phases: React.FC = () => {
  return (
    <section id="phases" className="py-24 md:py-40 bg-slate-900 relative overflow-hidden">
      {/* Decorative text watermark */}
      <div className="absolute top-0 right-0 text-[300px] font-black text-white/5 select-none pointer-events-none translate-x-1/2">02</div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="mono text-[#005bb7] mb-6 font-black uppercase tracking-[0.4em]">The Architecture</div>
            <h2 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter">Two Stages. <br /> <span className="text-white/30">Total Immersion.</span></h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="group bg-white/5 border border-white/10 p-12 rounded-[48px] hover:bg-white/10 hover:border-[#005bb7]/50 transition-all duration-500">
             <div className="mono text-[#005bb7] text-sm font-black mb-8 tracking-[0.3em]">STAGE 01</div>
             <h3 className="text-4xl font-black text-white mb-8 tracking-tight">The Mastery <br /> Workshops</h3>
             <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
               Deep-dive sessions focusing on narrative design, business model integrity, and executive presence.
             </p>
             <div className="h-[1px] w-full bg-white/10 mb-10"></div>
             <ul className="space-y-4 mb-12">
               {['VC Narrative Design', 'Financial Clarity', 'Psychology of Sales'].map((item, idx) => (
                 <li key={idx} className="flex items-center gap-4 text-white/70 font-bold uppercase text-xs tracking-widest">
                    <div className="w-2 h-2 bg-[#005bb7]"></div>
                    {item}
                 </li>
               ))}
             </ul>
             <div className="inline-flex items-center gap-4 text-white font-black uppercase tracking-widest text-xs group-hover:gap-6 transition-all group-hover:text-[#005bb7]">
               Phase One <span className="text-[#005bb7]">→</span>
             </div>
          </div>

          <div className="group bg-[#005bb7] p-12 rounded-[48px] hover:shadow-2xl hover:shadow-[#005bb7]/30 transition-all duration-500">
             <div className="mono text-white/50 text-sm font-black mb-8 tracking-[0.3em]">STAGE 02</div>
             <h3 className="text-4xl font-black text-white mb-8 tracking-tight">The Grand <br /> Competition</h3>
             <p className="text-white/80 text-lg mb-10 leading-relaxed font-medium">
               A high-stakes finale where the top 10 finalists present their vision to a panel of global leaders.
             </p>
             <div className="h-[1px] w-full bg-white/20 mb-10"></div>
             <ul className="space-y-4 mb-12">
               {['Stage Pitching', 'Networking Gala', 'Funding Opportunities'].map((item, idx) => (
                 <li key={idx} className="flex items-center gap-4 text-white font-bold uppercase text-xs tracking-widest">
                    <div className="w-2 h-2 bg-white"></div>
                    {item}
                 </li>
               ))}
             </ul>
             <div className="inline-flex items-center gap-4 text-white font-black uppercase tracking-widest text-xs group-hover:gap-6 transition-all">
               The Finale <span>→</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Phases;
