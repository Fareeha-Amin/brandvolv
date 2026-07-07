import React, { useState } from 'react';
import { Sparkles, Share2, TrendingDown, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';

export default function MemeCurve() {
  const [relatability, setRelatability] = useState(80); // Default to a sweet spot

  // Get dynamic descriptions and stats based on relatability slider
  const getCurveState = (val: number) => {
    if (val < 25) {
      return {
        label: 'Corporate Noise',
        desc: 'Dry corporate brochures, formal articles, and generic announcements. Users ignore them. Your budget is wasted, resulting in high customer acquisition costs and near-zero organic sharing.',
        recall: '1.0x',
        shares: '0.02%',
        cac: 'Base Cost (High)',
        color: 'text-neutral-500',
        badgeColor: 'bg-neutral-900 border-neutral-800 text-neutral-400'
      };
    } else if (val < 50) {
      return {
        label: 'Safe Branded Humor',
        desc: 'Mild humor restricted by layers of corporate legal approval. It feels safe and polite, but it fails to grab attention or stand out in a fast-moving social feed.',
        recall: '2.5x',
        shares: '1.2%',
        cac: '-15% Reduction',
        color: 'text-orange-400',
        badgeColor: 'bg-orange-500/10 border-orange-500/20 text-orange-400'
      };
    } else if (val < 75) {
      return {
        label: 'Cultural Alignment',
        desc: 'Authentic brand humanization. You adapt to major internet trends in real-time. People appreciate the self-awareness, and you begin earning high engagement ratios and organic retweets.',
        recall: '7.8x',
        shares: '6.4%',
        cac: '-42% Reduction',
        color: 'text-indigo-400',
        badgeColor: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'
      };
    } else {
      return {
        label: 'The Viral Catalyst',
        desc: 'Cultural domination. You create platform-native, trend-hijacking memes that cut straight through the corporate noise. Your brand is shared organically by millions, cementing an elite, youth-focused brand positioning.',
        recall: '15.4x',
        shares: '19.8%',
        cac: '-68% Reduction',
        color: 'text-red-400',
        badgeColor: 'bg-red-500/10 border-red-500/20 text-red-400'
      };
    }
  };

  const state = getCurveState(relatability);

  // Calculate coordinates for the glowing dot on the exponential curve:
  // x goes from 100 to 450 (width is 500)
  // y follows an exponential curve: y = 280 - ( (x-100)/350 )^3 * 220
  const normalizedVal = relatability / 100;
  const dotX = 100 + normalizedVal * 320;
  const dotY = 280 - Math.pow(normalizedVal, 2.5) * 210;

  return (
    <section id="meme-curve" className="relative py-24 bg-[#030305] border-t border-neutral-900 overflow-hidden">
      {/* Background radial spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-red-900/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center sm:text-left">
          <h2 className="text-sm font-semibold tracking-widest text-red-500 uppercase mb-3 font-mono">
            // THE VIRAL CATALYST
          </h2>
          <p className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Meme And Influencer Marketing Value Curve.
          </p>
          <p className="text-neutral-400 mt-4 max-w-xl text-sm sm:text-base">
            Stuffy ads are expensive. Relatability is free. Slide the index below to see how shifting your brand from corporate noise to cultural relevance exponentially increases your impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Interactive Graph visualization (Col-span 7) */}
          <div className="lg:col-span-7 bg-neutral-900/20 border border-neutral-800/80 rounded-3xl p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden">
            {/* Grid overlay for mathematical tech feel */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold text-neutral-500 font-mono tracking-widest uppercase">
                VIRAL MOMENTUM MODEL (SLIDE 10)
              </span>
              <div className="flex items-center gap-1.5 text-red-400 text-xs font-mono">
                <Sparkles size={12} className="animate-pulse" />
                <span>Exponential Return Curve</span>
              </div>
            </div>

            {/* SVG Graph */}
            <div className="relative w-full overflow-hidden flex justify-center">
              <svg viewBox="0 0 500 320" className="w-full max-w-[500px] h-auto overflow-visible select-none">
                {/* Axes */}
                <line x1="80" y1="280" x2="470" y2="280" stroke="#262626" strokeWidth="2" strokeLinecap="round" />
                <line x1="80" y1="50" x2="80" y2="280" stroke="#262626" strokeWidth="2" strokeLinecap="round" />

                {/* Axis Labels */}
                <text x="80" y="300" fill="#737373" fontSize="10" fontFamily="monospace" textAnchor="middle">Corporate Noise</text>
                <text x="440" y="300" fill="#ef4444" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Viral Trend Culture</text>
                
                {/* Vertical Axis labels (rotated) */}
                <text x="50" y="160" fill="#737373" fontSize="10" fontFamily="monospace" textAnchor="middle" transform="rotate(-90, 50, 160)">
                  Brand Recall & Engagement ➔
                </text>
                
                {/* Background references */}
                <path d="M 80,280 Q 260,260 440,70" stroke="#262626" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />

                {/* Exponential curve line dynamically lit up based on relatability value */}
                <path
                  d="M 80,280 Q 260,265 440,70"
                  stroke="url(#graph-grad)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                  className="transition-all duration-300"
                  style={{
                    strokeDasharray: '600',
                    strokeDashoffset: 600 - (relatability / 100) * 600
                  }}
                />

                {/* Dynamic path representing current filled state */}
                <path
                  d={`M 80,280 Q ${80 + normalizedVal * 180},${280 - normalizedVal * 15} ${dotX},${dotY}`}
                  stroke="url(#graph-grad-glow)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  fill="none"
                  className="opacity-40"
                />

                <path
                  d={`M 80,280 Q ${80 + normalizedVal * 180},${280 - normalizedVal * 15} ${dotX},${dotY}`}
                  stroke="url(#graph-grad)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* Glow dot indicating active position on curve */}
                <circle cx={dotX} cy={dotY} r="10" fill="#ef4444" className="opacity-20 animate-ping" style={{ transformOrigin: `${dotX}px ${dotY}px` }} />
                <circle cx={dotX} cy={dotY} r="6" fill="url(#dot-grad)" stroke="#171717" strokeWidth="1.5" />

                {/* Definitions for Gradients */}
                <defs>
                  <linearGradient id="graph-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#404040" />
                    <stop offset="60%" stopColor="#818cf8" />
                    <stop offset="100%" stopColor="#ef4444" />
                  </linearGradient>
                  <linearGradient id="graph-grad-glow" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#000000" />
                    <stop offset="100%" stopColor="#ef4444" />
                  </linearGradient>
                  <linearGradient id="dot-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#b91c1c" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Interactive Slider Input */}
            <div className="mt-8 bg-neutral-950/80 border border-neutral-800 p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-3.5">
                <span className="text-xs font-bold text-neutral-400 font-mono uppercase tracking-wide">
                  ADJUST RELATABILITY INDEX:
                </span>
                <span className="text-sm font-black text-white font-mono bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-lg">
                  {relatability}%
                </span>
              </div>
              
              <input
                type="range"
                min="5"
                max="100"
                value={relatability}
                onChange={(e) => setRelatability(parseInt(e.target.value))}
                className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-red-500 focus:outline-none"
              />
              
              <div className="flex items-center justify-between mt-2.5 text-[10px] font-bold text-neutral-500 font-mono">
                <span>0% - DRIEST CORPORATE</span>
                <span>100% - CULTURE SHAPING</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Explainer and Stats (Col-span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full bg-neutral-900/10 border border-neutral-800/80 rounded-3xl p-6 sm:p-8 backdrop-blur-sm relative">
            <div>
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-neutral-800/40">
                <div>
                  <span className="text-xs font-semibold text-neutral-500 font-mono uppercase">
                    CURVE SEGMENT
                  </span>
                  <h3 className={`text-2xl font-black tracking-tight mt-1 transition-colors ${state.color}`}>
                    {state.label}
                  </h3>
                </div>
                <span className={`px-3 py-1 rounded-lg border text-xs font-bold font-mono ${state.badgeColor}`}>
                  Level {relatability < 25 ? '01' : relatability < 50 ? '02' : relatability < 75 ? '03' : '04'}
                </span>
              </div>

              {/* Dynamic Description Paragraph */}
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-8 transition-opacity duration-300">
                {state.desc}
              </p>

              {/* Dynamic Metrics */}
              <div className="flex flex-col gap-4">
                {/* Stat 1 */}
                <div className="bg-neutral-950/60 p-4 rounded-xl border border-neutral-800/40 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-red-500/10 text-red-400">
                      <RefreshCw size={14} className="animate-[spin_4s_linear_infinite]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-neutral-500 font-mono block">BRAND RECALL INDEX</span>
                      <span className="text-xs font-semibold text-neutral-300">Multiplier of visual memory</span>
                    </div>
                  </div>
                  <span className="text-lg font-black text-white font-mono">{state.recall}</span>
                </div>

                {/* Stat 2 */}
                <div className="bg-neutral-950/60 p-4 rounded-xl border border-neutral-800/40 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <Share2 size={14} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-neutral-500 font-mono block">ORGANIC SHARE RATIO</span>
                      <span className="text-xs font-semibold text-neutral-300">Ratio of peer-to-peer sending</span>
                    </div>
                  </div>
                  <span className="text-lg font-black text-white font-mono">{state.shares}</span>
                </div>

                {/* Stat 3 */}
                <div className="bg-neutral-950/60 p-4 rounded-xl border border-neutral-800/40 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <TrendingDown size={14} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-neutral-500 font-mono block">ACQUISITION COST (CAC)</span>
                      <span className="text-xs font-semibold text-neutral-300">Ad spend savings generated</span>
                    </div>
                  </div>
                  <span className="text-lg font-black text-emerald-400 font-mono">{state.cac}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-neutral-800/40 pt-6 mt-8">
              <p className="text-[11px] text-neutral-500 italic leading-normal">
                ✦ Our Meme & PR team operates an in-house trend-monitoring desk. We turn pop culture moments into direct conversions within 4 hours of trend breakout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
