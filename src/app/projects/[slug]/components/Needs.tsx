import React from 'react';

interface UnderstandingNeedsProps {
  title: string;
  description: string;
  points: {
    title: string;
    items: string[];
  }[];
  conclusion: string;
}

const Needs: React.FC<UnderstandingNeedsProps> = ({ title, description, points, conclusion }) => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 md:px-0">
      <h2 className="text-[24px] md:text-3xl font-black mb-8 text-center">{title}</h2>
      <p className="text-lg text-gray-700 mb-12 text-center">{description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Karta 1: Badanie, które ukształtowało produkt */}
        <div className="bg-[var(--background-secondary)] rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-black text-center mb-4">Badanie, które ukształtowało produkt</h3>
            <p className="text-gray-700 mb-4">Zanim zaprojektowaliśmy choćby jeden ekran, rozpoczęliśmy od rozmów z osobami, które miały realnie korzystać z platformy:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>właścicielem studia motorycznego</li>
              <li>trenerami personalnymi</li>
              <li>recepcjonistami w obiektach sportowych</li>
            </ul>
          </div>
        </div>

        {/* Karta 2: Co chcieliśmy zrozumieć? */}
        <div className="bg-[var(--background-secondary)] rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-black text-center mb-4">Co chcieliśmy zrozumieć?</h3>
            <p className="text-gray-700 mb-4">Naszym celem nie było tylko wypisanie potrzeb funkcjonalnych. Chcieliśmy prawdziwie wejść w ich świat:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>jak wygląda ich typowy dzień</li>
              <li>w jakich momentach odczuwają największy chaos</li>
              <li>czego się boją, a co lubią w swojej pracy</li>
              <li>jakimi narzędziami posługiwali się wcześniej</li>
              <li>jak wygląda ich styl komunikacji</li>
            </ul>
          </div>
        </div>

        {/* Karta 3: Co odkryliśmy dzięki badaniom? */}
        <div className="bg-[var(--background-secondary)] rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-black text-center mb-4">Co odkryliśmy dzięki badaniom?</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>W wielu studiach nadal funkcjonował papierowy zeszyt obecności — trenerzy odhaczali listy ręcznie</li>
              <li>Często panował chaos w kalendarzu – nie było jasne, kto prowadzi dane zajęcia</li>
              <li>Recepcjoniści potrzebowali systemu, który nie wymagałby szkolenia</li>
              <li>Trenerzy chcieli szybkiego dostępu do danych o swoich zajęciach</li>
            </ul>
          </div>
        </div>

        {/* Karta 4: Jak to wpłynęło na projekt? */}
        <div className="bg-[var(--background-secondary)] rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-black text-center mb-4">Jak to wpłynęło na projekt?</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Kalendarz został zaprojektowany tak, aby z marszu był czytelny i edytowalny</li>
              <li>Funkcja obecności została uproszczona do 3 kliknięć</li>
              <li>Panel trenera działa również na telefonie</li>
              <li>Cały system był testowany z realnymi studiami</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-lg text-gray-700 mt-12 text-center italic">{conclusion}</p>
    </section>
  );
};

export default Needs;