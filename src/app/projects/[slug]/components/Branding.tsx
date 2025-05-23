import React from 'react';
import Image from 'next/image';

interface BrandingProps {
  mainImage: string;
  secondaryImages: string[];
  cards: {
    title: string;
    content: string;
  }[];
}

const Branding: React.FC<BrandingProps> = ({ mainImage, secondaryImages, cards }) => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 md:px-0">
      <h2 className="text-[24px] md:text-3xl font-black mb-8 text-center">Identyfikacja wizualna</h2>

      {/* Główne zdjęcie w formacie 4:3 */}
      <div className="w-full mb-6 overflow-hidden rounded-lg">
        <div className="relative w-full pb-[75%]"> {/* Format 4:3 */}
          <Image
            src={mainImage}
            alt="FitWise branding"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Dwa mniejsze zdjęcia w formacie 4:3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {secondaryImages.map((img, index) => (
          <div key={index} className="w-full overflow-hidden rounded-lg">
            <div className="relative w-full pb-[75%]"> {/* Format 4:3 */}
              <Image
                src={img}
                alt={`FitWise branding ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Karty z informacjami o marce */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {cards.map((card, index) => (
          <div key={index} className="bg-[var(--background-secondary)] p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 text-center">{card.title}</h3>
            <p className="text-gray-700">{card.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Branding;