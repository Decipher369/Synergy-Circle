import React from 'react';

const SEGMENT = 'SYNERGY CIRCLE 2026  ·  WHERE IDEAS TURN INTO IMPACT  ·  PITCH OLYMPICS  ·  STARTUP VISION  ·  ROTARACT SLIIT  ·  ';

interface MarqueeStripProps {
  reverse?: boolean;
  dim?: boolean;
}

const MarqueeStrip: React.FC<MarqueeStripProps> = ({ reverse = false, dim = false }) => (
  <div
    className={`overflow-hidden select-none ${dim ? 'py-2.5 bg-slate-900 border-y border-white/5' : 'py-3 bg-[#005bb7] border-y border-white/10'}`}
    aria-hidden="true"
  >
    <div
      className="flex whitespace-nowrap"
      style={{
        animation: `marquee-${reverse ? 'rev' : 'fwd'} 32s linear infinite`,
      }}
    >
      <span className={`shrink-0 font-black uppercase tracking-[0.4em] text-[10px] md:text-[11px] ${dim ? 'text-white/25' : 'text-white/55'}`}>
        {SEGMENT}
      </span>
      <span className={`shrink-0 font-black uppercase tracking-[0.4em] text-[10px] md:text-[11px] ${dim ? 'text-white/25' : 'text-white/55'}`} aria-hidden="true">
        {SEGMENT}
      </span>
    </div>
  </div>
);

export default MarqueeStrip;
