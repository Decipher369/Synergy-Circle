
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 border-t border-slate-200 bg-white relative overflow-hidden textured-bg">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-8 group cursor-pointer transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:bg-[#005bb7] group-hover:rotate-12 group-hover:shadow-xl group-hover:shadow-[#005bb7]/30">
                 <span className="text-white font-black text-2xl tracking-tighter">SC</span>
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-3xl font-black tracking-tighter text-slate-900">SYNERGY<span className="text-[#005bb7]">CIRCLE</span></span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">Rotaract</span>
                  <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
                  <span className="text-[10px] font-black tracking-[0.3em] text-[#005bb7] uppercase">SLIIT BS</span>
                </div>
              </div>
            </div>
            <p className="text-slate-500 max-w-sm text-lg leading-relaxed font-medium mb-10">
              Empowering student visionaries to redefine the boundaries of what is possible.
            </p>
            <div className="flex gap-4">
              {['TW', 'LI', 'IG', 'FB'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900 font-black text-xs hover:text-white hover:bg-[#005bb7] hover:scale-110 hover:-translate-y-2 transition-all duration-300 shadow-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2 md:col-start-7">
            <h5 className="font-black mb-10 text-slate-900 uppercase text-[11px] tracking-[0.4em] mono">Program</h5>
            <ul className="space-y-6">
              {['The Mission', 'Workshops', 'Competition', 'Mentors'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-[#005bb7] hover:translate-x-3 inline-block transition-all duration-300 font-black text-[13px] uppercase tracking-widest relative group">
                    {item}
                    <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-[#005bb7] transition-all group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h5 className="font-black mb-10 text-slate-900 uppercase text-[11px] tracking-[0.4em] mono">Resources</h5>
            <ul className="space-y-6">
              {['Pitch Guide', 'Deck Template', 'FAQ', 'Guidelines'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-[#005bb7] hover:translate-x-3 inline-block transition-all duration-300 font-black text-[13px] uppercase tracking-widest relative group">
                    {item}
                    <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-[#005bb7] transition-all group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h5 className="font-black mb-10 text-slate-900 uppercase text-[11px] tracking-[0.4em] mono">Contact</h5>
            <ul className="space-y-6">
              {['Email Us', 'WhatsApp', 'LinkedIn', 'Campus'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-[#005bb7] hover:translate-x-3 inline-block transition-all duration-300 font-black text-[13px] uppercase tracking-widest relative group">
                    {item}
                    <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-[#005bb7] transition-all group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <p className="text-slate-400 text-xs font-black uppercase tracking-[0.2em]">
              © 2024 Synergy Circle. Organized by <span className="text-slate-900 border-b-2 border-slate-200 hover:border-[#005bb7] transition-colors cursor-pointer">Rotaract Club of SLIIT</span>.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <span className="text-[10px] text-slate-300 uppercase tracking-[0.4em] font-black">Professional Excellence</span>
              <div className="w-1.5 h-1.5 bg-[#005bb7] rounded-full"></div>
              <span className="text-[10px] text-slate-300 uppercase tracking-[0.4em] font-black">Innovation Loop</span>
            </div>
          </div>
          
          <div className="flex items-center gap-10">
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              className="group flex items-center gap-4 text-[11px] font-black text-slate-900 hover:text-[#005bb7] transition-all uppercase tracking-[0.3em]"
            >
              Back to top 
              <span className="w-12 h-12 rounded-full border-2 border-slate-900 flex items-center justify-center group-hover:bg-[#005bb7] group-hover:border-[#005bb7] group-hover:text-white transition-all group-hover:-translate-y-2">
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
