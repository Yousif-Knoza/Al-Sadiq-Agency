/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { UnifiedServicesSection } from './components/UnifiedServicesSection';
import { UmrahSection } from './components/UmrahSection';
import { WhyAlSadeq } from './components/WhyAlSadeq';
import { HowItWorks } from './components/HowItWorks';
import { AboutAndLocation } from './components/AboutAndLocation';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { openWhatsApp } from './data/agencyData';

export default function App() {
  const handleOpenBooking = (customMessage?: string) => {
    const msg = customMessage || 'مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار وحجز ترتيبات السفر.';
    openWhatsApp(msg);
  };

  const handleSelectService = (serviceTitle: string, customMessage?: string) => {
    const msg = customMessage || `مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار عن خدمة ${serviceTitle} والحصول على التفاصيل المتاحة.`;
    handleOpenBooking(msg);
  };

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] selection:bg-[#F28A2E]/20 selection:text-[#0A0A0A] flex flex-col justify-between overflow-x-hidden">
      {/* Floating Capsule Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero with huge white space, bold typography & 2 large visual cards */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. Services Section (6 core service pillars) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 3. Unified Services & Programs Directory (All 22 services categorized with poster visual view) */}
        <UnifiedServicesSection onSelectService={handleSelectService} />

        {/* 4. Large Umrah Editorial Section */}
        <UmrahSection onOpenBooking={() => handleOpenBooking('مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار والحصول على تفاصيل أكثر عن برامج العمرة والزيارة المتاحة (التأشيرات، خيارات السكن، وترتيبات النقل).')} />

        {/* 5. Why Al-Sadeq (Grounded value points) */}
        <WhyAlSadeq />

        {/* 6. How It Works (Timeline) */}
        <HowItWorks />

        {/* 7. About & Location (Headquarters, Google Maps, Branches) */}
        <AboutAndLocation />

        {/* 8. Direct Contact & WhatsApp Consultation */}
        <ContactSection />

        {/* 9. Large Dark Final CTA */}
        <FinalCTA onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
