"use client";

import React from "react";

export default function StatsSection() {
  const stats = [
    {
      stat: "53%",
      description: "pacjentów opuści stronę, jeśli ładuje się dłużej niż 3 sekundy",
      source: "Źródło: Think with Google"
    },
    {
      stat: "61%",
      description: "użytkowników nie wraca na stronę, która źle działa na telefonie",
      source: "Źródło: Google / UXCam"
    },
    {
      stat: "75%",
      description: "osób ocenia profesjonalizm gabinetu na podstawie wyglądu strony",
      source: "Źródło: Stanford Web Credibility Research"
    },
    {
      stat: ">50%",
      description: "pacjentów nie rozważa wizyty w miejscu z oceną niższą niż 4/5",
      source: "Źródło: BrightLocal Consumer Survey"
    }
  ];

  const insights = [
    {
      title: "Pierwsza wizyta online",
      description: "Twoja strona to często pierwszy kontakt pacjenta z gabinetem. Ma 7 sekund na zrobienie dobrego wrażenia.",
      impact: "Profesjonalna strona = większe zaufanie"
    },
    {
      title: "Lokalne wyszukiwania",
      description: "Większość pacjentów szuka gabinetów w swojej okolicy. Optymalizacja lokalna to klucz do sukcesu.",
      impact: "Lepsze SEO = więcej pacjentów"
    },
    {
      title: "Mobilna dostępność",
      description: "Pacjenci coraz częściej szukają gabinetów na telefonie, szczególnie w sytuacjach nagłych.",
      impact: "Responsywność = dostępność 24/7"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F6F4F1]">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
            Fakty, które warto znać
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Dlaczego profesjonalna strona internetowa jest kluczowa dla sukcesu Twojego gabinetu
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
                {stat.stat}
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {stat.description}
              </p>
              <p className="text-xs text-gray-500">
                {stat.source}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Chcesz zwiększyć liczbę pacjentów w swoim gabinecie?
          </p>
          <a href="/clinic#contact" className="btn-primary inline-block">
            ZAMÓW BEZPŁATNY AUDYT
          </a>
        </div>
      </div>
    </section>
  );
}