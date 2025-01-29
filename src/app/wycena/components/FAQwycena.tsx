import { motion } from 'framer-motion';
import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full py-6 text-left flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base md:text-lg font-medium text-gray-900">{question}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-4 md:pb-6 text-sm md:text-base text-gray-600 whitespace-pre-line text-left">
          {answer}
        </p>
      </motion.div>
    </div>
  );
};

export default function FAQWycena() {
  const faqs = [
    {
      question: "Dlaczego jest zniżka?",
      answer: "Zniżka wynika z dwóch głównych powodów:\n\n1. Buduję długoterminową współpracę – inwestuję w zadowolenie i powracanie klienta, oferując stałe, korzystne ceny na przyszłość.\n\n2. Optymalizuję koszty dzięki sprawdzonym narzędziom, które znacząco skracają czas realizacji.\n\nTo specjalna promocja dla strategicznych klientów podejmujących szybką decyzję."
    },
    {
      question: "Jakie korzyści daje umowa retainerska?",
      answer: "Umowa retainerska to Twoje zabezpieczenie:\n\n• Zapewnia 3 darmowe zmiany miesięcznie\n• np. aktualizacje i poprawy \n\nBez umowy każda zmiana wymaga będzie kosztować 500zł."
    },
    {
      question: "Dlaczego kolejne strony są tańsze?",
      answer: "To naturalna optymalizacja procesu:\n\n• Pierwsze strony wymagają pełnej konfiguracji i setupu\n• Kolejne korzystają z gotowej infrastruktury\n• Proces jest szybszy i bardziej efektywny\n\nTo standardowa praktyka w branży."
    },
    {
      question: "Czy darmowe logo będzie profesjonalne?",
      answer: "Absolutnie tak! Jestem brand designerem z ponad 8 letnim stażem\n\nWiem, że logo na takich stronach nie jest najważniejsze, ale jest to element, który wpływa na pozycję w wyszukiwarce oraz zaufanie przyszłych klientów."
    },
    {
      question: "A co z bezpieczeństwem SEO?",
      answer: "Dbam o zachowanie pozycji w wyszukiwarce:\n\n• Wdrażam przekierowania 301\n• Zachowuję strukturę meta tagów\n• Utrzymuję hierarchię nagłówków\n• Każda zmiana jest kontrolowana pod kątem SEO.\n\nZmiana strona na lepiej zoptymalizowaną pod kątem algortymu wyszukiwarki może tylko wzmocnić SEO!"
    },
    {
      question: "Jak długo będzie trwało zlecenie?",
      answer: "Mam w lutym wolny termin, więc priorytetowo zabiorę się za pracę nad stronami. Jestem pewny, że do połowy marca zrealizuje wszystko, a następnie będę gotowy do odbioru projektu."
    }
  ];

  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto px-4"
      >
        <div className="bg-white p-8 md:p-10 rounded-lg">
          <h2 className="text-2xl font-medium text-gray-900 mb-8">
            Możliwe pytania
          </h2>
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}