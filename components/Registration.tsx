
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
                className="inline-flex items-center gap-4 px-16 py-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-full font-black text-sm uppercase tracking-[0.2em] hover:from-[#005bb7] hover:to-[#0070e0] hover:scale-105 transition-all duration-300 shadow-2xl shadow-slate-900/20"
              >
                Register Now
                <span className="text-lg">↗</span>
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
