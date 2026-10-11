import React from 'react';
import { PROCESS_PHASES } from '../data/agencyData';
import { Clock, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProcessSectionProps {
  onBookCall: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onBookCall }) => {
  return (
    <section id="process" className="py-20 md:py-32 bg-[#090b10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header verbatim from PDF */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3 flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Frictionless Onboarding</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight text-balance">
            From Strategy Call to Scalable Lead Generation
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            What happens after you book. A clear, phased roadmap designed to de-risk your investment and establish true predictability.
          </p>
        </div>

        {/* 3 Phases Grid verbatim from PDF */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {PROCESS_PHASES.map((phase, idx) => (
            <div
              key={phase.phase}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-[#111628]/90 to-[#0c0f1c]/90 p-8 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Month marker */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono-num font-bold text-xs uppercase tracking-wider text-blue-400">
                    {phase.phase}
                  </span>
                  <span className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-mono-num text-xs text-slate-400">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                  {phase.title}
                </h3>

                {/* Subtitle flow */}
                <div className="mt-2 text-xs font-semibold text-slate-400 font-mono-num">
                  {phase.subtitle}
                </div>

                {/* Phased Action Points */}
                <ul className="mt-6 space-y-3.5">
                  {phase.items.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Status footer for each month */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span>Phase Outcome</span>
                <span className="text-white font-medium">
                  {idx === 0 ? 'Baseline Validation' : idx === 1 ? 'Cost Compression' : 'Systemized Scale'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement verbatim from PDF:
            We don't expect a predictable system to appear overnight. We build it through research, testing, data and optimization. */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-base sm:text-lg text-slate-300 font-medium italic">
            "We don't expect a predictable system to appear overnight. We build it through research, testing, data and optimization."
          </p>
          <div className="mt-6">
            <button
              onClick={onBookCall}
              className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>See How This Maps To Your Timeline</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
