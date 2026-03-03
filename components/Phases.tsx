
import React from 'react';
import { FadeUp, StaggerContainer, StaggerItem } from './Animations';
import { useLanguage } from '../i18n/LanguageContext';

interface PhasesProps {
  onNavigateGuidelines?: () => void;
}

const Phases: React.FC<PhasesProps> = ({ onNavigateGuidelines }) => {
  const { t } = useLanguage();

  return (
    <section id="phases" className="py-16 md:py-40 bg-slate-900 relative overflow-hidden">
      {/* Decorative text watermark */}
      <div className="absolute top-0 right-0 text-[300px] font-black text-white/5 select-none pointer-events-none translate-x-1/3">2</div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeUp>
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="mono text-[#005bb7] mb-6 font-black uppercase tracking-[0.4em]">{t.phases.sectionLabel}</div>
              <h2 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter">{t.phases.heading1} <br /> <span className="text-white/30">{t.phases.heading2}</span></h2>
            </div>
          </div>
        </FadeUp>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-12" staggerDelay={0.2}>
          {/* Phase 1 */}
          <StaggerItem>
            <div className="group relative overflow-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-12 rounded-[48px] hover:bg-white/[0.07] hover:border-[#005bb7]/30 transition-all duration-500 shadow-2xl shadow-black/20">
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
               
               <div className="relative z-10">
                 <div className="mono text-[#005bb7] text-sm font-black mb-8 tracking-[0.3em]">{t.phases.phase1Label}</div>
                 <h3 className="text-4xl font-black text-white mb-4 tracking-tight">{t.phases.phase1Title}</h3>
                 <p className="text-[#005bb7] font-black uppercase text-xs tracking-widest mb-8">{t.phases.phase1Subtitle}</p>
                 <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
                   {t.phases.phase1Description}
                 </p>
                 <div className="h-[1px] w-full bg-white/10 mb-10"></div>
                 <ul className="space-y-4 mb-12">
                   {t.phases.phase1Items.map((item, idx) => (
                     <li key={idx} className="flex items-center gap-4 text-white/70 font-bold uppercase text-xs tracking-widest">
                        <div className="w-2 h-2 bg-[#005bb7]"></div>
                        {item}
                     </li>
                   ))}
                 </ul>
                 <button
                   onClick={onNavigateGuidelines}
                   className="inline-flex items-center gap-4 text-white font-black uppercase tracking-widest text-xs group-hover:gap-6 transition-all group-hover:text-[#005bb7] cursor-pointer bg-transparent border-none p-0"
                 >
                   {t.phases.phase1Cta} <span className="text-[#005bb7]">&rarr;</span>
                 </button>
               </div>
            </div>
          </StaggerItem>

          {/* Phase 2 */}
          <StaggerItem>
            <div className="group relative overflow-hidden bg-white/[0.08] backdrop-blur-2xl border border-white/10 p-12 rounded-[48px] hover:shadow-2xl hover:shadow-[#005bb7]/20 transition-all duration-500 shadow-2xl shadow-black/40">
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
               
               <div className="relative z-10">
                 <div className="mono text-white/50 text-sm font-black mb-8 tracking-[0.3em]">{t.phases.phase2Label}</div>
                 <h3 className="text-4xl font-black text-white mb-4 tracking-tight">{t.phases.phase2Title}</h3>
                 <p className="text-white/50 font-black uppercase text-xs tracking-widest mb-8">{t.phases.phase2Subtitle}</p>
                 <div className="space-y-6 mb-10">
                   <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 shadow-inner">
                     <p className="text-white font-black text-sm uppercase tracking-widest mb-2">{t.phases.phase2Day1Title}</p>
                     <p className="text-white/80 text-base leading-relaxed font-medium">
                       {t.phases.phase2Day1Desc}
                     </p>
                   </div>
                   <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 shadow-inner">
                     <p className="text-white font-black text-sm uppercase tracking-widest mb-2">{t.phases.phase2Day2Title}</p>
                     <p className="text-white/80 text-base leading-relaxed font-medium">
                       {t.phases.phase2Day2Desc}
                     </p>
                   </div>
                 </div>
                 <button
                   onClick={onNavigateGuidelines}
                   className="inline-flex items-center gap-4 text-white font-black uppercase tracking-widest text-xs group-hover:gap-6 transition-all cursor-pointer bg-transparent border-none p-0"
                 >
                   {t.phases.phase2Cta} <span className="text-[#005bb7]">&rarr;</span>
                 </button>
               </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Phases;
