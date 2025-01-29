'use client';

import { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Timer } from './components/Timer';
import { PricingCard } from './components/PricingCard';
import { Renegocjacja } from './components/Renegocjacja';
import { Description } from './components/Description';
import FAQwycena from './components/FAQwycena';
import { Info } from './components/Info';
import { Benefits } from './components/Benefits';
import { Installments } from './components/Installments';

export default function PricingPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const deadline = new Date('2025-02-04T23:59:59').getTime();
      const now = new Date().getTime();
      const difference = deadline - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="hero-section">
      <div className="container">
        <Hero />
        <Description />
        <Info />
        <Timer timeLeft={timeLeft} />
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 md:grid-flow-col md:auto-cols-fr">
            <div className="order-2 md:order-1 h-full">
              <PricingCard />
            </div>
            <div className="order-1 md:order-2 h-full">
              <PricingCard isSpecial />
            </div>
          </div>
        </section>
        <Installments />
        <Renegocjacja />
        <Benefits />
        <FAQwycena />
        
      </div>
    </main>
  );
}
