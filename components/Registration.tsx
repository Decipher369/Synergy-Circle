
import React from 'react';
import { FadeUp } from './Animations';
import Countdown from './Countdown';

const Registration: React.FC = () => {
  return (
    <section id="apply" className="py-16 md:pt-8 md:pb-24 bg-[#fcfcfc] textured-bg relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#005bb7]/[0.07] blur-[150px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-400/[0.05] blur-[130px] rounded-full"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <FadeUp>
          <div className="text-center mb-16">
            <div className="mono text-[#005bb7] mb-6 font-black uppercase tracking-[0.5em]">Opening Soon</div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.95] mb-8 tracking-tighter">
              Prepare Your <br />
              <span className="text-[#005bb7]">Startup Vision.</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
              Participants may register as <span className="text-slate-900 font-bold">individuals</span> or as <span className="text-slate-900 font-bold">teams</span>. Team leaders will be required to complete the registration on behalf of their team members.
            </p>
          </div>
        </FadeUp>


        <FadeUp delay={0.3}>
          {/* CTA Button */}
          <div className="text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full shadow-sm mb-6">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-black uppercase tracking-widest text-slate-400">Opening on March 3rd</span>
            </div>
            <Countdown />
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Registration;
