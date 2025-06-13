"use client";

import React, { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ContactFormClinic() {
  const formRef = useRef<HTMLFormElement>(null);
  const searchParams = useSearchParams();
  const [selectedPackageFromURL, setSelectedPackageFromURL] = useState<string | null>(null);

  useEffect(() => {
    const packageName = searchParams.get('package');
    if (packageName) {
      setSelectedPackageFromURL(decodeURIComponent(packageName));
    }
  }, [searchParams]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    currentWebsite: ''
  });

  const [buttonState, setButtonState] = useState<'default' | 'sending' | 'success'>('default');





  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (buttonState === 'success') return;

    setButtonState('sending');

    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdg8fF9e8r10IzbIi9LxHyiekafkkV6vCk9G4if08GyeSyNlQ/formResponse'; // Zastąp YOUR_FORM_ID rzeczywistym ID formularza Google

    const formDataToSend = new FormData();
    formDataToSend.append('entry.1312897646', formData.name); // Imię i nazwisko
    formDataToSend.append('entry.747723302', formData.phone); // Telefon
    formDataToSend.append('entry.1670300228', formData.email); // Email
    formDataToSend.append('entry.1988676387', formData.currentWebsite); // Strona
    if (selectedPackageFromURL) {
      formDataToSend.append('entry.305156761', selectedPackageFromURL); // Pakiet
    }

    try {
      const response = await fetch(googleFormUrl, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors', // Ważne dla wysyłania do Google Forms z frontendu
      });

      // Google Forms zawsze zwraca sukces z 'no-cors', więc nie można sprawdzić statusu odpowiedzi
      setButtonState('success');
      formRef.current?.reset();
      setFormData({
        name: '',
        email: '',
        phone: '',
        currentWebsite: ''
      });
    } catch (error) {
      console.error('Błąd podczas wysyłania formularza:', error);
      setButtonState('default'); // Przywróć stan domyślny w przypadku błędu
    }
  };

  return (
    <section id="contact" className="w-full px-4 md:px-0 py-32 md:py-48 relative">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[36px] font-extrabold text-center text-[#1A1A1A] mb-12">
          Zamów bezpłatny audyt swojej strony
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left - Benefits */}
          <div className="w-full lg:basis-2/5 flex flex-col gap-6 order-2 lg:order-1">
            <div className="bg-[#1A1A1A] text-white rounded-lg p-6 md:p-10 flex flex-col gap-4">
              <h3 className="text-xl font-bold mb-4">
                Co otrzymasz w bezpłatnym audycie?
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-[#3498DB] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">
                      Analiza obecnej strony
                    </h4>
                    <p className="text-xs opacity-80">
                      Sprawdzę szybkość ładowania, responsywność, SEO i użyteczność Twojej strony
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-[#3498DB] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">
                      Raport z rekomendacjami
                    </h4>
                    <p className="text-xs opacity-80">
                      Otrzymasz szczegółowy raport z konkretnymi wskazówkami do poprawy
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-[#3498DB] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">
                      Konsultacja 30 min
                    </h4>
                    <p className="text-xs opacity-80">
                      Omówimy wyniki audytu i możliwości rozwoju Twojej obecności online
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-[#3498DB] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">
                      Kompleksowa usługa
                    </h4>
                    <p className="text-xs opacity-80">
                      Wszystkim od początku do końca ja się zajmuję. Ty niczym nie musisz się martiwć
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-[#1A1A1A] text-white rounded-lg p-6 md:p-10 flex flex-col gap-4">
              <h4 className="font-semibold text-base mb-2">
                Dlaczego warto mi zaufać?
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm opacity-80">50+ zrealizowanych projektów</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm opacity-80">Specjalizacja w branży medycznej</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm opacity-80">Gwarancja satysfakcji</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm opacity-80">Zawsze pod telefonem. Można śmiało zadzwonić</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="w-full lg:basis-3/5 order-1 lg:order-2">
            <form ref={formRef} onSubmit={handleSubmit} className="w-full bg-white p-6 md:p-10 rounded-lg flex flex-col gap-6 md:gap-8">
              {buttonState === 'success' ? (
                <div className="text-center py-8">
                  <div className="bg-green-100 text-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-2">
                    Dziękuję za zgłoszenie!
                  </h4>
                  <p className="text-gray-600">
                    Odezwę się do Ciebie w ciągu 24 godzin z bezpłatnym audytem Twojej strony.
                  </p>
                </div>
              ) : (
                <>
                  {selectedPackageFromURL && (
                    <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-between">
                      <span className="text-blue-800 font-semibold">Wybrany pakiet: {selectedPackageFromURL}</span>
                      <button
                        onClick={() => {
                          window.location.href = '/clinic#pricing';
                        }}
                        className="text-blue-600 hover:text-blue-800 text-sm"
                      >
                        Zmień
                      </button>
                    </div>
                  )}
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <label htmlFor="name" className="text-sm font-semibold block mb-1">
                        Imię i nazwisko *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full border border-gray-300 rounded-md p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#3498DB] focus:border-[#3498DB]"
                        placeholder="Twoje imię i nazwisko"
                      />
                    </div>
                    <div className="flex-1">
                      <label htmlFor="phone" className="text-sm font-semibold block mb-1">
                        Telefon *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full border border-gray-300 rounded-md p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#3498DB] focus:border-[#3498DB]"
                        placeholder="Twój numer telefonu"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-semibold block mb-1">
                      E-mail *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-md p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#3498DB] focus:border-[#3498DB]"
                      placeholder="Twój adres e-mail"
                    />
                  </div>



                  <div>
                    <label htmlFor="currentWebsite" className="text-sm font-semibold block mb-1">
                      Obecna strona internetowa
                    </label>
                    <input
                      id="currentWebsite"
                      name="currentWebsite"
                      type="text"
                      value={formData.currentWebsite}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#3498DB] focus:border-[#3498DB]"
                      placeholder="https://mojgabinet.pl (jeśli masz)"
                    />
                  </div>



                  <button
                    type="submit"
                    className="btn-primary mt-4 w-full"
                  >
                    ZAMÓW BEZPŁATNY AUDYT
                  </button>

                  <p className="text-xs text-gray-600 mt-2">
                    Klikając przycisk, wyrażasz zgodę na przetwarzanie danych osobowych
                    i akceptujesz Politykę Prywatności strony.
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}