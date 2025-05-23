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
        {points.map((point, index) => (
          <div key={index} className="bg-[var(--background-secondary)] rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black text-center mb-4">{point.title}</h3>
              <ul className="list-disc pl-5 space-y-2">
                {point.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <p className="text-lg text-gray-700 mt-12 text-center italic">{conclusion}</p>
    </section>
  );
};

export default Needs;