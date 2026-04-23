
import React from 'react';
import { motion } from 'framer-motion';
import { SlideLeft, SlideRight, FadeUp } from './Animations';
import { useLanguage } from '../i18n/LanguageContext';

const SYNERGY_REGISTRATION_URL = 'https://www.synergycircle.online/apply';
const PITCH_OLYMPICS_URL = 'https://www.synergycircle.online/workshop';

const Registration: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="apply" className="py-16 md:pt-8 md:pb-24 bg-[#fcfcfc] textured-bg relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#005bb7]/[0.07] blur-[150px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-400/[0.05] blur-[130px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeUp>
          <div className="text-center mb-16">
            <div className="mono text-[#005bb7] mb-6 font-black uppercase tracking-[0.5em]">{t.registration.openNowLabel}</div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.95] mb-8 tracking-tighter">
              {t.registration.heading1} <br />
              <span className="text-[#005bb7]">{t.registration.heading2}</span>
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">

          {/* LEFT — Pitch Olympics Workshop */}
          <SlideLeft delay={0.2} className="h-full">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-lg shadow-slate-100/80 flex flex-col h-full">

              {/* Card header */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-6">
                  <span className="text-base">🥇</span>
                  <span className="text-xs font-black uppercase tracking-widest text-amber-600">Phase 01 · Workshop</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tighter mb-1">
                  Pitch Olympics
                </h3>
                <p className="text-[#005bb7] font-black uppercase tracking-[0.3em] text-xs">Online Workshop</p>
              </div>

              {/* Description */}
              <p className="text-slate-500 text-base leading-relaxed mb-8">
                Whether you're a business student looking to ace your next presentation or an aspiring entrepreneur ready to win over investors, we're breaking down the fundamentals of a winning pitch.
              </p>

              {/* Event details */}
              <div className="space-y-3 mb-10 flex-1">
                <div className="flex items-center gap-4 px-5 py-4 bg-slate-50 rounded-2xl">
                  <span className="text-xl shrink-0">📅</span>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Date</div>
                    <div className="font-bold text-slate-900 text-sm">30th of April</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 px-5 py-4 bg-slate-50 rounded-2xl">
                  <span className="text-xl shrink-0">⏰</span>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Time</div>
                    <div className="font-bold text-slate-900 text-sm">7:00 PM – 9:00 PM</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 px-5 py-4 bg-slate-50 rounded-2xl">
                  <span className="text-xl shrink-0">📍</span>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Location</div>
                    <div className="font-bold text-slate-900 text-sm">Online via Google Meet</div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col items-start gap-4">
                <div className="inline-flex items-center gap-3 px-5 py-3 bg-amber-50 border border-amber-200 rounded-full">
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-black uppercase tracking-widest text-amber-600">Open for Registration</span>
                </div>
                <motion.a
                  href={PITCH_OLYMPICS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-slate-900/20 hover:shadow-slate-900/40 hover:bg-slate-800 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  Secure Your Spot
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>

            </div>
          </SlideLeft>

          {/* RIGHT — Synergy Circle Registration */}
          <SlideRight delay={0.2} className="h-full">
            <div className="bg-[#005bb7] rounded-3xl p-8 md:p-10 shadow-2xl shadow-[#005bb7]/30 flex flex-col h-full relative overflow-hidden">

              {/* Decorative watermark */}
              <div className="absolute -bottom-6 -right-6 text-[140px] font-black text-white/[0.04] leading-none select-none pointer-events-none">SC</div>

              {/* Card header */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 border border-white/20 rounded-full mb-6">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-xs font-black uppercase tracking-widest text-white/80">{t.registration.registrationsOpen}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tighter mb-1">
                  Synergy Circle
                </h3>
                <p className="text-white/50 font-black uppercase tracking-[0.3em] text-xs">Phase 02 · Competition</p>
              </div>

              {/* Description */}
              <p className="text-white/70 text-base leading-relaxed mb-10 flex-1">
                {t.registration.description}{' '}
                <span className="text-white font-bold">{t.registration.individuals}</span>
                {t.registration.orAs}
                <span className="text-white font-bold">{t.registration.teams}</span>
                {t.registration.teamLeaders}
              </p>

              {/* Divider */}
              <div className="border-t border-white/10 mb-8"></div>

              {/* CTA */}
              <div className="flex flex-col items-start gap-4">
                <motion.a
                  href={SYNERGY_REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#005bb7] rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-black/20 hover:shadow-black/30 hover:bg-slate-50 transition-all duration-300"
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

            </div>
          </SlideRight>

        </div>
      </div>
    </section>
  );
};

export default Registration;
