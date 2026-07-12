import React, { useState } from 'react';
import { 
  ChevronRight, 
  Check, 
  Target, 
  ShieldCheck, 
  Zap, 
  BarChart2, 
  Users, 
  Star, 
  Clock, 
  Megaphone, 
  Monitor, 
  Pencil,
  ArrowRight,
  Rocket
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServiceData {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  metricLabel: string;
  metricValue: string;
  metricSub: string;
  gradient: string;
  approach: string[];
  exploreText: string;
}

const SERVICES_DATA: ServiceData[] = [
  {
    id: 'performance',
    title: 'Performance Marketing',
    description: 'Precision targeting on Meta & Google Ads to generate high-quality leads and drive scalable growth.',
    longDescription: 'We build and manage high-converting advertising engines across platforms. Our data-driven approach and continuous testing ensure every rupee you spend is optimized for maximum ROI.',
    metricLabel: 'RESULTS THAT MATTER',
    metricValue: '698 Conversions',
    metricSub: 'From ₹30K Ad Spend',
    gradient: 'from-blue-600 via-indigo-600 to-violet-600',
    approach: [
      'Multi-Objective Meta Funnels',
      'Audience Research & Segmentation',
      'Creative Testing & Optimization',
      'Active-Demand Capture',
      'Google Search & Retargeting',
      'Conversion Tracking & Reporting'
    ],
    exploreText: 'Explore Our Performance Marketing Process'
  },
  {
    id: 'meme',
    title: 'Meme & PR Marketing',
    description: 'The Viral Catalyst. High-relatability brand positioning that cuts through noise and captures attention.',
    longDescription: 'Stuffy corporate brochures don’t sell on social media. We create custom-engineered, culturally relevant memes and platform-native content that positions your brand at the absolute center of digital subcultures, multiplying recall and organic reach.',
    metricLabel: 'VIRAL ENGAGEMENT',
    metricValue: '1.5M+ Reach',
    metricSub: 'From Single Campaign',
    gradient: 'from-purple-600 via-pink-600 to-red-500',
    approach: [
      'Trend Hijacking & Memes',
      'High-Relatability Copywriting',
      'Platform-Native Shorts/Reels',
      'PR & Media Placements',
      'KOL & Influencer Seeding',
      'Organic Community Building'
    ],
    exploreText: 'Explore Our Meme & PR Process'
  },
  {
    id: 'web',
    title: 'Web Development',
    description: 'Fast, responsive, and conversion-focused websites that turn visitors into customers.',
    longDescription: 'Your website is not a digital brochure—it is your ultimate conversion terminal. We build lightning-fast web architectures engineered with psychological purchase triggers, frictionless checkout pathways, and seamless CRM and tracking integrations.',
    metricLabel: 'CORE WEB VITALS',
    metricValue: '98/100 Speed',
    metricSub: 'Interaction to Next Paint',
    gradient: 'from-emerald-600 via-teal-600 to-cyan-500',
    approach: [
      'Frictionless UX Design',
      '0.2s High-Performance Load',
      'Shopify & WordPress Custom',
      'Advanced Tracking Integrations',
      'SEO-Optimized Codebases',
      'Robust Mobile Responsiveness'
    ],
    exploreText: 'Explore Our Web Development Process'
  },
  {
    id: 'branding',
    title: 'Branding & Creative',
    description: 'Brand identity, design systems, and creative assets that build trust and leave a lasting impression.',
    longDescription: 'We craft distinctive brand identities, design systems, and premium creative assets. Our tailored visual storytelling establishes immediate credibility, ensuring your business leaves an unforgettable impression.',
    metricLabel: 'DESIGN EXCELLENCE',
    metricValue: '100% Custom',
    metricSub: 'Bespoke Brand Assets',
    gradient: 'from-amber-600 via-orange-600 to-red-500',
    approach: [
      'Distinctive Visual Identity',
      'Comprehensive Design Systems',
      'High-Converting Ad Creatives',
      'Bespoke Vector Graphics',
      'Premium Brand Storytelling',
      'Consistent Multi-Channel Assets'
    ],
    exploreText: 'Explore Our Branding & Creative Process'
  }
];

export default function Services() {
  const [selectedId, setSelectedId] = useState(SERVICES_DATA[0].id);

  const selectedService = SERVICES_DATA.find((s) => s.id === selectedId) || SERVICES_DATA[0];

  const getPillarIcon = (id: string, isSelected: boolean) => {
    switch (id) {
      case 'performance':
        return (
          <div className={`p-3 rounded-xl border transition-all duration-300 ${
            isSelected 
              ? 'bg-blue-500/10 border-blue-500/30 text-blue-400 shadow-sm' 
              : 'bg-blue-950/10 border-blue-900/40 text-blue-500'
          }`}>
            <BarChart2 size={20} />
          </div>
        );
      case 'meme':
        return (
          <div className={`p-3 rounded-xl border transition-all duration-300 ${
            isSelected 
              ? 'bg-purple-500/10 border-purple-500/30 text-purple-400 shadow-sm' 
              : 'bg-purple-950/10 border-purple-900/40 text-purple-500'
          }`}>
            <Megaphone size={20} />
          </div>
        );
      case 'web':
        return (
          <div className={`p-3 rounded-xl border transition-all duration-300 ${
            isSelected 
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-sm' 
              : 'bg-emerald-950/10 border-emerald-900/40 text-emerald-500'
          }`}>
            <Monitor size={20} />
          </div>
        );
      case 'branding':
        return (
          <div className={`p-3 rounded-xl border transition-all duration-300 ${
            isSelected 
              ? 'bg-amber-500/10 border-amber-500/30 text-amber-400 shadow-sm' 
              : 'bg-amber-950/10 border-amber-900/40 text-amber-500'
          }`}>
            <Pencil size={20} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="services" className="relative py-24 bg-[#030305] border-t border-neutral-900/80 overflow-hidden">
      {/* Background abstract radial lights */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-indigo-950/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="mb-14 text-left">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-blue-500 uppercase font-mono block mb-3">
            // OUR GROWTH ECOSYSTEM
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Comprehensive Growth Pillars<span className="text-blue-500">.</span>
          </h2>
          <p className="text-neutral-400 mt-4 max-w-2xl text-sm sm:text-base leading-relaxed">
            We don't believe in siloed marketing. We build interconnected digital ecosystems where every click, post, and technical audit drives measurable results for your business.
          </p>
        </div>

        {/* 4 horizontal cards (highlights) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Card 1 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-950/30 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 shadow-sm">
              <Target size={18} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-neutral-200 tracking-tight leading-snug">
                Data-Driven Strategies
              </h4>
              <p className="text-xs text-neutral-500 mt-1.5 leading-normal">
                Every decision backed by real data and insights.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-950/30 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 shadow-sm">
              <ShieldCheck size={18} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-neutral-200 tracking-tight leading-snug">
                Performance First
              </h4>
              <p className="text-xs text-neutral-500 mt-1.5 leading-normal">
                Focused on ROI, leads, and real business growth.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-950/30 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 shadow-sm">
              <Zap size={18} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-neutral-200 tracking-tight leading-snug">
                Full-Funnel Approach
              </h4>
              <p className="text-xs text-neutral-500 mt-1.5 leading-normal">
                From brand awareness to conversion and retention.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-950/30 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 shadow-sm">
              <BarChart2 size={18} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-neutral-200 tracking-tight leading-snug">
                Transparent Reporting
              </h4>
              <p className="text-xs text-neutral-500 mt-1.5 leading-normal">
                Clear, real-time reports that show what matters.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Bento-like Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Pillars List (Col-span 5 on desktop, full-width on mobile) */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
            {SERVICES_DATA.map((service) => {
              const isSelected = service.id === selectedId;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedId(service.id)}
                  className={`relative p-5 rounded-2xl text-left border transition-all duration-300 group cursor-pointer w-full ${
                    isSelected
                      ? 'bg-neutral-900/40 border-blue-500/30 shadow-lg shadow-blue-500/5'
                      : 'bg-neutral-950/20 border-neutral-900/60 hover:bg-neutral-900/10 hover:border-neutral-800'
                  }`}
                >
                  {/* Left indicator glow line */}
                  {isSelected && (
                    <motion.div
                      layoutId="active-pillar-indicator-line"
                      className="absolute left-0 top-5 bottom-5 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-r"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div className="flex items-start gap-4">
                    {/* Icon frame */}
                    {getPillarIcon(service.id, isSelected)}

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3
                          className={`font-bold text-base tracking-tight transition-colors duration-200 ${
                            isSelected ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-200'
                          }`}
                        >
                          {service.title}
                        </h3>
                        <ChevronRight
                          className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                            isSelected ? 'text-blue-400 translate-x-1 rotate-90 lg:rotate-0' : 'text-neutral-700 group-hover:text-neutral-500'
                          }`}
                        />
                      </div>
                      <p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Mobile-Only Expanded Accordion Details */}
                  <AnimatePresence initial={false}>
                    {isSelected && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden overflow-hidden mt-6 pt-6 border-t border-neutral-850"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* Performance outcome card */}
                        <div className="bg-neutral-950/60 border border-neutral-850 rounded-2xl px-4 py-3 mb-6 flex flex-col items-start shadow-inner">
                          <span className="text-[9px] font-bold text-blue-500 font-mono tracking-[0.18em] uppercase">
                            {service.metricLabel}
                          </span>
                          <span className="text-base font-extrabold text-white mt-1 tracking-tight">
                            {service.metricValue}
                          </span>
                          <span className="text-[10px] text-neutral-500 mt-0.5 font-medium">
                            {service.metricSub}
                          </span>
                        </div>

                        {/* Long description */}
                        <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                          {service.longDescription}
                        </p>

                        {/* Approach list */}
                        <div>
                          <h4 className="text-[9px] font-bold text-blue-500 uppercase tracking-[0.2em] font-mono mb-3">
                            // OUR APPROACH
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {service.approach.map((method, idx) => (
                              <div key={idx} className="flex items-center gap-2.5">
                                <div className="w-4.5 h-4.5 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                                  <Check size={10} className="stroke-[3]" />
                                </div>
                                <span className="text-xs text-neutral-300">
                                  {method}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Display Details (Col-span 7) - Hidden on mobile, shown on desktop */}
          <div className="lg:col-span-7 hidden lg:flex">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-neutral-900/10 border border-neutral-900 rounded-3xl p-6 sm:p-8 relative overflow-hidden backdrop-blur-sm flex flex-col justify-between w-full h-full min-h-[440px]"
              >
                {/* Visual Glow background corresponding to service accent */}
                <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${selectedService.gradient} opacity-[0.03] blur-[80px] pointer-events-none rounded-full`} />

                <div className="relative z-10">
                  {/* Top Header details & Outcome Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-neutral-900/60 pb-6 mb-6">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500 font-mono block">
                        FOCUS PILLAR
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
                        {selectedService.title}
                      </h3>
                    </div>
                    
                    {/* Performance outcome card */}
                    <div className="bg-neutral-950/40 border border-neutral-900 rounded-2xl px-5 py-3.5 flex flex-col items-start min-w-[170px] shadow-sm shrink-0">
                      <span className="text-[9px] font-bold text-blue-500 font-mono tracking-[0.18em] uppercase">
                        {selectedService.metricLabel}
                      </span>
                      <span className="text-lg sm:text-xl font-extrabold text-white mt-1.5 tracking-tight">
                        {selectedService.metricValue}
                      </span>
                      <span className="text-[10px] text-neutral-500 mt-1 font-medium">
                        {selectedService.metricSub}
                      </span>
                    </div>
                  </div>

                  {/* Long descriptive text */}
                  <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                    {selectedService.longDescription}
                  </p>

                  {/* Methodology list */}
                  <div className="mb-4">
                    <h4 className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em] font-mono mb-4">
                      // OUR APPROACH
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                      {selectedService.approach.map((method, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                            <Check size={11} className="stroke-[3]" />
                          </div>
                          <span className="text-xs sm:text-sm text-neutral-300 leading-none">
                            {method}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Footer Stats Ribbon */}
        <div className="mt-16 bg-neutral-950/20 border border-neutral-900 rounded-2xl py-6 px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-4 items-center justify-items-start md:justify-items-stretch">
            
            {/* Stat 1 */}
            <div className="flex items-center gap-3 justify-start">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-neutral-950 border border-neutral-900 text-blue-400 shrink-0">
                <Users size={18} />
              </div>
              <div className="text-left">
                <div className="text-lg sm:text-xl font-bold text-white tracking-tight leading-none">30+</div>
                <div className="text-[10px] sm:text-xs text-neutral-500 font-medium mt-1.5 leading-none">Brands Served</div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3 justify-start">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-neutral-950 border border-neutral-900 text-blue-400 shrink-0">
                <Rocket size={18} />
              </div>
              <div className="text-left">
                <div className="text-lg sm:text-xl font-bold text-white tracking-tight leading-none">100+</div>
                <div className="text-[10px] sm:text-xs text-neutral-500 font-medium mt-1.5 leading-none">Campaigns Launched</div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3 justify-start">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-neutral-950 border border-neutral-900 text-blue-400 shrink-0">
                <Target size={18} />
              </div>
              <div className="text-left">
                <div className="text-lg sm:text-xl font-bold text-white tracking-tight leading-none">6+</div>
                <div className="text-[10px] sm:text-xs text-neutral-500 font-medium mt-1.5 leading-none">Industries Covered</div>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-3 justify-start">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-neutral-950 border border-neutral-900 text-yellow-500 shrink-0">
                <Star size={18} className="fill-yellow-500/20" />
              </div>
              <div className="text-left">
                <div className="text-lg sm:text-xl font-bold text-white tracking-tight leading-none">5★</div>
                <div className="text-[10px] sm:text-xs text-neutral-500 font-medium mt-1.5 leading-none">Average Client Rating</div>
              </div>
            </div>

            {/* Stat 5 */}
            <div className="flex items-center gap-3 justify-start col-span-2 md:col-span-1 justify-self-start md:justify-self-auto">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-neutral-950 border border-neutral-900 text-blue-400 shrink-0">
                <Clock size={18} />
              </div>
              <div className="text-left">
                <div className="text-lg sm:text-xl font-bold text-white tracking-tight leading-none">24hr</div>
                <div className="text-[10px] sm:text-xs text-neutral-500 font-medium mt-1.5 leading-none">Avg. Response Time</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
