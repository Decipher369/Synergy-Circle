
import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

interface NavbarProps {
  scrolled: boolean;
  visible: boolean;
  onNavigateGuidelines?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, visible, onNavigateGuidelines }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const LANGS = [
    { code: 'en', label: 'EN',  short: 'EN' },
    { code: 'si', label: 'සිං', short: 'සි' },
    { code: 'ta', label: 'TA',  short: 'TA' },
  ] as const;

  const navItems = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.phases, href: '#phases' },
    { label: t.nav.criteria, href: '#eligibility' },
    { label: t.nav.prizes, href: '#prizes' },
    { label: t.nav.timeline, href: '#timeline' },
  ];

  return (
    <nav 
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-700 
        ${visible ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'} 
        ${scrolled ? 'bg-white/[0.08] backdrop-blur-3xl border border-white/20 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)]' : 'bg-transparent'} 
        rounded-[32px] lg:rounded-full ${!mobileOpen ? 'overflow-hidden' : ''}`}
    >
      {/* Liquid Glass Highlight */}
      {scrolled && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.1] to-transparent"></div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-3 relative z-10 flex justify-between items-center">
        <div className="flex items-center gap-3 md:gap-6 shrink-0">
          <a href="#" className="flex items-center gap-2 md:gap-4 bg-slate-100/50 px-3 md:px-4 py-1.5 md:py-2 rounded-xl md:rounded-2xl border border-slate-200/50 shrink-0">
             <img src="/logos/rotaract-sliit.png" alt="Rotaract SLIIT" className="h-6 md:h-10 w-auto object-contain" />
             <div className="w-[1px] h-7 md:h-10 bg-slate-300"></div>
             <img src="/logos/sliit-bs.png" alt="SLIIT Entrepreneurship Club" className="h-8 md:h-12 w-auto object-contain" />
          </a>
          
          <div className="hidden sm:flex lg:hidden xl:flex items-center gap-3 group cursor-pointer">
            <span className="text-xl font-black tracking-tighter text-slate-900">SYNERGY<span className="text-[#005bb7]">CIRCLE</span></span>
          </div>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              className="relative text-[10px] xl:text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-[#005bb7] transition-colors group whitespace-nowrap"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#005bb7] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button
            onClick={onNavigateGuidelines}
            className="relative text-[10px] xl:text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-[#005bb7] transition-colors group cursor-pointer bg-transparent border-none whitespace-nowrap"
          >
            {t.nav.guidelines}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#005bb7] transition-all duration-300 group-hover:w-full"></span>
          </button>
          
          {/* Language Toggle */}
          <div className="flex items-center gap-0.5 p-[3px] rounded-full border border-slate-200/60 bg-white/50 backdrop-blur-sm">
            {LANGS.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => setLanguage(code)}
                className={`px-2 py-[3px] rounded-full text-[9px] font-black tracking-wide transition-all duration-200 cursor-pointer border-none min-w-[26px] text-center ${
                  language === code
                    ? 'bg-[#005bb7] text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-600 bg-transparent'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Mobile Menu Button + Language Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          {/* Mobile Language Toggle */}
          <div className="flex items-center gap-0.5 p-[2px] rounded-full border border-slate-200/60 bg-white/50 backdrop-blur-sm">
            {LANGS.map(({ code, short }) => (
              <button
                key={code}
                onClick={() => setLanguage(code)}
                className={`px-1.5 py-[2px] rounded-full text-[8px] font-black tracking-wide transition-all duration-200 cursor-pointer border-none min-w-[20px] text-center ${
                  language === code
                    ? 'bg-[#005bb7] text-white shadow-sm'
                    : 'text-slate-400 bg-transparent'
                }`}
              >
                {short}
              </button>
            ))}
          </div>
          
          <button 
            className="p-2 text-slate-900"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full mt-2 bg-white/95 backdrop-blur-xl border border-slate-200/50 shadow-2xl py-6 px-6 space-y-1 animate-in fade-in slide-in-from-top-4 duration-300 rounded-[24px]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 px-4 text-sm font-black uppercase tracking-[0.2em] text-slate-600 hover:text-[#005bb7] hover:bg-slate-50 rounded-xl transition-all"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => { setMobileOpen(false); onNavigateGuidelines?.(); }}
            className="block w-full text-left py-3 px-4 text-sm font-black uppercase tracking-[0.2em] text-slate-600 hover:text-[#005bb7] hover:bg-slate-50 rounded-xl transition-all cursor-pointer bg-transparent border-none"
          >
            {t.nav.guidelines}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
