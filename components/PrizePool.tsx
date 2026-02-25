
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
    <section id="prizes" className="py-16 md:py-40 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#005bb7]/[0.06] blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/[0.03] blur-[120px] rounded-full"></div>
      <div className="absolute top-0 right-0 text-[300px] font-black text-white/[0.02] select-none pointer-events-none translate-x-1/3">🏆</div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeUp>
          <div className="text-center mb-20">
            <div className="mono text-[#005bb7] mb-6 font-black uppercase tracking-[0.5em]">Rewards</div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tighter mb-6">
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
                className={`relative overflow-hidden bg-white/[0.03] backdrop-blur-3xl border ${prize.border} rounded-[48px] p-10 text-center group hover:scale-[1.02] transition-all duration-700 ${idx === 0 ? 'md:-translate-y-4' : ''} shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)]`}
              >
                {/* Gloss/Shine Highlight */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.08] to-transparent pointer-events-none z-10"></div>
                
                {/* Inner Border Gloss */}
                <div className="absolute inset-[1px] rounded-[47px] border border-white/[0.05] pointer-events-none z-10"></div>

                {/* Liquid Blob 1 */}
                <div className={`absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br ${prize.color} blur-[80px] opacity-40 group-hover:opacity-70 group-hover:scale-150 transition-all duration-1000 animate-morph`}></div>
                
                {/* Liquid Blob 2 */}
                <div className={`absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr ${prize.color} blur-[80px] opacity-20 group-hover:opacity-50 group-hover:scale-150 transition-all duration-1000 animate-morph`} style={{ animationDelay: '2s' }}></div>

                <div className="relative z-20">
                  <div className="text-7xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    {prize.icon}
                  </div>
                  <div className={`mono text-[10px] font-black mb-3 tracking-[0.4em] uppercase ${prize.accent}`}>
                    {prize.place} Place
                  </div>
                  <h3 className="text-3xl font-black text-white mb-8 tracking-tighter group-hover:text-white transition-colors">
                    {prize.title}
                  </h3>
                  
                  <div className="relative overflow-hidden bg-white/[0.07] backdrop-blur-md rounded-[32px] py-7 px-8 border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] group-hover:bg-white/[0.12] transition-all duration-500">
                    <p className="text-[9px] uppercase tracking-[0.4em] font-black text-white/40 mb-2">Registration Value</p>
                    <p className={`text-5xl font-black tracking-tighter ${prize.accent} drop-shadow-[0_0_15px_rgba(0,0,0,0.2)]`}>
                      {prize.amount}
                    </p>
                    
                    {/* Inner Refraction Shine */}
                    <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-[-25deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out"></div>
                  </div>
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
