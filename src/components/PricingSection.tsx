import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/agencyData';
import { Check, ArrowRight, Calculator, HelpCircle } from 'lucide-react';

interface PricingSectionProps {
  onBookCall: () => void;
  onOpenCalculator: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onBookCall, onOpenCalculator }) => {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-[#0b0e19] border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
            Transparent Investment
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight text-balance uppercase">
            Choose Your Lead Generation Plan
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            High-intent Meta Ads management and system optimization built specifically for USA service businesses.
          </p>

          {/* Quick Calculator trigger */}
          <div className="mt-4 inline-flex items-center">
            <button
              onClick={onOpenCalculator}
              className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 underline underline-offset-4"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Calculate your estimated monthly leads & ROI</span>
            </button>
          </div>
        </div>

        {/* 2 Packages Grid (Starter vs Growth 3-Month System) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan) => {
            const isGrowth = plan.id === 'growth';

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all ${
                  isGrowth
                    ? 'bg-gradient-to-b from-[#141b34] to-[#0d1222] border-2 border-blue-500/80 shadow-2xl shadow-blue-500/10 ring-1 ring-blue-500/30'
                    : 'bg-white/[0.02] border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Most Popular Badge for Growth plan */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-8 px-3.5 py-1 rounded-full bg-blue-600 text-white font-mono-num font-bold text-[10px] uppercase tracking-wider shadow-lg shadow-blue-600/40">
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Plan Name & Billing Period */}
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h3 className="text-2xl font-display font-extrabold text-white tracking-tight">
                      {plan.name}
                    </h3>
                    <span className="text-xs font-mono-num font-semibold text-blue-400 uppercase tracking-wider">
                      {plan.billingPeriod}
                    </span>
                  </div>

                  <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Pricing Box */}
                  <div className="p-5 rounded-2xl bg-black/40 border border-white/5 mb-8">
                    <div className="flex items-baseline gap-3">
                      <span className="text-4xl sm:text-5xl font-display font-extrabold text-white font-mono-num">
                        {plan.price}
                      </span>
                      {plan.originalPrice && (
                        <span className="text-lg text-slate-500 line-through font-mono-num">
                          {plan.originalPrice}
                        </span>
                      )}
                      <span className="text-xs text-slate-400 font-mono-num">
                        / {plan.id === 'growth' ? '3 Months' : 'Month'}
                      </span>
                    </div>

                    {/* Savings & monthly equivalent for Growth */}
                    {plan.savings && (
                      <div className="mt-2 flex items-center justify-between text-xs">
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold font-mono-num">
                          {plan.savings}
                        </span>
                        <span className="text-slate-400 font-mono-num">
                          {plan.monthlyEquivalent}
                        </span>
                      </div>
                    )}

                    {/* Starter plan commitment note */}
                    {plan.id === 'starter' && (
                      <div className="mt-2 text-xs text-slate-400 font-medium">
                        No Long-Term Commitment
                      </div>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      What’s Included:
                    </div>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan CTA button */}
                <div className="pt-6 border-t border-white/5">
                  <button
                    onClick={onBookCall}
                    className={`w-full inline-flex items-center justify-center gap-2 py-4 px-6 text-xs font-bold uppercase tracking-wider rounded-xl transition-all active:scale-[0.98] ${
                      isGrowth
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50'
                        : 'bg-white/10 hover:bg-white/15 text-white border border-white/10'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Under the Packages banner verbatim from PDF:
            Not sure which plan fits your business?
            Book a strategy call and get a custom 24-hour plan based on your goals, current marketing, and lead generation challenges.
            BOOK MY STRATEGY CALL → */}
        <div className="mt-16 max-w-3xl mx-auto rounded-2xl border border-white/10 bg-gradient-to-r from-blue-950/30 via-slate-900/40 to-blue-950/30 p-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            <HelpCircle className="w-4 h-4 text-blue-400" />
            <span>Tailored Assessment</span>
          </div>

          <h4 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
            Not sure which plan fits your business?
          </h4>

          <p className="mt-2 text-sm text-slate-300 max-w-xl mx-auto">
            Book a strategy call and get a custom 24-hour plan based on your goals, current marketing, and lead generation challenges.
          </p>

          <div className="mt-6">
            <button
              onClick={onBookCall}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-lg shadow-blue-600/30 active:scale-[0.98]"
            >
              <span>Book My Strategy Call →</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
