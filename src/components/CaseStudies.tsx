import React, { useState } from 'react';
import { CASE_STUDIES } from '../data';
import { BarChart3, TrendingUp, Compass, AlertCircle, CheckCircle2, ChevronRight, Zap, X, Activity, DollarSign, Users, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import BrandLogo from './BrandLogos';

export default function CaseStudies() {
  const [activeConsoleClient, setActiveConsoleClient] = useState<string | null>(null);
  const [activeCampaignIdx, setActiveCampaignIdx] = useState(0);

  const clientData = CASE_STUDIES.find((c) => c.id === activeConsoleClient);
  const campaignData = clientData ? clientData.campaigns[activeCampaignIdx] || clientData.campaigns[0] : null;

  const handleOpenConsole = (clientId: string) => {
    setActiveConsoleClient(clientId);
    setActiveCampaignIdx(0);
  };

  const handleCloseConsole = () => {
    setActiveConsoleClient(null);
  };

  const formatNumber = (num?: number) => {
    if (num === undefined) return 'N/A';
    if (num >= 100000) {
      return (num / 100000).toFixed(2) + 'L';
    }
    return num.toLocaleString('en-IN');
  };

  return (
    <section id="case-studies" className="relative py-24 bg-[#030305] border-t border-neutral-900 overflow-hidden">
      {/* Background neon flares */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] rounded-full bg-blue-900/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] rounded-full bg-violet-900/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header section */}
        <div className="mb-16 text-center sm:text-left">
          <h2 className="text-sm font-semibold tracking-widest text-indigo-500 uppercase mb-3 font-mono">
            // METRIC-DRIVEN CONVERSIONS
          </h2>
          <p className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Our Proof is in the Data.
          </p>
          <p className="text-neutral-400 mt-4 max-w-xl text-sm sm:text-base">
            We don't hide behind vanity metrics. Click any of the official client cards below to load their live campaign consoles and analyze the exact spend, reach, and conversions.
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Marquee for Case Studies - Bleeds full-width */}
      <div className="marquee-container mb-12 py-4 relative z-10">
        {/* Left and Right Gradient Overlays for Fade Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-48 bg-gradient-to-r from-[#030305] via-[#030305]/75 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-48 bg-gradient-to-l from-[#030305] via-[#030305]/75 to-transparent z-20 pointer-events-none" />

        <div className="marquee-content gap-6 sm:gap-8 px-4">
          {[...CASE_STUDIES, ...CASE_STUDIES, ...CASE_STUDIES].map((study, idx) => (
            <motion.div
              key={`${study.id}-${idx}`}
              whileHover={{ y: -6 }}
              onClick={() => handleOpenConsole(study.id)}
              className="w-[300px] sm:w-[410px] shrink-0 flex flex-col justify-between bg-neutral-900/10 hover:bg-neutral-900/30 border border-neutral-800/80 hover:border-blue-500/50 rounded-3xl p-6 sm:p-8 backdrop-blur-sm transition-all cursor-pointer shadow-lg group relative overflow-hidden"
            >
              {/* Top ambient glow */}
              <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-blue-600/5 group-hover:bg-blue-600/15 blur-2xl transition-all duration-500" />

              <div>
                {/* Header: Logo & Industry */}
                <div className="flex items-center justify-between gap-x-4 gap-y-2 flex-wrap mb-6 pb-4 border-b border-neutral-800/40">
                  <BrandLogo id={study.id} size="lg" className="shrink-0" />
                  <span className="px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 font-mono tracking-wide uppercase shrink-0">
                    {study.industry}
                  </span>
                </div>

                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 min-h-[3rem]">
                  {study.description}
                </p>

                {/* KPI Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-neutral-950/40 border border-neutral-800/40 p-3 rounded-xl flex flex-col">
                    <span className="text-[9px] font-bold text-neutral-500 font-mono tracking-wider uppercase">
                      SPEND (INR)
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white font-mono mt-0.5">
                      {study.spend}
                    </span>
                  </div>

                  <div className="bg-neutral-950/40 border border-neutral-800/40 p-3 rounded-xl flex flex-col">
                    <span className="text-[9px] font-bold text-neutral-500 font-mono tracking-wider uppercase">
                      REACH / IMPR
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white font-mono mt-0.5">
                      {study.reach || study.impressions}
                    </span>
                  </div>

                  <div className="bg-neutral-950/40 border border-neutral-800/40 p-3 rounded-xl flex flex-col">
                    <span className="text-[9px] font-bold text-neutral-500 font-mono tracking-wider uppercase">
                      CONVERSIONS
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-emerald-400 font-mono mt-0.5">
                      {study.conversions}
                    </span>
                  </div>

                  <div className="bg-neutral-950/40 border border-neutral-800/40 p-3 rounded-xl flex flex-col">
                    <span className="text-[9px] font-bold text-neutral-500 font-mono tracking-wider uppercase">
                      EFFICIENCY
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-indigo-400 font-mono mt-0.5">
                      {study.avgCpr || study.avgCpc}
                    </span>
                  </div>
                </div>

                {/* Strategic Learnings */}
                <div className="border-t border-neutral-800/40 pt-5 mt-5">
                  <h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest font-mono mb-3.5 flex items-center gap-1.5">
                    <Compass size={12} className="text-blue-500" />
                    <span>KEY LEARNINGS</span>
                  </h4>
                  <div className="flex flex-col gap-2.5">
                    {study.learnings.slice(0, 2).map((learning, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 size={12} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-neutral-400 leading-normal">
                          {learning}
                        </span>
                      </div>
                    ))}
                    {study.learnings.length > 2 && (
                      <span className="text-[10px] text-blue-400 font-bold font-mono mt-0.5">
                        + {study.learnings.length - 2} More Learnings In Console
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-neutral-800/40 flex items-center justify-between group-hover:text-blue-400 transition-colors">
                <span className="text-xs font-bold font-mono tracking-wide">
                  ANALYZE LIVE METRICS
                </span>
                <ChevronRight size={16} className="transform group-hover:translate-x-1.5 transition-transform text-indigo-500 group-hover:text-blue-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Campaign Console Modal */}
      <AnimatePresence>
        {activeConsoleClient && clientData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Modal backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseConsole}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Content container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-full max-w-5xl bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh] md:max-h-[85vh]"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-neutral-800 bg-neutral-900/40">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                    <Activity size={18} />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-neutral-500 font-mono tracking-widest uppercase block">
                      SECURED Meta Ads Campaign Console
                    </span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <BrandLogo id={clientData.id} size="lg" />
                      <span className="text-xs text-neutral-500 font-mono">
                        ({clientData.industry})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={handleCloseConsole}
                  className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors cursor-pointer"
                  aria-label="Close dashboard"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Main Body Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 overflow-hidden flex-1 divide-y md:divide-y-0 md:divide-x divide-neutral-800">
                
                {/* Left Side: Campaign list selector (Col-span 4) */}
                <div className="md:col-span-5 p-4 overflow-y-auto bg-neutral-950/50 max-h-[250px] md:max-h-none">
                  <div className="mb-3 px-2">
                    <span className="text-[10px] font-bold text-neutral-500 font-mono uppercase tracking-widest block">
                      CAMPAIGNS SELECTOR ({clientData.campaigns.length})
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {clientData.campaigns.map((camp, idx) => {
                      const isSelected = idx === activeCampaignIdx;
                      return (
                        <button
                          key={idx}
                          onClick={() => setActiveCampaignIdx(idx)}
                          className={`w-full p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-neutral-900 border-neutral-700 text-white shadow-inner'
                              : 'bg-transparent border-transparent text-neutral-400 hover:bg-neutral-900/30 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold font-mono truncate max-w-[85%]">
                              {camp.name}
                            </span>
                            <ChevronRight
                              size={14}
                              className={`flex-shrink-0 transition-transform ${
                                isSelected ? 'text-blue-400 translate-x-1' : 'text-neutral-600'
                              }`}
                            />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Right Side: Campaign stats & insights (Col-span 8) */}
                <div className="md:col-span-7 p-6 overflow-y-auto flex flex-col justify-between bg-neutral-900/10">
                  {campaignData && (
                    <div className="flex flex-col justify-between h-full gap-6">
                      <div>
                        {/* Title and Active indicator */}
                        <div className="flex items-center gap-2 mb-4">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-bold text-emerald-400 font-mono uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>LIVE AUDIT DATA</span>
                          </span>
                          <span className="text-neutral-600 font-mono text-[10px]">
                            CAMPAIGN #{activeCampaignIdx + 1}
                          </span>
                        </div>

                        <h5 className="text-lg sm:text-xl font-extrabold text-white mb-6">
                          {campaignData.name}
                        </h5>

                        {/* Interactive campaign metrics */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          {/* Stat Block 1 */}
                          <div className="bg-neutral-950/60 border border-neutral-800 p-4 rounded-2xl">
                            <span className="text-[9px] font-bold text-neutral-500 font-mono block">
                              AD BUDGET SPENT
                            </span>
                            <p className="text-lg font-black text-white font-mono mt-0.5">
                              ₹{campaignData.spend.toLocaleString('en-IN')}
                            </p>
                          </div>

                          {/* Stat Block 2 */}
                          {campaignData.reach !== undefined && (
                            <div className="bg-neutral-950/60 border border-neutral-800 p-4 rounded-2xl">
                              <span className="text-[9px] font-bold text-neutral-500 font-mono block">
                                AUDIENCE REACH
                              </span>
                              <p className="text-lg font-black text-white font-mono mt-0.5">
                                {formatNumber(campaignData.reach)}
                              </p>
                            </div>
                          )}

                          {/* Stat Block 3 */}
                          {campaignData.conversions !== undefined && (
                            <div className="bg-neutral-950/60 border border-neutral-800 p-4 rounded-2xl">
                              <span className="text-[9px] font-bold text-neutral-500 font-mono block">
                                CONVERSIONS
                              </span>
                              <p className="text-lg font-black text-emerald-400 font-mono mt-0.5">
                                {campaignData.conversions}
                              </p>
                            </div>
                          )}

                          {/* Stat Block 4 */}
                          {campaignData.clicks !== undefined && (
                            <div className="bg-neutral-950/60 border border-neutral-800 p-4 rounded-2xl">
                              <span className="text-[9px] font-bold text-neutral-500 font-mono block">
                                LINK CLICKS
                              </span>
                              <p className="text-lg font-black text-indigo-400 font-mono mt-0.5">
                                {campaignData.clicks}
                              </p>
                            </div>
                          )}

                          {/* Stat Block 5 */}
                          {campaignData.cpr !== undefined && (
                            <div className="bg-neutral-950/60 border border-neutral-800 p-4 rounded-2xl">
                              <span className="text-[9px] font-bold text-neutral-500 font-mono block">
                                COST PER RESULT (CPR)
                              </span>
                              <p className="text-lg font-black text-blue-400 font-mono mt-0.5">
                                ₹{campaignData.cpr}
                              </p>
                            </div>
                          )}

                          {/* Stat Block 6 */}
                          {campaignData.cpc !== undefined && (
                            <div className="bg-neutral-950/60 border border-neutral-800 p-4 rounded-2xl">
                              <span className="text-[9px] font-bold text-neutral-500 font-mono block">
                                COST PER CLICK (CPC)
                              </span>
                              <p className="text-lg font-black text-blue-400 font-mono mt-0.5">
                                ₹{campaignData.cpc}
                              </p>
                            </div>
                          )}

                          {/* Stat Block 7 */}
                          {campaignData.cpm !== undefined && (
                            <div className="bg-neutral-950/60 border border-neutral-800 p-4 rounded-2xl">
                              <span className="text-[9px] font-bold text-neutral-500 font-mono block">
                                CPM (PER 1,000 IMPR)
                              </span>
                              <p className="text-lg font-black text-neutral-300 font-mono mt-0.5">
                                ₹{campaignData.cpm}
                              </p>
                            </div>
                          )}

                          {/* Stat Block 8 */}
                          {campaignData.ctr !== undefined && (
                            <div className="bg-neutral-950/60 border border-neutral-800 p-4 rounded-2xl">
                              <span className="text-[9px] font-bold text-neutral-500 font-mono block">
                                CLICK RATE (CTR)
                              </span>
                              <p className="text-lg font-black text-cyan-400 font-mono mt-0.5">
                                {(campaignData.ctr * 100).toFixed(2)}%
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Insight box */}
                      {campaignData.insight && (
                        <div className="bg-neutral-950/60 border border-neutral-800 rounded-2xl p-4 flex items-start gap-3">
                          <AlertCircle size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-[10px] font-bold text-blue-400 font-mono tracking-widest uppercase">
                              CAMPAIGN INSIGHT & AUDIENCE REACTION
                            </span>
                            <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                              {campaignData.insight}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Footer / Info */}
              <div className="p-4 bg-neutral-950 border-t border-neutral-900 text-center">
                <p className="text-[10px] text-neutral-500 font-mono">
                  ✦ Click outside or select another client card to analyze different performance models.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
