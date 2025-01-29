import { motion } from 'framer-motion';

interface TimerProps {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export const Timer = ({ timeLeft }: TimerProps) => (
  <section className="mb-16">
    <div className="max-w-3xl mx-auto px-4">
      <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm">
        <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-6">
          Specjalna Oferta Kończy Się Za
        </h2>
        <div className="flex justify-center items-center space-x-4">
          {[
            {value: timeLeft.days, label: 'DNI'},
            {value: timeLeft.hours, label: 'GODZ'},
            {value: timeLeft.minutes, label: 'MIN'},
            {value: timeLeft.seconds, label: 'SEK'}
          ].map((item, i) => (
            <div key={i} className="flex items-center">
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  {item.value.toString().padStart(2, '0')}
                </span>
                <span className="text-xs tracking-wider text-gray-400 mt-1">
                  {item.label}
                </span>
              </div>
              {i < 3 && (
                <span className="text-3xl md:text-4xl font-light text-gray-300 ml-4">:</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
