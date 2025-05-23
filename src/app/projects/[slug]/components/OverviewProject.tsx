interface OverviewProjectProps {
  description: string
  duration: string
  role: string
  client: string
  scope: string[]
}

export default function OverviewProject({ description, duration, role, client, scope }: OverviewProjectProps) {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-[24px] md:text-3xl font-black mb-6 text-center md:text-left">Przegląd projektu</h2>
          <p className="text-lg text-gray-700">{description}</p>
        </div>

        <div className="space-y-8">
          <div className="bg-[var(--background-secondary)] p-6 rounded-lg">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-600">Czas trwania</h3>
                <p className="text-lg">{duration}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-600">Obszar działania</h3>
                <p className="text-lg">{role}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-600">Klient</h3>
                <p className="text-lg">{client}</p>
              </div>
            </div>
          </div>

          <div className="bg-[var(--background-secondary)] p-6 rounded-lg">
            <h3 className="font-semibold text-gray-600 mb-4">Zakres projektu</h3>
            <div className="flex flex-wrap gap-2">
              {scope.map((item, index) => (
                <span key={index} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
