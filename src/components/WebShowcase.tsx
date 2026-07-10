import React, { useState } from 'react';
import { WEB_PROJECTS } from '../data';
import { LayoutGrid, ShoppingBag, Terminal, Check, Globe, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import BrandLogo from './BrandLogos';

export default function WebShowcase() {
  const [filter, setFilter] = useState<'All' | 'Shopify' | 'WordPress'>('All');

  const filteredProjects = WEB_PROJECTS.filter(
    (p) => filter === 'All' || p.type === filter
  );

  return (
    <section id="web-portfolio" className="relative py-24 bg-[#050508] border-t border-neutral-900 overflow-hidden">
      {/* Abstract glows */}
      <div className="absolute top-1/4 left-1/3 w-[350px] h-[350px] rounded-full bg-emerald-900/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-sm font-semibold tracking-widest text-emerald-400 uppercase mb-3 font-mono">
              // HIGH-PERFORMANCE DIGITAL REAL ESTATE
            </h2>
            <p className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Websites Built to Convert.
            </p>
            <p className="text-neutral-400 mt-4 max-w-xl text-sm sm:text-base">
              Not just digital brochures. We build conversion-focused digital ecosystems engineered for speed, user psychology, and bulletproof scalability. Click any card to visit the live site.
            </p>
          </div>

          {/* Filter Controls */}
          <div className="flex p-1.5 bg-neutral-950 border border-neutral-800 rounded-2xl self-start md:self-auto">
            {(['All', 'Shopify', 'WordPress'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                  filter === tab
                    ? 'bg-neutral-900 text-white border-b-2 border-emerald-500 shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {tab === 'All' ? 'All Web Architecture' : tab === 'Shopify' ? 'Shopify Powerhouse' : 'WordPress Wonders'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Marquee for Web Projects - Bleeds full-width */}
      <div className="marquee-container mb-12 py-4 relative z-10">
        {/* Left and Right Gradient Overlays for Fade Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-48 bg-gradient-to-r from-[#050508] via-[#050508]/75 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-48 bg-gradient-to-l from-[#050508] via-[#050508]/75 to-transparent z-20 pointer-events-none" />

        <div className="marquee-content gap-6 sm:gap-8 px-4">
          {[...filteredProjects, ...filteredProjects, ...filteredProjects].map((project, idx) => (
            <motion.a
              key={`${project.id}-${idx}`}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6 }}
              className="w-[300px] sm:w-[410px] shrink-0 flex flex-col justify-between bg-neutral-900/20 border border-neutral-800/80 rounded-2xl p-6 relative overflow-hidden hover:border-emerald-500/50 hover:bg-neutral-900/40 transition-all shadow-md cursor-pointer"
            >
              {/* Accent lights */}
              <div className={`absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br ${
                project.type === 'Shopify' ? 'from-emerald-600/10 to-teal-500/10' : 'from-blue-600/10 to-indigo-500/10'
              } blur-xl group-hover:scale-150 transition-transform duration-500`} />

              <div>
                {/* Top: Category Tag and Metric */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-neutral-800/40">
                  <span className="text-[10px] font-bold text-neutral-500 font-mono tracking-widest uppercase">
                    {project.type === 'Shopify' ? 'SHOPIFY POWERHOUSE' : 'WORDPRESS WONDERS'}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono tracking-wider ${
                      project.type === 'Shopify' ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400' : 'bg-blue-500/10 border border-blue-500/20 text-blue-400'
                    }`}>
                      {project.metric}
                    </span>
                    <ExternalLink size={12} className="text-neutral-500 group-hover:text-emerald-400 transition-colors" />
                  </div>
                </div>

                {/* Title and Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="group-hover:translate-x-1 transition-transform duration-300">
                    <BrandLogo id={project.id} size="lg" />
                  </div>
                </div>

                {/* Tag line / Focus */}
                <div className="text-xs font-semibold text-neutral-300 mb-4 bg-neutral-950/60 inline-block px-2.5 py-1 rounded border border-neutral-800/50">
                  {project.tag}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6 min-h-[3rem]">
                  {project.description}
                </p>
              </div>

              {/* Bottom: Project Features */}
              <div className="border-t border-neutral-800/40 pt-4 mt-4">
                <span className="text-[10px] font-bold text-neutral-500 font-mono uppercase tracking-widest block mb-2.5">
                  KEY CONVERSIONS & STACKS:
                </span>
                <div className="flex flex-col gap-1.5">
                  {project.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2">
                      <Check size={12} className="text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-xs text-neutral-400 leading-normal">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
