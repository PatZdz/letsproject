"use client";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import HowWeWork from "./components/HowWeWork";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ClientLogos from "./components/ClientLogos";

export default function Page() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Navbar isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <Hero />
      <ClientLogos />
      <Services />
      <WhyChooseUs />
      <HowWeWork />
      <FAQ />
      <Footer />
    </>
  );
}