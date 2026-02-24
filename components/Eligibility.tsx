
import React from 'react';
import { FadeUp, StaggerContainer, StaggerItem } from './Animations';

const Eligibility: React.FC = () => {
  const criteria = [
    {
      title: "Venture Stage",
      description: "From conceptual ideas to early seed-stage startups looking for their first major breakthrough.",
      icon: "🌱"
    },
    {
      title: "Founders",
      description: "Young entrepreneurs and university students driven by innovation and strategic thinking.",
      icon: "🎓"
    },
    {
      title: "Market Focus",
      description: "Ideas with potential for significant local or global market impact and high scalability.",
      icon: "🌎"
    },
    {
      title: "Innovation",
      description: "Low initial capital requirements with high revenue potential and disruptive technology.",
      icon: "💡"
    }
  ];

  return (
    <section id="eligibility" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative background logo */}
      <div className="absolute -right-24 top-1/2 -translate-y-1/2 text-[20vw] font-black text-slate-900/[0.01] select-none pointer-events-none uppercase">
        Criteria
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeUp>
          <div className="mb-20">
            <div className="mono text-[#005bb7] mb-6 font-black uppercase tracking-[0.4em]">The Standard</div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.95]">
              What We Are <br /> <span className="text-[#005bb7]">Looking For.</span>
            </h2>
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.1}>
          {criteria.map((item, idx) => (
            <StaggerItem key={idx}>
              <div className="group flex items-start gap-8 p-10 bg-[#fcfcfc] border border-slate-100 rounded-[40px] hover:bg-white hover:border-[#005bb7]/30 hover:shadow-2xl hover:shadow-[#005bb7]/5 transition-all duration-500">
                <div className="text-4xl p-6 bg-white rounded-3xl shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-[#005bb7] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-base leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp delay={0.4}>
          <div className="mt-20 p-8 border border-slate-100 rounded-[32px] bg-slate-50/50 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <p className="text-slate-900 font-bold text-lg">Ready to showcase your vision?</p>
              <p className="text-slate-400 text-sm font-medium">Applications are evaluated on a rolling basis.</p>
            </div>
            <a href="#apply" className="px-10 py-4 bg-slate-900 text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#005bb7] transition-colors">
              Check Guidelines
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Eligibility;
