
import React from 'react';
import { FadeUp, MagneticButton } from './Animations';

const Registration: React.FC = () => {
  return (
    <section id="apply" className="py-16 md:pt-8 md:pb-24 bg-[#fcfcfc] textured-bg relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#005bb7]/[0.07] blur-[150px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-400/[0.05] blur-[130px] rounded-full"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <FadeUp>
          <div className="text-center mb-16">
            <div className="mono text-[#005bb7] mb-6 font-black uppercase tracking-[0.5em]">Register Now</div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.95] mb-8 tracking-tighter">
              Register Your <br />
              <span className="text-[#005bb7]">Startup Vision.</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
              Participants may register as <span className="text-slate-900 font-bold">individuals</span> or as <span className="text-slate-900 font-bold">teams</span>. Team leaders are required to complete the registration on behalf of their team members.
            </p>
          </div>
        </FadeUp>


        <FadeUp delay={0.3}>
          {/* CTA Button */}
          <div className="text-center">
            <MagneticButton className="inline-block">
              <a
                href="https://forms.gle/ktFne6zniNcP1QvG6"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden inline-flex items-center gap-4 px-16 py-6 bg-white/[0.06] backdrop-blur-2xl text-slate-900 rounded-full font-black text-sm uppercase tracking-[0.2em] border border-white/20 hover:bg-[#005bb7]/10 hover:border-[#005bb7]/30 hover:text-[#005bb7] hover:shadow-[0_15px_40px_-10px_rgba(0,91,183,0.3)] hover:scale-105 transition-all duration-500 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]"
              >
                <span className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
                <span className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-full"></span>
                <span className="relative z-10 flex items-center gap-4">
                  Register Now
                  <span className="text-lg">↗</span>
                </span>
              </a>
            </MagneticButton>
            <p className="mt-6 text-slate-400 text-xs font-bold uppercase tracking-widest">
              Opens Google Form in a new tab
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Registration;
