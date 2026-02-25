
import React, { useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
  visible: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, visible }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Phases', href: '#phases' },
    { label: 'Criteria', href: '#eligibility' },
    { label: 'Prizes', href: '#prizes' },
    { label: 'Timeline', href: '#timeline' },
  ];

  return (
    <nav 
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-700 
        ${visible ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'} 
        ${scrolled ? 'bg-white/[0.08] backdrop-blur-3xl border border-white/20 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)]' : 'bg-transparent'} 
        rounded-[32px] md:rounded-full overflow-hidden`}
    >
      {/* Liquid Glass Highlight */}
      {scrolled && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.1] to-transparent"></div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-3 relative z-10 flex justify-between items-center">
        <div className="flex items-center gap-3 md:gap-6">
          <a href="#" className="flex items-center gap-2 md:gap-4 bg-slate-100/50 px-3 md:px-4 py-1.5 md:py-2 rounded-xl md:rounded-2xl border border-slate-200/50">
             <img src="/logos/rotaract-sliit.png" alt="Rotaract SLIIT" className="h-6 md:h-10 w-auto object-contain" />
             <div className="w-[1px] h-5 md:h-8 bg-slate-300"></div>
             <img src="/logos/sliit-bs.png" alt="SLIIT Business School" className="h-6 md:h-10 w-auto object-contain" />
          </a>
          
          <div className="hidden sm:flex items-center gap-3 group cursor-pointer">
            <span className="text-xl font-black tracking-tighter text-slate-900">SYNERGY<span className="text-[#005bb7]">CIRCLE</span></span>
          </div>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              className="relative text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-[#005bb7] transition-colors group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#005bb7] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a href="#apply" className="relative overflow-hidden px-6 py-2.5 bg-white/[0.08] backdrop-blur-2xl text-white rounded-full text-[11px] font-black uppercase tracking-[0.2em] border border-white/20 hover:bg-white/[0.15] hover:border-white/40 hover:shadow-[0_10px_30px_-10px_rgba(0,91,183,0.4)] transition-all duration-500 shadow-lg">
            <span className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></span>
            Register
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-900"
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

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-lg py-6 px-6 space-y-1 animate-in fade-in slide-in-from-top-2 duration-300">
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
          <a
            href="#apply"
            onClick={() => setMobileOpen(false)}
            className="relative overflow-hidden block mt-4 text-center py-4 bg-white/[0.06] backdrop-blur-2xl text-slate-900 rounded-2xl font-black text-sm uppercase tracking-widest border border-white/20 hover:bg-[#005bb7]/10 hover:border-[#005bb7]/30 transition-all duration-500 shadow-lg"
          >
            <span className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></span>
            Register Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
