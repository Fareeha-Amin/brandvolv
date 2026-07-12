import React from 'react';
import { CLIENTS_MARQUEE } from '../data';
import { ArrowUpRight, ShieldCheck, Award, Zap, BarChart2, Target, Rocket, Users, Star } from 'lucide-react';
import { motion } from 'motion/react';
import BrandLogo, { MarqueeLogo } from './BrandLogos';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCaseStudies = () => {
    document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-[#030305]">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-900/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/10 right-1/10 w-[400px] h-[400px] rounded-full bg-purple-900/10 blur-[100px] pointer-events-none" />

      {/* Cybernetic grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]" 
        style={{ maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold tracking-wide mb-8"
          >
            <Zap size={14} className="animate-pulse" />
            <span>CREATIVE x PERFORMANCE</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Building Brands That People Remember.{' '}
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Creating Growth That Businesses Measure.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            We help ambitious brands grow with strategy, creative content, performance marketing, websites, and conversion-focused campaigns designed to generate real business results.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-full shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book a Strategy Call -&gt;</span>
            </button>
            <button
              onClick={scrollToCaseStudies}
              className="w-full sm:w-auto px-8 py-4 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-neutral-200 font-semibold rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              View Case Studies -&gt;
            </button>
          </motion.div>

          {/* Stats Ribbon */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-6 w-full border-t border-b border-neutral-900/60 py-8 mt-12 px-2"
          >
            {/* Item 1 */}
            <div className="flex items-center gap-3 justify-start lg:justify-center">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-neutral-950 border border-neutral-900 text-neutral-300 shrink-0">
                <BarChart2 size={18} className="text-neutral-300" />
              </div>
              <div className="text-left">
                <div className="text-lg sm:text-xl font-bold text-white tracking-tight leading-none">₹12Cr+</div>
                <div className="text-[10px] sm:text-xs text-neutral-500 font-medium mt-1.5 leading-none">Revenue Generated</div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-3 justify-start lg:justify-center">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-neutral-950 border border-neutral-900 text-neutral-300 shrink-0">
                <Target size={18} className="text-neutral-300" />
              </div>
              <div className="text-left">
                <div className="text-lg sm:text-xl font-bold text-white tracking-tight leading-none">₹3Cr+</div>
                <div className="text-[10px] sm:text-xs text-neutral-500 font-medium mt-1.5 leading-none">Ad Spend Managed</div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-3 justify-start lg:justify-center">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-neutral-950 border border-neutral-900 text-neutral-300 shrink-0">
                <Rocket size={18} className="text-neutral-300" />
              </div>
              <div className="text-left">
                <div className="text-lg sm:text-xl font-bold text-white tracking-tight leading-none">100+</div>
                <div className="text-[10px] sm:text-xs text-neutral-500 font-medium mt-1.5 leading-none">Campaigns Launched</div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-center gap-3 justify-start lg:justify-center">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-neutral-950 border border-neutral-900 text-neutral-300 shrink-0">
                <Users size={18} className="text-neutral-300" />
              </div>
              <div className="text-left">
                <div className="text-lg sm:text-xl font-bold text-white tracking-tight leading-none">35+</div>
                <div className="text-[10px] sm:text-xs text-neutral-500 font-medium mt-1.5 leading-none">Brands Served</div>
              </div>
            </div>

            {/* Item 5 */}
            <div className="flex items-center gap-3 justify-start lg:justify-center col-span-2 md:col-span-1">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-neutral-950 border border-neutral-900 text-neutral-300 shrink-0">
                <Star size={18} className="text-neutral-100 fill-white" />
              </div>
              <div className="text-left">
                <div className="text-lg sm:text-xl font-bold text-white tracking-tight leading-none flex items-center gap-0.5">4.8★</div>
                <div className="text-[10px] sm:text-xs text-neutral-500 font-medium mt-1.5 leading-none">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Infinite scrolling marquee of clients */}
      <div className="relative mt-24">
        {/* Marquee Header */}
        <div className="text-center mb-10">
          <p className="text-[11px] sm:text-xs text-neutral-500 font-medium tracking-[0.2em] uppercase">
            Trusted by ambitious brands across industries
          </p>
        </div>

        <div className="relative border-y border-neutral-900 bg-neutral-950/20 py-10 overflow-hidden backdrop-blur-sm">
          {/* Gradients to fade out edges */}
          <div className="absolute top-0 left-0 w-24 sm:w-48 h-full bg-gradient-to-r from-[#030305] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-24 sm:w-48 h-full bg-gradient-to-l from-[#030305] to-transparent z-10 pointer-events-none" />

          <div className="flex w-max items-center animate-marquee whitespace-nowrap">
            {/* First loop */}
            <div className="flex gap-20 sm:gap-28 items-center shrink-0 pr-20 sm:pr-28">
              {CLIENTS_MARQUEE.map((client, idx) => (
                <MarqueeLogo
                  key={`marquee-1-${idx}`}
                  id={client}
                  className="opacity-50 hover:opacity-100 transition-all duration-300 transform hover:scale-[1.02]"
                />
              ))}
            </div>
            {/* Second loop to make seamless */}
            <div className="flex gap-20 sm:gap-28 items-center shrink-0 pr-20 sm:pr-28" aria-hidden="true">
              {CLIENTS_MARQUEE.map((client, idx) => (
                <MarqueeLogo
                  key={`marquee-2-${idx}`}
                  id={client}
                  className="opacity-50 hover:opacity-100 transition-all duration-300 transform hover:scale-[1.02]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind inline marquee style injector */}
      <style>{`
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
