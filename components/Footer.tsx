
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-100 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Row: Logo + Nav + Contact */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-sm tracking-tighter">SC</span>
            </div>
            <div className="flex flex-col -space-y-0.5">
              <span className="text-xl font-black tracking-tighter text-slate-900">SYNERGY<span className="text-[#005bb7]">CIRCLE</span></span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center gap-6">
            {[
              { label: 'About', href: '#about' },
              { label: 'Phases', href: '#phases' },
              { label: 'Prizes', href: '#prizes' },
              { label: 'Timeline', href: '#timeline' },
              { label: 'Register', href: '#apply' },
            ].map((item) => (
              <a key={item.label} href={item.href} className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-[#005bb7] transition-colors">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10 pb-10 border-b border-slate-100">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">Inquiries</span>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-600">Rtr. Eranga Mendis</span>
              <a href="tel:+94777974215" className="text-xs text-[#005bb7] font-bold hover:underline">+94 77 797 4215</a>
            </div>
            <div className="w-1 h-1 bg-slate-200 rounded-full hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-600">Rtr. Binuthi Gangodagedara</span>
              <a href="tel:+94774208240" className="text-xs text-[#005bb7] font-bold hover:underline">+94 77 420 8240</a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-[11px] font-bold uppercase tracking-[0.15em]">
            © 2026 Synergy Circle · <span className="text-slate-500">Rotaract Club of SLIIT</span>
          </p>
          <button 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            className="group flex items-center gap-2 text-[10px] font-black text-slate-400 hover:text-[#005bb7] transition-all uppercase tracking-[0.2em]"
          >
            Back to top
            <span className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#005bb7] group-hover:border-[#005bb7] group-hover:text-white transition-all group-hover:-translate-y-1 text-xs">
              ↑
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
