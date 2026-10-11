import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SystemSection } from './components/SystemSection';
import { UgcAiVideoSection } from './components/UgcAiVideoSection';
import { ProofSection } from './components/ProofSection';
import { ProcessSection } from './components/ProcessSection';
import { PricingSection } from './components/PricingSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { CaseStudiesHub } from './components/CaseStudiesHub';
import { Footer } from './components/Footer';
import { StrategyCallModal } from './components/StrategyCallModal';
import { CaseStudyDetailModal } from './components/CaseStudyDetailModal';
import { RoiCalculatorModal } from './components/RoiCalculatorModal';
import { WhatsAppModal } from './components/WhatsAppModal';
import { CaseStudy } from './types/index';

export default function App() {
  const [activePage, setActivePage] = useState<'home' | 'case-studies'>('home');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [isRoiOpen, setIsRoiOpen] = useState<boolean>(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState<boolean>(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleOpenRoi = () => setIsRoiOpen(true);
  const handleOpenWhatsApp = () => setIsWhatsAppOpen(true);

  const handleGoToCaseStudies = () => {
    setActivePage('case-studies');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToHome = () => {
    setActivePage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#090b10] text-slate-100 selection:bg-blue-600 selection:text-white flex flex-col font-sans">
      {/* 1-Row, 3-Zone Navigation */}
      <Navbar
        currentPage={activePage}
        onBookCall={handleOpenBooking}
        onGoToHome={handleGoToHome}
        onGoToCaseStudies={handleGoToCaseStudies}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {activePage === 'home' ? (
          <div className="animate-in fade-in duration-200">
            {/* Section 1: Hero */}
            <HeroSection onBookCall={handleOpenBooking} />

            {/* Section 2: The Problem */}
            <ProblemSection onBookCall={handleOpenBooking} />

            {/* Section 3: The System (Cleaned: no awkward vertical line or arrows) */}
            <SystemSection onBookCall={handleOpenBooking} />

            {/* UGC AI Creative Production Section */}
            <UgcAiVideoSection onBookCall={handleOpenBooking} />

            {/* Section 4: Proof / Case Studies (Original non-AI screenshot & compact slide trigger) */}
            <ProofSection
              onBookCall={handleOpenBooking}
              onOpenCaseStudiesPage={handleGoToCaseStudies}
            />

            {/* Section 5: The Process */}
            <ProcessSection onBookCall={handleOpenBooking} />

            {/* Section 6: Pricing Plans */}
            <PricingSection
              onBookCall={handleOpenBooking}
              onOpenCalculator={handleOpenRoi}
            />

            {/* Section 7: Final CTA */}
            <FinalCtaSection
              onBookCall={handleOpenBooking}
              onOpenWhatsApp={handleOpenWhatsApp}
            />
          </div>
        ) : (
          /* Dedicated Case Studies & Reviews Hub */
          <CaseStudiesHub
            onBackToHome={handleGoToHome}
            onBookCall={handleOpenBooking}
            onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onBookCall={handleOpenBooking}
        onOpenWhatsApp={handleOpenWhatsApp}
        onOpenCaseStudiesPage={handleGoToCaseStudies}
      />

      {/* Interactive Modals */}
      <StrategyCallModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      <CaseStudyDetailModal
        study={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onBookCall={handleOpenBooking}
      />

      <RoiCalculatorModal
        isOpen={isRoiOpen}
        onClose={() => setIsRoiOpen(false)}
        onBookCall={handleOpenBooking}
      />

      <WhatsAppModal
        isOpen={isWhatsAppOpen}
        onClose={() => setIsWhatsAppOpen(false)}
      />
    </div>
  );
}
