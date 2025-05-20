"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function AboutUs() {
  const router = useRouter();

  return (
    <section className="w-full px-4 md:px-0 pt-32 md:pt-48">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[36px] font-extrabold text-center text-[#1A1A1A] mb-12">
          O Nas
        </h2>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl md:text-4xl font-bold mb-6 text-[#1A1A1A]">
              Tworzymy Cyfrowe Produkty, Które Ludzie Uwielbiają Używać
            </h3>
            <p className="text-gray-600 mb-6">
              LetsProject to zespół pasjonatów projektowania i programowania, którzy tworzą wyjątkowe doświadczenia cyfrowe. Łączymy kreatywność z wiedzą techniczną, aby dostarczać rozwiązania napędzające rozwój biznesu.
            </p>
            <p className="text-gray-600 mb-8">
              Nasze podejście opiera się na zrozumieniu Twoich celów biznesowych i potrzeb użytkowników. Nie tylko budujemy produkty; tworzymy doświadczenia, które rezonują z Twoją publicznością i przynoszą wymierne rezultaty.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button
                onClick={() => router.push('/contact')}
                className="btn-primary"
              >
                ROZPOCZNIJ PROJEKT
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/images/about_3.jpg"
                alt="O LetsProject"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
