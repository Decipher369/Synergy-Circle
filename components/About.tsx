
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-slate-100 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mono text-emerald-600 mb-6 font-bold">01 // THE MISSION</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-slate-900">
              A collaborative leap towards <span className="text-slate-400">professional excellence.</span>
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Synergy Circle is born from the unique collaboration between our leading University Club and the prestigious Business School. We bridge the gap between academic theory and the high-stakes world of startups.
              </p>
              <p>
                Our focus is simple: <strong className="text-slate-900">Growth.</strong> Whether you have a polished deck or just a whiteboard concept, we provide the mentorship, exposure, and recognition needed to scale your impact.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card bg-white p-8 rounded-3xl mt-8 shadow-sm">
              <div className="text-3xl font-bold mb-2 text-slate-900 italic">2 Phases</div>
              <p className="text-sm text-slate-400 uppercase tracking-widest mono">Program Structure</p>
            </div>
            <div className="bg-emerald-500 p-8 rounded-3xl shadow-lg shadow-emerald-500/20">
              <div className="text-3xl font-bold mb-2 text-white italic">Top 10</div>
              <p className="text-sm text-white/70 uppercase tracking-widest mono">Finalist Showcase</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-3xl shadow-lg">
              <div className="text-3xl font-bold mb-2 text-white italic">$5K+</div>
              <p className="text-sm text-slate-400 uppercase tracking-widest mono">Grant Pool</p>
            </div>
            <div className="glass-card bg-white p-8 rounded-3xl -mt-8 shadow-sm">
              <div className="text-3xl font-bold mb-2 text-slate-900 italic">Expert</div>
              <p className="text-sm text-slate-400 uppercase tracking-widest mono">Panel Jury</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
