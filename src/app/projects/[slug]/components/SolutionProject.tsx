import Image from 'next/image'

interface Solution {
  title: string;
  description: string;
  image: string;
}

interface SolutionProjectProps {
  solutions: Solution[];
}

export default function SolutionProject({ solutions }: SolutionProjectProps) {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 md:px-0">
      <h2 className="text-[24px] md:text-3xl font-black mb-8 text-center">Our Solution</h2>
      <div className="space-y-16">
        {solutions.map((solution, index) => (
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
    </section>
  )
}
