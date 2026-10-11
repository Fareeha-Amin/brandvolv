import React, { useState } from 'react';
import { X, Send, MessageCircle, ShieldCheck, Instagram, ExternalLink } from 'lucide-react';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose }) => {
  const [businessName, setBusinessName] = useState('');
  const [inquiryType, setInquiryType] = useState('Audit existing Meta Ads account');

  if (!isOpen) return null;

  const defaultMessage = `Hi BrandVolv team, I run ${businessName || 'a US service business'} and want to discuss our Meta Ads lead generation system (${inquiryType}).`;
  const directWhatsAppUrl = `https://wa.me/919845617868?text=${encodeURIComponent(defaultMessage)}`;

  const handleSend = () => {
    window.open(directWhatsAppUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-3xl border border-white/15 bg-[#0c1020] p-6 sm:p-8 shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3 border border-emerald-500/30">
            <MessageCircle className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-display font-bold text-white tracking-tight">
            Message BrandVolv on WhatsApp
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Connect directly with our strategy director at <strong className="text-emerald-400 font-mono">+91 98456 17868</strong>. We reply promptly within business hours.
          </p>
        </div>

        <div className="space-y-4 mb-6 text-xs">
          <div>
            <label className="block text-slate-300 font-medium mb-1">
              Your Company / Brand Name
            </label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="e.g. Sterling Renovation"
              className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1">
              What do you want to review?
            </label>
            <select
              value={inquiryType}
              onChange={(e) => setInquiryType(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#141a2e] border border-white/10 text-white focus:outline-none focus:border-emerald-500"
            >
              <option value="Audit existing Meta Ads account">Audit existing Meta Ads account</option>
              <option value="Explore Starter Monthly Plan ($599/mo)">Explore Starter Monthly Plan ($599/mo)</option>
              <option value="Explore Growth 3-Month System ($1,599)">Explore Growth 3-Month System ($1,599)</option>
              <option value="Custom 24-hour lead generation plan">Custom 24-hour lead generation plan</option>
            </select>
          </div>

          {/* Message Preview */}
          <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-emerald-200 text-xs">
            <span className="font-semibold block text-[11px] text-emerald-400 mb-1">Message Preview:</span>
            "{defaultMessage}"
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={handleSend}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-emerald-600/30 transition-all active:scale-[0.98]"
          >
            <Send className="w-4 h-4" />
            <span>Launch WhatsApp Chat (+91 98456 17868)</span>
          </button>

          <a
            href="https://wa.me/919845617868"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 text-xs font-medium border border-white/10 transition-colors"
          >
            <span>Or open direct link: https://wa.me/919845617868</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Social / Instagram Connection */}
        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
          <a
            href="https://www.instagram.com/brandvolv/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-pink-400 hover:text-pink-300 transition-colors"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>@brandvolv on Instagram</span>
          </a>

          <div className="flex items-center gap-1 text-slate-500">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span>Direct WhatsApp</span>
          </div>
        </div>
      </div>
    </div>
  );
};
