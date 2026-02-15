
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl py-4 border-b border-slate-100 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-6 group cursor-pointer">
          {/* Main Logo Container from Image */}
          <div className="flex items-center gap-4 bg-slate-100/50 px-4 py-2 rounded-2xl border border-slate-200/50">
             <div className="flex flex-col items-start leading-none">
               <span className="text-lg font-bold text-slate-900 tracking-tight">Rotaract</span>
               <span className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase ml-auto">SLIIT</span>
             </div>
             
             {/* Rotaract Wheel */}
             <svg viewBox="0 0 100 100" className="w-8 h-8 text-slate-900 fill-current">
                <path d="M50 0c-27.6 0-50 22.4-50 50s22.4 50 50 50 50-22.4 50-50-22.4-50-50-50zm0 90c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"/>
                <circle cx="50" cy="50" r="15"/>
                <path d="M50 25l3 10h10l-8 6 3 10-8-6-8 6 3-10-8-6h10z"/>
             </svg>

             <div className="w-[1px] h-8 bg-slate-300 mx-1"></div>

             <div className="flex flex-col items-start leading-none uppercase">
                <span className="text-[10px] font-bold text-[#005bb7]">SLIIT</span>
                <span className="text-[10px] font-black text-[#005bb7] tracking-tighter">Business School</span>
             </div>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          {['About', 'Phases', 'Timeline'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="relative text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-[#005bb7] transition-colors group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#005bb7] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a href="#apply" className="px-6 py-2.5 bg-slate-900 text-white rounded-full text-[11px] font-black uppercase tracking-[0.2em] hover:bg-[#005bb7] transition-all duration-300 shadow-xl shadow-slate-900/10">
            Apply
          </a>
        </div>
        
        <button className="md:hidden p-2 text-slate-900">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
