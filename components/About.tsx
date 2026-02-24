
import React from 'react';
import { FadeUp, SlideLeft, SlideRight, StaggerContainer, StaggerItem } from './Animations';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-40 border-t border-slate-100 bg-[#fcfcfc] relative overflow-hidden">
      {/* Section Specific Watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[15vw] font-black text-slate-900/[0.01] rotate-[-90deg] origin-left select-none pointer-events-none uppercase tracking-[0.2em]">
        Innovation
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <SlideLeft>
            <div className="relative">
              <div className="absolute -left-12 -top-12 text-[120px] font-black text-slate-100 -z-10 select-none">01</div>
              <div className="mono text-[#005bb7] mb-6 font-black uppercase tracking-widest">The Mission</div>
              <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[0.95] tracking-tighter text-slate-900">
                Forging the <br /> <span className="text-[#005bb7]">NEXT</span> standard.
              </h2>
              <div className="space-y-8 text-slate-600 text-xl font-medium leading-relaxed">
                <p>
                  Synergy Circle 2026 is an <strong className="text-slate-900">inter-university entrepreneurial initiative</strong> organized by the <strong className="text-slate-900 underline decoration-[#005bb7] decoration-4">Rotaract Club of SLIIT</strong>, designed to empower young innovators and future business leaders.
                </p>
                <p>
                  In partnership with the <strong className="text-slate-900 underline decoration-[#005bb7] decoration-4">SLIIT Business School</strong>, we provide the elite resources required for global-scale impact — from guided mentorship and capacity-building to competitive pitching on a grand stage.
                </p>
              </div>
            </div>
          </SlideLeft>
          
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6" staggerDelay={0.15}>
            <StaggerItem>
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 p-10 rounded-3xl shadow-sm hover:border-[#005bb7]/30 transition-all group">
                <div className="text-5xl font-black mb-4 text-[#005bb7] group-hover:scale-110 origin-left transition-transform">Inter</div>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-black mono">University Initiative</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#005bb7] p-10 rounded-3xl shadow-2xl shadow-[#005bb7]/20 flex flex-col justify-end min-h-[200px]">
                <div className="text-4xl font-black mb-2 text-white uppercase italic">Impact</div>
                <p className="text-xs text-white/70 uppercase tracking-widest font-black mono">Driven Curriculum</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-slate-900 p-10 rounded-3xl shadow-2xl">
                <div className="text-4xl font-black mb-2 text-white">Top 5</div>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-black mono">Finalist Track</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-slate-100/80 backdrop-blur-sm border border-slate-200 p-10 rounded-3xl shadow-sm">
                <div className="text-4xl font-black mb-2 text-slate-900">Expert</div>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-black mono">Mentorship</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default About;
