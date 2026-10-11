import React from 'react';
import { ArrowUpRight, Instagram, MessageCircle } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onBookCall: () => void;
  onOpenWhatsApp: () => void;
  onOpenCaseStudiesPage?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBookCall, onOpenWhatsApp, onOpenCaseStudiesPage }) => {
  return (
    <footer className="border-t border-white/5 bg-[#07090e] py-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <BrandLogo size="md" />

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              We engineer predictable, conversion-focused Meta Ads lead generation systems for USA-based service businesses. Replacing random boosted posts with systematic client acquisition.
            </p>

            {/* Direct Social Links */}
            <div className="flex items-center gap-4 pt-1">
              <a
                href="https://wa.me/919845617868"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 text-xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: +91 98456 17868</span>
              </a>

              <a
                href="https://www.instagram.com/brandvolv/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-500/10 hover:bg-pink-500/20 text-pink-400 border border-pink-500/20 text-xs transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>@brandvolv</span>
              </a>
            </div>

            <div className="text-[11px] text-slate-500">
              Specialized for Real Estate, Home Services, Professional B2B, and High-Ticket Consulting.
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
              System Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#problem" className="hover:text-white transition-colors">
                  The Problem
                </a>
              </li>
              <li>
                <a href="#system" className="hover:text-white transition-colors">
                  The 7-Step System
                </a>
              </li>
              <li>
                <a href="#ugc-ai" className="hover:text-white transition-colors">
                  UGC AI Ads
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenCaseStudiesPage}
                  className="hover:text-white text-slate-400 transition-colors text-left"
                >
                  Case Studies & Reviews Hub
                </button>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  3-Month Process
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Lead Generation Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Engagement */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Take Next Step
            </div>
            <p className="text-xs text-slate-400">
              Schedule a 1-on-1 strategy teardown of your current advertising funnel.
            </p>
            <div className="space-y-2 pt-1">
              <button
                onClick={onBookCall}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 hover:bg-blue-600/20 hover:text-blue-300 transition-colors"
              >
                <span>Book Strategy Call</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="https://wa.me/919845617868"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3 rounded-xl bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-600/20 hover:text-emerald-300 transition-colors"
              >
                <span>Message on WhatsApp (+91 98456 17868)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.instagram.com/brandvolv/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3 rounded-xl bg-pink-600/10 border border-pink-500/20 text-pink-400 hover:bg-pink-600/20 hover:text-pink-300 transition-colors"
              >
                <span>Follow on Instagram (@brandvolv)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Quiet Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} BrandVolv. All rights reserved. Meta is a registered trademark of Meta Platforms, Inc.
          </div>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span aria-hidden="true">·</span>
            <span>Terms of Service</span>
            <span aria-hidden="true">·</span>
            <span>Client Qualification Agreement</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
