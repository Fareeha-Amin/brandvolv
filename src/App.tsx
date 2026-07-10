/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import WebShowcase from './components/WebShowcase';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#030305] text-white min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-200 antialiased overflow-x-hidden">
      {/* Premium Sticky Navbar */}
      <Header />

      {/* Main Sections */}
      <main>
        {/* Cinematic Hero Header with infinite brand marquee */}
        <Hero />

        {/* Core Pillars: Interactive Services list */}
        <Services />

        {/* Case Studies Dashboard: Toggle real campaign metrics */}
        <CaseStudies />

        {/* Shopify & WordPress Portfolio grid */}
        <WebShowcase />

        {/* Real Testimonials with interactive slider and visual rating indicators */}
        <Testimonials />

        {/* Lead Capture and Strategic proposal builder */}
        <ContactForm />
      </main>

      {/* Footer detailing domains and social connections */}
      <Footer />
    </div>
  );
}

