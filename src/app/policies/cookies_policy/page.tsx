'use client';

import { useState } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import CookiesPolicy from './components/CookiesPolicy';


export default function Career() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Navbar isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <main className="min-h-screen bg-[#F6F4F1]">
        <CookiesPolicy />
      </main>
      <Footer />
    </>
  );
}
