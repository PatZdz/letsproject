import Image from 'next/image'

interface HeaderProjectProps {
  title: string
  subtitle: string
  coverImage: string
}

export default function HeaderProject({ title, subtitle, coverImage }: HeaderProjectProps) {
  return (
    <div className="w-full max-w-[1200px] mx-auto pt-28 md:pt-48 px-4 md:px-0">
      <div className="mb-12 md:mb-24">
        <h1 className="text-[18px] font-normal mb-4 md:mb-8 text-[#1d1e22] text-center opacity-50">Przegląd projektu: {subtitle}</h1>
        <p className="text-[26px] md:text-[48px] text-[#1d1e22] text-center mb-8 font-bold">{title}</p>
      </div>
      <div className="relative w-full aspect-video max-h-[674px] rounded-lg overflow-hidden">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
}
