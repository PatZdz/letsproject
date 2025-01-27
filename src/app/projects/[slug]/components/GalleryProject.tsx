import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

interface GalleryProjectProps {
  gallery: GalleryImage[];
}

export default function GalleryProject({ gallery }: GalleryProjectProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (selectedImage) {
        setSelectedImage(null)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [selectedImage])

  const handleImageSelect = (image: GalleryImage) => {
    setSelectedImage(image)
  }

  return (
    <>
      <section className="w-full max-w-[1200px] mx-auto px-4 md:px-0">
        <h2 className="text-[24px] md:text-3xl font-black mb-8 text-center">Project Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.map((image, index) => (
            <motion.div 
              key={index} 
              className="space-y-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div 
                className="relative aspect-[4/3] cursor-pointer hidden md:block"
                onClick={() => handleImageSelect(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="relative aspect-[4/3] md:hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg"
                  sizes="100vw"
                />
              </div>
              <p className="text-sm text-gray-600">{image.caption}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="relative p-8 rounded-xl overflow-hidden max-w-[1200px] w-full mx-auto"
              style={{
                background: 'rgba(40, 40, 40, 0.5)',
                backdropFilter: 'blur(25px)',
                WebkitBackdropFilter: 'blur(25px)',
                willChange: 'backdrop-filter',
                transform: 'translateZ(0)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[70vh] flex items-center">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain !rounded-[8px]"
                  sizes="min(1200px, 100vw)"
                  priority
                  quality={100}
                />
              </div>
              
              {selectedImage.caption && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-center"
                >
                  <p className="text-lg text-white font-medium">
                    {selectedImage.caption}
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
