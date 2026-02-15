
import React from 'react';

const Phases: React.FC = () => {
  return (
    <section id="phases" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mono text-emerald-600 mb-6 font-bold uppercase tracking-[0.2em]">The Journey</div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900">Two Phases. One Goal.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative bg-white border border-slate-100 p-12 rounded-[40px] hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-500 overflow-hidden">
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/5 blur-3xl rounded-full group-hover:bg-emerald-500/10 transition-all"></div>
             
             <div className="mono text-emerald-600 text-sm font-bold mb-4">PHASE 01</div>
             <div className="flex justify-between items-start mb-8">
               <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Business Pitching Workshop</h3>
               <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                 </svg>
               </div>
             </div>
             <p className="text-slate-500 text-lg mb-8 leading-relaxed">
               An intensive online masterclass led by industry veterans. Learn the art of storytelling, financial modeling, and the psychological cues of high-stakes pitching.
             </p>
             <ul className="space-y-3 mb-8">
               {['Live Interactive Sessions', 'Slide Deck Audits', 'Narrative Structuring', 'Q&A with VCs'].map((item, idx) => (
                 <li key={idx} className="flex items-center gap-3 text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    {item}
                 </li>
               ))}
             </ul>
             <div className="inline-flex items-center gap-2 text-slate-900 font-bold group-hover:gap-4 group-hover:text-emerald-600 transition-all">
               Online Experience <span className="text-emerald-500">→</span>
             </div>
          </div>

          <div className="group relative bg-white border border-slate-100 p-12 rounded-[40px] hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 overflow-hidden">
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 blur-3xl rounded-full group-hover:bg-blue-500/10 transition-all"></div>
             
             <div className="mono text-blue-600 text-sm font-bold mb-4">PHASE 02</div>
             <div className="flex justify-between items-start mb-8">
               <h3 className="text-3xl md:text-4xl font-bold text-slate-900">The Final Competition</h3>
               <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                 </svg>
               </div>
             </div>
             <p className="text-slate-500 text-lg mb-8 leading-relaxed">
               The stage is set. The top 10 teams from Phase 01 present their refined startups to a live panel of judges and a room full of potential investors.
             </p>
             <ul className="space-y-3 mb-8">
               {['Live Stage Pitching', 'Investor Networking', 'Award Ceremony', 'Professional Photoshoot'].map((item, idx) => (
                 <li key={idx} className="flex items-center gap-3 text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    {item}
                 </li>
               ))}
             </ul>
             <div className="inline-flex items-center gap-2 text-slate-900 font-bold group-hover:gap-4 group-hover:text-blue-600 transition-all">
               In-Person Finale <span className="text-blue-500">→</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Phases;
