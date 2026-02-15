
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
    <section className="py-24 border-y border-slate-100 bg-slate-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="mono text-emerald-600 mb-4 font-bold uppercase">Value Proposition</div>
          <h2 className="text-4xl font-bold text-slate-900">Why join the Circle?</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div key={i} className="flex flex-col space-y-4 group">
              <div className="text-4xl mb-2">{v.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">{v.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
