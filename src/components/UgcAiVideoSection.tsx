import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, Eye, Layers, TrendingUp, Target } from 'lucide-react';
import { HERO_ASSETS } from '../data/agencyData';

interface UgcAiVideoSectionProps {
  onBookCall: () => void;
}

export const UgcAiVideoSection: React.FC<UgcAiVideoSectionProps> = ({ onBookCall }) => {
  const [activeHookIndex, setActiveHookIndex] = useState<number>(0);

  const ugcHooks = [
    {
      id: 'hook1',
      title: 'Hook 01: The "Cost Gap" Teardown',
      hookText: '“If you run a US service business and still paying over $40 per lead, your agency is hiding this system from you.”',
      ctr: '4.8% CTR',
      cpl: '$6.12 CPL',
      audience: 'US Contractors & Home Services',
      angle: 'Direct Problem Awareness',
    },
    {
      id: 'hook2',
      title: 'Hook 02: Direct Buyer Equity Hook',
      hookText: '“Stop paying your landlord mortgage. Here is how first-time home buyers in the US get approved with almost zero down.”',
      ctr: '5.2% CTR',
      cpl: '$12.15 CPL',
      audience: 'Residential Real Estate Buyers',
      angle: 'Solution & Transformation',
    },
    {
      id: 'hook3',
      title: 'Hook 03: Executive Placement Challenge',
      hookText: '“Why are you working harder than everyone around you, but still not seeing the high-ticket placements you deserve?”',
      ctr: '4.1% CTR',
      cpl: '$13.53 Cost/Call',
      audience: 'B2B Recruitment & Corporate',
      angle: 'High-Status Contrarian',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Hook & Script Engineering',
      desc: 'We identify customer pain points and write 3-second scroll-stopping hooks tailored to your exact target audience.',
    },
    {
      step: '02',
      title: 'Hyper-Realistic AI Persona',
      desc: 'We select authentic creator avatars and natural voices that match the demographics and tone of your prospective clients.',
    },
    {
      step: '03',
      title: 'Native B-Roll & Visual Pacing',
      desc: 'We produce rapid-cut social media edits with dynamic karaoke subtitles, proof callouts, and conversion CTAs.',
    },
    {
      step: '04',
      title: 'Multi-Variant Algorithmic Testing',
      desc: 'We deploy 5 to 10 variations simultaneously into Meta Ads to systematically isolate and scale the lowest cost-per-lead winners.',
    },
  ];

  const currentHook = ugcHooks[activeHookIndex];

  return (
    <section id="ugc-ai" className="py-24 md:py-32 bg-[#090b10] border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Creative Production Engine</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight text-balance">
            UGC AI Video Creation Process
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            High-converting creator ads engineered with AI. Authentic messaging, rapid multi-variant testing, and zero traditional production delays.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: 4-Step Process (Easy to understand) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              The 4-Step Video Production Pipeline
            </div>

            {processSteps.map((item) => (
              <div
                key={item.step}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-mono-num font-bold text-xs shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-2">
              <button
                onClick={onBookCall}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all active:scale-[0.98]"
              >
                <span>Produce UGC AI Ads For Your Business</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Clean High-Converting Creative Showcase */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl border border-white/10 bg-[#0d101d] p-6 sm:p-8 shadow-2xl overflow-hidden space-y-6">
              {/* Studio Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="font-semibold text-white">BrandVolv Creative Studio</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-blue-400 font-mono-num">Multi-Variant Testing</span>
                </div>
                <span className="px-2.5 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[11px] font-mono-num font-semibold">
                  1080x1920 UGC Native Format
                </span>
              </div>

              {/* Creative Visual Showcase Frame */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-950 border border-white/10 group">
                <img
                  src={HERO_ASSETS.creativeShowcase}
                  alt="BrandVolv UGC AI Ad Creative Showcase"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Overlaid Highlight Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-xs">
                  <div className="flex items-center justify-between text-[11px] font-mono-num text-blue-400 mb-1">
                    <span className="font-bold uppercase tracking-wider">{currentHook.title}</span>
                    <span className="text-emerald-400 font-semibold">{currentHook.ctr}</span>
                  </div>
                  <p className="text-white text-xs sm:text-sm font-medium leading-relaxed italic">
                    {currentHook.hookText}
                  </p>
                  <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Target: {currentHook.audience}</span>
                    <span className="font-semibold text-emerald-400">{currentHook.cpl}</span>
                  </div>
                </div>
              </div>

              {/* Hook Switcher Tabs */}
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Tested High-Converting Hook Variations:
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono-num">
                    A/B Tested Live in Meta
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {ugcHooks.map((hook, hIdx) => {
                    const isSelected = activeHookIndex === hIdx;
                    return (
                      <button
                        key={hook.id}
                        onClick={() => setActiveHookIndex(hIdx)}
                        className={`p-3.5 rounded-xl border text-left transition-all ${
                          isSelected
                            ? 'bg-blue-600/20 border-blue-500 text-white shadow-sm ring-1 ring-blue-500/30'
                            : 'bg-white/[0.02] border-white/5 text-slate-400 hover:text-white hover:bg-white/[0.04]'
                        }`}
                      >
                        <div className="text-[11px] font-mono-num text-blue-400 mb-1 flex items-center justify-between">
                          <span>Variation 0{hIdx + 1}</span>
                          {isSelected && (
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          )}
                        </div>
                        <div className="text-xs font-semibold text-white truncate">
                          {hook.title.split(':')[1] || hook.title}
                        </div>
                        <div className="mt-1 flex items-center justify-between text-[10px] text-slate-400 font-mono-num">
                          <span>{hook.ctr}</span>
                          <span className="text-emerald-400 font-bold">{hook.cpl}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
