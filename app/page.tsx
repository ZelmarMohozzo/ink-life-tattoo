"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Palette, Calendar } from "lucide-react"
import Gallery from "@/components/gallery"

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
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-100 to-white text-black overflow-x-hidden">
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
            left: "-40px",
            right: "-40px",
            width: "calc(100% + 80px)",
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

            {/* Texto vertical en la parte derecha */}
            <div className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 flex flex-col items-center justify-between h-96 md:h-[500px] z-20">
              <div className="transform -rotate-90 origin-center">
                <a
                  href="https://www.instagram.com/ink.life_tattoo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 text-lg md:text-xl font-medium tracking-[0.4em] hover:text-purple-400 transition-colors cursor-pointer font-mbf-royal"
                >
                  INSTAGRAM
                </a>
              </div>
              <div className="transform -rotate-90 origin-center">
                <a
                  href="https://api.whatsapp.com/send/?phone=59892153567&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 text-lg md:text-xl font-medium tracking-[0.4em] hover:text-green-400 transition-colors cursor-pointer font-mbf-royal"
                >
                  WHATSAPP
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-2 md:px-4 w-full h-screen">
          {/* Mobile Logo Background */}

          {/* Title Section - Left Side */}
          <div className="relative min-h-screen flex justify-center items-center w-full">
            <h2 className="text-5xl md:text-6xl font-bold tracking-widest font-mbf-royal text-[#3EB489] bg-gradient-to-r from-white via-green-400 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(62,180,137,0.9)] animate-pulse text-center">
              ACADEMIA DE TATUAJES
            </h2>
          </div>

          {/* Buttons Section - Bottom Center */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
            <div className="flex justify-center flex-col sm:flex-row gap-4">
              <button onClick={() => scrollToSection("cursos")}>
                <Button
                  size="lg"
                  className="bg-black/40 text-green-400 font-bold px-4 md:px-8 py-2 md:py-4 text-sm md:text-lg shadow-lg border-2 border-green-400 tracking-wide hover:bg-purple-300/30 transition-colors duration-300"
                >
                  VER CURSOS
                </Button>
              </button>
              <button onClick={() => scrollToSection("contacto")}>
                <Button
                  size="lg"
                  className="bg-black/40 border-2 border-purple-500 text-purple-300 px-4 md:px-8 py-2 md:py-4 text-sm md:text-lg tracking-wide hover:bg-purple-300/30 transition-colors duration-300"
                >
                  CONTACTAR AHORA
                </Button>
              </button>
            </div>
          </div>

          {/* Desktop Logo - Far Right Side */}
          <div className="absolute -right-8 lg:-right-16 xl:-right-24 top-1/2 transform -translate-y-1/2 z-10 hidden md:block"></div>
          {/* Tattoo Removal Section - Left Side - Minimalista */}
          <div className="absolute left-0 bottom-8 z-30 max-w-[200px] md:max-w-[250px]">
            
              <div className="text-center mb-3">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DIAGONAL-WEB-1-683x1024-fRI6U7FdEvOBkdOSZ7hnv1yznWInIp.png"
                  alt="Borrado de tatuajes"
                  className="w-30 md:w-30 mx-auto object-contain"
                />
              </div>
              <div className="text-center space-y-2">
                <p className="text-sm md:text-base text-white font-mbf-royal leading-tight">
                  ¿Te quieres borrar ese tatuaje?
                </p>
                <p className="text-xs md:text-sm text-purple-300 font-mbf-royal">Bórralo con nosotros</p>
              </div>
            
          </div>
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
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white">WhatsApp</h4>
                            <p className="text-sm text-gray-400">+598 92 153 567</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-300 mb-4">
                          ¡Contacta directamente con Nico Lemos a través de WhatsApp para agendar tu cita o resolver tus
                          dudas!
                        </p>
                        <a href="https://api.whatsapp.com/send/?phone=59892153567&text&type=phone_number&app_absent=0">
                          <Button className="w-full bg-gradient-to-r from-green-500 via-teal-500 to-lime-500 text-black hover:text-white font-bold px-6 py-3 text-base shadow-lg hover:shadow-xl transition-all duration-300">
                            ENVIAR WHATSAPP
                          </Button>
                        </a>
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
      <section
        id="cursos"
        className="relative py-8 md:py-24 px-4 bg-[url('/images/texture-cursos.png')] bg-cover bg-center bg-fixed text-white"
      >
        <div className="container mx-auto max-w-7xl">
          <h2
            className="text-3xl md:text-5xl font-bold mb-8 text-center font-serif tracking-wide drop-shadow-[0_0_15px_rgba(0,0,0,0.85)]"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            NUESTROS CURSOS
          </h2>
          <div className="w-32 h-px bg-green-400 mx-auto mb-6"></div>
          <p
            className="text-center text-gray-300 mb-12 md:mb-16 max-w-3xl mx-auto text-xl md:text-2xl"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            En Ink Life Tattoo Academy, ofrecemos una variedad de cursos diseñados para todos los niveles, desde
            principiantes hasta tatuadores experimentados que buscan perfeccionar sus habilidades.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Curso 1 */}
            <Card className="bg-black/60 backdrop-blur-sm border border-green-500/30 shadow-lg overflow-hidden rounded-lg">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="/images/curso1.jpeg"
                  alt="Curso de Iniciación al Tatuaje"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-white">Curso de Iniciación al Tatuaje</h3>
                <p className="text-gray-300 mb-4">
                  Aprende los fundamentos del tatuaje, desde la higiene y seguridad hasta las técnicas básicas de línea
                  y sombreado.
                </p>
                <Button
                  onClick={() => scrollToSection("contacto")}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-colors duration-300"
                >
                  Más Información
                </Button>
              </CardContent>
            </Card>

            {/* Curso 2 */}
            <Card className="bg-black/60 backdrop-blur-sm border border-purple-500/30 shadow-lg overflow-hidden rounded-lg">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="/images/curso2.jpeg"
                  alt="Técnicas Avanzadas de Sombreado y Color"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-white">Técnicas Avanzadas de Sombreado y Color</h3>
                <p className="text-gray-300 mb-4">
                  Domina las técnicas de sombreado realista y aplicación de color para crear tatuajes vibrantes y
                  detallados.
                </p>
                <Button
                  onClick={() => scrollToSection("contacto")}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-colors duration-300"
                >
                  Más Información
                </Button>
              </CardContent>
            </Card>

            {/* Curso 3 */}
            <Card className="bg-black/60 backdrop-blur-sm border border-yellow-500/30 shadow-lg overflow-hidden rounded-lg">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="/images/curso3.jpeg"
                  alt="Especialización en Estilos de Tatuaje"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-white">Especialización en Estilos de Tatuaje</h3>
                <p className="text-gray-300 mb-4">
                  Profundiza en estilos específicos como el japonés, tradicional americano, blackwork y más,
                  desarrollando tu propio estilo único.
                </p>
                <Button
                  onClick={() => scrollToSection("contacto")}
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-bold py-3 rounded-lg transition-colors duration-300"
                >
                  Más Información
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contacto"
        className="relative py-8 md:py-24 px-4 bg-[url('/images/texture-contact.png')] bg-cover bg-center bg-fixed text-white"
      >
        <div className="container mx-auto max-w-5xl">
          <h2
            className="text-3xl md:text-5xl font-bold mb-8 text-center font-serif tracking-wide drop-shadow-[0_0_15px_rgba(0,0,0,0.85)]"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            CONTACTO
          </h2>
          <div className="w-32 h-px bg-purple-400 mx-auto mb-6"></div>
          <p
            className="text-center text-gray-300 mb-12 md:mb-16 max-w-3xl mx-auto text-xl md:text-2xl"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            ¿Listo para dar el siguiente paso? Contáctanos para obtener más información sobre nuestros cursos, agendar
            una cita o resolver cualquier duda que tengas.
          </p>

          <Card className="bg-black/60 backdrop-blur-sm border border-purple-500/30 shadow-lg rounded-lg">
            <CardContent className="p-8">
              <form
                onSubmit={async (event) => {
                  event.preventDefault()
                  setIsSubmitting(true)
                  setSubmitMessage("")

                  const formData = new FormData(event.target as HTMLFormElement)

                  try {
                    const response = await fetch("/api/submit", {
                      method: "POST",
                      body: formData,
                    })

                    if (response.ok) {
                      setSubmitMessage("¡Mensaje enviado con éxito! Te contactaremos pronto.")
                      ;(event.target as HTMLFormElement).reset() // Reset form
                    } else {
                      setSubmitMessage("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.")
                    }
                  } catch (error) {
                    console.error("Error:", error)
                    setSubmitMessage("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.")
                  } finally {
                    setIsSubmitting(false)
                  }
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nombre */}
                  <div>
                    <label htmlFor="nombre" className="block text-lg font-medium text-gray-300 mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      className="shadow-sm bg-gray-700 border border-gray-600 text-white text-base rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="shadow-sm bg-gray-700 border border-gray-600 text-white text-base rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                      placeholder="Tu email"
                      required
                    />
                  </div>
                </div>

                {/* Teléfono */}
                <div className="mt-6">
                  <label htmlFor="telefono" className="block text-lg font-medium text-gray-300 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    className="shadow-sm bg-gray-700 border border-gray-600 text-white text-base rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="Tu teléfono"
                  />
                </div>

                {/* Mensaje */}
                <div className="mt-6">
                  <label htmlFor="mensaje" className="block text-lg font-medium text-gray-300 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    className="shadow-sm bg-gray-700 border border-gray-600 text-white text-base rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="Escribe tu mensaje aquí..."
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="mt-8">
                  <Button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-colors duration-300 disabled:bg-purple-400 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </div>

                {/* Submit Message */}
                {submitMessage && (
                  <div
                    className={`mt-4 p-4 rounded-md ${
                      submitMessage.startsWith("¡") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {submitMessage}
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Calendar Modal */}
      {isCalendarModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-black/80 border border-purple-500/30 rounded-lg shadow-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-white">Agendar Cita</h2>
              <button onClick={() => setIsCalendarModalOpen(false)} className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-gray-300 mb-4">
              Para agendar una cita, por favor contáctanos a través de WhatsApp o completa el formulario de contacto.
            </p>
            <div className="flex justify-around">
              <a
                href="https://api.whatsapp.com/send/?phone=59892153567&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
              >
                WhatsApp
              </a>
              <button
                onClick={() => {
                  setIsCalendarModalOpen(false)
                  scrollToSection("contacto")
                }}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
              >
                Formulario
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black/80 backdrop-blur-sm border-t border-purple-500/20 py-6 text-center text-gray-400">
        <div className="container mx-auto">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Ink Life Tattoo Academy. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
