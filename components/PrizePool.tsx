
import React from 'react';
import { FadeUp, ScaleUp, StaggerContainer, StaggerItem } from './Animations';

const PrizePool: React.FC = () => {
  const prizes = [
    {
      place: "1st",
      title: "Grand Champion",
      amount: "TBA",
      color: "from-amber-400/20 via-yellow-300/10 to-amber-500/5",
      border: "border-amber-300/30",
      icon: "🥇",
      accent: "text-amber-500",
    },
    {
      place: "2nd",
      title: "First Runner-Up",
      amount: "TBA",
      color: "from-slate-300/20 via-slate-200/10 to-slate-400/5",
      border: "border-slate-300/30",
      icon: "🥈",
      accent: "text-slate-400",
    },
    {
      place: "3rd",
      title: "Second Runner-Up",
      amount: "TBA",
      color: "from-orange-400/15 via-amber-600/10 to-orange-500/5",
      border: "border-orange-300/30",
      icon: "🥉",
      accent: "text-orange-500",
    },
  ];

  return (
    <section id="prizes" className="py-24 md:py-40 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#005bb7]/[0.06] blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/[0.03] blur-[120px] rounded-full"></div>
      <div className="absolute top-0 right-0 text-[300px] font-black text-white/[0.02] select-none pointer-events-none translate-x-1/3">🏆</div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeUp>
          <div className="text-center mb-20">
            <div className="mono text-[#005bb7] mb-6 font-black uppercase tracking-[0.5em]">Rewards</div>
            <h2 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter mb-6">
              Prize <span className="text-white/30">Pool</span>
            </h2>
            <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Compete for exciting prizes and recognition. The top three ventures of Synergy Circle 2026 walk away with more than just a title.
            </p>
          </div>
        </FadeUp>

        {/* Prize Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" staggerDelay={0.2}>
          {prizes.map((prize, idx) => (
            <StaggerItem key={idx}>
              <div
                className={`relative bg-gradient-to-br ${prize.color} backdrop-blur-xl border ${prize.border} rounded-[40px] p-10 text-center group hover:scale-[1.03] hover:-translate-y-2 transition-all duration-500 ${idx === 0 ? 'md:-translate-y-4' : ''}`}
              >
                <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-500">{prize.icon}</div>
                <div className={`mono text-sm font-black mb-2 tracking-[0.3em] uppercase ${prize.accent}`}>{prize.place} Place</div>
                <h3 className="text-2xl font-black text-white mb-6 tracking-tight">{prize.title}</h3>
                <div className="bg-white/[0.06] backdrop-blur-sm rounded-2xl py-5 px-6 border border-white/[0.06]">
                  <p className="text-[10px] uppercase tracking-[0.4em] font-black text-white/30 mb-1">Prize Value</p>
                  <p className={`text-3xl font-black tracking-tight ${prize.accent}`}>{prize.amount}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Will be updated soon banner */}
        <ScaleUp delay={0.4}>
          <div className="flex items-center justify-center">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#005bb7]/10 to-[#005bb7]/5 border border-[#005bb7]/20 rounded-full px-8 py-4">
              <div className="w-2.5 h-2.5 bg-[#005bb7] rounded-full animate-pulse"></div>
              <span className="text-white/70 text-xs font-black uppercase tracking-[0.3em]">
                Prize details will be updated soon
              </span>
            </div>
          </div>
        </ScaleUp>
      </div>
    </section>
  );
};

export default PrizePool;
