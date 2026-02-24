
import React from 'react';
import { FadeUp } from './Animations';

const Timeline: React.FC = () => {
  const steps = [
    { date: "Feb 25, 2026", event: "Official Reveal", status: "Registration Open", icon: "🚀" },
    { date: "Mar 22, 2026", event: "Registration Closes", status: "Final Deadline", icon: "📋" },
    { date: "Mar 28, 2026", event: "Pitch Olympics Workshop", status: "Phase 1", icon: "🎓" },
    { date: "Apr 25, 2026", event: "Competition — First Round", status: "Phase 2 · Day 1", icon: "🎤" },
    { date: "Apr 26, 2026", event: "The Grand Finale", status: "Phase 2 · Day 2", icon: "🏆" },
  ];

  return (
    <section id="timeline" className="pt-16 md:pt-24 pb-8 overflow-hidden bg-white relative">
      {/* Background Aesthetics */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Large decorative number */}
        <div className="absolute -top-10 -left-10 text-[400px] font-black text-slate-900/[0.015] leading-none tracking-tighter select-none">
          2026
        </div>

        {/* Floating gradient orbs */}
        <div className="absolute top-[10%] right-[5%] w-[350px] h-[350px] bg-[#005bb7]/[0.04] blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-[15%] left-[10%] w-[280px] h-[280px] bg-indigo-300/[0.04] blur-[100px] rounded-full" style={{ animation: 'float 8s ease-in-out infinite reverse' }}></div>
        <div className="absolute top-[40%] right-[30%] w-[200px] h-[200px] bg-sky-200/[0.05] blur-[80px] rounded-full" style={{ animation: 'float 10s ease-in-out infinite' }}></div>

        {/* Decorative geometric shapes */}
        <div className="absolute top-[15%] right-[12%] w-20 h-20 border-2 border-slate-100 rounded-2xl rotate-12" style={{ animation: 'float 7s ease-in-out infinite' }}></div>
        <div className="absolute bottom-[20%] left-[8%] w-14 h-14 border-2 border-[#005bb7]/10 rounded-full" style={{ animation: 'float 9s ease-in-out infinite reverse' }}></div>
        <div className="absolute top-[60%] right-[8%] w-8 h-8 bg-[#005bb7]/[0.06] rounded-lg rotate-45"></div>
        <div className="absolute top-[25%] left-[15%] w-3 h-3 bg-[#005bb7]/10 rounded-full"></div>
        <div className="absolute bottom-[30%] right-[20%] w-4 h-4 bg-slate-200 rounded-full"></div>
        <div className="absolute top-[70%] left-[25%] w-6 h-6 border-2 border-slate-100 rounded-full"></div>

        {/* Diagonal lines */}
        <div className="absolute top-0 right-[20%] w-[1px] h-[200px] bg-gradient-to-b from-transparent via-slate-100 to-transparent rotate-[20deg] origin-top"></div>
        <div className="absolute bottom-0 left-[15%] w-[1px] h-[180px] bg-gradient-to-t from-transparent via-slate-100 to-transparent rotate-[-15deg] origin-bottom"></div>

        {/* Corner decorative elements */}
        <div className="absolute top-12 right-12 flex flex-col items-end gap-1.5 opacity-30">
          <div className="w-12 h-[2px] bg-[#005bb7]"></div>
          <div className="w-8 h-[2px] bg-[#005bb7]"></div>
          <div className="w-4 h-[2px] bg-[#005bb7]"></div>
        </div>
        <div className="absolute bottom-12 left-12 flex flex-col gap-1.5 opacity-30">
          <div className="w-4 h-[2px] bg-slate-300"></div>
          <div className="w-8 h-[2px] bg-slate-300"></div>
          <div className="w-12 h-[2px] bg-slate-300"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeUp>
          <div className="text-center mb-20">
            <div className="mono text-[#005bb7] mb-6 font-black uppercase tracking-[0.5em]">The Roadmap</div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4">Key Milestones</h2>
            <p className="text-slate-400 text-lg font-medium max-w-lg mx-auto">Your journey from idea to impact — mapped out.</p>
          </div>
        </FadeUp>
        
        {/* Timeline Cards - Vertical on mobile, horizontal on desktop */}
        <div className="relative">
          {/* Connector Line */}
          <div className="absolute left-8 md:left-0 top-0 md:top-1/2 w-[2px] md:w-full h-full md:h-[2px] bg-gradient-to-b md:bg-gradient-to-r from-[#005bb7]/20 via-slate-200 to-[#005bb7]/20 md:-translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative group">
                {/* Dot on the line */}
                <div className="absolute left-8 md:left-1/2 top-0 md:top-0 -translate-x-1/2 z-20">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border-4 border-white transition-all duration-500 shadow-lg ${
                    i === 0 
                      ? 'bg-[#005bb7] shadow-[#005bb7]/20 rotate-[-6deg] scale-110' 
                      : 'bg-white/80 backdrop-blur-xl border-slate-100 group-hover:bg-[#005bb7]/5 group-hover:border-[#005bb7]/20 group-hover:rotate-[-6deg]'
                  }`}>
                    <span className={`text-2xl transition-transform duration-500 group-hover:scale-125 ${i === 0 ? '' : ''}`}>
                      {step.icon}
                    </span>
                  </div>
                </div>
                
                {/* Content Card */}
                <div className="pl-24 md:pl-0 md:pt-24">
                  <div className={`bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl p-6 shadow-[0_4px_30px_-10px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_-10px_rgba(0,91,183,0.1)] hover:-translate-y-1 transition-all duration-500 relative overflow-hidden ${
                    i === 0 ? 'border-[#005bb7]/20 shadow-[0_4px_30px_-10px_rgba(0,91,183,0.08)]' : ''
                  }`}>
                    {/* Subtle glass refraction */}
                    <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#005bb7]/[0.03] blur-[25px] rounded-full"></div>
                    
                    <span className="mono text-[#005bb7] text-[11px] font-black mb-3 tracking-widest uppercase block">{step.date}</span>
                    <h4 className="text-lg font-black text-slate-900 mb-3 tracking-tight leading-tight">{step.event}</h4>
                    <span className={`inline-block px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.2em] font-black transition-all ${
                      i === 0 
                        ? 'bg-[#005bb7]/10 text-[#005bb7] border border-[#005bb7]/20' 
                        : 'bg-slate-50/80 border border-slate-100 text-slate-400 group-hover:border-[#005bb7]/20 group-hover:text-[#005bb7] group-hover:bg-[#005bb7]/5'
                    }`}>
                      {step.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-3">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-slate-200"></div>
            <div className="w-2 h-2 bg-[#005bb7]/20 rounded-full"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">Feb — Apr 2026</span>
            <div className="w-2 h-2 bg-[#005bb7]/20 rounded-full"></div>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-slate-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
