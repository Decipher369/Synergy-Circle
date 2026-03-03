
import React from 'react';
import { FadeUp } from './Animations';
import Countdown from './Countdown';
import { useLanguage } from '../i18n/LanguageContext';

const Registration: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="apply" className="py-16 md:pt-8 md:pb-24 bg-[#fcfcfc] textured-bg relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#005bb7]/[0.07] blur-[150px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-400/[0.05] blur-[130px] rounded-full"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <FadeUp>
          <div className="text-center mb-16">
            <div className="mono text-[#005bb7] mb-6 font-black uppercase tracking-[0.5em]">{t.registration.sectionLabel}</div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.95] mb-8 tracking-tighter">
              {t.registration.heading1} <br />
              <span className="text-[#005bb7]">{t.registration.heading2}</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
              {t.registration.description} <span className="text-slate-900 font-bold">{t.registration.individuals}</span>{t.registration.orAs}<span className="text-slate-900 font-bold">{t.registration.teams}</span>{t.registration.teamLeaders}
            </p>
          </div>
        </FadeUp>


        <FadeUp delay={0.3}>
          {/* CTA Button */}
          <div className="text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full shadow-sm mb-6">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-black uppercase tracking-widest text-slate-400">{t.registration.openingLabel}</span>
            </div>
            <Countdown />
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Registration;
