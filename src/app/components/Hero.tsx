"use client";

import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  return (
    <section className="hero bg-[#F6F4F1] pt-32 md:pt-64 pb-24 md:pb-48 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[281px] h-[221px] md:w-[381px] md:h-[301px] pointer-events-none">
        <Image
          src="vectors/star_hero.svg"
          alt=""
          fill
          className="object-contain opacity-50 animate-spin-slow"
          priority
        />
      </div>
      <div className="container mx-auto text-center relative z-10 px-4 md:px-6">
        <p className="text-xl md:text-2xl font-medium mb-4 md:mb-8 text-gray-500">
          Masz pomysł na swój biznes?
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-gray-900 leading-tight mb-6 md:mb-12">
          My Stworzymy. <br /> Ty zarobisz.
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-8 md:mb-16 max-w-2xl mx-auto">
          Tworzymy aplikacje, strony i identyfikacje wizualne, które przekładają się na wzrost Twojego biznesu.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
          <button
            onClick={() => router.push('/contact')}
            className="btn-primary cursor-pointer"
          >
            UMÓW SIĘ NA SPOTKANIE
          </button>
          <button
            onClick={() => router.push('/projects/fitwise')}
            className="btn-secondary cursor-pointer"
          >
            Przykładowa realizacja <ArrowRightIcon className="h-3 w-3" />
          </button>
        </div>
      </div>
    </section>
  );

}
