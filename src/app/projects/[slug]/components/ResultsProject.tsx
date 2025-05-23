interface Metric {
  value: string;
  label: string;
  description: string;
}

interface ResultsProjectProps {
  metrics: Metric[];
  achievements: string[];
}

export default function ResultsProject({ metrics, achievements }: ResultsProjectProps) {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 md:px-0">
      <h2 className="text-[24px] md:text-3xl font-black mb-8 text-center">Wyniki projektu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-[var(--background-secondary)] p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-[var(--primary-color)] mb-2">{metric.value}</div>
            <div className="text-xl font-semibold mb-2">{metric.label}</div>
            <p className="text-gray-600">{metric.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-[var(--background-secondary)] p-8 rounded-lg">
        <h3 className="text-2xl font-semibold mb-6">Kluczowe osiągnięcia</h3>
        <ul className="space-y-4 list-disc list-inside text-lg text-gray-700">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
