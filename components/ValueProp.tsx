
import React from 'react';
import { FadeUp, StaggerContainer, StaggerItem } from './Animations';

const ValueProp: React.FC = () => {
  const values = [
    {
      title: "Master the Pitch",
      description: "Learn to articulate value clearly and confidently to any audience with expert-led workshops.",
      icon: "🎯"
    },
    {
      title: "Expert Evaluation",
      description: "Get ruthless, constructive feedback from people who have actually built and sold companies.",
      icon: "🧠"
    },
    {
      title: "Massive Exposure",
      description: "Get your idea in front of the business school network and the wider startup ecosystem.",
      icon: "⚡"
    },
    {
      title: "Capital Access",
      description: "Direct introduction to angel investors, venture capitalists, and seed-funding grants.",
      icon: "💰"
    }
  ];

  return (
    <section className="pt-24 pb-8 bg-[#fcfcfc] textured-bg relative">
      {/* Faded gradient separator line */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-[#005bb7] to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#005bb7]/[0.08] to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div className="mb-16">
            <div className="mono text-[#005bb7] mb-4 font-black uppercase tracking-[0.4em]">Value Proposition</div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Why join the Circle?</h2>
          </div>
        </FadeUp>
        
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12" staggerDelay={0.12}>
          {values.map((v, i) => (
            <StaggerItem key={i}>
              <div className="flex flex-col space-y-5 group p-8 bg-white border border-slate-100 rounded-[32px] hover:border-[#005bb7]/30 hover:shadow-xl hover:shadow-[#005bb7]/5 transition-all duration-500">
                <div className="text-5xl mb-2 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 origin-left">{v.icon}</div>
                <h3 className="text-xl font-black text-slate-900 group-hover:text-[#005bb7] transition-colors tracking-tight">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{v.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ValueProp;
