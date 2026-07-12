import React, { useState } from 'react';
import { TESTIMONIALS } from '../data';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import BrandLogo from './BrandLogos';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-[#050508] border-t border-neutral-900 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-4">
            <Star size={12} className="fill-current" />
            <span>REAL TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-sans font-medium tracking-tight text-white mb-6">
            Validated by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Founders & Leaders</span>
          </h2>
          <p className="text-neutral-400 text-lg">
            Hear directly from the visionaries who partnered with us to redesign their digital storefronts, optimize search channels, and launch high-volume ad engines.
          </p>
        </div>

        {/* Cinematic Main Featured Slider & Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Dynamic Showcase (Interactive Slider) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative bg-neutral-950/40 border border-neutral-900/80 rounded-3xl p-8 sm:p-12 backdrop-blur-xl shadow-2xl">
              <div className="absolute top-6 right-8 text-neutral-800">
                <Quote size={48} className="opacity-40" />
              </div>

              {/* Slider Content */}
              <div className="min-h-[220px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Stars */}
                    <div className="flex gap-1">
                      {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Content Quote */}
                    <p className="text-lg sm:text-xl text-neutral-200 leading-relaxed font-sans font-light italic">
                      "{TESTIMONIALS[activeIndex].content}"
                    </p>

                    {/* Author Meta */}
                    <div className="pt-6 border-t border-neutral-900 flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <h4 className="text-white font-medium text-base">{TESTIMONIALS[activeIndex].name}</h4>
                        <p className="text-neutral-500 text-xs sm:text-sm">{TESTIMONIALS[activeIndex].role} &mdash; <span className="text-neutral-400 font-mono text-xs">{TESTIMONIALS[activeIndex].company}</span></p>
                      </div>
                      <div className="bg-neutral-900/60 px-4 py-2 rounded-xl border border-neutral-800/60">
                        <BrandLogo id={TESTIMONIALS[activeIndex].logoId} />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-neutral-900/50">
                <div className="flex gap-1.5">
                  {TESTIMONIALS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === activeIndex ? 'w-8 bg-blue-500' : 'w-2 bg-neutral-800 hover:bg-neutral-700'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-neutral-400 hover:text-white transition-all"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-neutral-400 hover:text-white transition-all"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Quick Grid Highlights / Multi-Brand Deck - Hidden on mobile, shown on tablet/desktop */}
          <div className="lg:col-span-5 hidden md:grid grid-cols-1 gap-6">
            {TESTIMONIALS.filter((_, idx) => idx !== activeIndex).slice(0, 3).map((item, idx) => (
              <div
                key={item.id}
                onClick={() => {
                  const originalIndex = TESTIMONIALS.findIndex(t => t.id === item.id);
                  if (originalIndex !== -1) setActiveIndex(originalIndex);
                }}
                className="group p-6 bg-neutral-950/20 hover:bg-neutral-950/50 border border-neutral-900 hover:border-neutral-800 rounded-2xl cursor-pointer transition-all duration-300 flex items-start gap-4"
              >
                <div className="p-2 bg-neutral-900 rounded-lg group-hover:scale-105 transition-transform">
                  <BrandLogo id={item.logoId} />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h5 className="text-white text-sm font-medium">{item.name}</h5>
                    <span className="text-neutral-500 text-xs font-mono">{item.company}</span>
                  </div>
                  <p className="text-neutral-400 text-xs line-clamp-2">
                    "{item.content}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
