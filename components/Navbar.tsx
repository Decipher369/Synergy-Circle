
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl py-3 border-b border-slate-200 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="flex items-center gap-3">
             {/* Simulating the Rotaract Wheel with CSS/SVG for high fidelity */}
             <div className="relative w-10 h-10 transition-transform duration-700 group-hover:rotate-180">
                <svg viewBox="0 0 100 100" className="w-full h-full text-slate-900">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
                  <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="8" />
                  <path d="M50 10 L50 30 M50 70 L50 90 M10 50 L30 50 M70 50 L90 50" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                </svg>
             </div>
             <div className="flex flex-col -space-y-1">
               <span className="text-xl font-black tracking-tighter text-slate-900 leading-none">SYNERGY<span className="text-emerald-500">CIRCLE</span></span>
               <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">Rotaract SLIIT</span>
             </div>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          {['About', 'Phases', 'Timeline'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="relative text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a href="#apply" className="px-6 py-3 bg-slate-900 text-white rounded-full text-sm font-black hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 active:scale-95">
            Apply Now
          </a>
        </div>
        
        <button className="md:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
