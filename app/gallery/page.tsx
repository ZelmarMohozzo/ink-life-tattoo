"use client"
import Gallery from "@/components/gallery"
import { ArrowLeft } from "lucide-react"

export default function FullGalleryPage() {
  const galleryImages = [
    { src: "/images/tattoo1.jpeg", alt: "Tatuaje realista de serpiente y rostro" },
    { src: "/images/tattoo2.jpeg", alt: "Tatuaje de pecho con diseño Géminis" },
    { src: "/images/tattoo3.jpeg", alt: "Tatuaje realista de figura religiosa" },
    { src: "/images/tattoo4.jpeg", alt: "Tatuaje de manga con rostro femenino" },
    { src: "/images/tattoo5.jpeg", alt: "Tatuaje de pecho y brazo con ancla" },
    { src: "/images/tattoo6.jpeg", alt: "Tatuaje de manga con escena de ajedrez" },
    { src: "/images/tattoo7.jpeg", alt: "Tatuaje egipcio con Horus y Ojo de Horus" },
    { src: "/images/tattoo8.jpeg", alt: "Tatuaje de calavera en antebrazo" },
    { src: "/images/tattoo9.jpeg", alt: "Tatuaje mandala ornamental en antebrazo" },
    { src: "/images/tattoo10.jpeg", alt: "Tatuaje realista con ojo y elementos de reloj" },
    { src: "/images/tattoo11.jpeg", alt: "Tatuaje realista de Jesucristo con corona de espinas" },
    { src: "/images/tattoo12.jpeg", alt: "Tatuaje mandala geométrico detallado en antebrazo" },
    { src: "/images/tattoo13.jpeg", alt: "Tatuaje egipcio de Horus con Ojo de Horus" },
    { src: "/images/tattoo14.jpeg", alt: "Tatuaje de guerrero espartano y figuras mitológicas" },
    { src: "/images/tattoo15.jpeg", alt: "Tatuaje realista de cabeza de carnero" },
    { src: "/images/tattoo16.jpeg", alt: "Tatuaje mandala floral geométrico en pecho" },
    { src: "/images/tattoo17.jpeg", alt: "Tatuaje realista de águila con plumas detalladas" },
    { src: "/images/tattoo18.jpeg", alt: "Tatuaje realista de tigre rugiendo en manga" },
    { src: "/images/tattoo19.jpeg", alt: "Tatuaje realista de carnero con cuernos en pierna" },
    { src: "/images/tattoo20.jpeg", alt: "Tatuaje de espalda completa con retratos realistas" },
    { src: "/images/tattoo21.jpeg", alt: "Tatuaje de brújula con siluetas y paisaje en mano" },
    { src: "/images/tattoo22.jpeg", alt: "Tatuaje mitológico de guerreros griegos en antebrazo" },
    { src: "/images/tattoo23.jpeg", alt: "Tatuaje realista de águila majestuosa en brazo" },
    { src: "/images/tattoo24.jpeg", alt: "Tatuaje sleeve con rosa, ojo y elementos surrealistas" },
    { src: "/images/tattoo25.jpeg", alt: "Tatuaje religioso con ángel y sagrado corazón" },
    { src: "/images/tattoo26.jpeg", alt: "Tatuaje de Ozzy Osbourne en diseño geométrico" },
    { src: "/images/tattoo27.jpeg", alt: "Tatuaje sleeve completo con águila y tigre" },
    { src: "/images/tattoo28.jpeg", alt: "Tatuaje religioso de pecho con Jesucristo y Virgen María" },
    { src: "/images/tattoo29.jpeg", alt: "Tatuaje realista religioso de Jesucristo con corona de espinas en pecho" },
    { src: "/images/tattoo30.jpeg", alt: "Tatuaje realista de nativo americano anciano con tocado de plumas" },
    { src: "/images/tattoo31.jpeg", alt: "Tatuaje geométrico mandala con cubo de Metatrón en pierna" },
    { src: "/images/tattoo32.jpeg", alt: "Tatuaje sleeve de casino con cartas, dados y ruleta en brazo" },
    { src: "/images/tattoo33.jpeg", alt: "Tatuaje de dragón asiático tradicional a color en costado" },
    { src: "/images/tattoo34.jpeg", alt: "Tatuaje de flor peonía con mandala en black and gray" },
    { src: "/images/tattoo35.jpeg", alt: "Tatuaje realista de Buda con flores de loto en antebrazo" },
    { src: "/images/tattoo36.jpeg", alt: "Sleeve completo con mujer Anonymous y guerrero histórico en realismo" },
    {
      src: "/images/tattoo37.jpeg",
      alt: "Sleeve religioso con figuras barbadas y corona de espinas en black and gray",
    },
    { src: "/images/tattoo38.jpeg", alt: "Sleeve nativo americano con lobo y retrato de anciano con tocado" },
  ]

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
      <section
        id="full-galeria"
        className="relative py-8 md:py-24 px-4 p-6 md:p-8 bg-[url('/images/texture-dark.png')] bg-cover bg-center bg-fixed text-white"
      >
        <div className="container mx-auto max-w-7xl">
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
