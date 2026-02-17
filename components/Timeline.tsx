
import React from 'react';

const Timeline: React.FC = () => {
  const steps = [
    { date: "Feb 20, 2026", event: "Official Reveal", status: "Registration Open" },
    { date: "Mar 22, 2026", event: "Applications Close", status: "Final Deadline" },
    { date: "Mar 28, 2026", event: "Mastery Workshop", status: "Phase 1" },
    { date: "Apr 25, 2026", event: "Competition Kickoff", status: "First Round" },
    { date: "Apr 26, 2026", event: "The Grand Finale", status: "Winner Reveal" },
  ];

  return (
    <section id="timeline" className="py-24 md:py-40 overflow-hidden textured-bg bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <div className="mono text-[#005bb7] mb-6 font-black uppercase tracking-[0.5em]">The Roadmap</div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">Key Milestones 2026</h2>
        </div>
        
        <div className="relative flex flex-col md:flex-row items-start justify-between gap-16 md:gap-4 px-4">
          {/* Connector Line */}
          <div className="absolute left-[39px] md:left-0 top-0 md:top-[39px] w-[2px] md:w-full h-full md:h-[2px] bg-slate-100 -z-10"></div>
          
          {steps.map((step, i) => (
            <div key={i} className="relative flex md:flex-col items-start gap-10 md:gap-10 w-full md:w-auto group">
              {/* Dot */}
              <div className={`w-20 h-20 rounded-full flex items-center justify-center border-8 border-white transition-all duration-700 shadow-xl ${i === 0 ? 'bg-[#005bb7] scale-110 shadow-[#005bb7]/20 rotate-[-15deg]' : 'bg-slate-100 group-hover:bg-[#005bb7]/10'}`}>
                {i === 0 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span className="mono text-sm font-black text-slate-400 group-hover:text-[#005bb7]">0{i+1}</span>
                )}
              </div>
              
              <div className="flex flex-col">
                <span className="mono text-[#005bb7] text-xs font-black mb-2 tracking-widest uppercase">{step.date}</span>
                <h4 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">{step.event}</h4>
                <span className="inline-block px-4 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-[9px] uppercase tracking-[0.2em] text-slate-400 font-black self-start group-hover:border-[#005bb7]/20 group-hover:text-[#005bb7] transition-all">
                  {step.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
