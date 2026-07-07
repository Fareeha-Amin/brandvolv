import React, { useState } from 'react';
import { SERVICES } from '../data';
import { Sparkles, TrendingUp, Laptop, Search, ChevronRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Services() {
  const [selectedId, setSelectedId] = useState(SERVICES[0].id);

  const selectedService = SERVICES.find((s) => s.id === selectedId) || SERVICES[0];

  const getIcon = (id: string, className: string = '') => {
    switch (id) {
      case 'performance':
        return <TrendingUp className={className} />;
      case 'meme':
        return <Sparkles className={className} />;
      case 'web':
        return <Laptop className={className} />;
      case 'seo':
        return <Search className={className} />;
      default:
        return <TrendingUp className={className} />;
    }
  };

  return (
    <section id="services" className="relative py-24 bg-[#050508] border-t border-neutral-900 overflow-hidden">
      {/* Background abstract radial lights */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-indigo-900/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center sm:text-left">
          <h2 className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-3 font-mono">
            // OUR GROWING ECOSYSTEM
          </h2>
          <p className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Comprehensive Growth Pillars.
          </p>
          <p className="text-neutral-400 mt-4 max-w-xl text-sm sm:text-base">
            We don’t believe in siloed marketing. We build interconnected digital ecosystems where every click, post, and technical audit feeds your bottom line.
          </p>
        </div>

        {/* Dynamic Bento-like Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Pillars List (Col-span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {SERVICES.map((service) => {
              const isSelected = service.id === selectedId;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedId(service.id)}
                  className={`relative p-6 rounded-2xl text-left border transition-all duration-300 group cursor-pointer ${
                    isSelected
                      ? 'bg-neutral-900/60 border-neutral-700/80 shadow-lg shadow-blue-500/5'
                      : 'bg-neutral-950/40 border-neutral-900 hover:bg-neutral-900/20 hover:border-neutral-800'
                  }`}
                >
                  {/* Left indicator glow line */}
                  {isSelected && (
                    <motion.div
                      layoutId="active-pillar-indicator"
                      className="absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-r"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div className="flex items-start gap-4">
                    {/* Icon frame */}
                    <div
                      className={`p-3 rounded-xl border transition-colors ${
                        isSelected
                          ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
                          : 'bg-neutral-900 border-neutral-800 text-neutral-500 group-hover:text-neutral-400'
                      }`}
                    >
                      {getIcon(service.id, 'w-5 h-5')}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3
                          className={`font-bold text-base sm:text-lg tracking-tight ${
                            isSelected ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-200'
                          }`}
                        >
                          {service.title}
                        </h3>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform ${
                            isSelected ? 'text-blue-400 translate-x-1' : 'text-neutral-600 group-hover:text-neutral-400'
                          }`}
                        />
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-500 mt-1 line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Display Details (Col-span 7) */}
          <div className="lg:col-span-7 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-neutral-900/30 border border-neutral-800/80 rounded-3xl p-6 sm:p-8 relative overflow-hidden backdrop-blur-sm flex flex-col justify-between h-full"
              >
                {/* Visual Glow background corresponding to service accent */}
                <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${selectedService.gradient} opacity-[0.04] blur-[80px] pointer-events-none rounded-full`} />

                <div>
                  {/* Top Header details & Outcome Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800/80 pb-6 mb-6">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 font-mono">
                        FOCUS PILLAR
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                        {selectedService.title}
                      </h3>
                    </div>
                    {/* Performance outcome card */}
                    <div className="bg-neutral-950/60 border border-neutral-800/80 rounded-2xl px-5 py-3 flex flex-col items-start min-w-[140px] shadow-sm">
                      <span className="text-[10px] font-bold text-blue-400 font-mono tracking-widest uppercase">
                        {selectedService.metricLabel}
                      </span>
                      <span className="text-lg sm:text-xl font-extrabold text-white mt-0.5 tracking-tight font-mono">
                        {selectedService.metric}
                      </span>
                    </div>
                  </div>

                  {/* Long descriptive text */}
                  <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8">
                    {selectedService.longDescription}
                  </p>

                  {/* Methodology list */}
                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono mb-4">
                      // METHODOLOGY & CONVERSION PATHS
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedService.methodology.map((method, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <div className="p-0.5 rounded bg-blue-500/10 text-blue-400 mt-1">
                            <Check size={12} className="stroke-[3]" />
                          </div>
                          <span className="text-xs sm:text-sm text-neutral-400 leading-snug">
                            {method}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Foot features listing */}
                <div className="border-t border-neutral-800/80 pt-6 mt-6">
                  <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono mb-4">
                    // CAPABILITIES
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.features.map((feat, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg bg-neutral-950/80 border border-neutral-800/60 text-xs text-neutral-400 hover:text-white transition-colors"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
