'use client';

import { useState } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import FAQ from '../components/FAQ';
import FitwiseProject from './components/FitwiseProject';
import HidoProject from './components/HidoProject';
import FastAppProject from './components/FastAppProject';
import HikaProject from './components/HikaProject';
import Title from './components/Title';

export default function Career() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Navbar isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <main className="min-h-screen bg-[#F6F4F1]">
        <Title />
        <FitwiseProject />
        <HidoProject />
        <FastAppProject />
        <HikaProject />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
