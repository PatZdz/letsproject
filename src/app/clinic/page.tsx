"use client";

import React, { useState, Suspense } from "react";
import Navbar from "./components/NavbarClinic";
import Footer from "./components/FooterClinic";
import HeroClinic from "./components/HeroClinic";
import ServicesClinic from "./components/ServicesClinic";
import BeforeAfter from "./components/BeforeAfter";
import AuthoritySection from "./components/AuthoritySection";
import DemoSection from "./components/DemoSection";
import StatsSection from "./components/StatsSection";
import PricingClinic from "./components/PricingClinic";
import ContactFormClinic from "./components/ContactFormClinic";

export default function ClinicPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <main className="bg-[#F6F4F1] clinic-page">
      <Navbar isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <HeroClinic />
      <BeforeAfter />
      <DemoSection />
      <ServicesClinic />
      <StatsSection />
      <PricingClinic />
      <AuthoritySection />
      <Suspense fallback={<div>Loading form...</div>}>
        <ContactFormClinic />
      </Suspense>
      <Footer />
    </main>
  );
}