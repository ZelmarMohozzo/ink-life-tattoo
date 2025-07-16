"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Palette, Clock, Calendar, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Gallery from "@/components/gallery"
import { submitConsultation, submitContactForm } from "./actions/contact"

export default function HomePage() {
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

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false)

  // Auto-slide functionality
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1))
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80 // 80px para compensar el navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false) // Cerrar menú móvil si está abierto
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-100 to-white text-black">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm sticky top-0 z-50 border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between font-normal leading-4 leading-5 leading-6 leading-9">
            {/* Left Navigation */}
            <div className=" hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="hover:text-purple-400 text-white hover:text-purple-400 transition-colors font-medium tracking-wide font-mbf-royal"
              >
                INICIO
              </button>
              <button
                onClick={() => scrollToSection("cursos")}
                className="hover:text-purple-400 text-white hover:text-purple-400 transition-colors font-medium tracking-wide font-mbf-royal"
              >
                CURSOS
              </button>
              <button
                onClick={() => scrollToSection("instructor")}
                className="hover:text-purple-400 text-white hover:text-purple-400 transition-colors font-medium tracking-wide font-mbf-royal"
              >
                {"ARTISTA\n"}
              </button>
            </div>

            {/* Center Logo */}

            <div className="absolute top-[45px] sm:top-[75px] md:top-[90px] lg:top-[75px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[60%] sm:max-w-[40%] md:max-w-[30%] lg:max-w-[25%] drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]">
              <img src={"/images/banner_inkedlife.png"} alt="logo" className="w-full object-contain" />
            </div>

            {/* <div className="flex items-center space-x-3">
            <div className="text-center">
             <a href="#inicio"><h1 className="text-5xl font-extrabold  text-green-400 drop-shadow-[0_0_6px_rgba(34,197,94,0.7)] tracking-wider text-shadow-green ">INK LIFE </h1></a>
              <a href="#inicio"><p className="text-xs text-purple-600 tracking-widest">TATTOO ACADEMY</p></a>
            </div>
          </div> */}

            {/* Right Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              <div className="relative group">
                <button className="hover:text-purple-400 text-white transition-colors font-medium tracking-wide font-mbf-royal flex items-center space-x-1">
                  <span>SERVICIOS</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-sm border border-purple-500/30 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-2">
                    <a
                      href="#servicios"
                      className="block px-4 py-2 text-white hover:text-purple-400 hover:bg-purple-500/20 transition-colors font-mbf-royal"
                    >
                      Tatuajes
                    </a>
                    <a
                      href="#servicios"
                      className="block px-4 py-2 text-white hover:text-purple-400 hover:bg-purple-500/20 transition-colors font-mbf-royal"
                    >
                      Piercings
                    </a>
                    <a
                      href="#servicios"
                      className="block px-4 py-2 text-white hover:text-purple-400 hover:bg-purple-500/20 transition-colors font-mbf-royal"
                    >
                      Borrado de Tatuaje
                    </a>
                  </div>
                </div>
              </div>
              <button
                onClick={() => scrollToSection("galeria")}
                className="block text-white hover:text-purple-400 transition-colors font-medium tracking-wide py-2 font-mbf-royal"
              >
                GALERÍA
              </button>

              <button
                onClick={() => scrollToSection("contacto")}
                className="block text-white hover:text-purple-400 transition-colors font-medium tracking-wide py-2 font-mbf-royal"
              >
                CONTACTO
              </button>

              {/* Icono de Calendario */}
              <button
                onClick={() => setIsCalendarModalOpen(true)}
                className="text-white hover:text-purple-400 transition-colors p-2 rounded-full hover:bg-white/10"
                title="Agendar Cita"
              >
                <Calendar className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden ml-auto">
              <button
                className="text-white hover:text-purple-400"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              {/* Backdrop */}
              <div
                className={`absolute inset-0 transition-all duration-300 ${
                  isMobileMenuOpen ? "bg-gray-900 opacity-100" : "bg-gray-900 opacity-0"
                }`}
              ></div>

              {/* Menu Content */}
              <div
                className={`relative z-10 flex flex-col items-center justify-center min-h-screen px-8 transition-all duration-500 ease-out ${
                  isMobileMenuOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
                }`}
                style={{
                  backgroundColor: "rgba(6,0,17,0.9)",
                }}
              >
                {/* Background overlay */}

                {/* Close Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute top-8 right-8 text-white hover:text-purple-400 transition-colors"
                  aria-label="Cerrar menú"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Logo */}
                <div className="mb-12">
                  <div className="flex items-center justify-center">
                    <img src="/images/banner_inkedlife.png" alt="INK LIFE TATTOO" className="h-25 object-contain" />
                  </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col items-center space-y-8">
                  <button
                    onClick={() => scrollToSection("inicio")}
                    className="text-white hover:text-purple-400 transition-colors text-xl font-medium tracking-wider font-mbf-royal"
                  >
                    HOME
                  </button>
                  <button
                    onClick={() => scrollToSection("cursos")}
                    className="text-white hover:text-purple-400 transition-colors text-xl font-medium tracking-wider font-mbf-royal"
                  >
                    CURSOS
                  </button>
                  <button
                    onClick={() => scrollToSection("instructor")}
                    className="text-white hover:text-purple-400 transition-colors text-xl font-medium tracking-wider font-mbf-royal"
                  >
                    INSTRUCTOR
                  </button>
                  <button
                    onClick={() => scrollToSection("servicios")}
                    className="text-white hover:text-purple-400 transition-colors text-xl font-medium tracking-wider font-mbf-royal"
                  >
                    SERVICIOS
                  </button>
                  <button
                    onClick={() => scrollToSection("galeria")}
                    className="text-white hover:text-purple-400 transition-colors text-xl font-medium tracking-wider font-mbf-royal"
                  >
                    GALERÍA
                  </button>
                  <button
                    onClick={() => scrollToSection("contacto")}
                    className="text-white hover:text-purple-400 transition-colors text-xl font-medium tracking-wider font-mbf-royal"
                  >
                    CONTACTO
                  </button>

                  {/* Icono de Calendario para móvil */}
                  <button
                    onClick={() => {
                      setIsCalendarModalOpen(true)
                      setIsMobileMenuOpen(false)
                    }}
                    className="text-white hover:text-purple-400 transition-colors text-xl font-medium tracking-wider font-mbf-royal flex items-center space-x-2"
                  >
                    <Calendar className="w-6 h-6" />
                    <span>AGENDAR CITA</span>
                  </button>
                </nav>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center -mt-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed bg-[url('/images/mobile-hero-bg.png')] md:bg-[url('/images/hero-background-new.jpg')]"
          style={{
            top: "-80px",
            height: "calc(100% + 80px)",
          }}
        >
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
              style={{
                backgroundImage: "url('/images/ink-life-logo-gold.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/80 to-black/80 md:bg-gradient-to-br md:from-purple-900/50 md:via-black/70 md:to-green-900/50"></div>

            {/* Carousel Slider */}
            <div className="absolute inset-0 z-10">
              <div className="relative h-full">
                {/* Carousel Container */}
                <div className="carousel-container h-full overflow-hidden">
                  <div
                    className="carousel-slides flex h-full transition-all duration-1000 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {/* Slide 1 - Academia de Tatuajes */}
                    <div className="carousel-slide min-w-full h-full relative">
                      <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                          backgroundImage: "url('/images/tattoo-process-bg.jpg')",
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
                      </div>
                      <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-2 items-center px-4 gap-8">
                        {/* Image Column */}
                        <div className="hidden md:flex items-center justify-center h-full">
                          <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-green-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                            <Card className="relative md:w-full md:max-w-md h-[500px] overflow-hidden rounded-lg shadow-2xl border-2 border-white/30 bg-black/80 backdrop-blur-sm transform transition-all duration-500 group-hover:scale-105">
                              <img
                                src="/images/student-tattooing-practice.jpeg"
                                alt="Student Tattooing Practice"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </Card>
                          </div>
                        </div>
                        {/* Content Column */}
                        <div className="text-center md:text-left text-white space-y-6">
                          <div className="space-y-4">
                            <div className="inline-block">
                              <span className="bg-gradient-to-r from-purple-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
                                {"FORMACIÓN PROFESIONAL CON NICO LIEMOS\n"} 
                              </span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold font-mbf-royal bg-gradient-to-r from-white via-purple-200 to-green-200 bg-clip-text text-transparent leading-tight">
                              ACADEMIA DE TATUAJES
                            </h2>
                            <p className="text-xl md:text-2xl text-gray-300">¿Quieres aprender a tatuar?</p>
                          </div>
                          <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                            <p className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-green-400 via-purple-400 to-yellow-400 bg-clip-text drop-shadow-lg mb-2 font-mbf-royal tracking-wide">
                              ¡Descubre tu potencial en Ink Life
                            </p>
                            <p className="text-xl md:text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-green-400 bg-clip-text drop-shadow-lg font-mbf-royal tracking-wide">
                              y comienza tu viaje hacia el Éxito!
                            </p>
                          </div>
                          <Button
                            onClick={() => scrollToSection("cursos")}
                            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-8 py-4 text-lg rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-green-500/50"
                          >
                            VER CURSOS
                            <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                              />
                            </svg>
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Slide 2 - Remoción de Tatuajes */}
                    <div className="carousel-slide min-w-full h-full relative">
                      <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                          backgroundImage: "url('/images/tattoo-background.webp')",
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-purple-900/60 to-transparent"></div>
                      </div>
                      <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-2 items-center px-4 gap-8">
                        {/* Content Column */}
                        <div className="text-center md:text-left text-white space-y-6 order-2 md:order-1">
                          <div className="space-y-4">
                            <div className="inline-block">
                              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
                                TECNOLOGÍA LÁSER
                              </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold font-mbf-royal bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                              REMOCIÓN DE TATUAJES CON LÁSER
                            </h2>
                            <p className="text-xl md:text-2xl text-gray-300">¿Te arrepientes de ese tatuaje?</p>
                            <p className="text-lg md:text-xl text-purple-300">Elimínalo ya en INK LIFE</p>
                          </div>
                          <Button
                            onClick={() => setIsPricingModalOpen(true)}
                            className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold px-8 py-4 text-lg rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50"
                          >
                            VER PRECIOS
                            <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Button>
                        </div>
                        {/* Image Column */}
                        <div className="hidden md:flex items-center justify-center h-full order-1 md:order-2">
                          <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                            <Card className="relative md:w-full md:max-w-md h-[500px] overflow-hidden rounded-lg shadow-2xl border-2 border-white/30 bg-black/80 backdrop-blur-sm transform transition-all duration-500 group-hover:scale-105">
                              <img
                                src="/images/laser-tattoo-removal-rose.png"
                                alt="Laser Tattoo Removal on Rose Tattoo"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </Card>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Slide 3 - Hacerse un Tatuaje */}
                    <div className="carousel-slide min-w-full h-full relative">
                      <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                          backgroundImage: "url('/images/ink-life-studio.png')",
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/60 to-black/80"></div>
                      </div>
                      <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-2 items-center px-4 gap-8">
                        {/* Image Column */}
                        <div className="hidden md:flex items-center justify-center h-full">
                          <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <Card className="relative md:w-full md:max-w-md h-[500px] overflow-hidden rounded-lg shadow-2xl border-2 border-white/30 bg-black/80 backdrop-blur-sm transform transition-all duration-500 group-hover:scale-105">
                              <img
                                src="/images/tattoo-artist-working-2.png"
                                alt="Tattoo Artist Working on Client"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </Card>
                          </div>
                        </div>
                        {/* Content Column */}
                        <div className="text-center md:text-left text-white space-y-6">
                          <div className="space-y-4">
                            <div className="inline-block">
                              <span className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
                                ARTE CORPORAL
                              </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold font-mbf-royal bg-gradient-to-r from-white via-blue-200 to-green-200 bg-clip-text text-transparent leading-tight">
                              ¿DESEAS HACERTE UN TATUAJE?
                            </h2>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Button
                              onClick={() => scrollToSection("instructor")}
                              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-8 py-4 text-lg rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50"
                            >
                              VER MÁS
                              <svg
                                className="w-5 h-5 ml-2 inline"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                              </svg>
                            </Button>
                            <Button
                              onClick={() => scrollToSection("galeria")}
                              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-8 py-4 text-lg rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-green-500/50"
                            >
                              NUESTROS TRABAJOS
                              <svg
                                className="w-5 h-5 ml-2 inline"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                              </svg>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Carousel Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="flex items-center space-x-4 bg-black/40 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
                    {[0, 1, 2].map((index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                          currentSlide === index
                            ? "bg-white scale-125 shadow-lg shadow-white/50"
                            : "bg-white/50 hover:bg-white/75 hover:scale-110"
                        }`}
                      >
                        {currentSlide === index && (
                          <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-75"></div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Enhanced Carousel Arrows */}
                <button
                  onClick={() => setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1)}
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 group"
                >
                  <div className="bg-black/40 backdrop-blur-md rounded-full p-4 border border-white/20 transition-all duration-300 group-hover:bg-black/60 group-hover:scale-110 group-hover:border-white/40">
                    <svg
                      className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </div>
                </button>
                <button
                  onClick={() => setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1)}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 group"
                >
                  <div className="bg-black/40 backdrop-blur-md rounded-full p-4 border border-white/20 transition-all duration-300 group-hover:bg-black/60 group-hover:scale-110 group-hover:border-white/40">
                    <svg
                      className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 z-20">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-green-500 transition-all duration-1000 ease-in-out"
                    style={{ width: `${((currentSlide + 1) / 3) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-4 max-w-7xl mx-auto h-screen">
          {/* Mobile Logo Background */}

          {/* Title Section - Left Side */}

          {/* Buttons Section - Bottom Center */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20"></div>

          {/* Desktop Logo - Far Right Side */}
          <div className="absolute -right-8 lg:-right-16 xl:-right-24 top-1/2 transform -translate-y-1/2 z-10 hidden md:block"></div>
        </div>
      </section>

      {/* Galería Section */}
      <section
        id="galeria"
        className="relative py-8 md:py-24 px-4 p-6 md:p-8 bg-[url('/images/texture-dark.png')] bg-cover bg-center bg-fixed text-white"
      >
        <div className="container mx-auto max-w-7xl">
          <h1
            className="text-4xl md:text-4xl lg:text-6xl font-bold mb-8 text-center font-serif tracking-widest 
             text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.85)]"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            GALERÍA DE TRABAJOS
          </h1>
          <div className="w-32 h-px bg-purple-400 mx-auto mb-6"></div>
          <p
            className="text-center text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto text-xl md:text-2xl"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            Explora algunos de los trabajos más destacados realizados por <br /> Nico Lemos. Cada tatuaje cuenta una
            historia única y refleja la maestría técnica y artística de nuestro instructor.
          </p>

          <Gallery images={galleryImages} />
        </div>
      </section>

      {/* Instructor Section */}
      <section id="instructor" className="relative py-8 md:py-24 px-4 min-h-screen flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/ink-life-studio.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 w-full">
          <div className="container mx-auto max-w-6xl">
            <h2
              className="text-xl md:text-4xl font-bold mb-4 text-white font-serif tracking-wide text-center"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              CONOCE A TU INSTRUCTOR
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Left Column - Instructor Card */}
              <div className="flex justify-center lg:justify-end">
                <Card className="border border-white/10 shadow-lg overflow-hidden rounded-lg max-w-md w-full bg-black/60 backdrop-blur-sm text-white">
                  <div className="aspect-[3/4] w-full overflow-hidden bg-black">
                    <img
                      src="/images/nico-lemos-photo.jpeg"
                      alt="Nico Lemos - Tatuador Profesional"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>

                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-3xl font-semibold mb-2 text-white">Nico Lemos</h3>
                    <p className="text-sm text-white/70 uppercase tracking-wider mb-6">Tatuador Profesional</p>

                    <div className="space-y-6 text-white/90">
                      <p className="text-base md:text-lg">
                        Tatuador profesional con más de <strong className="text-white">12 años de experiencia</strong>{" "}
                        en el arte del tatuaje y artista plástico reconocido. Ha trabajado en el exterior perfeccionando
                        sus técnicas y estilos.
                      </p>

                      <div className="grid grid-cols-2 gap-y-3 gap-x-6 border-t border-b border-white/10 py-4">
                        <div className="flex items-center space-x-2">
                          <Palette className="w-4 h-4 text-white" />
                          <span className="text-sm">Blackwork</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Palette className="w-4 h-4 text-white" />
                          <span className="text-sm">Black & Gray</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Palette className="w-4 h-4 text-white" />
                          <span className="text-sm">Realismo</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Palette className="w-4 h-4 text-white" />
                          <span className="text-sm">Color</span>
                        </div>
                      </div>

                      <p className="text-sm">
                        Vive en <strong className="text-white">Maldonado, Uruguay</strong>, donde combina su estudio de
                        tatuajes con una academia donde forma a los próximos tatuadores profesionales.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Instagram and WhatsApp Content */}
              <div className="flex justify-center lg:justify-start">
                <div className="max-w-md w-full space-y-8">
                  {/* Instagram Card */}
                  <Card className="border border-purple-400/20 shadow-md overflow-hidden rounded-lg bg-black/80 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="text-center mb-6">
                        <div className="flex items-center justify-center space-x-3 mb-4">
                          <div className="w-12 h-12 rounded-full overflow-hidden">
                            <img
                              src="/images/nico-lemos-photo.jpeg"
                              alt="Nico Lemos"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white">Instagram</h4>
                            <p className="text-sm text-gray-400">@nicolemos.tattoo</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-300 mb-4">
                          Nicolas Lemos <br />
                          Artista <br />
                          INK LIFE TATTOO <br />
                          Estudio de tattoo y piercing <br />
                          ✒️ Desde 2013 <br />
                          📍🇺🇾Punta del Este, Uruguay <br />
                          Agenda por mp, wpp ↓
                        </p>
                        <a href="https://www.instagram.com/ink.life_tattoo/">
                          <Button className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-black hover:text-white font-bold px-6 py-3 text-base shadow-lg hover:shadow-xl transition-all duration-300">
                            VISITAR INSTAGRAM
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  {/* WhatsApp Card */}
                  <Card className="border border-green-400/20 shadow-md overflow-hidden rounded-lg bg-black/80 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="text-center mb-6">
                        <div className="flex items-center justify-center space-x-3 mb-4">
                          <div className="w-12 h-12 rounded-full overflow-hidden bg-green-500 flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white">WhatsApp</h4>
                            <p className="text-sm text-gray-400">Contacto directo</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-300 mb-4">
                          ¿Tienes preguntas sobre nuestros cursos? <br />
                          ¡Contáctanos directamente por WhatsApp! <br />
                          Respuesta rápida y personalizada <br />📱 +598 92 153 567
                        </p>
                        <a
                          href="https://api.whatsapp.com/send/?phone=59892153567&text&type=phone_number&app_absent=0"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 text-base shadow-lg hover:shadow-xl transition-all duration-300">
                            CONTACTAR POR WHATSAPP
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Agenda Card */}
                  <Card className="border border-blue-400/20 shadow-md overflow-hidden rounded-lg bg-black/80 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="text-center mb-6">
                        <div className="flex items-center justify-center space-x-3 mb-4">
                          <div className="w-12 h-12 rounded-full overflow-hidden bg-blue-500 flex items-center justify-center">
                            <Calendar className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white">Agendar Cita</h4>
                            <p className="text-sm text-gray-400">Reserva tu consulta</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-300 mb-4">
                          ¿Quieres conocer más sobre nuestros cursos? <br />
                          ¡Agenda una consulta personalizada! <br />
                          Evaluamos tu nivel y te recomendamos el mejor curso <br />📅 Consultas gratuitas disponibles
                        </p>
                        <Button
                          onClick={() => setIsCalendarModalOpen(true)}
                          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 text-base shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          AGENDAR CONSULTA
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos Section */}
      <section id="cursos" className="relative py-8 md:py-24 px-4 text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/tattoo-process-bg.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        <div className="relative z-10 container mx-auto max-w-6xl">
          <h2 className="text-xl md:text-4xl font-bold mb-4 text-center text-white font-serif tracking-wide">
            NUESTROS CURSOS
          </h2>
          <div className="w-32 h-px bg-white mx-auto mb-6 md:mb-12"></div>

          <p className="text-gray-400 mb-8 max-w-3xl mx-auto text-center">
            <span className="block mb-4">
              Todos nuestros cursos son <strong className="text-white">exclusivamente presenciales</strong> con un
              máximo de <strong className="text-white">2 alumnos por clase</strong> para garantizar una atención
              personalizada y de calidad.
            </span>
            <span className="block">
              Incluyen materiales, certificado de finalización y seguimiento personalizado por parte del instructor.
            </span>
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-8 mb-8 md:mb-0">
            {/* Curso Completo */}
            <div className="group cursor-pointer hover:z-20 relative">
              <div className="relative h-[420px] md:h-[550px] [perspective:1000px]">
                <div className="absolute inset-0 w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Frente de la tarjeta */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 border border-blue-600 rounded-lg p-4 md:p-8 flex flex-col shadow-lg shadow-blue-900/50">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-white">Curso Completo</h3>
                      <Badge className="text-black bg-emerald-300 text-base">Intermedio</Badge>
                    </div>

                    <div className="flex items-center space-x-2 mb-4">
                      <Calendar className="w-7 h-7 text-gray-400" />
                      <span className="text-lg md:text-xl text-gray-300">2 meses de duración</span>
                    </div>

                    <div className="flex items-center space-x-2 mb-4">
                      <Clock className="w-7 h-7 text-gray-400" />
                      <span className="text-lg md:text-xl text-gray-300">2 horas por clase</span>
                    </div>

                    <div className="flex items-center space-x-2 mb-8">
                      <Calendar className="w-7 h-7 text-gray-400" />
                      <span className="text-lg md:text-xl text-gray-300">2 veces por semana</span>
                    </div>

                    <div className="mt-auto text-center">
                      <span className="text-lg md:text-xl text-gray-400 block mb-2">Haz hover para más detalles</span>
                      <div className="w-16 h-16 mx-auto rounded-full bg-white/10 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Reverso de la tarjeta */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-black via-gray-900 to-blue-900/20 text-white rounded-lg p-4 md:p-8 flex flex-col border border-blue-600/30">
                    <h3 className="text-lg md:text-2xl font-bold mb-4 border-b border-gray-600 pb-4 text-white">
                      Contenido del Curso
                    </h3>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Temas a dar:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                          <span>Bioseguridad</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                          <span>Estilos de tatuajes</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                          <span>Máquinas</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                          <span>Materiales</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                          <span>Línea sólida</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                          <span>Relleno sólido</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                          <span>Color sólido</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                          <span>Sombras</span>
                        </li>
                      </ul>
                    </div>

                    <Button className="mt-auto w-full bg-purple-500 hover:bg-purple-600 text-black font-bold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg shadow-lg border-2 border-purple-400 tracking-wide">
                      Inscribirme
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Curso Inicial */}
            <div className="group cursor-pointer hover:z-20 relative">
              <div className="relative h-[420px] md:h-[550px] [perspective:1000px]">
                <div className="absolute inset-0 w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Frente de la tarjeta */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-gradient-to-br from-green-900 via-green-800 to-emerald-600 border border-green-500 rounded-lg p-4 md:p-8 flex flex-col shadow-lg shadow-green-900/50">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-white">Curso Inicial</h3>
                      <Badge className="text-black bg-orange-300 text-base">Básico</Badge>
                    </div>

                    <div className="flex items-center space-x-2 mb-4">
                      <Calendar className="w-7 h-7 text-gray-400" />
                      <span className="text-lg md:text-xl text-gray-300">1 mes de duración</span>
                    </div>

                    <div className="flex items-center space-x-2 mb-4">
                      <Clock className="w-7 h-7 text-gray-400" />
                      <span className="text-lg md:text-xl text-gray-300">2 horas por clase</span>
                    </div>

                    <div className="flex items-center space-x-2 mb-8">
                      <Calendar className="w-7 h-7 text-gray-400" />
                      <span className="text-lg md:text-xl text-gray-300">2 veces por semana</span>
                    </div>

                    <div className="mt-auto text-center">
                      <span className="text-lg md:text-xl text-gray-400 block mb-2">Haz hover para más detalles</span>
                      <div className="w-16 h-16 mx-auto rounded-full bg-white/10 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Reverso de la tarjeta */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-black via-gray-900 to-green-900/20 text-white rounded-lg p-4 md:p-8 flex flex-col border border-green-600/30">
                    <h3 className="text-lg md:text-2xl font-bold mb-4 border-b border-gray-600 pb-4 text-white">
                      Contenido del Curso
                    </h3>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Temas a dar:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                          <span>Bioseguridad</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                          <span>Estilos de tatuajes</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                          <span>Máquinas</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                          <span>Materiales</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                          <span>Línea sólida</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                          <span>Relleno sólido</span>
                        </li>
                      </ul>
                    </div>

                    <Button className="mt-auto w-full bg-purple-500 hover:bg-purple-600 text-black font-bold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg shadow-lg border-2 border-purple-400 tracking-wide">
                      Inscribirme
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Curso Full */}
            <div className="group cursor-pointer hover:z-20 relative">
              <div className="relative h-[420px] md:h-[550px] [perspective:1000px]">
                <div className="absolute inset-0 w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Frente de la tarjeta */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-gradient-to-br from-purple-900 via-violet-800 to-purple-950 border border-purple-600 rounded-lg p-4 md:p-6 flex flex-col shadow-lg shadow-purple-900/50">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-white">Curso Full</h3>
                      <Badge className="text-black bg-purple-300 text-base">Completo</Badge>
                    </div>

                    <div className="flex items-center space-x-2 mb-4">
                      <Calendar className="w-7 h-7 text-gray-400" />
                      <span className="text-lg md:text-xl text-gray-300">3 meses de duración</span>
                    </div>

                    <div className="flex items-center space-x-2 mb-4">
                      <Clock className="w-7 h-7 text-gray-400" />
                      <span className="text-lg md:text-xl text-gray-300">2 horas por clase</span>
                    </div>

                    <div className="flex items-center space-x-2 mb-8">
                      <Calendar className="w-7 h-7 text-gray-400" />
                      <span className="text-lg md:text-xl text-gray-300">2 veces por semana</span>
                    </div>

                    <div className="bg-purple-400/20 border border-purple-400/40 p-2 rounded-lg mb-4">
                      <p className="text-lg font-semibold text-purple-400 flex items-center">
                        <span className="mr-1">✨</span> Posibilidad laboral en el estudio de tatuaje
                      </p>
                    </div>

                    <div className="mt-auto text-center">
                      <span className="text-lg md:text-xl text-gray-400 block mb-2">Haz hover para más detalles</span>
                      <div className="w-16 h-16 mx-auto rounded-full bg-white/10 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Reverso de la tarjeta */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-black via-gray-900 to-purple-900/20 text-white rounded-lg p-4 md:p-8 flex flex-col border border-purple-600/30">
                    <h3 className="text-lg md:text-2xl font-bold mb-4 border-b border-gray-600 pb-4 text-white">
                      Contenido del Curso
                    </h3>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Tema a dar:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                          <span>Bioseguridad</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                          <span>Estilos de tatuajes</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                          <span>Máquinas</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                          <span>Materiales</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                          <span>Línea sólida</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                          <span>Relleno solido</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                          <span>Color sólido</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                          <span>Sombras</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                          <span>Texturas</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                          <span>Técnica realismo color y sombra</span>
                        </li>
                      </ul>
                    </div>

                    <Button className="mt-auto w-full bg-purple-500 hover:bg-purple-600 text-black font-bold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg shadow-lg border-2 border-purple-400 tracking-wide">
                      Inscribirme
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 md:mt-16 text-center relative z-10">
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Todos nuestros cursos incluyen materiales, certificado de finalización y seguimiento personalizado por
              parte del instructor.
            </p>
            <Button className="bg-white text-black hover:bg-green-400 hover:text-black font-bold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-400/20 border-2 border-transparent hover:border-green-400">
              SOLICITAR INFORMACIÓN
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contacto"
        className="relative py-8 md:py-24 px-4 p-6 md:p-8 bg-gradient-to-br from-black via-purple-800 to-green-500 text-white"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/contact-us-bg.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 container mx-auto max-w-6xl">
          <h2 className="text-xl md:text-4xl font-bold mb-4 text-center text-white font-serif tracking-wide">
            CONTACTO
          </h2>
          <div className="w-32 h-px bg-white mx-auto mb-6 md:mb-12"></div>

          <p className="text-center text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-lg">
            ¿Tienes alguna pregunta o deseas inscribirte en nuestros cursos? ¡Contáctanos hoy mismo y comienza tu camino
            hacia el éxito en el mundo del tatuaje!
          </p>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto bg-black/60 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-purple-400/20">
            <form action={submitContactForm} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Nombre
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-700 rounded-md bg-gray-800 text-white"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-700 rounded-md bg-gray-800 text-white"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Mensaje
                </label>
                <div className="mt-1">
                  <textarea
                    rows={4}
                    id="message"
                    name="message"
                    className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-700 rounded-md bg-gray-800 text-white"
                    placeholder="Escribe tu mensaje aquí..."
                    required
                  />
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Enviar Mensaje
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Modal de Formulario de Cita */}
      {isCalendarModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setIsCalendarModalOpen(false)}
        >
          <div
            className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-black p-8 rounded-lg shadow-2xl max-w-md w-full mx-4 border border-purple-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de cerrar */}
            <button
              onClick={() => setIsCalendarModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-purple-400 transition-colors"
              aria-label="Cerrar formulario"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Contenido del modal */}
            <div className="text-center mb-6">
              <Calendar className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Agendar Consulta</h3>
              <p className="text-gray-300 text-sm">Completa el formulario y nos pondremos en contacto contigo</p>
            </div>

            {/* Formulario */}
            <form
              action={async (formData) => {
                setIsSubmitting(true)
                setSubmitMessage("")

                const result = await submitConsultation(formData)

                setIsSubmitting(false)
                setSubmitMessage(result.message)

                if (result.success) {
                  // Cerrar modal después de 2 segundos si fue exitoso
                  setTimeout(() => {
                    setIsCalendarModalOpen(false)
                    setSubmitMessage("")
                  }, 2000)
                }
              }}
              className="space-y-4"
            >
              <div>
                <label htmlFor="modal-name" className="block text-sm font-medium text-gray-300 mb-1">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="modal-name"
                  name="name"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Tu nombre"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="modal-email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="tu@email.com"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="modal-phone" className="block text-sm font-medium text-gray-300 mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="modal-phone"
                  name="phone"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="+598 XX XXX XXX"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="modal-course" className="block text-sm font-medium text-gray-300 mb-1">
                  Curso de interés
                </label>
                <select
                  id="modal-course"
                  name="course"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                  disabled={isSubmitting}
                >
                  <option value="">Selecciona un curso</option>
                  <option value="inicial">Curso Inicial (1 mes)</option>
                  <option value="completo">Curso Completo (2 meses)</option>
                  <option value="full">Curso Full (3 meses)</option>
                </select>
              </div>

              <div>
                <label htmlFor="modal-date" className="block text-sm font-medium text-gray-300 mb-1">
                  Fecha preferida
                </label>
                <input
                  type="date"
                  id="modal-date"
                  name="date"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="modal-time" className="block text-sm font-medium text-gray-300 mb-1">
                  Hora preferida
                </label>
                <select
                  id="modal-time"
                  name="time"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                  disabled={isSubmitting}
                >
                  <option value="">Selecciona una hora</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                  <option value="17:00">05:00 PM</option>
                </select>
              </div>

              <div>
                <label htmlFor="modal-message" className="block text-sm font-medium text-gray-300 mb-1">
                  Mensaje adicional (opcional)
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  rows={3}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Cuéntanos sobre tu experiencia o expectativas..."
                  disabled={isSubmitting}
                />
              </div>

              {/* Mensaje de estado */}
              {submitMessage && (
                <div
                  className={`p-3 rounded-md text-sm ${
                    submitMessage.includes("exitosamente")
                      ? "bg-green-900/50 text-green-300 border border-green-500/50"
                      : "bg-red-900/50 text-red-300 border border-red-500/50"
                  }`}
                >
                  {submitMessage}
                </div>
              )}

              <div className="flex space-x-3 pt-4">
                <Button
                  type="button"
                  onClick={() => setIsCalendarModalOpen(false)}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                  disabled={isSubmitting}
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal de Precios de Remoción */}
      {isPricingModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setIsPricingModalOpen(false)}
        >
          <div
            className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-black p-8 rounded-lg shadow-2xl max-w-md w-full mx-4 border border-purple-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de cerrar */}
            <button
              onClick={() => setIsPricingModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-purple-400 transition-colors"
              aria-label="Cerrar precios"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Contenido del modal */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Precios de Remoción</h3>
              <p className="text-gray-300 text-sm">Remoción de tatuajes con láser</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                <h4 className="text-white font-semibold mb-2">Tatuajes Pequeños</h4>
                <p className="text-purple-400 text-lg font-bold">Desde $2000 la sesión</p>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                <h4 className="text-white font-semibold mb-2">Tatuajes Medianos</h4>
                <p className="text-purple-400 text-lg font-bold">Desde $3500 la sesión</p>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                <h4 className="text-white font-semibold mb-2">Tatuajes Grandes</h4>
                <p className="text-purple-400 text-lg font-bold">Desde $5000 la sesión</p>
              </div>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-500/50 p-3 rounded-md mb-6">
              <p className="text-yellow-300 text-sm text-center">
                <strong>Importante:</strong> Precios estimativos de referencia
              </p>
            </div>

            <div className="flex space-x-3">
              <Button
                onClick={() => scrollToSection("contacto")}
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Solicitar Presupuesto
              </Button>
              <Button
                onClick={() => {
                  setIsPricingModalOpen(false)
                  scrollToSection("instructor")
                }}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Ver Más Información
              </Button>
            </div>
          </div>
        </div>
      )}

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
