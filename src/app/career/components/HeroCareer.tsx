import Image from 'next/image';

export default function HeroSection() {
    return (
      <section className="hero-section pt-40 pb-8">
        <div className="container">
          <div className="hero-content max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#1a1a1a] leading-tight">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Build your career with us and be part of something extraordinary. We&apos;re creating the future of digital experiences.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-[#F0EEEC] rounded-lg p-4">
                <h4 className="font-semibold mb-2">Growth</h4>
                <p className="text-sm opacity-90">Continuous learning opportunities</p>
              </div>
              <div className="bg-[#F0EEEC] rounded-lg p-4">
                <h4 className="font-semibold mb-2">Innovation</h4>
                <p className="text-sm opacity-90">Cutting-edge tech stack</p>
              </div>
              <div className="bg-[#F0EEEC] rounded-lg p-4">
                <h4 className="font-semibold mb-2">Culture</h4>
                <p className="text-sm opacity-90">Work-life balance workplace</p>
              </div>
            </div>
          </div>

          <div className="bg-[#F0EEEC] rounded-lg p-12 md:p-[60px] max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <h3 className="font-semibold text-2xl md:text-[30px] text-[#1A1A1A]">
                No Open Positions
              </h3>
              <Image 
                src="/images/career_1.png" 
                alt="Career" 
                width={40} 
                height={40}
              />
            </div>
            <p className="text-[#4b5563]">
              We&apos;re not currently hiring, but we&apos;re always eager to connect with talented and passionate individuals who share our vision. While there may not be any open positions at the moment, we encourage you to stay in touch and check back regularly for future opportunities to join our dynamic and innovative team.
            </p>
          </div>
        </div>
      </section>
    );
}
