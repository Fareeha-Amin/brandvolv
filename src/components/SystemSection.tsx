import React, { useState } from 'react';
import { SYSTEM_STEPS } from '../data/agencyData';
import { ArrowDown, Check, Sparkles, Layers, ArrowRight } from 'lucide-react';

interface SystemSectionProps {
  onBookCall: () => void;
}

export const SystemSection: React.FC<SystemSectionProps> = ({ onBookCall }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  return (
    <section id="system" className="py-20 md:py-32 bg-[#090b10] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3 flex items-center justify-center gap-2">
            <Layers className="w-4 h-4" />
            <span>The Proprietary Framework</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight text-balance">
            A Lead Generation System Built Around Your Business
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            From deep market positioning to creative testing and rapid lead follow-up, here is the exact 7-stage engine we build for you.
          </p>
        </div>

        {/* 7-Step Sequential Flow */}
        <div className="relative max-w-4xl mx-auto">
          <div className="space-y-4 sm:space-y-6">
            {SYSTEM_STEPS.map((step, idx) => {
              const isSelected = activeStepIndex === idx;
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`group relative rounded-2xl border transition-all cursor-pointer p-6 sm:p-7 ${
                    isSelected
                      ? 'bg-gradient-to-r from-blue-950/40 to-slate-900/60 border-blue-500/50 shadow-xl shadow-blue-500/10 ring-1 ring-blue-500/20'
                      : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.04] hover:border-white/20'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-5">
                    {/* Step Number Circle */}
                    <div className="flex items-center gap-4 md:block shrink-0">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono-num font-bold text-base transition-all ${
                          isSelected
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/40 ring-4 ring-blue-500/20'
                            : 'bg-slate-800/80 text-slate-300 group-hover:bg-slate-700'
                        }`}
                      >
                        {step.step}
                      </div>
                      <div className="md:hidden text-xs text-blue-400 font-semibold uppercase tracking-wider">
                        Stage {step.step} of 07
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 space-y-2.5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-lg sm:text-xl font-display font-bold text-white tracking-tight">
                          {step.step}. {step.title}
                        </h3>
                        <span className="text-xs font-mono-num text-slate-500">
                          {isSelected ? 'Phase Selected' : 'Click to inspect deliverables'}
                        </span>
                      </div>

                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Deliverables checklist */}
                      <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {step.deliverables.map((del, dIdx) => (
                          <div
                            key={dIdx}
                            className="flex items-center gap-2 p-2.5 rounded-lg bg-black/30 border border-white/5 text-xs text-slate-300"
                          >
                            <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                            <span className="truncate">{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement verbatim from PDF:
            The goal isn't to simply generate leads. It's to build a system that can consistently generate opportunities for your business. */}
        <div className="mt-16 sm:mt-24 max-w-4xl mx-auto">
          <div className="relative rounded-3xl p-8 sm:p-10 border border-blue-500/30 bg-gradient-to-br from-blue-950/60 via-[#0d1222] to-indigo-950/50 shadow-2xl text-center overflow-hidden">
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>The BrandVolv Commitment</span>
            </div>

            <blockquote className="text-xl sm:text-2xl md:text-3xl font-display font-extrabold text-white tracking-tight leading-snug text-balance">
              "The goal isn't to simply generate leads. It's to build a system that can consistently generate opportunities for your business."
            </blockquote>

            <p className="mt-4 text-sm text-slate-400 max-w-xl mx-auto">
              Ready to install this predictability into your service business?
            </p>

            <div className="mt-6 flex justify-center">
              <button
                onClick={onBookCall}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-lg shadow-blue-600/30 active:scale-[0.98]"
              >
                <span>Deploy This System For Your Business</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
