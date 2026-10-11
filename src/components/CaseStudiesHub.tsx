import React, { useState } from 'react';
import { CASE_STUDIES, HERO_ASSETS } from '../data/agencyData';
import { CaseStudy } from '../types/index';
import { ArrowLeft, ArrowRight, Eye, ShieldCheck, ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight, Star, MessageSquareQuote, Instagram, MessageCircle } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface CaseStudiesHubProps {
  onBackToHome: () => void;
  onBookCall: () => void;
  onSelectCaseStudy: (study: CaseStudy) => void;
}

export const CaseStudiesHub: React.FC<CaseStudiesHubProps> = ({
  onBackToHome,
  onBookCall,
  onSelectCaseStudy,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters = ['All', 'Real Estate', 'B2B & Services', 'Coaching & Education', 'Healthcare'];

  const filteredStudies = activeFilter === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((item) => item.industry === activeFilter);

  const maxIndex = Math.max(0, filteredStudies.length - 3);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentIndex(0);
  };

  const visibleStudies = filteredStudies.slice(currentIndex, currentIndex + 3);

  const testimonials = [
    {
      company: 'Maya Carmona Real Estate',
      industry: 'Residential Real Estate · United States',
      quote:
        'Honestly, the leads were much better than what we were getting before. We actually had some good conversations come from the ads.',
    },
    {
      company: 'Diligence Agencies',
      industry: 'Recruitment & Staffing · United States',
      quote:
        'We got a lot more people booking calls than expected. Some really good candidates came through.',
    },
    {
      company: 'RVezy Rental Platform',
      industry: 'Marketplace Platform · North America',
      quote:
        'The numbers looked great and we were able to increase the spend without things falling off. Very happy with how it went.',
    },
    {
      company: 'Urbix Design Studio',
      industry: 'Luxury Renovation · Dubai',
      quote:
        'We finally started getting inquiries from people looking for the kind of projects we actually want. That was the biggest difference for us.',
    },
    {
      company: 'Tampa360 Luxury Real Estate',
      industry: 'High-Ticket Real Estate · Florida, USA',
      quote:
        'The messages coming in were much more serious. We had some really good buyer conversations from the campaign.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#090b10] text-slate-100 py-12 md:py-20 animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Return Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-6 border-b border-white/10">
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-semibold transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>← Back to Main Landing Page</span>
            </button>
            <span className="hidden sm:inline text-slate-600">|</span>
            <div className="hidden sm:block">
              <BrandLogo size="sm" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400">Ready to build your lead engine?</span>
            <button
              onClick={onBookCall}
              className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-blue-600/30 transition-all"
            >
              Book Strategy Call
            </button>
          </div>
        </div>

        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-2 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Verified Portfolio & Client Proof</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Case Studies & Client Reviews Hub
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Real data from live Meta Ads campaigns across high-ticket service verticals in the United States and global markets.
          </p>
        </div>

        {/* Original Verified Screenshot Frame (As it was, non-AI) */}
        <div className="mb-20 rounded-3xl border border-white/10 bg-[#0e1222] p-6 sm:p-8 shadow-2xl overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-mono-num uppercase tracking-wider text-blue-400 font-semibold mb-1">
                Audited Meta Ads Manager Export
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                September Scale Sprint Benchmark: 228 Leads @ $5.96 CPL
              </h2>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono-num">
              <span className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-semibold">
                $5.96 Cost Per Lead
              </span>
              <span className="px-3 py-1 rounded-lg bg-blue-500/20 text-blue-300 font-semibold">
                228 Qualified Leads
              </span>
            </div>
          </div>

          {/* Exact original screenshot as uploaded without AI generation */}
          <div className="rounded-xl border border-white/10 overflow-hidden bg-black/60 shadow-inner">
            <img
              src={HERO_ASSETS.adsDashboard}
              alt="Meta Ads Manager Verified September Results - 228 Leads at $5.96 Cost Per Lead"
              className="w-full h-auto object-contain block"
            />
          </div>
        </div>

        {/* Carousel Header & Filter Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-display font-bold text-white tracking-tight">
              Interactive Case Studies Slider
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Slide through client projects · Showing 3 at a time
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 p-1 bg-white/[0.04] border border-white/5 rounded-xl overflow-x-auto">
              {filters.map((category) => (
                <button
                  key={category}
                  onClick={() => handleFilterChange(category)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                    activeFilter === category
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                aria-label="Previous case studies"
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                aria-label="Next case studies"
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3-Item Case Studies Slide Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {visibleStudies.map((study) => (
            <div
              key={study.id}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-6 flex flex-col justify-between hover:border-blue-500/40 hover:bg-white/[0.05] transition-all group min-h-[380px]"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="truncate max-w-[160px]">{study.businessType}</span>
                  <span className="font-mono-num">{study.region}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                  {study.clientName}
                </h3>

                <p className="text-xs font-semibold text-emerald-400 mb-5">
                  {study.resultsHeadline}
                </p>

                <div className="grid grid-cols-2 gap-2.5 p-3 rounded-xl bg-black/40 border border-white/5 mb-5 font-mono-num text-xs">
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Ad Spend</span>
                    <span className="font-bold text-white text-sm">{study.adSpend}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">{study.metricLabel}</span>
                    <span className="font-bold text-blue-400 text-sm">{study.primaryMetric}</span>
                  </div>
                  {study.secondaryLabel && (
                    <>
                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase">{study.secondaryLabel}</span>
                        <span className="font-bold text-emerald-400 text-sm">{study.secondaryMetric}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase">Period</span>
                        <span className="text-slate-300 text-xs">{study.campaignPeriod}</span>
                      </div>
                    </>
                  )}
                </div>

                <div className="space-y-1.5 mb-6">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    What Was Changed:
                  </div>
                  {study.keyChanges.slice(0, 2).map((change, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{change}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => onSelectCaseStudy(study)}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Full Breakdown</span>
                </button>

                <button
                  onClick={onBookCall}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                >
                  <span>Replicate</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mb-20">
          {Array.from({ length: Math.ceil(filteredStudies.length / 3) }).map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(Math.min(maxIndex, dotIdx * 3))}
              className={`h-2 rounded-full transition-all ${
                Math.floor(currentIndex / 3) === dotIdx
                  ? 'w-6 bg-blue-500'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Slide group ${dotIdx + 1}`}
            />
          ))}
        </div>

        {/* Client Reviews Section (What Our Clients Say) */}
        <div className="pt-12 border-t border-white/10 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3 flex items-center justify-center gap-2">
              <MessageSquareQuote className="w-4 h-4 text-blue-400" />
              <span>Real Testimonials</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              What Our Clients Say
            </h2>

            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              Real feedback from businesses we've helped generate leads, bookings, and sales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 flex flex-col justify-between hover:border-white/20 transition-all"
              >
                <div>
                  <div className="flex items-center gap-1 mb-4 text-amber-400">
                    {Array.from({ length: 5 }).map((_, sIdx) => (
                      <Star key={sIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                    {item.company}
                  </h3>
                  <div className="text-xs text-slate-500 mb-4 font-mono-num">
                    {item.industry}
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed italic">
                    “{item.quote}”
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Verified Client Review</span>
                  <span className="text-emerald-400 font-medium">Meta Ads Lead Engine</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back and Action Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-blue-950/40 border border-blue-500/20 text-center">
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
            Ready to Build Your Lead Generation Engine?
          </h3>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Book a strategy call and get a custom 24-hour plan based on your current ad spend and business goals.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onBookCall}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all"
            >
              Book Your Strategy Call →
            </button>
            <a
              href="https://wa.me/919845617868"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/30 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us (+91 98456 17868)</span>
            </a>
            <button
              onClick={onBackToHome}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold transition-all border border-white/10"
            >
              ← Back to Main Landing Page
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-center gap-6 text-xs text-slate-400">
            <a
              href="https://www.instagram.com/brandvolv/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-pink-400 hover:text-pink-300 transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow @brandvolv on Instagram</span>
            </a>
            <span className="text-slate-600">·</span>
            <a
              href="https://wa.me/919845617868"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Direct WhatsApp: wa.me/919845617868</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
