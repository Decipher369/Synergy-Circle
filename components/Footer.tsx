import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 border-t border-slate-100 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Row: Logo + Nav + Contact */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex flex-col -space-y-0.5">
                <span className="text-xl font-black tracking-tighter text-slate-900">SYNERGY<span className="text-[#005bb7]">CIRCLE</span></span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100 w-fit">
              <img src="/logos/rotaract-sliit.png" alt="Rotaract SLIIT" className="h-6 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
              <div className="w-[1px] h-5 bg-slate-200"></div>
              <img src="/logos/sliit-bs.png" alt="SLIIT Business School" className="h-6 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {[
              { label: t.nav.about, href: '#about' },
              { label: t.nav.phases, href: '#phases' },
              { label: t.nav.prizes, href: '#prizes' },
              { label: t.nav.timeline, href: '#timeline' },
            ].map((item) => (
              <a key={item.label} href={item.href} className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-[#005bb7] transition-colors">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 pb-6 border-b border-slate-100">
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-300">{t.footer.inquiries}</span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-slate-600">Rtr. Eranga Mendis</span>
              <a href="tel:+94777974215" className="text-[11px] text-[#005bb7] font-bold hover:underline">+94 77 797 4215</a>
            </div>
            <div className="w-1 h-1 bg-slate-200 rounded-full hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-slate-600">Rtr. Binuthi Gangodagedara</span>
              <a href="tel:+94774208240" className="text-[11px] text-[#005bb7] font-bold hover:underline">+94 77 420 8240</a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-between items-center gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 flex-wrap">
            © {new Date().getFullYear()} 
            <motion.a 
              href="https://www.saltbuilds.online/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block hover:text-[#005bb7] transition-colors origin-bottom text-slate-600"
              variants={{
                hidden: { y: 0, rotate: 0 },
                visible: {
                  y: [0, -6, 0, -3, 0],
                  rotate: [0, -10, 10, -5, 5, 0],
                  transition: { duration: 0.6, ease: "easeInOut", delay: 0.2 }
                }
              }}
            >
              Salt
            </motion.a> 
            {t.footer.allRights}
          </p>
          <button 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            className="group flex items-center gap-2 text-[9px] font-black text-slate-400 hover:text-[#005bb7] transition-all uppercase tracking-[0.2em]"
          >
            {t.footer.backToTop}
            <span className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#005bb7] group-hover:border-[#005bb7] group-hover:text-white transition-all group-hover:-translate-y-1 text-[10px]">
              ↑
            </span>
          </button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
