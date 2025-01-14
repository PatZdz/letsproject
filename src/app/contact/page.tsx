'use client';

import { useState } from 'react';
import ContactForm from "@/app/contact/components/ContactForm";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FAQ from '../components/FAQ';

export default function Page() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Navbar isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <main className="min-h-screen bg-[#F6F4F1]">
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
