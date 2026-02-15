
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 border-t border-slate-100 bg-white relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-8 group cursor-default">
              <div className="w-12 h-12 border-2 border-slate-900 rounded-full flex items-center justify-center transition-transform duration-700 group-hover:rotate-180">
                 <div className="w-6 h-6 bg-slate-900 rounded-sm"></div>
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-2xl font-black tracking-tighter text-slate-900">SYNERGY<span className="text-emerald-500">CIRCLE</span></span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase">Rotaract</span>
                  <span className="text-[10px] font-black tracking-[0.3em] text-slate-900 uppercase">SLIIT</span>
                </div>
              </div>
            </div>
            <p className="text-slate-500 max-w-sm text-lg leading-relaxed mb-10">
              A collaborative platform empowering student entrepreneurs to bridge the gap between imagination and execution.
            </p>
            <div className="flex gap-5">
              {['Twitter', 'LinkedIn', 'Instagram', 'Facebook'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-900 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current rounded-full"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2 md:col-start-7">
            <h5 className="font-black mb-10 text-slate-900 uppercase text-[10px] tracking-[0.3em]">Program</h5>
            <ul className="space-y-5">
              {['The Mission', 'Workshops', 'Competition', 'Mentors'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-slate-900 hover:translate-x-2 inline-block transition-all duration-300 font-bold text-sm tracking-wide">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h5 className="font-black mb-10 text-slate-900 uppercase text-[10px] tracking-[0.3em]">Resources</h5>
            <ul className="space-y-5">
              {['Pitch Guide', 'Deck Template', 'FAQ', 'Guidelines'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-slate-900 hover:translate-x-2 inline-block transition-all duration-300 font-bold text-sm tracking-wide">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h5 className="font-black mb-10 text-slate-900 uppercase text-[10px] tracking-[0.3em]">Connect</h5>
            <ul className="space-y-5">
              {['Email Us', 'WhatsApp', 'Visit Campus', 'Partner With Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-slate-900 hover:translate-x-2 inline-block transition-all duration-300 font-bold text-sm tracking-wide">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <p className="text-slate-400 text-sm font-medium">
              © 2024 Synergy Circle. Organized with pride by <span className="text-slate-900 font-black hover:text-emerald-600 transition-colors cursor-pointer">Rotaract Club of SLIIT</span>.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <span className="text-[9px] text-slate-300 uppercase tracking-[0.4em] font-black">Professional Growth</span>
              <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
              <span className="text-[9px] text-slate-300 uppercase tracking-[0.4em] font-black">Innovation Culture</span>
            </div>
          </div>
          
          <div className="flex items-center gap-10">
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              className="group flex items-center gap-3 text-[10px] font-black text-slate-400 hover:text-slate-900 transition-all uppercase tracking-[0.2em]"
            >
              Back to top 
              <span className="w-10 h-10 rounded-2xl border border-slate-100 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white group-hover:rotate-[-45deg] transition-all">
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
