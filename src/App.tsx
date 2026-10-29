/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ClinicProvider } from './context/ClinicContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { LocationsContactSection } from './components/LocationsContactSection';
import { Footer } from './components/Footer';
import { OnboardingDrawer } from './components/OnboardingDrawer';

export default function App() {
  return (
    <ClinicProvider>
      <div className="min-h-screen flex flex-col bg-[#FFF5EC] text-[#422B30] selection:bg-[#EFB5B7] selection:text-[#681B36]">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Presentation Content */}
        <main className="flex-1">
          <Hero />
          <AboutSection />
          <ServicesSection />
          <ExpertiseSection />
          <LocationsContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Client Data Intake & Verification Assistant */}
        <OnboardingDrawer />
      </div>
    </ClinicProvider>
  );
}
