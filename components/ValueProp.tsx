
import React from 'react';

const ValueProp: React.FC = () => {
  const values = [
    {
      title: "Master the Pitch",
      description: "Move beyond buzzwords. Learn to articulate value clearly and confidently to any audience.",
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
      title: "Recognition",
      description: "Winner awards, finalist certificates, and social media spotlight to boost your professional profile.",
      icon: "🏆"
    }
  ];

  return (
    <section className="py-24 border-y border-slate-100 bg-[#fcfcfc] textured-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="mono text-[#005bb7] mb-4 font-black uppercase tracking-[0.4em]">Value Proposition</div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Why join the Circle?</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((v, i) => (
            <div key={i} className="flex flex-col space-y-5 group p-8 bg-white border border-slate-100 rounded-[32px] hover:border-[#005bb7]/30 hover:shadow-xl hover:shadow-[#005bb7]/5 transition-all duration-500">
              <div className="text-5xl mb-2 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 origin-left">{v.icon}</div>
              <h3 className="text-xl font-black text-slate-900 group-hover:text-[#005bb7] transition-colors tracking-tight">{v.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
