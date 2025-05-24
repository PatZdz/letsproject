interface Technology {
  category: string;
  items: string[];
}

interface TechnologiesProjectProps {
  technologies: Technology[];
}

export default function TechnologiesProject({ technologies }: TechnologiesProjectProps) {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 md:px-0">
      <h2 className="text-[24px] md:text-3xl font-black mb-8 text-center">Technologie</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {technologies.map((tech, index) => (
          <div key={index} className="flex-1">
            <h3 className="text-xl font-semibold mb-6 text-center">{tech.category}</h3>
            <div className="bg-[var(--background-secondary)] p-8 rounded-lg">
              <div className="space-y-4">
                {tech.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="text-lg">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
