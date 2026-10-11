import React from 'react';
import { CaseStudy } from '../types/index';
import { X, CheckCircle2, ArrowRight, BarChart2, ShieldCheck, Zap } from 'lucide-react';
import { HERO_ASSETS } from '../data/agencyData';

interface CaseStudyDetailModalProps {
  study: CaseStudy | null;
  onClose: () => void;
  onBookCall: () => void;
}

export const CaseStudyDetailModal: React.FC<CaseStudyDetailModalProps> = ({
  study,
  onClose,
  onBookCall,
}) => {
  if (!study) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl border border-white/15 bg-[#0c1020] p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-mono-num uppercase tracking-wider text-blue-400 mb-1">
            <span>{study.industry}</span>
            <span>·</span>
            <span>{study.region}</span>
            <span>·</span>
            <span>{study.platform}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            {study.clientName}
          </h3>

          <div className="mt-1 text-sm font-semibold text-emerald-400">
            {study.resultsHeadline}
          </div>
        </div>

        {/* Performance Metric Pill Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-black/40 border border-white/10 mb-6 font-mono-num">
          <div>
            <div className="text-[10px] uppercase text-slate-500 font-semibold">Ad Spend</div>
            <div className="text-lg font-bold text-white mt-0.5">{study.adSpend}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase text-slate-500 font-semibold">{study.metricLabel}</div>
            <div className="text-lg font-bold text-blue-400 mt-0.5">{study.primaryMetric}</div>
          </div>
          {study.secondaryLabel && (
            <div>
              <div className="text-[10px] uppercase text-slate-500 font-semibold">{study.secondaryLabel}</div>
              <div className="text-lg font-bold text-emerald-400 mt-0.5">{study.secondaryMetric}</div>
            </div>
          )}
          <div>
            <div className="text-[10px] uppercase text-slate-500 font-semibold">Timeframe</div>
            <div className="text-sm font-bold text-slate-300 mt-1">{study.campaignPeriod}</div>
          </div>
        </div>

        {/* Ad Concept & Dashboard Frame */}
        <div className="rounded-xl border border-white/10 bg-slate-950 p-4 mb-6">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
            <span className="flex items-center gap-1.5 font-semibold text-slate-200">
              <BarChart2 className="w-4 h-4 text-blue-400" />
              Meta Ads Campaign Architecture
            </span>
            <span className="font-mono-num text-emerald-400">Status: Verified Scale</span>
          </div>

          <div className="relative rounded-lg overflow-hidden border border-white/10 aspect-[16/8]">
            <img
              src={HERO_ASSETS.creativeShowcase}
              alt={`${study.clientName} Ad Creative System`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-black/30 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-300 bg-black/60 backdrop-blur-md p-2.5 rounded-lg border border-white/10">
              <strong className="text-white">Strategy Deployed:</strong> High-intent qualification direct response funnel eliminating unqualified cold leads.
            </div>
          </div>
        </div>

        {/* Campaign Breakdown Overview */}
        <div className="space-y-4 mb-6 text-sm">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
              The Baseline Situation
            </h4>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              {study.overview}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Key Systematic Adjustments by BrandVolv:
            </h4>
            <div className="space-y-2">
              {study.keyChanges.map((change, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{change}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>Audited Campaign Blueprint</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookCall();
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-blue-600/30"
            >
              <span>Replicate For Your Brand</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
