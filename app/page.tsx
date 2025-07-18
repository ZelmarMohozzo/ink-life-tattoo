"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar, MapPin, Phone, Mail, Instagram, Clock, Star, Users, Award, CheckCircle } from "lucide-react"
import Gallery from "@/components/gallery"
import CartIcon from "@/components/cart-icon"
import { submitConsultation, submitContactForm } from "@/app/actions/contact"
import Link from "next/link"

// Generate image paths for the gallery
const galleryImages = Array.from({ length: 12 }, (_, i) => ({
  src: `/images/tattoo${i + 1}.jpeg`,
  alt: `Tatuaje ${i + 1}`,
}))

export default function HomePage() {
  const [consultationResult, setConsultationResult] = useState<{ success: boolean; message: string } | null>(null)
  const [contactResult, setContactResult] = useState<{ success: boolean; message: string } | null>(null)
  const [isSubmittingConsultation, setIsSubmittingConsultation] = useState(false)
  const [isSubmittingContact, setIsSubmittingContact] = useState(false)

  const handleConsultationSubmit = async (formData: FormData) => {
    setIsSubmittingConsultation(true)
    try {
      const result = await submitConsultation(formData)
      setConsultationResult(result)
    } catch (error) {
      setConsultationResult({
        success: false,
        message: "Error al enviar la consulta. Por favor intenta nuevamente.",
      })
    } finally {
      setIsSubmittingConsultation(false)
    }
  }

  const handleContactSubmit = async (formData: FormData) => {
    setIsSubmittingContact(true)
    try {
      const result = await submitContactForm(formData)
      setContactResult(result)
    } catch (error) {
      setContactResult({
        success: false,
        message: "Error al enviar el mensaje. Por favor intenta nuevamente.",
      })
    } finally {
      setIsSubmittingContact(false)
    }
  }

  // Clear messages after 5 seconds
  useEffect(() => {
    if (consultationResult) {
      const timer = setTimeout(() => setConsultationResult(null), 5000)
      return () => clearTimeout(timer)
    }
  }, [consultationResult])

  useEffect(() => {
    if (contactResult) {
      const timer = setTimeout(() => setContactResult(null), 5000)
      return () => clearTimeout(timer)
    }
  }, [contactResult])

  return (
    <div className="absolute inset-0 bg-transparent">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm sticky top-0 z-50 border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/images/ink-life-logo-gold.png" alt="INK LIFE TATTOO" className="h-12 object-contain" />
              <div className="hidden md:block">
                <h1 className="text-white font-mbf-royal text-xl font-bold">INK LIFE TATTOO ACADEMY</h1>
                <p className="text-purple-300 text-sm">Escuela de Tatuajes</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#inicio" className="text-white hover:text-purple-400 transition-colors font-mbf-royal">
                INICIO
              </a>
              <a href="#cursos" className="text-white hover:text-purple-400 transition-colors font-mbf-royal">
                CURSOS
              </a>
              <a href="#galeria" className="text-white hover:text-purple-400 transition-colors font-mbf-royal">
                GALERÍA
              </a>
              <a href="#servicios" className="text-white hover:text-purple-400 transition-colors font-mbf-royal">
                SERVICIOS
              </a>
              <a href="#contacto" className="text-white hover:text-purple-400 transition-colors font-mbf-royal">
                CONTACTO
              </a>
              <Link href="/tienda">
                <Button className="bg-purple-500 hover:bg-purple-600 text-white font-bold">TIENDA</Button>
              </Link>
              <CartIcon />
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/images/hero-background-new.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1
            className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 font-serif tracking-widest 
             text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.85)]"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            INK LIFE TATTOO ACADEMY
          </h1>
          <div className="w-32 h-px bg-purple-400 mx-auto mb-6"></div>
          <p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            Conviértete en un tatuador profesional con Nico Lemos. Cursos presenciales en Punta del Este, Uruguay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#cursos">
              <Button className="bg-purple-500 hover:bg-purple-600 text-white font-bold px-8 py-4 text-lg rounded-full shadow-lg transform transition-all duration-300 hover:scale-105">
                VER CURSOS
              </Button>
            </a>
            <a href="#contacto">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black font-bold px-8 py-4 text-lg rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
              >
                CONTACTAR
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mbf-royal">Sobre Nico Lemos</h2>
              <p className="text-lg mb-6 leading-relaxed">
                Con más de 10 años de experiencia en el mundo del tatuaje, Nico Lemos es un artista reconocido
                especializado en Blackwork, Realismo, Neotradicional y Dotwork.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                Su pasión por enseñar lo llevó a crear INK LIFE TATTOO ACADEMY, donde comparte sus conocimientos y
                técnicas con nuevas generaciones de tatuadores.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">10+</div>
                  <div className="text-sm">Años de Experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">500+</div>
                  <div className="text-sm">Tatuajes Realizados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">100+</div>
                  <div className="text-sm">Estudiantes Formados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">4</div>
                  <div className="text-sm">Estilos Dominados</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/nico-lemos-photo.jpeg"
                alt="Nico Lemos"
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-purple-500 text-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-bold">Instructor Certificado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section
        id="cursos"
        className="py-16 bg-[url('/images/course-info.jpg')] bg-cover bg-center bg-fixed relative"
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-mbf-royal">Nuestros Cursos</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Formación profesional presencial con atención personalizada
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Curso Inicial */}
            <Card className="bg-gray-900/90 border-purple-500/20 text-white transform transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl text-purple-400">Curso Inicial</CardTitle>
                  <Badge variant="secondary" className="bg-purple-500 text-white">
                    Básico
                  </Badge>
                </div>
                <p className="text-gray-300">Perfecto para comenzar en el mundo del tatuaje</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-purple-400">$800</span>
                    <span className="text-gray-400"> USD</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-purple-400" />
                      <span className="text-sm">Duración: 1 mes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-purple-400" />
                      <span className="text-sm">Grupos reducidos</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-purple-400">Incluye:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Bioseguridad</li>
                      <li>• Estilos de tatuajes</li>
                      <li>• Máquinas y materiales</li>
                      <li>• Línea sólida</li>
                      <li>• Relleno sólido</li>
                    </ul>
                  </div>
                  <Link href="/cursos">
                    <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">Ver Detalles</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Curso Completo */}
            <Card className="bg-gray-900/90 border-purple-500/20 text-white transform transition-all duration-300 hover:scale-105 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-500 text-white">Más Popular</Badge>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl text-purple-400">Curso Completo</CardTitle>
                  <Badge variant="secondary" className="bg-purple-500 text-white">
                    Intermedio
                  </Badge>
                </div>
                <p className="text-gray-300">Formación integral con técnicas avanzadas</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-purple-400">$1,400</span>
                    <span className="text-gray-400"> USD</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-purple-400" />
                      <span className="text-sm">Duración: 2 meses</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-purple-400" />
                      <span className="text-sm">Grupos reducidos</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-purple-400">Incluye:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Todo del curso inicial</li>
                      <li>• Color sólido</li>
                      <li>• Técnicas de sombras</li>
                      <li>• Práctica intensiva</li>
                    </ul>
                  </div>
                  <Link href="/cursos">
                    <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">Ver Detalles</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Curso Full */}
            <Card className="bg-gray-900/90 border-purple-500/20 text-white transform transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl text-purple-400">Curso Full</CardTitle>
                  <Badge variant="secondary" className="bg-purple-500 text-white">
                    Completo
                  </Badge>
                </div>
                <p className="text-gray-300">Formación completa con oportunidad laboral</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-purple-400">$2,200</span>
                    <span className="text-gray-400"> USD</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-purple-400" />
                      <span className="text-sm">Duración: 3 meses</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-purple-400" />
                      <span className="text-sm">Posibilidad laboral</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-purple-400">Incluye:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Todo lo anterior</li>
                      <li>• Realismo avanzado</li>
                      <li>• Texturas complejas</li>
                      <li>• Oportunidad en el estudio</li>
                    </ul>
                  </div>
                  <Link href="/cursos">
                    <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">Ver Detalles</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/cursos">
              <Button className="bg-purple-500 hover:bg-purple-600 text-white font-bold px-8 py-4 text-lg rounded-full shadow-lg transform transition-all duration-300 hover:scale-105">
                VER TODOS LOS CURSOS
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="galeria"
        className="relative py-16 bg-[url('/images/texture-dark.png')] bg-cover bg-center bg-fixed text-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 font-serif tracking-widest 
             text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.85)]"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              GALERÍA DE TRABAJOS
            </h2>
            <div className="w-32 h-px bg-purple-400 mx-auto mb-6"></div>
            <p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              Explora algunos de nuestros trabajos más destacados
            </p>
          </div>

          <Gallery images={galleryImages} />

          <div className="text-center mt-12">
            <Link href="/gallery">
              <Button className="bg-purple-500 hover:bg-purple-600 text-white font-bold px-8 py-4 text-lg rounded-full shadow-lg transform transition-all duration-300 hover:scale-105">
                VER GALERÍA COMPLETA
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-16 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mbf-royal">Nuestros Servicios</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ofrecemos servicios profesionales de tatuaje y remoción láser
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Tatuajes */}
            <Card className="bg-gray-900/90 border-purple-500/20 text-white">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-400 flex items-center">
                  <Award className="w-6 h-6 mr-2" />
                  Tatuajes Profesionales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Realizamos tatuajes de alta calidad en todos los estilos, con atención personalizada y las mejores
                    medidas de bioseguridad.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-purple-400 mb-2">Estilos:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Blackwork</li>
                        <li>• Realismo</li>
                        <li>• Neotradicional</li>
                        <li>• Dotwork</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-400 mb-2">Precios:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Pequeño: $75 USD</li>
                        <li>• Mediano: $185 USD</li>
                        <li>• Grande: $350 USD</li>
                      </ul>
                    </div>
                  </div>
                  <Link href="/tienda">
                    <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">Reservar Cita</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Remoción Láser */}
            <Card className="bg-gray-900/90 border-purple-500/20 text-white">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-400 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  Remoción con Láser
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Servicio profesional de remoción de tatuajes con tecnología láser de última generación. Proceso
                    seguro y efectivo.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-purple-400 mb-2">Características:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Tecnología avanzada</li>
                        <li>• Proceso seguro</li>
                        <li>• Resultados efectivos</li>
                        <li>• Atención profesional</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-400 mb-2">Precios:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Pequeño: $115 USD</li>
                        <li>• Mediano: $200 USD</li>
                        <li>• Grande: $300 USD</li>
                      </ul>
                    </div>
                  </div>
                  <Link href="/tienda">
                    <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">Consultar</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mbf-royal">Preguntas Frecuentes</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Resolvemos las dudas más comunes sobre nuestros cursos y servicios
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-gray-800 border-purple-500/20 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-purple-400">
                  ¿Necesito experiencia previa para tomar los cursos?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  No, nuestros cursos están diseñados para principiantes. Comenzamos desde lo más básico, incluyendo
                  bioseguridad, manejo de equipos y técnicas fundamentales.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-gray-800 border-purple-500/20 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-purple-400">
                  ¿Qué incluye el material del curso?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Todos los cursos incluyen máquinas de tatuar, agujas, tintas, material de práctica, y todo lo
                  necesario para aprender. También proporcionamos un manual completo y certificado al finalizar.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-gray-800 border-purple-500/20 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-purple-400">
                  ¿Los cursos son presenciales?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Sí, todos nuestros cursos son 100% presenciales en nuestro estudio en Punta del Este. Creemos que la
                  práctica directa y la supervisión personalizada son fundamentales para un aprendizaje efectivo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-gray-800 border-purple-500/20 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-purple-400">
                  ¿Hay posibilidades de trabajo después del curso?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Los estudiantes del Curso Full tienen la posibilidad de trabajar en nuestro estudio, dependiendo de
                  su desempeño y las vacantes disponibles. También brindamos orientación para establecer su propio
                  estudio.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-gray-800 border-purple-500/20 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-purple-400">
                  ¿Ofrecen planes de pago?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Sí, ofrecemos diferentes opciones de pago y financiamiento. Contáctanos para conocer las opciones
                  disponibles y encontrar el plan que mejor se adapte a tu situación.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mbf-royal">Agenda tu Consulta Gratuita</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Reserva una consulta personalizada para conocer más sobre nuestros cursos
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-gray-900/90 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white text-center">Formulario de Consulta</CardTitle>
              </CardHeader>
              <CardContent>
                <form action={handleConsultationSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Nombre Completo *</label>
                      <Input
                        name="name"
                        required
                        className="bg-gray-800 border-gray-700 text-white"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        required
                        className="bg-gray-800 border-gray-700 text-white"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Teléfono *</label>
                      <Input
                        name="phone"
                        required
                        className="bg-gray-800 border-gray-700 text-white"
                        placeholder="+598 XX XXX XXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Curso de Interés *</label>
                      <select
                        name="course"
                        required
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 text-white rounded-md"
                      >
                        <option value="">Selecciona un curso</option>
                        <option value="inicial">Curso Inicial (1 mes)</option>
                        <option value="completo">Curso Completo (2 meses)</option>
                        <option value="full">Curso Full (3 meses)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Fecha Preferida *</label>
                      <Input
                        name="date"
                        type="date"
                        required
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Hora Preferida *</label>
                      <select
                        name="time"
                        required
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 text-white rounded-md"
                      >
                        <option value="">Selecciona una hora</option>
                        <option value="09:00">09:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Mensaje Adicional</label>
                    <Textarea
                      name="message"
                      className="bg-gray-800 border-gray-700 text-white"
                      placeholder="Cuéntanos sobre tu experiencia previa, expectativas o cualquier pregunta específica..."
                      rows={4}
                    />
                  </div>

                  {consultationResult && (
                    <div
                      className={`p-4 rounded-lg ${
                        consultationResult.success ? "bg-green-900/50 text-green-300" : "bg-red-900/50 text-red-300"
                      }`}
                    >
                      {consultationResult.message}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmittingConsultation}
                    className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3"
                  >
                    {isSubmittingConsultation ? "Enviando..." : "Agendar Consulta Gratuita"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mbf-royal">Contacto</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Estamos aquí para responder todas tus preguntas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-purple-400">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-purple-400" />
                    <div>
                      <p className="font-semibold">Dirección</p>
                      <p className="text-gray-300">Punta del Este, Maldonado, Uruguay</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-purple-400" />
                    <div>
                      <p className="font-semibold">Teléfono</p>
                      <p className="text-gray-300">+598 92 153 567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-purple-400" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-300">info@inklifetattoo.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Instagram className="w-6 h-6 text-purple-400" />
                    <div>
                      <p className="font-semibold">Instagram</p>
                      <p className="text-gray-300">@inklifetattoo</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-purple-400">Horarios de Atención</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes:</span>
                    <span className="text-gray-300">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados:</span>
                    <span className="text-gray-300">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos:</span>
                    <span className="text-gray-300">Cerrado</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-gray-900/90 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white">Envíanos un Mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form action={handleContactSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Nombre *</label>
                    <Input
                      name="name"
                      required
                      className="bg-gray-800 border-gray-700 text-white"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      required
                      className="bg-gray-800 border-gray-700 text-white"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Mensaje *</label>
                    <Textarea
                      name="message"
                      required
                      className="bg-gray-800 border-gray-700 text-white"
                      placeholder="Tu mensaje..."
                      rows={5}
                    />
                  </div>

                  {contactResult && (
                    <div
                      className={`p-4 rounded-lg ${
                        contactResult.success ? "bg-green-900/50 text-green-300" : "bg-red-900/50 text-red-300"
                      }`}
                    >
                      {contactResult.message}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmittingContact}
                    className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold"
                  >
                    {isSubmittingContact ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-purple-500/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-4 mb-4">
                <img src="/images/ink-life-logo-gold.png" alt="INK LIFE TATTOO" className="h-12 object-contain" />
                <div>
                  <h3 className="text-xl font-bold font-mbf-royal">INK LIFE TATTOO ACADEMY</h3>
                  <p className="text-purple-300">Escuela de Tatuajes</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Formando tatuadores profesionales en Punta del Este, Uruguay. Más de 10 años de experiencia en el arte
                del tatuaje.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-purple-400">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#inicio" className="text-gray-400 hover:text-white transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#cursos" className="text-gray-400 hover:text-white transition-colors">
                    Cursos
                  </a>
                </li>
                <li>
                  <a href="#galeria" className="text-gray-400 hover:text-white transition-colors">
                    Galería
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="text-gray-400 hover:text-white transition-colors">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="text-gray-400 hover:text-white transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-purple-400">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Punta del Este, Uruguay</li>
                <li>+598 92 153 567</li>
                <li>info@inklifetattoo.com</li>
                <li>@inklifetattoo</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} INK LIFE TATTOO ACADEMY. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}