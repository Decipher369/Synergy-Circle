
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-slate-100 bg-white relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-8 group cursor-default">
              <div className="w-12 h-12 border-2 border-slate-900 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
                 <div className="w-6 h-6 bg-slate-900 rounded-sm"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter text-slate-900">SYNERGY<span className="text-emerald-500">CIRCLE</span></span>
                <span className="text-xs font-bold tracking-[0.3em] text-slate-400 uppercase">By Rotaract SLIIT</span>
              </div>
            </div>
            <p className="text-slate-500 max-w-sm text-lg leading-relaxed mb-8">
              Empowering student entrepreneurs to bridge the gap between imagination and execution.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:border-emerald-600 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current rounded-full"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2 md:col-start-7">
            <h5 className="font-black mb-8 text-slate-900 uppercase text-xs tracking-widest mono">Program</h5>
            <ul className="space-y-4">
              {['The Mission', 'Workshops', 'Competition', 'Mentors'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-emerald-600 hover:translate-x-2 inline-block transition-all duration-300 font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h5 className="font-black mb-8 text-slate-900 uppercase text-xs tracking-widest mono">Resources</h5>
            <ul className="space-y-4">
              {['Pitch Guide', 'Deck Template', 'FAQ', 'Guidelines'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-emerald-600 hover:translate-x-2 inline-block transition-all duration-300 font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h5 className="font-black mb-8 text-slate-900 uppercase text-xs tracking-widest mono">Legal</h5>
            <ul className="space-y-4">
              {['Privacy', 'Terms', 'Conduct', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-emerald-600 hover:translate-x-2 inline-block transition-all duration-300 font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <p className="text-slate-400 text-sm font-medium">
              © 2024 Synergy Circle. Organized with ❤️ by <span className="text-slate-900 font-bold hover:text-emerald-600 transition-colors cursor-pointer">Rotaract Club of SLIIT</span>.
            </p>
            <p className="text-[10px] text-slate-300 uppercase tracking-widest font-black">
              Selfless Service — Professional Growth
            </p>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex -space-x-2">
               {[1,2,3].map(i => (
                 <div key={i} className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all cursor-help" title={`Partner ${i}`}>
                   <img src={`https://picsum.photos/seed/partner${i}/50/50`} alt="Partner" />
                 </div>
               ))}
            </div>
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              className="group flex items-center gap-2 text-xs font-black text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-widest"
            >
              Back to top 
              <span className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
                ↑
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
