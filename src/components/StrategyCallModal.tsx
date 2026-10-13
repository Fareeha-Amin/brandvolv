import React, { useEffect, useState } from 'react';
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

const toDateKey = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const formatSubmittedAt = (date: Date) =>
  `${new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(date)} IST`;

const formatClockTime = (hours: number, minutes: number) => {
  const period = hours >= 12 ? 'PM' : 'AM';
  const normalizedHour = hours % 12 === 0 ? 12 : hours % 12;
  const paddedMinutes = minutes.toString().padStart(2, '0');
  return `${normalizedHour}:${paddedMinutes} ${period}`;
};

const getOperatingHours = (selectedDate: Date) => {
  const isWeekend = selectedDate.getDay() === 0 || selectedDate.getDay() === 6;
  return { startHour: isWeekend ? 7 : 11, endHour: isWeekend ? 20 : 21 };
};

const getMonthGrid = (monthDate: Date) => {
  const firstOfMonth = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1);
  const startDay = new Date(firstOfMonth);
  startDay.setDate(firstOfMonth.getDate() - firstOfMonth.getDay());

  const days: Array<Date | null> = [];
  for (let index = 0; index < 42; index += 1) {
    const day = new Date(startDay);
    day.setDate(startDay.getDate() + index);
    days.push(day);
  }

  return days;
};

const parseClockTime = (time: string) => {
  const match = time.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return { hours: 14, minutes: 0 };
  let hour = Number(match[1]);
  const minutes = Number(match[2]);
  const period = match[3].toUpperCase();

  if (period === 'PM' && hour !== 12) hour += 12;
  if (period === 'AM' && hour === 12) hour = 0;

  return { hours: hour, minutes };
};

const isWithinOperatingHours = (time: string, selectedDate: Date) => {
  const { hours, minutes } = parseClockTime(time);
  const { startHour, endHour } = getOperatingHours(selectedDate);
  const timeInMinutes = hours * 60 + minutes;

  return timeInMinutes >= startHour * 60 && timeInMinutes <= endHour * 60;
};

export const StrategyCallModal: React.FC<StrategyCallModalProps> = ({
  isOpen,
  onClose,
  onOpenWhatsApp,
}) => {
  const [step, setStep] = useState<number>(1);
  const [calendarMonth, setCalendarMonth] = useState<Date>(() => {
    const initial = new Date();
    initial.setDate(1);
    return initial;
  });
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const [isTimeModalOpen, setIsTimeModalOpen] = useState<boolean>(false);
  const [clockStage, setClockStage] = useState<'hours' | 'minutes'>('hours');
  const [draftHour, setDraftHour] = useState<number>(14);
  const [draftMinute, setDraftMinute] = useState<number>(0);
  const [draftPeriod, setDraftPeriod] = useState<'AM' | 'PM'>('PM');
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    return toDateKey(tomorrow);
  });
  const [selectedTime, setSelectedTime] = useState<string>('2:00 PM');
  const [formData, setFormData] = useState({
    businessName: '',
    fullName: '',
    email: '',
    phone: '',
    serviceType: 'Home Services / Renovation',
    monthlyAdSpend: '$1,000 - $3,000 / mo',
    primaryBottleneck: 'Leads are low-quality or unresponsive',
    selectedDay: 'Tomorrow, 2:00 PM USA Time',
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionError, setSubmissionError] = useState<string>('');
  const [savedLeadId, setSavedLeadId] = useState<string | null>(null);

  const selectedDateObject = new Date(`${selectedDate}T00:00:00`);
  const selectedDateLabel = selectedDateObject.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });
  const { startHour, endHour } = getOperatingHours(selectedDateObject);
  const clockHours = Array.from({ length: endHour - startHour + 1 }, (_, index) => startHour + index);
  const clockMinutes = Array.from({ length: 12 }, (_, index) => index * 5);

  useEffect(() => {
    if (!isWithinOperatingHours(selectedTime, selectedDateObject)) {
      setSelectedTime(formatClockTime(startHour, 0));
    }
  }, [selectedDate, selectedTime, selectedDateObject, startHour]);

  useEffect(() => {
    setFormData((previous) => ({
      ...previous,
      selectedDay: `${selectedDateLabel}, ${selectedTime} USA Time`,
    }));
  }, [selectedDateLabel, selectedTime]);

  const calendarDays = getMonthGrid(calendarMonth);
  const openTimePicker = () => {
    const parsedTime = parseClockTime(selectedTime);
    setDraftHour(parsedTime.hours);
    setDraftMinute(parsedTime.minutes);
    setDraftPeriod(parsedTime.hours >= 12 ? 'PM' : 'AM');
    setClockStage('hours');
    setIsTimeModalOpen(true);
  };
  const chooseClockHour = (hour: number) => {
    setDraftHour(hour);
    setDraftMinute(0);
    setClockStage('minutes');
  };
  const chooseClockMinute = (minute: number) => {
    setDraftMinute(minute);
  };

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError('');
    let leadWasSaved = Boolean(savedLeadId);

    try {
      let leadId = savedLeadId;
      if (!leadId) {
        const leadRef = await addDoc(collection(db, 'leads'), {
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
        leadId = leadRef.id;
        leadWasSaved = true;
        setSavedLeadId(leadId);
      }

      const { VITE_WEB3FORMS_ACCESS_KEY } = import.meta.env;
      if (!VITE_WEB3FORMS_ACCESS_KEY) {
        throw new Error('Web3Forms access key is not configured.');
      }

      const emailResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: VITE_WEB3FORMS_ACCESS_KEY,
          subject: `New Strategy Call Booking: ${formData.fullName}`,
          from_name: 'BrandVolv Strategy Call Booking',
          replyto: formData.email,
          botcheck: '',
          business_name: formData.businessName,
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          service_type: formData.serviceType,
          monthly_ad_spend: formData.monthlyAdSpend,
          primary_bottleneck: formData.primaryBottleneck,
          selected_day: formData.selectedDay,
          booking_id: leadId,
          submitted_at: formatSubmittedAt(new Date()),
        }),
      });

      const emailResult: { success?: boolean; message?: string } = await emailResponse.json();
      if (!emailResponse.ok || !emailResult.success) {
        throw new Error(emailResult.message || `Web3Forms request failed with status ${emailResponse.status}.`);
      }

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
      console.error('Error processing strategy call booking:', error);
      setSubmissionError(
        leadWasSaved
          ? 'Your booking is saved, but we could not send the notification email. Please retry or contact us on WhatsApp.'
          : 'We could not save your request. Please try again or contact us on WhatsApp.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    if (isSubmitted) {
      setSavedLeadId(null);
      setSubmissionError('');
      setStep(1);
    } else if (!savedLeadId) {
      setStep(1);
    }
    setIsSubmitted(false);
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
                        disabled={Boolean(savedLeadId)}
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
                      disabled={Boolean(savedLeadId)}
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
                      disabled={!formData.businessName.trim() || Boolean(savedLeadId)}
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
                      disabled={Boolean(savedLeadId)}
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
                      disabled={Boolean(savedLeadId)}
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
                      disabled={Boolean(savedLeadId)}
                      onClick={() => setStep(1)}
                      className="py-3 px-4 text-xs font-semibold text-slate-400 hover:text-white rounded-xl bg-white/5 border border-white/10 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      disabled={Boolean(savedLeadId)}
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
                          disabled={Boolean(savedLeadId)}
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
                          disabled={Boolean(savedLeadId)}
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
                        disabled={Boolean(savedLeadId)}
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
                    <div className="text-[10px] text-slate-400 mb-3">
                      USA Time · Monday–Friday: 11:00 AM – 9:00 PM · Saturday–Sunday: 7:00 AM – 8:00 PM
                    </div>

                    <div className="space-y-3 text-xs">
                      <div>
                        <div className="flex items-center gap-2 mb-2 text-[10px] uppercase tracking-wider text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-blue-400" />
                          Select a day
                        </div>

                        <button
                          type="button"
                          disabled={Boolean(savedLeadId)}
                          onClick={() => setIsCalendarOpen(true)}
                          className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2.5 text-left text-slate-300 hover:border-blue-500/60 hover:text-white transition-colors"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <span className="font-medium text-white">{selectedDateLabel}</span>
                            <span className="text-[10px] uppercase tracking-wider text-slate-400">Pick date</span>
                          </div>
                        </button>
                      </div>

                      <div>
                        <button
                          type="button"
                          disabled={Boolean(savedLeadId)}
                          onClick={openTimePicker}
                          className="w-full flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2.5 text-left text-slate-300 hover:border-blue-500/60 hover:text-white transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-blue-400" />
                            <span className="font-medium text-white">{selectedTime}</span>
                          </div>
                          <span className="text-[10px] uppercase tracking-wider text-slate-400">Choose time</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      disabled={Boolean(savedLeadId)}
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
                      <span>{isSubmitting ? 'Saving Your Request...' : savedLeadId ? 'Retry Email Notification' : 'Confirm & Lock Strategy Session'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </form>

            {isCalendarOpen && (
              <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
                <div className="w-full max-w-2xl rounded-[28px] border border-sky-200/30 bg-[#dff1fb] p-4 text-slate-800 shadow-[0_25px_60px_rgba(15,23,42,0.35)]">
                  <div className="mb-4 flex items-center justify-between px-1">
                    <button
                      type="button"
                      onClick={() => setCalendarMonth(new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1, 1))}
                      className="rounded-full p-2 text-2xl text-slate-700 hover:bg-slate-900/5"
                    >
                      ‹
                    </button>
                    <div className="text-3xl font-semibold tracking-tight text-slate-800">
                      {calendarMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </div>
                    <button
                      type="button"
                      onClick={() => setCalendarMonth(new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1, 1))}
                      className="rounded-full p-2 text-2xl text-slate-700 hover:bg-slate-900/5"
                    >
                      ›
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-1 pb-1 text-center text-sm font-medium text-slate-600">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                      <div key={day} className="py-1">{day}</div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-2">
                    {calendarDays.map((dateValue, index) => {
                      if (!dateValue) {
                        return <div key={`empty-${index}`} className="h-14 rounded-xl bg-transparent" />;
                      }

                      const isCurrentMonth = dateValue.getMonth() === calendarMonth.getMonth();
                      const isSelected = toDateKey(dateValue) === selectedDate;
                      const isPast = dateValue < new Date(new Date().setHours(0, 0, 0, 0));
                      const isAvailable = !isPast && isCurrentMonth;

                      return (
                        <button
                          key={toDateKey(dateValue)}
                          type="button"
                          disabled={!isAvailable}
                          onClick={() => {
                            setSelectedDate(toDateKey(dateValue));
                            setCalendarMonth(new Date(dateValue.getFullYear(), dateValue.getMonth(), 1));
                            setIsCalendarOpen(false);
                          }}
                          className={`flex h-14 items-center justify-center rounded-full text-xl font-medium transition-all ${
                            isSelected
                              ? 'bg-[#8ad3ff] text-slate-900 shadow-[0_0_0_3px_rgba(138,211,255,0.5)]'
                              : isAvailable
                                ? 'text-slate-700 hover:bg-slate-900/5'
                                : 'text-slate-400 cursor-not-allowed opacity-30'
                          } ${!isCurrentMonth ? 'opacity-40' : ''}`}
                        >
                          {dateValue.getDate()}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {isTimeModalOpen && (
              <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
                <div className="w-full max-w-md rounded-[28px] border border-slate-200/30 bg-[#edf2f5] p-4 shadow-[0_25px_60px_rgba(15,23,42,0.35)] sm:p-5">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-slate-200/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-700">
                        USA Time
                      </div>
                      <span className="text-xs font-medium text-slate-500">
                        {clockStage === 'hours' ? '1 of 2 · Select hour' : '2 of 2 · Select minutes'}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsTimeModalOpen(false)}
                      className="rounded-full p-2 text-slate-700 hover:bg-slate-900/5"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="mb-4 flex items-center justify-center gap-3">
                    <div className="text-5xl font-medium tracking-tight text-slate-800">
                      {formatClockTime(draftHour, draftMinute)}
                    </div>
                    <div className="flex flex-col gap-1">
                      {(['AM', 'PM'] as const).map((period) => (
                        <button
                          key={period}
                          type="button"
                          disabled={!clockHours.some((hour) => (hour >= 12 ? 'PM' : 'AM') === period)}
                          onClick={() => {
                            setDraftPeriod(period);
                            const hoursForPeriod = clockHours.filter((hour) => (hour >= 12 ? 'PM' : 'AM') === period);
                            const currentDialHour = draftHour % 12 || 12;
                            const matchingHour = period === 'AM'
                              ? currentDialHour === 12 ? 0 : currentDialHour
                              : currentDialHour === 12 ? 12 : currentDialHour + 12;
                            setDraftHour(hoursForPeriod.includes(matchingHour) ? matchingHour : hoursForPeriod[0] ?? draftHour);
                            setDraftMinute(0);
                            setClockStage('hours');
                          }}
                          className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider transition-colors ${
                            draftPeriod === period
                              ? 'bg-slate-700 text-white'
                              : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                          } disabled:cursor-not-allowed disabled:opacity-40`}
                        >
                          {period}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mx-auto mb-4 flex justify-center">
                    <div className="relative h-[280px] w-[280px] rounded-full border-[10px] border-slate-200 bg-[#ecf4fb] shadow-inner sm:h-[300px] sm:w-[300px]">
                      <div className="absolute inset-4 rounded-full border border-slate-300/60" />
                      {Array.from({ length: 12 }, (_, index) => {
                        const dialValue = index === 0 ? 12 : index;
                        const angle = (index * 30 - 90) * (Math.PI / 180);
                        const radius = 39;
                        const x = 50 + Math.cos(angle) * radius;
                        const y = 50 + Math.sin(angle) * radius;
                        const hour24 = draftPeriod === 'AM'
                          ? dialValue === 12 ? 0 : dialValue
                          : dialValue === 12 ? 12 : dialValue + 12;
                        const isActive = clockStage === 'hours' && draftHour === hour24;
                        const isDisabled = clockStage === 'hours' && !clockHours.includes(hour24);
                        const minute = index * 5;
                        const isEndHour = draftHour === endHour;
                        const isMinuteDisabled = clockStage === 'minutes' && isEndHour && minute !== 0;
                        const isMinuteActive = clockStage === 'minutes' && draftMinute === minute;
                        const label = clockStage === 'hours'
                          ? String(dialValue)
                          : String(minute).padStart(2, '0');

                        return (
                          <button
                            key={index}
                            type="button"
                            disabled={isDisabled || isMinuteDisabled}
                            onClick={() => {
                              if (clockStage === 'hours') {
                                chooseClockHour(hour24);
                              } else {
                                chooseClockMinute(minute);
                              }
                            }}
                            className={`absolute z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-xs font-semibold transition-all ${
                              isActive || isMinuteActive
                                ? 'bg-blue-500 text-white shadow-md shadow-blue-500/30'
                                : isDisabled || isMinuteDisabled
                                  ? 'cursor-not-allowed text-slate-300'
                                  : 'text-slate-700 hover:bg-blue-100 hover:text-blue-700'
                            }`}
                            style={{ left: `${x}%`, top: `${y}%` }}
                            aria-label={clockStage === 'hours' ? `${dialValue} ${draftPeriod}` : `${label} minutes`}
                          >
                            {label}
                          </button>
                        );
                      })}

                      <div
                        className="absolute left-1/2 top-1/2 h-[92px] w-[3px] origin-bottom rounded-full bg-slate-800"
                        style={{
                          transform: `translate(-50%, -100%) rotate(${clockStage === 'hours' ? (draftHour % 12) * 30 : draftMinute * 6}deg)`,
                        }}
                      />
                      <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    {clockStage === 'minutes' ? (
                      <button
                        type="button"
                        onClick={() => setClockStage('hours')}
                        className="rounded-lg px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200"
                      >
                        Back to hours
                      </button>
                    ) : <span />}
                    <button
                      type="button"
                      disabled={clockStage !== 'minutes'}
                      onClick={() => {
                        setSelectedTime(formatClockTime(draftHour, draftMinute));
                        setIsTimeModalOpen(false);
                      }}
                      className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Confirm time
                    </button>
                  </div>
                </div>
              </div>
            )}

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
