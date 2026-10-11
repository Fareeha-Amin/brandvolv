import React from 'react';
import { ArrowRight, ShieldCheck, Layers, Star, ExternalLink } from 'lucide-react';
import { HERO_ASSETS } from '../data/agencyData';

interface ProofSectionProps {
  onBookCall: () => void;
  onOpenCaseStudiesPage: () => void;
}

export const ProofSection: React.FC<ProofSectionProps> = ({
  onBookCall,
  onOpenCaseStudiesPage,
}) => {
  return (
    <section id="proof" className="py-20 md:py-28 bg-[#0b0e19] border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header verbatim from PDF */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Verified Track Record</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight text-balance">
            Real Campaigns. Real Data. Real Optimization.
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            See how strategic testing and optimization can turn Meta Ads into a reliable source of leads.
          </p>
        </div>

        {/* Featured Campaign Performance Benchmark Frame with EXACT ORIGINAL NON-AI IMAGE */}
        <div className="rounded-3xl border border-white/10 bg-[#0e1222] p-6 sm:p-8 shadow-2xl overflow-hidden mb-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-white/10">
            <div>
              <div className="text-xs font-mono-num uppercase tracking-wider text-blue-400 font-semibold mb-1">
                Featured Campaign Performance Benchmark
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                September Scale Sprint: High-Intent Lead Acquisition
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Ads Manager verified snapshot for USA service-business qualification funnel.
              </p>
            </div>

            {/* The 3 Core Highlight Badges verbatim from PDF */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 rounded-xl bg-black/40 border border-blue-500/20 text-center min-w-[120px]">
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-white font-mono-num">
                  228
                </div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                  Qualified Leads
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-black/40 border border-emerald-500/20 text-center min-w-[120px]">
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-400 font-mono-num">
                  $5.96
                </div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                  Cost Per Lead
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-black/40 border border-purple-500/20 text-center min-w-[120px]">
                <div className="text-xl sm:text-2xl font-display font-bold text-purple-300 font-mono-num">
                  September
                </div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                  Audited Results
                </div>
              </div>
            </div>
          </div>

          {/* Clean frame showing the authentic, original screenshot (Not AI generated) */}
          <div className="rounded-xl border border-white/10 overflow-hidden bg-black/80 shadow-2xl">
            <img
              src={HERO_ASSETS.realAdsManagerScreenshot}
              alt="Meta Ads Manager Verified September Results - 228 Leads at $5.96 Cost Per Lead"
              className="w-full h-auto object-contain block hover:scale-[1.01] transition-transform duration-300"
            />
          </div>
        </div>

        {/* Compact Slide / Subpage Trigger Card (Prevents main page scroll bloating) */}
        <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-950/40 via-[#0e1428] to-indigo-950/40 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1 text-amber-400 text-xs mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-slate-300 font-mono-num ml-1.5 font-semibold">5.0 Star Client Rating</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Looking for More Real Campaign Data & Client Reviews?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Browse our 10+ verified client case studies across Real Estate, B2B, Renovation, and Healthcare.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={onOpenCaseStudiesPage}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all active:scale-[0.98]"
            >
              <span>View Case Studies & Reviews →</span>
            </button>
            <button
              onClick={onBookCall}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-semibold transition-all"
            >
              <span>Book Strategy Call</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
