"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import AboutUs from "./components/About";
import Values from "./components/Values";
import Experience from "./components/Experience";
import Vision from "./components/Vision";
import Mission from "./components/Mission";
import Footer from "../components/Footer";

export default function About() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <main>
      <Navbar
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      <AboutUs />
      <Values />
      <Experience />
      <Vision />
      <Mission />
      <Footer />
    </main>
  );
}
