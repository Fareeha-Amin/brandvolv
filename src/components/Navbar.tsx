import React, { useState } from 'react';
import { ArrowRight, Menu, X, PhoneCall, Instagram, MessageCircle } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onBookCall: () => void;
  onGoToHome?: () => void;
  onGoToCaseStudies?: () => void;
  currentPage?: 'home' | 'case-studies';
}

export const Navbar: React.FC<NavbarProps> = ({
  onBookCall,
  onGoToHome,
  onGoToCaseStudies,
  currentPage = 'home',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleBrandClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onGoToHome) onGoToHome();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCaseStudiesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onGoToCaseStudies) onGoToCaseStudies();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeSectionClick = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    if (currentPage !== 'home' && onGoToHome) {
      onGoToHome();
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#090b10]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Optimized Brand Logo */}
        <a href="#" onClick={handleBrandClick} className="group">
          <BrandLogo size="md" />
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden xl:flex items-center gap-7 text-sm font-medium text-slate-300 whitespace-nowrap">
          <a
            href="#problem"
            onClick={(e) => handleHomeSectionClick(e, '#problem')}
            className="hover:text-white transition-colors"
          >
            The Problem
          </a>
          <a
            href="#system"
            onClick={(e) => handleHomeSectionClick(e, '#system')}
            className="hover:text-white transition-colors"
          >
            The System
          </a>
          <a
            href="#ugc-ai"
            onClick={(e) => handleHomeSectionClick(e, '#ugc-ai')}
            className="hover:text-white transition-colors"
          >
            UGC AI Ads
          </a>
          <button
            onClick={handleCaseStudiesClick}
            className={`transition-colors flex items-center gap-1.5 ${
              currentPage === 'case-studies'
                ? 'text-blue-400 font-semibold'
                : 'hover:text-white text-slate-300'
            }`}
          >
            <span>Case Studies & Reviews</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          </button>
          <a
            href="#process"
            onClick={(e) => handleHomeSectionClick(e, '#process')}
            className="hover:text-white transition-colors"
          >
            Process
          </a>
          <a
            href="#pricing"
            onClick={(e) => handleHomeSectionClick(e, '#pricing')}
            className="hover:text-white transition-colors"
          >
            Pricing
          </a>
        </nav>

        {/* Zone 3: Primary Action & Direct Socials */}
        <div className="hidden xl:flex items-center gap-2.5">
          <a
            href="https://wa.me/919845617868"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 rounded-lg transition-colors border border-emerald-500/20"
            title="Chat on WhatsApp (+91 98456 17868)"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/brandvolv/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-pink-400 hover:text-pink-300 hover:bg-pink-500/10 rounded-lg transition-colors border border-pink-500/20"
            title="Follow on Instagram (@brandvolv)"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <button
            onClick={onBookCall}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-md shadow-blue-600/20 hover:shadow-blue-600/40 whitespace-nowrap active:scale-[0.98]"
          >
            <span>Book Strategy Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex xl:hidden items-center gap-2">
          <a
            href="https://wa.me/919845617868"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-emerald-400 hover:text-white bg-emerald-600/10 border border-emerald-500/20 rounded-lg"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <button
            onClick={onBookCall}
            className="p-2 text-blue-400 hover:text-white bg-blue-600/10 border border-blue-500/20 rounded-lg"
            aria-label="Book Call"
          >
            <PhoneCall className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-white/10 bg-[#0c0e17] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-300">
            <a
              href="#problem"
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleHomeSectionClick(e, '#problem');
              }}
              className="py-2 px-3 rounded-md hover:bg-white/5 hover:text-white"
            >
              The Problem
            </a>
            <a
              href="#system"
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleHomeSectionClick(e, '#system');
              }}
              className="py-2 px-3 rounded-md hover:bg-white/5 hover:text-white"
            >
              The System
            </a>
            <a
              href="#ugc-ai"
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleHomeSectionClick(e, '#ugc-ai');
              }}
              className="py-2 px-3 rounded-md hover:bg-white/5 hover:text-white"
            >
              UGC AI Ads
            </a>
            <button
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleCaseStudiesClick(e);
              }}
              className="text-left py-2 px-3 rounded-md text-blue-400 hover:bg-white/5 font-semibold"
            >
              Case Studies & Reviews Hub →
            </button>
            <a
              href="#process"
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleHomeSectionClick(e, '#process');
              }}
              className="py-2 px-3 rounded-md hover:bg-white/5 hover:text-white"
            >
              The Process
            </a>
            <a
              href="#pricing"
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleHomeSectionClick(e, '#pricing');
              }}
              className="py-2 px-3 rounded-md hover:bg-white/5 hover:text-white"
            >
              Pricing Plans
            </a>
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookCall();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-600/20"
            >
              <span>Book Your Strategy Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="https://wa.me/919845617868"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-lg"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://www.instagram.com/brandvolv/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium text-pink-400 bg-pink-500/10 border border-pink-500/20 rounded-lg"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
