import React, { useState } from 'react';
import { PROBLEM_POINTS } from '../data/agencyData';
import { ArrowUpRight, CheckCircle2, ShieldAlert } from 'lucide-react';

interface ProblemSectionProps {
  onBookCall: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onBookCall }) => {
  const [selectedPoint, setSelectedPoint] = useState<string>('01');

  const currentPoint = PROBLEM_POINTS.find(p => p.number === selectedPoint) || PROBLEM_POINTS[0];

  return (
    <section id="problem" className="py-20 md:py-28 bg-[#0b0e19] border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-3 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-red-400" />
            <span>The Core Problem</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight text-balance">
            Running Ads Isn’t the Problem. Running the Wrong System Is.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
            If you've already spent money on Meta Ads but aren't seeing consistent results, the problem may not be the platform. It may be the strategy behind it.
          </p>
        </div>

        {/* 5 Pain Points Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* List of 5 Pain Points */}
          <div className="lg:col-span-7 space-y-3">
            {PROBLEM_POINTS.map((item) => {
              const isSelected = selectedPoint === item.number;
              return (
                <div
                  key={item.number}
                  onClick={() => setSelectedPoint(item.number)}
                  className={`cursor-pointer p-5 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-white/[0.06] border-red-500/40 shadow-lg shadow-red-500/5 ring-1 ring-red-500/20'
                      : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/10'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono-num font-bold text-sm text-red-400 shrink-0 mt-0.5">
                      {item.number}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base sm:text-lg font-semibold text-white">
                          {item.title}
                        </h3>
                        <span className="text-xs text-slate-500">
                          {isSelected ? 'Viewing System Fix' : 'Click to inspect'}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-slate-400 leading-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Diagnosis Card: The BrandVolv Fix */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-b from-[#11172a] to-[#0c1020] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="text-xs font-mono-num uppercase tracking-wider text-blue-400 mb-2">
                BrandVolv Systematic Architecture
              </div>

              <h4 className="text-xl font-bold text-white mb-4">
                How We Solve Point {currentPoint.number}: {currentPoint.title}
              </h4>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 mb-6">
                <div className="text-xs text-red-400 font-medium mb-1">Current Bottleneck:</div>
                <div className="text-sm text-slate-300 italic">"{currentPoint.description}"</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {currentPoint.agencySolution}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-300">
                    Engineered to replace random boosted posts with a repeatable client acquisition protocol.
                  </p>
                </div>
              </div>

              <button
                onClick={onBookCall}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-md shadow-blue-600/30"
              >
                <span>Audit Your Lead Leak</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Section 2 Ending Banner verbatim from PDF:
            BrandVolv builds the system behind the ads — not just the ads themselves. */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-blue-950/40 border border-blue-500/20 text-center">
          <p className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
            BrandVolv builds the system behind the ads —{' '}
            <span className="text-blue-400 underline decoration-blue-500/40 decoration-2 underline-offset-4">
              not just the ads themselves.
            </span>
          </p>
          <p className="mt-2 text-sm text-slate-400 max-w-2xl mx-auto">
            Without backend offer mechanics and qualification filters, higher ad spend only generates more wasted conversations. We solve the engine first.
          </p>
        </div>
      </div>
    </section>
  );
};
