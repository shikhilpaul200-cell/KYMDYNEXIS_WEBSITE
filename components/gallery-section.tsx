"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    title: "Urban Commute",
    description: "Perfect for daily city rides",
    category: "Lifestyle",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/model3-Uvt6ppsfyuDhqBgdIa2CKqM7USmKAu.jpeg",
  },
  {
    id: 2,
    title: "Sleek Design",
    description: "Modern aesthetics meet functionality",
    category: "Design",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/model1-3pNqf6EnfdS49uOHIVnCimC7qtYKeC.jpeg",
  },
  {
    id: 3,
    title: "Night Rider",
    description: "LED lights for safe night rides",
    category: "Features",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mpdel2-xRtaihGbSv6SpCYvzzQLSrq9bRNhyb.jpeg",
  },
  {
    id: 4,
    title: "Smart Dashboard",
    description: "Digital display with all essentials",
    category: "Technology",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/model3-Uvt6ppsfyuDhqBgdIa2CKqM7USmKAu.jpeg",
  },
  {
    id: 5,
    title: "Campus Ready",
    description: "Ideal for students and young riders",
    category: "Lifestyle",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/model1-3pNqf6EnfdS49uOHIVnCimC7qtYKeC.jpeg",
  },
  {
    id: 6,
    title: "Color Options",
    description: "Express yourself with vibrant colors",
    category: "Design",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mpdel2-xRtaihGbSv6SpCYvzzQLSrq9bRNhyb.jpeg",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Gallery</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Experience <span className="text-primary">KYM E-Mobility</span> in Action
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get a closer look at our electric scooters in their element. 
            Style, performance, and sustainability combined.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImage(image)}
              className={`group cursor-pointer relative overflow-hidden rounded-2xl ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className={`${index === 0 ? 'aspect-square md:aspect-auto md:h-full' : 'aspect-square'} relative overflow-hidden`}>
                {/* Actual image */}
                <img 
                  src={image.image} 
                  alt={image.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <div className="text-xs text-primary font-semibold mb-1">{image.category}</div>
                    <h3 className="text-lg md:text-xl font-bold">{image.title}</h3>
                    <p className="text-sm text-muted-foreground">{image.description}</p>
                  </div>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-lg p-4"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 p-2 glass-card rounded-full hover:bg-secondary transition-colors"
                aria-label="Close lightbox"
              >
                <X className="h-6 w-6" />
              </button>
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl w-full"
              >
                <div className="aspect-video relative rounded-2xl overflow-hidden">
                  <img 
                    src={selectedImage.image} 
                    alt={selectedImage.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <span className="text-primary text-sm font-semibold">{selectedImage.category}</span>
                  <h3 className="text-2xl font-bold mt-1">{selectedImage.title}</h3>
                  <p className="text-muted-foreground">{selectedImage.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
