"use client";

import React, { useState } from "react";

export default function FAQ() {
  const questions = [
    {
      question: "Dlaczego warto wybrać LetsProject do realizacji swojego projektu?",
      answer:
        "Łączymy wieloletnie doświadczenie z innowacyjnym podejściem. Każdy projekt traktujemy indywidualnie, zapewniając dedykowane rozwiązania, transparentną komunikację i gwarancję jakości. Nasz zespół składa się z ekspertów, którzy pomogą przekształcić Twoją wizję w rzeczywistość.",
    },
    {
      question: "Jak wygląda proces realizacji projektu?",
      answer:
        "Proces rozpoczynamy od dokładnej analizy Twoich potrzeb i celów biznesowych. Następnie przygotowujemy szczegółową specyfikację i harmonogram. Podczas realizacji zapewniamy regularne konsultacje i możliwość wprowadzania zmian. Każdy etap kończy się testami i wymaga Twojej akceptacji.",
    },
    {
      question: "Jakie gwarancje otrzymuję przy współpracy?",
      answer:
        "Oferujemy kompleksową gwarancję na nasze usługi, w tym: dokumentację techniczną, kod źródłowy, regularne kopie zapasowe oraz wsparcie techniczne po wdrożeniu. Zapewniamy również bezpłatne poprawki w okresie gwarancyjnym i pełną transparentność w kwestii własności intelektualnej.",
    },
    {
      question: "Czy mogę liczyć na wsparcie po zakończeniu projektu?",
      answer: "Absolutnie tak! Oferujemy kompleksowe wsparcie posprzedażowe, w tym: monitoring wydajności, regularne aktualizacje bezpieczeństwa, optymalizację oraz szybką reakcję na zgłoszenia. Możemy również rozwijać projekt o nowe funkcjonalności według Twoich potrzeb.",
    },
    {
      question: "Jak zapewniacie wysoką jakość realizowanych projektów?",
      answer:
        "Stosujemy rygorystyczne standardy jakości na każdym etapie: od planowania po wdrożenie. Wykorzystujemy najnowsze technologie i sprawdzone metodologie (Agile, Scrum). Każdy projekt przechodzi szczegółowe testy, a nasz zespół stale podnosi swoje kwalifikacje.",
    },
    {
      question: "Ile kosztuje realizacja projektu i od czego zależy cena?",
      answer:
        "Cena jest indywidualnie dostosowana do zakresu i złożoności projektu. Oferujemy konkurencyjne stawki i elastyczne modele rozliczeń. Zawsze przedstawiamy szczegółową wycenę przed rozpoczęciem prac, bez ukrytych kosztów. Możemy również zaproponować etapową realizację, dopasowaną do Twojego budżetu.",
    },
  ];

  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-[#F6F4F1]">
      <div className="w-full max-w-[500px] mx-auto px-4">
        <h2 className="text-[36px] font-extrabold text-center text-[#1A1A1A] mb-12">
          FAQ
        </h2>
        <div className="space-y-4">
          {questions.map((item, index) => (
            <div
              key={index}
              className="bg-[#F0EEEC] rounded-lg p-4"
            >
              <button
                className="w-full text-left flex justify-between items-center"
                onClick={() => toggleQuestion(index)}
              >
                <span className="text-[18px] font-semibold text-[#1A1A1A]">
                  {item.question}
                </span>
                <span className="text-[#3257A5] text-lg">
                  {activeQuestion === index ? "-" : "+"}
                </span>
              </button>
              {activeQuestion === index && (
                <div className="mt-2 text-gray-600 text-[16px]">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
