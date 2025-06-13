"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleStart = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    updateSliderPosition(e.clientX);
  }, [isDragging, updateSliderPosition]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    updateSliderPosition(e.touches[0].clientX);
  }, [isDragging, updateSliderPosition]);

  const handleContainerClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget || (e.target as HTMLElement).closest('.slider-container')) {
      updateSliderPosition(e.clientX);
    }
  }, [updateSliderPosition]);

  // Global mouse events for smooth dragging
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        e.preventDefault();
        updateSliderPosition(e.clientX);
      }
    };

    const handleGlobalMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove, { passive: false });
      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.body.style.userSelect = 'none';
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.body.style.userSelect = '';
    };
  }, [isDragging, updateSliderPosition]);

  const beforeProblems = [
    "Brak czytelnego kontaktu i przycisku do umówienia wizyty",
    "Wolne ładowanie i nieoptymalizowane zdjęcia",
    "Nieresponsywny design nieprzystosowany do urządzeń mobilnych",
    "Brak integracji z Google Moja Firma i mapami",
    "Przestarzały wygląd niepassujący do profesjonalizmu usług"
  ];

  const afterImprovements = [
    "Wyraźny numer telefonu i przycisk 'Umów wizytę' w widocznym miejscu",
    "Szybkie ładowanie strony (< 2 sekundy) dzięki optymalizacji",
    "Pełna responsywność na wszystkich urządzeniach",
    "Integracja z Google Moja Firma dla lepszej widoczności lokalnej",
    "Nowoczesny, profesjonalny design budujący zaufanie pacjentów"
  ];

  const results = [
    "53% użytkowników opuszcza wolno ładujące się strony",
    "Niski współczynnik konwersji z odwiedzin na zapisy",
    "Brak widoczności w lokalnych wynikach wyszukiwania"
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F6F4F1]">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-6">
            Przed/Po
          </h2>
          <p className="text-lg text-[#5A6C7D] max-w-3xl mx-auto">
            Przesuń suwak, aby zobaczyć różnicę między starą a nową stroną gabinetu
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Left Column - Interactive Before/After Slider (2/3 width) */}
          <div className="relative lg:col-span-2">


            <div
              ref={containerRef}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl cursor-col-resize select-none group slider-container"
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onClick={handleContainerClick}
              onMouseLeave={handleEnd}
            >
              {/* Before Image (Right side) */}
              <div className="absolute inset-0 w-full h-full">
                <img src="/images/clinic/orto_clinic_d.webp" alt="Before" className="w-full h-full object-cover" />
              </div>

              {/* After Image (Left side) */}
              <div
                className="absolute inset-0 w-full h-full"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img src="/images/clinic/before.webp" alt="After" className="w-full h-full object-cover" />
              </div>

              {/* Slider Handle with enhanced visibility */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize z-10 group-hover:w-2"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                onMouseDown={handleStart}
                onTouchStart={handleStart}
                onTouchEnd={handleEnd}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-gray-300 group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 18L4 12L10 6" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 18L20 12L14 6" />
                  </svg>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                PRZED
              </div>
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                PO
              </div>

              {/* Hover overlay for better interaction indication */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-200 pointer-events-none"></div>
            </div>
          </div>

          {/* Right Column - Minimalist Features */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Before - Problems */}
            <div className="bg-red-25 p-6 rounded-xl border-l-3 border-red-300">
              <h3 className="text-base font-semibold text-red-600 mb-4">
                Przed modernizacją
              </h3>
              <ul className="space-y-3">
                {beforeProblems.slice(0, 3).map((problem, index) => (
                  <li key={index} className="text-sm text-red-700 leading-relaxed">
                    • {problem}
                  </li>
                ))}
              </ul>
            </div>

            {/* After - Solutions */}
            <div className="bg-green-25 p-6 rounded-xl border-l-3 border-green-300">
              <h3 className="text-base font-semibold text-green-600 mb-4">
                Po modernizacji
              </h3>
              <ul className="space-y-3">
                {afterImprovements.slice(0, 3).map((improvement, index) => (
                  <li key={index} className="text-sm text-green-700 leading-relaxed">
                    • {improvement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Problems with old website */}


        <div className="text-center">
          <p className="text-lg text-[#2C3E50] font-semibold mb-6">
            Potrzebujesz więcej informacji?
          </p>
          <a href="/clinic#contact" className="bg-[#3498DB] hover:bg-[#2980B9] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 inline-block">
            POROZMAWIAJMY O TWOICH POTRZEBACH
          </a>
        </div>
      </div>
    </section>
  );
}