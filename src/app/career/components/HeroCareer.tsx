import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="hero-section pt-40 pb-8">
      <div className="container">
        <div className="hero-content max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#1a1a1a] leading-tight">
            Dołącz do naszego zespołu
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Buduj z nami swoją karierę i bądź częścią czegoś niezwykłego. Tworzymy przyszłość cyfrowych doświadczeń.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#F0EEEC] rounded-lg p-4">
              <h4 className="font-semibold mb-2">Rozwój</h4>
              <p className="text-sm opacity-90">Możliwości ciągłego uczenia się</p>
            </div>
            <div className="bg-[#F0EEEC] rounded-lg p-4">
              <h4 className="font-semibold mb-2">Innowacja</h4>
              <p className="text-sm opacity-90">Nowoczesny stos technologiczny</p>
            </div>
            <div className="bg-[#F0EEEC] rounded-lg p-4">
              <h4 className="font-semibold mb-2">Kultura</h4>
              <p className="text-sm opacity-90">Miejsce pracy z równowagą między życiem zawodowym a prywatnym</p>
            </div>
          </div>
        </div>

        <div className="bg-[#F0EEEC] rounded-lg p-12 md:p-[60px] max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <h3 className="font-semibold text-2xl md:text-[30px] text-[#1A1A1A]">
              Brak otwartych pozycji
            </h3>
            <Image
              src="/images/career_1.png"
              alt="Career"
              width={40}
              height={40}
            />
          </div>
          <p className="text-[#4b5563]">
            Obecnie nie prowadzimy rekrutacji, ale zawsze chętnie nawiązujemy kontakt z utalentowanymi i pełnymi pasji osobami, które podzielają naszą wizję. Chociaż w tej chwili może nie być żadnych otwartych stanowisk, zachęcamy do pozostania w kontakcie i regularnego sprawdzania przyszłych możliwości dołączenia do naszego dynamicznego i innowacyjnego zespołu.
          </p>
        </div>
      </div>
    </section>
  );
}
