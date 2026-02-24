
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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${visible ? 'translate-y-0' : '-translate-y-full'} ${scrolled ? 'bg-white/95 backdrop-blur-xl py-4 border-b border-slate-100 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
            <span className="text-white font-black text-sm tracking-tighter">SC</span>
          </div>
          <span className="text-xl font-black tracking-tighter text-slate-900">SYNERGY<span className="text-[#005bb7]">CIRCLE</span></span>
        </a>
        
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
          <a href="#apply" className="px-6 py-2.5 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-full text-[11px] font-black uppercase tracking-[0.2em] hover:from-[#005bb7] hover:to-[#0070e0] transition-all duration-300 shadow-xl shadow-slate-900/10">
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
            className="block mt-4 text-center py-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:from-[#005bb7] hover:to-[#0070e0] transition-all"
          >
            Register Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
