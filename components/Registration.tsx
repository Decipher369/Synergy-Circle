
import React from 'react';
import { motion } from 'framer-motion';
import { FadeUp } from './Animations';
import Countdown from './Countdown';
import { useLanguage } from '../i18n/LanguageContext';

const REGISTRATION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeCDryci35W853u0OKc6niLSTQu0muuXrzUAerqTJY0xOU8qg/formResponse';

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
            <div className="mono text-[#005bb7] mb-6 font-black uppercase tracking-[0.5em]">{t.registration.openNowLabel}</div>
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
          <div className="text-center flex flex-col items-center gap-8">
            {/* Register Now Button */}
            <div className="flex flex-col items-center gap-6">
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-emerald-50 border border-emerald-200 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-black uppercase tracking-widest text-emerald-600">{t.registration.registrationsOpen}</span>
              </div>
              <motion.a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-[#005bb7] text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl shadow-[#005bb7]/30 hover:shadow-[#005bb7]/50 hover:bg-[#004a9a] transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                {t.registration.registerNow}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </div>

            {/* Closing Countdown */}
            <Countdown />
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Registration;
