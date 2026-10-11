import React from 'react';
import { ArrowRight, Check, MessageSquare, Instagram, ExternalLink } from 'lucide-react';

interface FinalCtaSectionProps {
  onBookCall: () => void;
  onOpenWhatsApp: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  onBookCall,
  onOpenWhatsApp,
}) => {
  return (
    <section className="py-24 md:py-36 bg-gradient-to-b from-[#0b0e19] via-[#090b10] to-[#06080d] relative overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-400 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        {/* Anti-Generic Lead In */}
        <div className="inline-block text-xs font-mono-num uppercase tracking-widest text-blue-400 mb-4 font-semibold">
          Final Decision Point
        </div>

        {/* Headline verbatim from PDF */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1] text-balance max-w-4xl mx-auto">
          Ready to Stop Guessing and Start Building a Predictable Lead Flow?
        </h2>

        {/* Copy verbatim from PDF */}
        <p className="mt-6 text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
          If you're a USA-based service business struggling to generate consistent leads from Meta Ads, let's identify what's holding your campaigns back and map out the right strategy for your business.
        </p>

        {/* 3 small points verbatim from PDF:
            ✓ Identify your biggest lead-generation gaps
            ✓ Get a strategy based on your business goals
            ✓ Know exactly what we can improve and build */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm font-medium text-slate-200">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Check className="w-3.5 h-3.5" />
            </div>
            <span>Identify your biggest lead-generation gaps</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Check className="w-3.5 h-3.5" />
            </div>
            <span>Get a strategy based on your business goals</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Check className="w-3.5 h-3.5" />
            </div>
            <span>Know exactly what we can improve and build</span>
          </div>
        </div>

        {/* Main CTA verbatim from PDF */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4">
          <button
            onClick={onBookCall}
            className="inline-flex items-center justify-center gap-3 px-9 py-5 text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-2xl transition-all shadow-2xl shadow-blue-600/40 hover:shadow-blue-600/60 active:scale-[0.98]"
          >
            <span>Book Your Strategy Call</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Small supporting text verbatim from PDF:
              No pressure. Just a clear strategy for your next step. */}
          <div className="text-xs sm:text-sm text-slate-400 font-medium">
            No pressure. Just a clear strategy for your next step.
          </div>
        </div>

        {/* WhatsApp & Instagram direct connection */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <span>Prefer WhatsApp?</span>
            <a
              href="https://wa.me/919845617868"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold underline underline-offset-4 transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-emerald-400/20" />
              <span>Message +91 98456 17868 →</span>
            </a>
          </div>

          <span className="hidden sm:inline text-slate-600" aria-hidden="true">·</span>

          <a
            href="https://www.instagram.com/brandvolv/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-pink-400 hover:text-pink-300 font-semibold transition-colors"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow @brandvolv on Instagram</span>
            <ExternalLink className="w-3 h-3 text-pink-400/70" />
          </a>
        </div>
      </div>
    </section>
  );
};
