interface Challenge {
  title: string;
  description: string;
}

interface ChallengesProjectProps {
  challenges: Challenge[];
}

export default function ChallengesProject({ challenges }: ChallengesProjectProps) {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 md:px-0">
      <h2 className="text-[24px] md:text-3xl font-black mb-8 text-center">Challenges</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {challenges.map((challenge, index) => (
          <div key={index} className="bg-[var(--background-secondary)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">{challenge.title}</h3>
            <p className="text-gray-700">{challenge.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
