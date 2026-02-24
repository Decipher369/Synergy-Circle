
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

        <FadeUp delay={0.15}>
          {/* Payment & Fee Info */}
          <div className="bg-white/50 backdrop-blur-2xl border border-white/70 rounded-[40px] p-10 md:p-14 mb-12 shadow-[0_8px_60px_-12px_rgba(0,91,183,0.06)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Fee */}
              <div>
                <div className="mono text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4">Registration Fee</div>
                <div className="text-5xl font-black text-slate-900 tracking-tight mb-2">LKR 1000</div>
                <p className="text-slate-400 text-sm font-medium">Per participant / team</p>
              </div>
              {/* Bank Details */}
              <div className="space-y-3">
                <div className="mono text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4">Bank Details</div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400 font-bold">Account Name</span>
                  <span className="text-slate-900 font-black">Mendis E.A.</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400 font-bold">Account No.</span>
                  <span className="text-slate-900 font-black">069020212993</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400 font-bold">Bank</span>
                  <span className="text-slate-900 font-black">Hatton National Bank</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400 font-bold">Branch</span>
                  <span className="text-slate-900 font-black">Panadura</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400 font-bold">Branch ID</span>
                  <span className="text-slate-900 font-black">0690</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-start gap-3 px-5 py-4 bg-amber-50/50 border border-amber-200/30 rounded-2xl">
              <span className="text-lg mt-0.5">⚠️</span>
              <p className="text-amber-700/70 text-xs font-bold leading-relaxed">
                Please ensure that the payment receipt is uploaded as part of the registration. Incomplete submissions will not be considered.
              </p>
            </div>
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
