import Image from 'next/image'

interface Solution {
  title: string;
  description: string;
  image: string;
}

interface SolutionProjectProps {
  mainImage: string;
  secondaryImages: string[];
  cards: {
    title: string;
    content: string;
  }[];
  items: Solution[];
}

export default function SolutionProject({ mainImage, secondaryImages, cards, items }: SolutionProjectProps) {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 md:px-0">
      <h2 className="text-[24px] md:text-3xl font-black mb-8 text-center">Nasze rozwiązanie</h2>

      {/* Główne zdjęcie */}
      <div className="w-full mb-6 overflow-hidden rounded-lg">
        <div className="relative w-full pb-[75%]">
          <Image
            src={mainImage}
            alt="Main solution image"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Dwa mniejsze zdjęcia */}
      {secondaryImages && secondaryImages.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {secondaryImages.map((img, index) => (
            <div key={index} className="w-full overflow-hidden rounded-lg">
              <div className="relative w-full pb-[75%]">
                <Image
                  src={img}
                  alt={`Solution image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Karty z informacjami */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {cards.map((card, index) => (
          <div key={index} className="bg-[var(--background-secondary)] p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 text-center">{card.title}</h3>
            <p className="text-gray-700">{card.content}</p>
          </div>
        ))}
      </div>

      {items && items.length > 0 && (
        <div className="space-y-16">
          {items.map((solution, index) => (
            <div key={index} className="flex flex-col gap-8">
              <div className="relative w-full aspect-[4/3] md:hidden">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4 text-[#1d1e22]">{solution.title}</h3>
                  <p className="text-lg text-[#1d1e22]">{solution.description}</p>
                </div>
                <div className="flex-1 hidden md:block">
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
