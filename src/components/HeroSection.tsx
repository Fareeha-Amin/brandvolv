import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, BarChart2, Filter, Layers, Target, RefreshCw, TrendingUp, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onBookCall: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onBookCall }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const pipelineStages = [
    {
      title: 'Strategy',
      icon: Target,
      desc: 'Positioning & high-intent ICP offer matching',
      detail: 'Identify profitable client profiles and craft irresistible service value propositions.',
    },
    {
      title: 'Meta Ads',
      icon: Layers,
      desc: 'Targeted CBO & ABO campaign tests',
      detail: 'Structured audience testing across demographic and lookalike segments in the USA.',
    },
    {
      title: 'Qualified Leads',
      icon: Filter,
      desc: 'High-intent prospects, not junk clicks',
      detail: 'Pre-qualification form fields filter out tire-kickers before they reach your team.',
    },
    {
      title: 'Follow-Up',
      icon: CheckCircle2,
      desc: 'Instant CRM & calendar booking speed',
      detail: 'Automated SMS and email routing books prospects directly onto your calendar.',
    },
    {
      title: 'Optimization',
      icon: RefreshCw,
      desc: 'Cost-per-lead compression loops',
      detail: 'Weekly creative fatigue swaps push cost per lead down to sub-$6 benchmarks.',
    },
    {
      title: 'Growth',
      icon: TrendingUp,
      desc: 'Predictable pipeline scaling',
      detail: 'Scale budget confidently without ad decay or diminishing return rates.',
    },
  ];

  return (
    <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden bg-gradient-to-b from-[#090b10] via-[#0c0e17] to-[#090b10]">
      {/* Background glow ambiance */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none opacity-20">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[140px]" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column: Copy & Primary Action */}
          <div className="lg:col-span-6 space-y-8">
            <div className="text-xs font-semibold tracking-widest uppercase text-blue-400">
              USA Service Business Growth
            </div>

            {/* Headline verbatim from PDF */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-display font-extrabold text-white tracking-tight leading-[1.12] text-balance">
              Turn Meta Ads Into a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                Predictable Lead Generation
              </span>{' '}
              System
            </h1>

            {/* Subheadline verbatim from PDF */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              We help USA-based service businesses generate better-quality leads through strategic Meta Ads, conversion-focused creatives, testing, and continuous optimization.
            </p>

            {/* Single Focused Primary CTA */}
            <div className="pt-2">
              <button
                onClick={onBookCall}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 active:scale-[0.98]"
              >
                <span>Book Your Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Clean Interactive 6-Step Lead Engine Architecture */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl border border-white/10 bg-[#0d101d]/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl shadow-black/80 space-y-6">
              {/* Header bar of visual showcase */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold text-white">BrandVolv Systematic Architecture</span>
                </div>
                <div className="text-xs text-blue-400 font-mono-num flex items-center gap-1.5">
                  <BarChart2 className="w-3.5 h-3.5" />
                  <span>Interactive Engine</span>
                </div>
              </div>

              {/* Subtitle */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-white tracking-tight">
                    The 6-Step Client Acquisition Flow
                  </h3>
                  <span className="text-[11px] text-slate-400">Click to explore</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  How our system routes ad spend into high-ticket qualified opportunities without lead leakage.
                </p>
              </div>

              {/* 6 Stage Interactive Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {pipelineStages.map((stage, idx) => {
                  const Icon = stage.icon;
                  const isActive = activeStep === idx;
                  return (
                    <button
                      key={stage.title}
                      onClick={() => setActiveStep(idx)}
                      className={`text-left p-3.5 rounded-xl border transition-all ${
                        isActive
                          ? 'bg-blue-600/20 border-blue-500 text-white shadow-md shadow-blue-500/10 ring-1 ring-blue-500/30'
                          : 'bg-white/[0.03] border-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/[0.06]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[11px] font-mono-num text-slate-500">0{idx + 1}</span>
                        <Icon className={`w-4 h-4 ${isActive ? 'text-blue-400' : 'text-slate-500'}`} />
                      </div>
                      <div className={`text-xs font-semibold ${isActive ? 'text-white' : 'text-slate-300'}`}>
                        {stage.title}
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5 truncate">
                        {stage.desc}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Stage Detail Callout */}
              <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/30 text-xs space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-blue-300 uppercase tracking-wider text-[11px]">
                    Stage 0{activeStep + 1} · {pipelineStages[activeStep].title}
                  </span>
                  <span className="text-[10px] font-mono-num text-emerald-400 font-semibold">
                    Systemized Component
                  </span>
                </div>
                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                  {pipelineStages[activeStep].detail}
                </p>
              </div>

              {/* Bottom Quick Action */}
              <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                <span>Designed for USA Service Businesses</span>
                <button
                  onClick={onBookCall}
                  className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1"
                >
                  <span>Build This System</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
