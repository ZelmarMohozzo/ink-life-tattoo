"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, GraduationCap, Palette, Zap, Calendar, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    title: "Academia de Tatuajes INK LIFE",
    subtitle: "Aprende el Arte del Tatuaje",
    description: "Conviértete en un tatuador profesional con Nico Lemos. Más de 12 años de experiencia te esperan en nuestra academia. Cursos presenciales con máximo 2 alumnos por clase para una atención personalizada.",
    icon: GraduationCap,
    image: "/images/hero-background-new.jpg",
    features: [
      "Instructor con 12+ años de experiencia",
      "Clases presenciales personalizadas",
      "Máximo 2 alumnos por clase",
      "Certificación profesional"
    ],
    buttonText: "Ver Cursos",
    buttonAction: "courses"
  },
  {
    id: 2,
    title: "Realización de Tatuajes",
    subtitle: "Arte Profesional en tu Piel",
    description: "Creamos tatuajes únicos y personalizados con la más alta calidad artística. Especialistas en realismo, blackwork, mandalas y diseños a color. Tu visión se convierte en arte permanente.",
    icon: Palette,
    image: "/images/tattoo-background.webp",
    features: [
      "Diseños personalizados únicos",
      "Especialistas en múltiples estilos",
      "Equipos esterilizados y seguros",
      "Consulta previa gratuita"
    ],
    buttonText: "Ver Galería",
    buttonAction: "gallery"
  },
  {
    id: 3,
    title: "Borrado de Tatuajes con Láser",
    subtitle: "Tecnología Avanzada para Eliminar Tatuajes",
    description: "Contamos con máquina láser de última generación para el borrado seguro y efectivo de tatuajes. Proceso profesional con resultados garantizados y seguimiento personalizado.",
    icon: Zap,
    image: "/images/tattoo-process-bg.jpg",
    features: [
      "Máquina láser de última generación",
      "Proceso seguro y efectivo",
      "Seguimiento personalizado",
      "Resultados garantizados"
    ],
    buttonText: "Agendar Cita",
    buttonAction: "appointment",
    secondaryButton: {
      text: "Comprar Servicio",
      action: "buy",
      icon: ShoppingCart
    }
  }
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Cambia cada 5 segundos

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const handleButtonClick = (action: string) => {
    switch (action) {
      case "courses":
        document.getElementById("cursos")?.scrollIntoView({ behavior: "smooth" })
        break
      case "gallery":
        document.getElementById("galeria")?.scrollIntoView({ behavior: "smooth" })
        break
      case "appointment":
        document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
        break
      case "buy":
        // Aquí se puede implementar la lógica del carrito
        alert("Funcionalidad de carrito en desarrollo")
        break
    }
  }

  return (
    <div 
      className="relative h-screen overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentSlide ? "translate-x-0" : 
              index < currentSlide ? "-translate-x-full" : "translate-x-full"
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center text-white">
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-gradient-to-r from-purple-600 to-emerald-500 rounded-full">
                      <slide.icon className="w-12 h-12 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 font-mbf-royal">
                    <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                      {slide.title}
                    </span>
                  </h1>

                  {/* Subtitle */}
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-gray-200">
                    {slide.subtitle}
                  </h2>

                  {/* Description */}
                  <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    {slide.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                    {slide.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center md:justify-start space-x-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                        <span className="text-gray-200">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                      onClick={() => handleButtonClick(slide.buttonAction)}
                      className="bg-gradient-to-r from-purple-600 to-emerald-500 hover:from-purple-700 hover:to-emerald-600 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      {slide.buttonAction === "appointment" && <Calendar className="w-5 h-5 mr-2" />}
                      {slide.buttonText}
                    </Button>

                    {slide.secondaryButton && (
                      <Button
                        onClick={() => handleButtonClick(slide.secondaryButton.action)}
                        variant="outline"
                        className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                      >
                        <slide.secondaryButton.icon className="w-5 h-5 mr-2" />
                        {slide.secondaryButton.text}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/30 hover:bg-black/50 text-white rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/30 hover:bg-black/50 text-white rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Siguiente slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-amber-400 scale-125" 
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30 z-20">
        <div 
          className="h-full bg-gradient-to-r from-purple-600 to-emerald-500 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  )
}