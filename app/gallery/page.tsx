"use client"
import Gallery from "@/components/gallery"
import { ArrowLeft } from "lucide-react"

// Generate image paths for the gallery
const galleryImages = Array.from({ length: 38 }, (_, i) => ({
  src: `/images/tattoo${i + 1}.jpeg`,
  alt: `Tatuaje ${i + 1}`,
}))

export default function FullGalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-100 to-white text-black">
      {/* Header for Gallery Page */}
      <header className="bg-black/50 backdrop-blur-sm sticky top-0 z-50 border-b border-purple-500/20 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a href="/" className="text-white hover:text-purple-400 transition-colors flex items-center space-x-2">
            <ArrowLeft className="w-6 h-6" />
            <span className="font-mbf-royal text-lg">VOLVER AL INICIO</span>
          </a>
          <img src="/images/banner_inkedlife.png" alt="INK LIFE TATTOO" className="h-16 object-contain" />
        </div>
      </header>

      {/* Full Gallery Section */}
      <main className="flex-1">
        <section
          id="full-galeria"
          className="relative py-8 md:py-24 px-4 p-6 md:p-8 bg-[url('/images/texture-dark.png')] bg-cover bg-center bg-fixed text-white"
        >
          <div className="container mx-auto">
            <h1
              className="text-4xl md:text-4xl lg:text-6xl font-bold mb-8 text-center font-serif tracking-widest 
             text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.85)]"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              GALERÍA COMPLETA DE TRABAJOS
            </h1>
            <div className="w-32 h-px bg-purple-400 mx-auto mb-6"></div>
            <p
              className="text-center text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto text-xl md:text-2xl"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              Aquí puedes explorar la colección completa de tatuajes realizados por Nico Lemos.
            </p>

            <Gallery images={galleryImages} />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/95 backdrop-blur-sm border-t border-purple-500/20 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} INK LIFE TATTOO ACADEMY. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
