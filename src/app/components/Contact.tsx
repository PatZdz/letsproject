"use client";
import React, { useState } from "react";

export default function Contact() {
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleBlur = (fieldName: string) => {
    setTouched((prev) => ({ ...prev, [fieldName]: true }));
    validateField(fieldName);
  };

  const validateField = (fieldName: string) => {
    const element = document.getElementById(fieldName) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    if (!element) return;

    if (!element.checkValidity()) {
      setErrors((prev) => ({ ...prev, [fieldName]: "To pole jest wymagane" }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
    }
  };

  const inputClasses = (fieldName: string, required: boolean = false) => `
    mt-1 block w-full px-4 py-2 border rounded-md transition-all duration-200
    ${
      touched[fieldName] && required && errors[fieldName]
        ? "border-red-500 bg-red-50 focus:ring-red-500 focus:border-red-500"
        : "border-gray-300 focus:ring-primary focus:border-primary"
    }
  `;

  const labelClasses = (fieldName: string) => `
    block text-sm font-medium 
    ${touched[fieldName] && errors[fieldName] ? "text-red-500" : "text-gray-700"}
  `;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fields = ["name", "email", "company", "facilityType", "facilityCount", "contactConsent", "privacyPolicy"];
    fields.forEach((field) => validateField(field));

    const hasErrors = Object.keys(errors).length > 0;
    if (!hasErrors) {
      try {
        const formData = new FormData(e.target as HTMLFormElement);
        const formJson = Object.fromEntries(formData.entries());
        
        await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formJson),
        });

        setSuccessMessage("Udało się wysłać wiadomość!");
        (e.currentTarget as HTMLFormElement).reset();
        setTouched({});
        setErrors({});
        
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      } catch (error) {
        console.error("Błąd podczas wysyłania formularza:", error);
      }
    }
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4 max-w-md sm:max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Skontaktuj się z nami</h2>
        <p className="text-center text-gray-600 mb-8">
          Masz pytania? Wypełnij formularz, a my się z Tobą skontaktujemy.
        </p>
        
        {successMessage && (
          <div className="mb-8 bg-green-100 border border-green-400 text-green-700 px-8 py-3 rounded-md shadow-lg animate-fade-in max-w-xl mx-auto">
            <p className="flex items-center justify-center gap-2 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {successMessage}
            </p>
          </div>
        )}

        <form className="space-y-6" noValidate onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className={labelClasses("name")}>
              Imię i nazwisko *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              onBlur={() => handleBlur("name")}
              className={inputClasses("name", true)}
            />
            {touched.name && errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className={labelClasses("email")}>
              E-mail *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onBlur={() => handleBlur("email")}
              className={inputClasses("email", true)}
            />
            {touched.email && errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className={labelClasses("phone")}>
              Numer telefonu
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={inputClasses("phone")}
            />
          </div>

          <div>
            <label htmlFor="company" className={labelClasses("company")}>
              Nazwa obiektu sportowego *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              onBlur={() => handleBlur("company")}
              className={inputClasses("company", true)}
            />
            {touched.company && errors.company && (
              <p className="mt-1 text-sm text-red-500">{errors.company}</p>
            )}
          </div>

          <div>
            <label htmlFor="location" className={labelClasses("location")}>
              Lokalizacja obiektu
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className={inputClasses("location")}
            />
          </div>

          <div>
            <label htmlFor="facilityType" className={labelClasses("facilityType")}>
              Rodzaj obiektu sportowego *
            </label>
            <select
              id="facilityType"
              name="facilityType"
              required
              onBlur={() => handleBlur("facilityType")}
              className={inputClasses("facilityType", true)}
              onChange={(e) => {
                const otherInput = document.getElementById("otherFacilityType") as HTMLInputElement;
                if (otherInput) {
                  otherInput.style.display = e.target.value === "other" ? "block" : "none";
                }
              }}
            >
              <option value="">Wybierz rodzaj obiektu</option>
              <option value="gym">Siłownia</option>
              <option value="tennis">Kort tenisowy</option>
              <option value="fitness">Centrum fitness</option>
              <option value="sports-hall">Hala sportowa</option>
              <option value="other">Inne</option>
            </select>
            {touched.facilityType && errors.facilityType && (
              <p className="mt-1 text-sm text-red-500">{errors.facilityType}</p>
            )}
            <input
              type="text"
              id="otherFacilityType"
              name="otherFacilityType"
              placeholder="Wpisz rodzaj obiektu"
              className="mt-1 hidden w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="facilityCount" className={labelClasses("facilityCount")}>
              Liczba zarządzanych obiektów *
            </label>
            <select
              id="facilityCount"
              name="facilityCount"
              required
              onBlur={() => handleBlur("facilityCount")}
              className={inputClasses("facilityCount", true)}
            >
              <option value="">Wybierz liczbę obiektów</option>
              <option value="1">1</option>
              <option value="2-5">2-5</option>
              <option value="6-10">6-10</option>
              <option value="10+">Więcej niż 10</option>
            </select>
            {touched.facilityCount && errors.facilityCount && (
              <p className="mt-1 text-sm text-red-500">{errors.facilityCount}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className={labelClasses("message")}>
              Wiadomość
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className={inputClasses("message")}
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-start">
              <input
                type="checkbox"
                id="contactConsent"
                name="contactConsent"
                required
                onBlur={() => handleBlur("contactConsent")}
                className={`mt-1 mr-2 ${
                  touched["contactConsent"] && errors["contactConsent"]
                    ? "border-red-500 bg-red-50"
                    : ""
                }`}
              />
              <label htmlFor="contactConsent" className={labelClasses("contactConsent")}>
                Wyrażam zgodę na kontakt w celu przedstawienia oferty FitWise. *
              </label>
            </div>
            {touched.contactConsent && errors.contactConsent && (
              <p className="text-sm text-red-500">{errors.contactConsent}</p>
            )}

            <div className="flex items-start">
              <input
                type="checkbox"
                id="privacyPolicy"
                name="privacyPolicy"
                required
                onBlur={() => handleBlur("privacyPolicy")}
                className={`mt-1 mr-2 ${
                  touched["privacyPolicy"] && errors["privacyPolicy"]
                    ? "border-red-500 bg-red-50"
                    : ""
                }`}
              />
              <label htmlFor="privacyPolicy" className={labelClasses("privacyPolicy")}>
                Akceptuję politykę prywatności i warunki użytkowania. *
              </label>
            </div>
            {touched.privacyPolicy && errors.privacyPolicy && (
              <p className="text-sm text-red-500">{errors.privacyPolicy}</p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn-cta px-6 py-3"
            >
              Skontaktuj się z nami
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
