
import React from 'react';
import { SlideLeft, StaggerContainer, StaggerItem } from './Animations';
import { useLanguage } from '../i18n/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 md:py-40 border-t border-slate-100 bg-[#fcfcfc] relative overflow-hidden">
      {/* Section Specific Watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[15vw] font-black text-slate-900/[0.01] rotate-[-90deg] origin-left select-none pointer-events-none uppercase tracking-[0.2em]">
        {t.about.watermark}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <SlideLeft>
            <div className="relative">
              <div className="absolute -left-12 -top-12 text-[120px] font-black text-slate-100 -z-10 select-none">01</div>
              <div className="mono text-[#005bb7] mb-6 font-black uppercase tracking-widest">{t.about.sectionLabel}</div>
              <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[0.95] tracking-tighter text-slate-900">
                {t.about.heading1} <br /> <span className="text-[#005bb7]">NEXT</span> {t.about.heading2}
              </h2>
              <div className="space-y-8 text-slate-600 text-xl font-medium leading-relaxed">
                <p>
                  {t.about.paragraph1} <strong className="text-slate-900">{t.about.paragraph1Bold1}</strong>{t.about.paragraph1OrganizedBy}<strong className="text-slate-900 underline decoration-[#005bb7] decoration-4">{t.about.paragraph1Bold2}</strong>{t.about.paragraph2}
                </p>
                <p>
                  {t.about.paragraph3Start}<strong className="text-slate-900 underline decoration-[#005bb7] decoration-4">{t.about.paragraph3Bold}</strong>{t.about.paragraph3End}
                </p>
              </div>
            </div>
          </SlideLeft>
          
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.1}>
            <StaggerItem>
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 p-6 md:p-10 rounded-3xl shadow-sm hover:shadow-xl hover:border-[#005bb7]/30 transition-all duration-300 group hover:-translate-y-2 cursor-pointer">
                <div className="text-4xl md:text-5xl font-black mb-4 text-[#005bb7] group-hover:scale-110 origin-left transition-transform duration-300">{t.about.statCross}</div>
                <p className="text-[10px] md:text-xs text-slate-400 uppercase tracking-widest font-black mono group-hover:text-slate-600 transition-colors duration-300">{t.about.statCrossLabel}</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#005bb7] p-6 md:p-10 rounded-3xl shadow-2xl shadow-[#005bb7]/20 flex flex-col justify-end min-h-[160px] md:min-h-[200px] hover:shadow-[#005bb7]/40 transition-all duration-300 group hover:-translate-y-2 cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 pointer-events-none"></div>
                <div className="text-3xl md:text-4xl font-black mb-2 text-white uppercase italic group-hover:scale-110 origin-left transition-transform duration-300 relative z-10">{t.about.statImpact}</div>
                <p className="text-[10px] md:text-xs text-white/70 uppercase tracking-widest font-black mono group-hover:text-white/90 transition-colors duration-300 relative z-10">{t.about.statImpactLabel}</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-slate-900 p-6 md:p-10 rounded-3xl shadow-2xl hover:shadow-slate-900/40 transition-all duration-300 group hover:-translate-y-2 cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 pointer-events-none"></div>
                <div className="text-3xl md:text-4xl font-black mb-2 text-white group-hover:scale-110 origin-left transition-transform duration-300 relative z-10">{t.about.statTop5}</div>
                <p className="text-[10px] md:text-xs text-slate-400 uppercase tracking-widest font-black mono group-hover:text-slate-300 transition-colors duration-300 relative z-10">{t.about.statTop5Label}</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-slate-100/80 backdrop-blur-sm border border-slate-200 p-6 md:p-10 rounded-3xl shadow-sm hover:shadow-xl hover:border-slate-300 hover:bg-white transition-all duration-300 group hover:-translate-y-2 cursor-pointer">
                <div className="text-3xl md:text-4xl font-black mb-2 text-slate-900 group-hover:scale-110 origin-left transition-transform duration-300">{t.about.statExpert}</div>
                <p className="text-[10px] md:text-xs text-slate-400 uppercase tracking-widest font-black mono group-hover:text-slate-600 transition-colors duration-300">{t.about.statExpertLabel}</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default About;
