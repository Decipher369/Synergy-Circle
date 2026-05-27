import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

const EventConcludedOverlay: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const LANGS = [
    { code: 'en', label: 'EN' },
    { code: 'si', label: 'සිං' },
    { code: 'ta', label: 'TA' },
  ] as const;

  // Lock body scrolling when overlay is mounted
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] w-full h-full min-h-screen select-none overflow-hidden bg-[#070a13] flex flex-col justify-between p-6 sm:p-10 md:p-12 text-white">
      {/* Global Glowing Blobs for Premium Aesthetic */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-[#005bb7]/[0.18] blur-[130px] rounded-full"
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 60, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-indigo-500/[0.12] blur-[110px] rounded-full"
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 50, -40, 0],
            scale: [1, 0.85, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      {/* Top Section: Branding + Language Selector */}
      <div className="relative z-10 flex flex-row items-center justify-between w-full">
        {/* Organizing Clubs Capsule */}
        <div className="flex items-center gap-2 sm:gap-3 bg-white/[0.02] backdrop-blur-md px-3 sm:px-4 py-1.5 rounded-full border border-white/[0.06] select-none pointer-events-none shadow-sm">
          <img
            src="/logos/rotaract-sliit.png"
            alt="Rotaract SLIIT"
            className="h-5 sm:h-6 w-auto object-contain brightness-0 invert opacity-60"
          />
          <div className="w-[1px] h-3.5 bg-white/15"></div>
          <img
            src="/logos/sliit-bs.png"
            alt="SLIIT Entrepreneurship Club"
            className="h-6 sm:h-7.5 w-auto object-contain brightness-0 invert opacity-60"
          />
        </div>

        {/* Floating Language Toggle */}
        <div className="flex items-center gap-0.5 p-[3px] rounded-full border border-white/[0.06] bg-white/[0.02] backdrop-blur-md">
          {LANGS.map(({ code, label }) => (
            <button
              key={code}
              onClick={() => setLanguage(code)}
              className={`px-3 py-1 rounded-full text-[10px] font-black tracking-wide transition-all duration-300 cursor-pointer border-none min-w-[32px] text-center select-auto pointer-events-auto ${
                language === code
                  ? 'bg-[#005bb7] text-white shadow-[0_4px_12px_rgba(0,91,183,0.3)]'
                  : 'text-slate-400 hover:text-slate-200 bg-transparent'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Middle Section: Main Glass Card */}
      <div className="relative z-10 flex items-center justify-center flex-grow py-8 select-none">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl mx-auto bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-xl border border-white/[0.07] rounded-[32px] p-6 sm:p-12 md:p-16 shadow-[0_32px_100px_-20px_rgba(0,0,0,0.7)] text-center overflow-hidden"
        >
          {/* Subtle horizontal glow header strip */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#005bb7]/30 to-transparent" />

          {/* Glowing pulse badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#005bb7]/10 border border-[#005bb7]/20 text-[#4da3ff] text-[9px] font-bold uppercase tracking-[0.25em] mb-6 sm:mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#4da3ff] animate-pulse" />
            {t.concluded.badge}
          </motion.div>

          {/* Sliced/Gradient Brand Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white mb-4 leading-none"
          >
            SYNERGY<span className="text-[#005bb7]">CIRCLE</span>
          </motion.h1>

          {/* See y'all next year message */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl font-black tracking-wide uppercase text-slate-300 mb-8 sm:mb-12"
          >
            {t.concluded.subtitle}
          </motion.p>

          {/* Beautiful Entrepreneurial Quote block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="relative px-6 py-8 sm:px-10 sm:py-9 bg-white/[0.015] border border-white/[0.03] rounded-2xl max-w-2xl mx-auto"
          >
            {/* Elegant large quote marks */}
            <span className="absolute top-3 left-4 text-white/[0.03] text-7xl font-serif font-black leading-none select-none pointer-events-none">
              “
            </span>

            <p className="font-serif italic text-base sm:text-lg md:text-xl text-slate-200 tracking-wide leading-relaxed relative z-10 mb-4 select-text">
              {t.concluded.quote}
            </p>
            <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-[#005bb7] relative z-10 select-text">
              — {t.concluded.author}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Section: Copyright + Salt clickable Link */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 w-full pt-4 border-t border-white/[0.03]">
        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
          © {new Date().getFullYear()} Synergy Circle. All rights reserved.
        </p>

        {/* Premium Clickable Salt Link and Logo */}
        <a
          href="https://www.saltbuilds.online/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 opacity-40 hover:opacity-100 group transition-opacity duration-300 select-auto pointer-events-auto text-[9px] font-bold tracking-wider text-slate-500 hover:text-[#81c7d4] uppercase"
        >
          <span>Crafted by</span>
          <img
            src="https://www.saltbuilds.online/salt-logo.png"
            alt="SALT"
            className="h-3 w-auto object-contain brightness-90 group-hover:brightness-100 transition-all duration-300"
          />
        </a>
      </div>
    </div>
  );
};

export default EventConcludedOverlay;
