"use client";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import WhyChooseUs from "./components/WhyChooseUs";
import HowWeWork from "./components/HowWeWork";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Page() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Navbar isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <Hero />
      <Services />
      <WhyChooseUs />
      <HowWeWork />
      <FAQ />
      <Footer />
    </>
  );
}