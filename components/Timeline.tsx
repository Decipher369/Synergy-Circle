
import React from 'react';

const Timeline: React.FC = () => {
  const steps = [
    { date: "April 05", event: "Applications Open", status: "Upcoming" },
    { date: "April 20", event: "Registration Deadline", status: "Critical" },
    { date: "April 25", event: "Workshop Week", status: "Phase 1" },
    { date: "May 10", event: "Finalists Announced", status: "Selection" },
    { date: "May 25", event: "Synergy Grand Finale", status: "Phase 2" },
  ];

  return (
    <section id="timeline" className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="mono text-emerald-600 mb-4 font-bold uppercase tracking-[0.2em]">The Roadmap</div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Key Milestones</h2>
        </div>
        
        <div className="relative flex flex-col md:flex-row items-start justify-between gap-12 md:gap-4 px-4">
          {/* Connector Line */}
          <div className="absolute left-[31px] md:left-0 top-0 md:top-[31px] w-[2px] md:w-full h-full md:h-[2px] bg-slate-200 -z-10"></div>
          
          {steps.map((step, i) => (
            <div key={i} className="relative flex md:flex-col items-start gap-8 md:gap-8 w-full md:w-auto">
              {/* Dot */}
              <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 border-white transition-all duration-500 shadow-lg ${i === 0 ? 'bg-emerald-500 scale-110 shadow-emerald-500/20' : 'bg-slate-100'}`}>
                {i === 0 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span className="mono text-xs font-bold text-slate-400">0{i+1}</span>
                )}
              </div>
              
              <div className="flex flex-col">
                <span className="mono text-emerald-600 text-sm font-bold mb-1">{step.date}</span>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{step.event}</h4>
                <span className="inline-block px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-[10px] uppercase tracking-widest text-slate-500 font-bold self-start">
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
