import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, ArrowRight, ShieldCheck, User, Mail, Phone, Building2, Instagram, ExternalLink, MessageCircle } from 'lucide-react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

type WindowWithFacebookPixel = Window & {
  fbq?: (action: 'track', eventName: string, parameters: Record<string, string>) => void;
};

interface StrategyCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenWhatsApp: () => void;
}

export const StrategyCallModal: React.FC<StrategyCallModalProps> = ({
  isOpen,
  onClose,
  onOpenWhatsApp,
}) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    businessName: '',
    fullName: '',
    email: '',
    phone: '',
    serviceType: 'Home Services / Renovation',
    monthlyAdSpend: '$1,000 - $3,000 / mo',
    primaryBottleneck: 'Leads are low-quality or unresponsive',
    selectedDay: 'Tomorrow, 2:00 PM EST',
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionError, setSubmissionError] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError('');

    try {
      await addDoc(collection(db, 'leads'), {
        businessName: formData.businessName,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        serviceType: formData.serviceType,
        monthlyAdSpend: formData.monthlyAdSpend,
        primaryBottleneck: formData.primaryBottleneck,
        selectedDay: formData.selectedDay,
        createdAt: serverTimestamp(),
      });

      setIsSubmitted(true);
      const fbq = (window as WindowWithFacebookPixel).fbq;
      if (fbq) {
        fbq('track', 'Lead', {
          content_name: 'Strategy Call Booking',
          service_type: formData.serviceType,
          ad_spend: formData.monthlyAdSpend,
        });
      }
    } catch (error) {
      console.error('Error saving strategy call lead:', error);
      setSubmissionError('We could not save your request. Please try again or contact us on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-3xl border border-white/15 bg-[#0c1020] p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto">
        {/* Glow corner */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="text-xs font-mono-num uppercase tracking-wider text-blue-400 font-semibold mb-1">
                Strategy Session · 1-on-1 Architecture Call
              </div>
              <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                Book Your Strategy Call
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                We'll identify what's holding your Meta Ads back and map out the right 3-phase lead engine for your business.
              </p>
            </div>

            {/* Stepper indicator */}
            <div className="flex items-center gap-2 mb-6">
              <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? 'bg-blue-600' : 'bg-white/10'}`} />
              <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? 'bg-blue-600' : 'bg-white/10'}`} />
              <div className={`h-1.5 flex-1 rounded-full ${step >= 3 ? 'bg-blue-600' : 'bg-white/10'}`} />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Step 1: Your Business & Service
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Business or Practice Name
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Apex Premier Realty / Skyline Design"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Industry / Service Type
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#141a2e] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="Real Estate / Luxury Properties">Real Estate / Luxury Properties</option>
                      <option value="Home Services / Renovation / Interior">Home Services / Renovation / Interior</option>
                      <option value="B2B & Professional Recruitment">B2B & Professional Recruitment</option>
                      <option value="High-Ticket Coaching & Education">High-Ticket Coaching & Education</option>
                      <option value="Healthcare / Aesthetic Clinics">Healthcare / Aesthetic Clinics</option>
                      <option value="Other High-Ticket Service">Other High-Ticket Service</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      disabled={!formData.businessName.trim()}
                      onClick={() => setStep(2)}
                      className="w-full flex items-center justify-center gap-2 py-3 px-5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-all shadow-md shadow-blue-600/30"
                    >
                      <span>Continue to Current Ad Status</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Step 2: Meta Ads Diagnosis
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Monthly Meta Ad Spend (Current or Planned)
                    </label>
                    <select
                      value={formData.monthlyAdSpend}
                      onChange={(e) => setFormData({ ...formData, monthlyAdSpend: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#141a2e] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="Under $1,000 / month">Under $1,000 / month</option>
                      <option value="$1,000 - $3,000 / mo">$1,000 - $3,000 / mo</option>
                      <option value="$3,000 - $10,000 / mo">$3,000 - $10,000 / mo</option>
                      <option value="$10,000+ / mo">$10,000+ / mo</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      What is your biggest current bottleneck?
                    </label>
                    <select
                      value={formData.primaryBottleneck}
                      onChange={(e) => setFormData({ ...formData, primaryBottleneck: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#141a2e] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="01 — No Clear Offer / People don't take action">01 — No Clear Offer / People don't take action</option>
                      <option value="02 — Wrong Audience / Wrong people reaching us">02 — Wrong Audience / Wrong people reaching us</option>
                      <option value="03 — Weak Creative Angles / Low CTR">03 — Weak Creative Angles / Low CTR</option>
                      <option value="04 — Inconsistent CPL / High cost per lead">04 — Inconsistent CPL / High cost per lead</option>
                      <option value="05 — No Optimization System / Leads leak">05 — No Optimization System / Leads leak</option>
                    </select>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="py-3 px-4 text-xs font-semibold text-slate-400 hover:text-white rounded-xl bg-white/5 border border-white/10 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md shadow-blue-600/30"
                    >
                      <span>Select Preferred Slot</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Step 3: Contact & Slot Selection
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Your Full Name
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Full Name"
                          className="w-full pl-9 pr-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Work Email
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@business.com"
                          className="w-full pl-9 pr-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Direct Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Preferred Call Window
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {[
                        'Tomorrow, 11:00 AM EST',
                        'Tomorrow, 2:30 PM EST',
                        'In 2 Days, 10:00 AM EST',
                        'In 2 Days, 4:00 PM EST',
                      ].map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setFormData({ ...formData, selectedDay: slot })}
                          className={`p-2.5 rounded-lg border text-left flex items-center gap-2 transition-all ${
                            formData.selectedDay === slot
                              ? 'bg-blue-600/30 border-blue-500 text-white'
                              : 'bg-white/[0.02] border-white/5 text-slate-400 hover:text-white'
                          }`}
                        >
                          <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span className="truncate">{slot}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="py-3 px-4 text-xs font-semibold text-slate-400 hover:text-white rounded-xl bg-white/5 border border-white/10 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-lg shadow-blue-600/40"
                    >
                      <span>{isSubmitting ? 'Saving Your Request...' : 'Confirm & Lock Strategy Session'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </form>

            {submissionError && (
              <p role="alert" className="mt-3 text-sm text-red-400">
                {submissionError}
              </p>
            )}

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                100% Confidential Strategy Review
              </span>
              <a
                href="https://wa.me/919845617868"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 transition-colors"
              >
                <MessageCircle className="w-3 h-3" />
                <span>Prefer WhatsApp? wa.me/919845617868</span>
              </a>
            </div>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-display font-bold text-white tracking-tight">
              Strategy Call Reserved
            </h3>

            <p className="mt-2 text-sm text-slate-300 max-w-md mx-auto">
              Thank you, <strong className="text-white">{formData.fullName || 'there'}</strong>. We have logged your slot for{' '}
              <span className="text-blue-400 font-semibold">{formData.selectedDay}</span> for{' '}
              <strong className="text-white">{formData.businessName}</strong>.
            </p>

            <div className="my-5 p-4 rounded-xl bg-black/40 border border-white/10 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between text-slate-400">
                <span>Target Focus:</span>
                <span className="text-white">{formData.serviceType}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Key Challenge:</span>
                <span className="text-slate-300">{formData.primaryBottleneck}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Confirmation Email Sent To:</span>
                <span className="text-blue-400">{formData.email}</span>
              </div>
            </div>

            {/* Direct Priority WhatsApp Confirmation */}
            <div className="mb-6 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-left text-xs space-y-2.5 max-w-md mx-auto">
              <div className="flex items-center justify-between text-emerald-400 font-semibold text-xs">
                <span className="flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  Instant Priority Confirmation:
                </span>
                <span className="font-mono text-[11px]">+91 98456 17868</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Send a quick WhatsApp message to confirm your meeting slot instantly with our strategy director.
              </p>
              <a
                href={`https://wa.me/919845617868?text=${encodeURIComponent(
                  `Hi BrandVolv team, I just booked a Strategy Call for ${formData.businessName || 'my business'} (${formData.fullName || 'Lead'}). Let's connect!`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/30 transition-all"
              >
                <span>Connect on WhatsApp: https://wa.me/919845617868</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-blue-600/30 transition-all"
              >
                Return to BrandVolv
              </button>
              <a
                href="https://www.instagram.com/brandvolv/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-pink-400 hover:text-pink-300 text-xs font-semibold border border-white/10 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow @brandvolv on Instagram</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
