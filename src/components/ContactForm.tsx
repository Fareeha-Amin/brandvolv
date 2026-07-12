import React, { useState } from "react";
import {
  Mail,
  ArrowRight,
  CheckCircle,
  Shield,
  Award,
  Sparkles,
  Send,
  Instagram,
  Phone,
  MessageCircle,
} from "lucide-react";
import { motion } from "motion/react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    website: "",
    spend: "",
    goal: "sales",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate phone number
    const phoneClean = formData.phone.replace(/[^0-9]/g, "");
    if (phoneClean.length < 7 || phoneClean.length > 15) {
      setPhoneError("Please enter a valid phone number.");
      return;
    } else {
      setPhoneError("");
    }

    setLoading(true);

    // Capture values directly from DOM in case pre-filled by calculator
    const budgetInput = document.getElementById(
      "form-ad-spend",
    ) as HTMLInputElement;
    const goalInput = document.getElementById(
      "form-primary-goal",
    ) as HTMLSelectElement;

    const finalSpend = budgetInput ? budgetInput.value : formData.spend;
    const finalGoal = goalInput ? goalInput.value : formData.goal;

    try {
      await addDoc(collection(db, "leads"), {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        website: formData.website,
        spend: finalSpend,
        goal: finalGoal,
        message: formData.message,
        createdAt: serverTimestamp(),
      });

      // Update local state
      setFormData((prev) => ({
        ...prev,
        spend: finalSpend,
        goal: finalGoal,
      }));

      setLoading(false);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error saving lead:", error);
      setLoading(false);
      alert(
        "Something went wrong while submitting your request. Please try again.",
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Generate a custom tactical recommendation on-screen based on the user's selected goal:
  const getGoalRecommendation = (goalKey: string) => {
    switch (goalKey) {
      case "sales":
        return {
          title: "Direct-to-Consumer Sales Engine",
          bullets: [
            "Deploy WhatsApp Direct-to-Chat campaigns to bypass standard landing page checkout dropoffs.",
            "Initiate meta ad Sandbox testing with 10+ interest ad sets to find target demographic groups.",
            "Optimize shopify theme checkout friction to push site conversion rates above 3.5%.",
          ],
        };
      case "leads":
        return {
          title: "Hyper-Targeted Lead Generation Portal",
          bullets: [
            "Architect customized, multi-branch question funnels in WordPress to pre-qualify high-value leads.",
            "Launch target-offer discount lead campaigns on Meta platforms matching Aurobella’s proven models.",
            "Build automated CRM integrations with SMS triggers to contact newly submitted leads within 5 minutes.",
          ],
        };
      case "clicks":
        return {
          title: "High-Intent Traffic Driver",
          bullets: [
            "Target high-purchase-intent long-tail keywords using SEO content velocities rather than empty vanity traffic.",
            "Formulate Google PPC search campaigns with custom negative-keyword lists to block low-intent clicks.",
            "Refactor technical core web vitals to load pages under 0.3s, dropping bounce rates by 40%.",
          ],
        };
      case "awareness":
        return {
          title: "Viral Brand Awareness & Cult Hegemony",
          bullets: [
            "Deploy culturally relevant, trend-hijacking meme formats through platform-native TikToks/Reels.",
            "Maximize ad placement efficiencies to drive brand visibility CPMs below ₹1.95 per 1,000 reached.",
            "Establish high-authority media PR backlinking structures to sustain long-term search dominance.",
          ],
        };
      case "website":
        return {
          title: "High-Performance Bespoke Website Architecture",
          bullets: [
            "Architect a lightning-fast custom React/Vite layout to achieve a perfect 100/100 Google Lighthouse score.",
            "Structure intuitive UI/UX navigation paths mapped directly to maximize direct conversion actions.",
            "Integrate automated conversion tracking, SEO metadata schema, and robust server-side APIs.",
          ],
        };
      default:
        return {
          title: "Performance Growth Plan",
          bullets: [
            "Consolidate current ad accounts to exit the Meta ad algorithm testing phase 2.5x faster.",
            "Optimize landing page layout speed to stabilize client-acquisition cost boundaries.",
            "Implement continuous analytics mapping and conversion API protocols.",
          ],
        };
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-[#030305] border-t border-neutral-900 overflow-hidden"
    >
      {/* Background spotlights */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-950/20 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Direct response copy & trust pillars (Col span 5) */}
          <div className="lg:col-span-5 text-center sm:text-left">
            <h2 className="text-sm font-semibold tracking-widest text-indigo-500 uppercase mb-3 font-mono">
              // ARCHITECT YOUR DOMINANCE
            </h2>
            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-none mb-6">
              Claim Your Free Growth Audit.
            </h3>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8">
              We don’t do dry sales calls. We’ll crawl your site, audit your ad
              manager, analyze your search rankings, and pitch you a tailored,
              highly specific growth plan. Completely free. No strings attached.
            </p>

            {/* Direct Response Guarantee Pillars */}
            <div className="flex flex-col gap-5 border-y border-neutral-900 py-8 mb-8 text-left">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 mt-1 flex-shrink-0">
                  <Award size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">
                    30-Minute Tactical Deep Dive
                  </h4>
                  <p className="text-xs text-neutral-500 leading-relaxed mt-0.5">
                    We dive straight into live spreadsheets and real campaign
                    logs. No generic PDFs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 mt-1 flex-shrink-0">
                  <Shield size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">
                    0% Obligation or Pressure
                  </h4>
                  <p className="text-xs text-neutral-500 leading-relaxed mt-0.5">
                    If we aren’t a perfect fit to drive explosive growth for
                    your brand, we will tell you.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-red-500/10 text-red-400 mt-1 flex-shrink-0">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">
                    Custom Implementation Roadmap
                  </h4>
                  <p className="text-xs text-neutral-500 leading-relaxed mt-0.5">
                    You keep the audit reports, performance models, and keyword
                    strategies regardless.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact / Social links */}
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center sm:justify-start text-xs text-neutral-400 font-mono flex-wrap">
              <a
                href="mailto:buzzzengine@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={14} className="text-blue-500" />
                <span>buzzzengine@gmail.com</span>
              </a>
              <a
                href="https://wa.me/919972414587"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 text-neutral-300 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5 fill-emerald-500 hover:scale-105 transition-transform"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
                </svg>
                <span>+91 99724 14587</span>
              </a>
              <a
                href="https://www.instagram.com/brandvolv/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Instagram size={14} className="text-red-500" />
                <span>@brandvolv</span>
              </a>
            </div>
          </div>

          {/* Right Column: Lead Submission form (Col span 7) */}
          <div className="lg:col-span-7">
            {isSubmitted ? (
              /* Submission Success screen with Dynamic Growth Proposal */
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl"
              >
                {/* Glowing check banner */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-blue-500 to-indigo-500" />

                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-emerald-500/10 text-emerald-400 flex-shrink-0">
                    <CheckCircle size={28} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-emerald-400 font-mono tracking-widest uppercase block">
                      PROPOSAL LOCKED IN
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                      Audit Request Successful!
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  Hey <strong>{formData.name}</strong>, thank you for locking in
                  your free audit.
                </p>

                {/* Highlighted Next Steps Card */}
                <div className="bg-indigo-950/20 border border-indigo-500/30 rounded-2xl p-6 shadow-lg shadow-indigo-500/5 relative overflow-hidden mb-2">
                  <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-indigo-500/10 blur-xl pointer-events-none" />

                  <div className="flex items-start gap-3 relative z-10">
                    <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400 flex-shrink-0 mt-0.5">
                      <Sparkles size={16} className="animate-pulse" />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-indigo-400 font-mono tracking-widest uppercase block mb-1">
                        WHAT HAPPENS NEXT?
                      </span>
                      <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-medium">
                        One of our lead growth engineers will contact you at{" "}
                        <strong className="text-white underline decoration-indigo-500/50 decoration-2 underline-offset-2">
                          {formData.phone}
                        </strong>
                        {formData.email ? (
                          <>
                            {" "}
                            or{" "}
                            <strong className="text-white underline decoration-blue-500/50 decoration-2 underline-offset-2">
                              {formData.email}
                            </strong>
                          </>
                        ) : (
                          ""
                        )}{" "}
                        within{" "}
                        <strong className="text-indigo-400">12 hours</strong>{" "}
                        with your fully populated report and calendar invite.
                        Let’s scale!
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Main Form Form */
              <form
                onSubmit={handleSubmit}
                className="bg-neutral-900/40 border border-neutral-800/80 rounded-3xl p-6 sm:p-8 backdrop-blur-sm shadow-xl"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  {/* Name field */}
                  <div>
                    <label className="text-[10px] font-bold text-neutral-400 font-mono uppercase block mb-1.5">
                      Your Full Name{" "}
                      <span className="text-red-500 font-sans">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Enter your full name (e.g. Jane Doe)"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-neutral-950 border border-neutral-800/80 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-neutral-300 font-medium focus:outline-none focus:border-indigo-500 focus:bg-neutral-950 transition-all placeholder:text-neutral-600"
                    />
                  </div>

                  {/* Phone field */}
                  <div>
                    <label className="text-[10px] font-bold text-neutral-400 font-mono uppercase block mb-1.5">
                      Phone Number{" "}
                      <span className="text-red-500 font-sans">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Enter your contact number (e.g. +91 99724 14587)"
                      value={formData.phone}
                      onChange={(e) => {
                        handleChange(e);
                        if (phoneError) setPhoneError("");
                      }}
                      className={`w-full bg-neutral-950 border rounded-xl px-4 py-3.5 text-xs sm:text-sm text-neutral-300 font-medium focus:outline-none focus:bg-neutral-950 transition-all placeholder:text-neutral-600 ${
                        phoneError
                          ? "border-red-500 focus:border-red-500"
                          : "border-neutral-800/80 focus:border-indigo-500"
                      }`}
                    />
                    {phoneError && (
                      <span className="text-[10px] text-red-500 font-mono mt-1 block">
                        ⚠️ {phoneError}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  {/* Email field */}
                  <div>
                    <label className="text-[10px] font-bold text-neutral-400 font-mono uppercase block mb-1.5">
                      Business Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your work email (e.g. jane@company.com)"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-neutral-950 border border-neutral-800/80 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-neutral-300 font-medium focus:outline-none focus:border-indigo-500 focus:bg-neutral-950 transition-all placeholder:text-neutral-600"
                    />
                  </div>

                  {/* Website field */}
                  <div>
                    <label className="text-[10px] font-bold text-neutral-400 font-mono uppercase block mb-1.5">
                      Company Website URL
                    </label>
                    <input
                      type="url"
                      name="website"
                      placeholder="e.g. https://company.com/"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full bg-neutral-950 border border-neutral-800/80 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-neutral-300 font-medium focus:outline-none focus:border-indigo-500 focus:bg-neutral-950 transition-all placeholder:text-neutral-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  {/* Ad spend (pre-filled or manual) */}
                  <div>
                    <label className="text-[10px] font-bold text-neutral-400 font-mono uppercase block mb-1.5">
                      Current Monthly Ad Spend
                    </label>
                    <input
                      type="text"
                      name="spend"
                      id="form-ad-spend"
                      placeholder="e.g. ₹50,000 / $2,000"
                      value={formData.spend}
                      onChange={handleChange}
                      className="w-full bg-neutral-950 border border-neutral-800/80 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-neutral-300 font-medium focus:outline-none focus:border-indigo-500 focus:bg-neutral-950 transition-all placeholder:text-neutral-600"
                    />
                  </div>

                  {/* Primary Growth Goal */}
                  <div>
                    <label className="text-[10px] font-bold text-neutral-400 font-mono uppercase block mb-1.5">
                      What Is Your Primary Growth Goal?
                    </label>
                    <select
                      name="goal"
                      id="form-primary-goal"
                      value={formData.goal}
                      onChange={handleChange}
                      className="w-full bg-neutral-950 border border-neutral-800/80 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-neutral-300 font-medium focus:outline-none focus:border-indigo-500 focus:bg-neutral-950 transition-all cursor-pointer"
                    >
                      <option value="sales">
                        Maximize Direct Product Sales (Shopify/E-com)
                      </option>
                      <option value="leads">
                        Generate Pre-Qualified Active Leads (CRM Booking)
                      </option>
                      <option value="clicks">
                        Boost Content Clicks & Organic Keywords (Traffic/SEO)
                      </option>
                      <option value="awareness">
                        Build Massive Brand Awareness (Meme/PR/Viral)
                      </option>
                      <option value="website">
                        Website Creation (High-Converting Landing Pages & Custom
                        Dev)
                      </option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div className="mb-8">
                  <label className="text-[10px] font-bold text-neutral-400 font-mono uppercase block mb-1.5">
                    Tell Us About Your Product
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Briefly describe your target audience or any specific struggles with Meta/Google ads..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-neutral-950 border border-neutral-800/80 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-neutral-300 font-medium focus:outline-none focus:border-indigo-500 focus:bg-neutral-950 transition-all placeholder:text-neutral-600 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm tracking-wide transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-500/20"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Preparing your growth audit...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span>Secure My Free Custom Audit Proposal</span>
                      <Send size={14} />
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
