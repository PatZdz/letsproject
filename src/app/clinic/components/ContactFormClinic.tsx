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
    setIsLoading(true);
    setSubmissionStatus(null);

    try {
      const formData = new FormData(e.currentTarget as HTMLFormElement);
      const data = Object.fromEntries(formData.entries());

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#F6F4F1] to-white" id="contact">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
            Skontaktuj się z nami
          </h2>
          <p className="text-lg text-[#5A6C7D] max-w-2xl mx-auto">
            Masz pytania? Chcesz dowiedzieć się więcej o tym, jak możemy pomóc Twojej klinice? Wypełnij formularz, a my skontaktujemy się z Tobą najszybciej, jak to możliwe.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Imię i Nazwisko</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adres E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Numer Telefonu (opcjonalnie)</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Wiadomość</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-semibold text-white bg-[#3498DB] hover:bg-[#2980B9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
              disabled={isLoading}
            >
              {isLoading ? 'Wysyłanie...' : 'Wyślij Wiadomość'}
            </button>

            {submissionStatus === 'success' && (
              <p className="mt-4 text-center text-green-600 font-medium">Twoja wiadomość została wysłana pomyślnie!</p>
            )}
            {submissionStatus === 'error' && (
              <p className="mt-4 text-center text-red-600 font-medium">Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}