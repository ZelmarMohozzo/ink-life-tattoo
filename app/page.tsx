"use client"

import { useState, useEffect } from "react"
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Calendar, 
  Star, 
  Award, 
  Users, 
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  ChevronDown,
  Palette,
  Zap,
  Shield,
  Heart
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { submitConsultation, submitContactForm } from "./actions/contact"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import HeroCarousel from "@/components/hero-carousel"
import Gallery from "@/components/gallery"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isContactSubmitting, setIsContactSubmitting] = useState(false)
  const { toast } = useToast()

  // Datos de la galería
  const galleryImages = [
    { src: "/images/tattoo1.jpeg", alt: "Tatuaje realista de león en brazo" },
    { src: "/images/tattoo2.jpeg", alt: "Tatuaje blackwork geométrico" },
    { src: "/images/tattoo3.jpeg", alt: "Tatuaje realista de águila" },
    { src: "/images/tattoo4.jpeg", alt: "Tatuaje blackwork tribal" },
    { src: "/images/tattoo5.jpeg", alt: "Tatuaje realista de tigre" },
    { src: "/images/tattoo6.jpeg", alt: "Tatuaje blackwork abstracto" },
    { src: "/images/tattoo7.jpeg", alt: "Tatuaje realista de lobo" },
    { src: "/images/tattoo8.jpeg", alt: "Tatuaje mandala detallado" },
    { src: "/images/tattoo9.jpeg", alt: "Tatuaje realista de ojo" },
    { src: "/images/tattoo10.jpeg", alt: "Tatuaje realista de rosa" },
    { src: "/images/tattoo11.jpeg", alt: "Tatuaje mandala en espalda" },
    { src: "/images/tattoo12.jpeg", alt: "Tatuaje realista de Jesucristo" },
    { src: "/images/tattoo13.jpeg", alt: "Tatuaje blackwork en antebrazo" },
    { src: "/images/tattoo14.jpeg", alt: "Tatuaje realista de mujer" },
    { src: "/images/tattoo15.jpeg", alt: "Tatuaje mandala circular" },
    { src: "/images/tattoo16.jpeg", alt: "Tatuaje realista de calavera" },
    { src: "/images/tattoo17.jpeg", alt: "Tatuaje realista de manos" },
    { src: "/images/tattoo18.jpeg", alt: "Tatuaje realista de rostro" },
    { src: "/images/tattoo19.jpeg", alt: "Tatuaje realista de perro" },
    { src: "/images/tattoo20.jpeg", alt: "Tatuaje blackwork en pierna" },
    { src: "/images/tattoo21.jpeg", alt: "Tatuaje blackwork en brazo" },
    { src: "/images/tattoo22.jpeg", alt: "Tatuaje realista de gato" },
    { src: "/images/tattoo23.jpeg", alt: "Tatuaje realista de bebé" },
    { src: "/images/tattoo24.jpeg", alt: "Tatuaje realista de anciano" },
    { src: "/images/tattoo25.jpeg", alt: "Tatuaje blackwork geométrico" },
    { src: "/images/tattoo26.jpeg", alt: "Tatuaje realista de mujer vintage" },
    { src: "/images/tattoo27.jpeg", alt: "Tatuaje realista de pareja" },
    { src: "/images/tattoo28.jpeg", alt: "Tatuaje realista de niño" },
    { src: "/images/tattoo29.jpeg", alt: "Tatuaje realista de familia" },
    { src: "/images/tattoo30.jpeg", alt: "Tatuaje mandala en hombro" },
    { src: "/images/tattoo31.jpeg", alt: "Tatuaje blackwork tribal" },
    { src: "/images/tattoo32.jpeg", alt: "Tatuaje realista de animal" },
    { src: "/images/tattoo33.jpeg", alt: "Tatuaje dragón a color" },
    { src: "/images/tattoo34.jpeg", alt: "Tatuaje mandala detallado" },
    { src: "/images/tattoo35.jpeg", alt: "Tatuaje realista de retrato" },
    { src: "/images/tattoo36.jpeg", alt: "Tatuaje realista de naturaleza" },
    { src: "/images/tattoo37.jpeg", alt: "Tatuaje realista de paisaje" },
    { src: "/images/tattoo38.jpeg", alt: "Tatuaje blackwork en costilla" }
  ]

  const handleConsultationSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    try {
      const result = await submitConsultation(formData)
      if (result.success) {
        toast({
          title: "¡Consulta enviada!",
          description: result.message,
        })
        // Reset form
        const form = document.getElementById('consultation-form') as HTMLFormElement
        form?.reset()
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Ocurrió un error inesperado. Por favor intenta nuevamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleContactSubmit = async (formData: FormData) => {
    setIsContactSubmitting(true)
    try {
      const result = await submitContactForm(formData)
      if (result.success) {
        toast({
          title: "¡Mensaje enviado!",
          description: result.message,
        })
        // Reset form
        const form = document.getElementById('contact-form') as HTMLFormElement
        form?.reset()
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Ocurrió un error inesperado. Por favor intenta nuevamente.",
        variant: "destructive",
      })
    } finally {
      setIsContactSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm sticky top-0 z-50 border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between relative">
            {/* Spacer for mobile menu button */}
            <div className="md:hidden w-10"></div>
            
            {/* Logo - Centered */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
              <img 
                src="/images/banner_inkedlife.png" 
                alt="INK LIFE TATTOO ACADEMY" 
                className="h-12 md:h-16 w-auto object-contain"
                onError={(e) => {
                  console.log('Error loading image:', e);
                  e.currentTarget.style.display = 'none';
                }}
                onLoad={() => console.log('Image loaded successfully')}
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-300 hover:text-purple-400 transition-colors">Inicio</a>
              <a href="#cursos" className="text-gray-300 hover:text-purple-400 transition-colors">Cursos</a>
              <a href="#galeria" className="text-gray-300 hover:text-purple-400 transition-colors">Galería</a>
              <a href="#sobre-mi" className="text-gray-300 hover:text-purple-400 transition-colors">Sobre Mí</a>
              <a href="#contacto" className="text-gray-300 hover:text-purple-400 transition-colors">Contacto</a>
            </nav>

            {/* Contact Info */}
            <div className="hidden xl:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="text-gray-300">+598 92 153 567</span>
              </div>
              <Button 
                className="bg-gradient-to-r from-purple-600 to-emerald-500 hover:from-purple-700 hover:to-emerald-600"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Consultar
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white z-10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-700">
              <nav className="flex flex-col space-y-4 mt-4">
                <a href="#inicio" className="text-gray-300 hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Inicio</a>
                <a href="#cursos" className="text-gray-300 hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Cursos</a>
                <a href="#galeria" className="text-gray-300 hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Galería</a>
                <a href="#sobre-mi" className="text-gray-300 hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Sobre Mí</a>
                <a href="#contacto" className="text-gray-300 hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Contacto</a>
                <div className="flex items-center space-x-2 text-sm pt-2">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span className="text-gray-300">+598 92 153 567</span>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section with Carousel */}
      <section id="inicio">
        <HeroCarousel />
      </section>

      {/* Cursos Section */}
      <section id="cursos" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Nuestros Cursos
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Aprende el arte del tatuaje con técnicas profesionales y atención personalizada
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Curso Inicial */}
            <Card className="bg-gray-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Curso Inicial</CardTitle>
                <CardDescription className="text-gray-400">1 mes de duración</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold text-purple-400 mb-4">$15,000</div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span>Fundamentos del tatuaje</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span>Técnicas básicas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span>Higiene y seguridad</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span>Práctica en piel sintética</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600">
                  Consultar Curso
                </Button>
              </CardContent>
            </Card>

            {/* Curso Completo */}
            <Card className="bg-gray-800/50 border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 group relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-emerald-600 to-emerald-400 text-white px-4 py-1">
                  Más Popular
                </Badge>
              </div>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Curso Completo</CardTitle>
                <CardDescription className="text-gray-400">2 meses de duración</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold text-emerald-400 mb-4">$25,000</div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span>Todo del curso inicial</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span>Técnicas avanzadas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span>Diferentes estilos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span>Práctica en piel real</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span>Certificación</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600">
                  Consultar Curso
                </Button>
              </CardContent>
            </Card>

            {/* Curso Full */}
            <Card className="bg-gray-800/50 border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Curso Full</CardTitle>
                <CardDescription className="text-gray-400">3 meses + posibilidad laboral</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold text-yellow-400 mb-4">$35,000</div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span>Todo del curso completo</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span>Especialización en estilos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span>Gestión de estudio</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span>Posibilidad laboral</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span>Mentorías personalizadas</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600">
                  Consultar Curso
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Formulario de Consulta */}
          <div className="max-w-2xl mx-auto bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-center mb-6 text-white">
              Consulta sobre Nuestros Cursos
            </h3>
            <form id="consultation-form" action={handleConsultationSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre Completo *
                  </label>
                  <Input
                    name="name"
                    required
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    required
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Teléfono *
                  </label>
                  <Input
                    name="phone"
                    required
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                    placeholder="+598 XX XXX XXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Curso de Interés *
                  </label>
                  <select
                    name="course"
                    required
                    className="w-full bg-gray-700/50 border border-gray-600 text-white rounded-md px-3 py-2"
                  >
                    <option value="">Selecciona un curso</option>
                    <option value="inicial">Curso Inicial (1 mes)</option>
                    <option value="completo">Curso Completo (2 meses)</option>
                    <option value="full">Curso Full (3 meses)</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Fecha Preferida *
                  </label>
                  <Input
                    name="date"
                    type="date"
                    required
                    className="bg-gray-700/50 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Hora Preferida *
                  </label>
                  <select
                    name="time"
                    required
                    className="w-full bg-gray-700/50 border border-gray-600 text-white rounded-md px-3 py-2"
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
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje Adicional
                </label>
                <Textarea
                  name="message"
                  className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                  placeholder="Cuéntanos más sobre tu interés en el curso..."
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-emerald-500 hover:from-purple-700 hover:to-emerald-600 text-white font-semibold py-3 rounded-lg transition-all duration-300"
              >
                {isSubmitting ? "Enviando..." : "Enviar Consulta"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Galería Section */}
      <section id="galeria" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Galería de Trabajos
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explora nuestra colección de tatuajes únicos y descubre la calidad de nuestro trabajo
            </p>
          </div>

          <Gallery images={galleryImages} />
        </div>
      </section>

      {/* Sobre Mí Section */}
      <section id="sobre-mi" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Conoce a Nico Lemos
              </h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  Con más de <span className="text-emerald-400 font-semibold">12 años de experiencia</span> en el mundo del tatuaje, 
                  me he especializado en crear obras de arte únicas que trascienden la piel.
                </p>
                <p className="text-lg leading-relaxed">
                  Mi pasión por enseñar nace de la convicción de que el arte del tatuaje debe transmitirse 
                  con responsabilidad, técnica y creatividad. En INK LIFE TATTOO ACADEMY, cada alumno 
                  recibe atención personalizada para desarrollar su propio estilo.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">12+</div>
                    <div className="text-gray-400">Años de Experiencia</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">500+</div>
                    <div className="text-gray-400">Tatuajes Realizados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
                    <div className="text-gray-400">Alumnos Formados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-400 mb-2">5</div>
                    <div className="text-gray-400">Estilos Dominados</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/images/nico-lemos-photo.jpeg"
                  alt="Nico Lemos - Tatuador Profesional"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-emerald-600/20 rounded-2xl blur-3xl"></div>
            </div>
          </div>

          {/* Especialidades */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-white">Especialidades</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Palette className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Realismo</h4>
                <p className="text-gray-400">Retratos y diseños hiperrealistas con increíble detalle</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Blackwork</h4>
                <p className="text-gray-400">Diseños en negro con técnicas tradicionales y modernas</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Mandalas</h4>
                <p className="text-gray-400">Patrones geométricos y espirituales con precisión</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-600 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Color</h4>
                <p className="text-gray-400">Vibrantes diseños a color con técnicas avanzadas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Resolvemos las dudas más comunes sobre nuestros cursos
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-gray-800/30 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-purple-400">
                  ¿Necesito experiencia previa para tomar los cursos?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  No, nuestros cursos están diseñados para principiantes. Comenzamos desde los fundamentos básicos 
                  y avanzamos gradualmente. Lo único que necesitas es pasión por el arte y ganas de aprender.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-gray-800/30 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-purple-400">
                  ¿Qué materiales están incluidos en el curso?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Todos los materiales básicos están incluidos: máquinas de tatuar, agujas, tintas, piel sintética 
                  para práctica, y material de higiene. Solo necesitas traer tu creatividad y dedicación.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-gray-800/30 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-purple-400">
                  ¿Cuántos alumnos hay por clase?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Mantenemos grupos pequeños de máximo 2 alumnos por clase para garantizar atención personalizada 
                  y un aprendizaje efectivo. Esto nos permite adaptar la enseñanza al ritmo de cada estudiante.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-gray-800/30 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-purple-400">
                  ¿Ofrecen certificación al finalizar?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Sí, al completar exitosamente el curso recibirás un certificado de INK LIFE TATTOO ACADEMY 
                  que avala tu formación y te permitirá comenzar tu carrera profesional en el mundo del tatuaje.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-gray-800/30 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-purple-400">
                  ¿Hay posibilidades de trabajo después del curso?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Los estudiantes del Curso Full tienen la posibilidad de incorporarse a nuestro estudio según 
                  disponibilidad y desempeño. También brindamos orientación para establecer tu propio estudio.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Contacto
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              ¿Listo para comenzar tu journey en el mundo del tatuaje? Contáctanos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Información de Contacto */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-emerald-500 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400">Teléfono</p>
                      <p className="text-white font-semibold">+598 92 153 567</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-emerald-500 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400">Email</p>
                      <p className="text-white font-semibold">info@inklifetattoo.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-emerald-500 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400">Ubicación</p>
                      <p className="text-white font-semibold">Maldonado, Uruguay</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-emerald-500 rounded-full flex items-center justify-center">
                      <Instagram className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400">Instagram</p>
                      <p className="text-white font-semibold">@inklifetattoo</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-emerald-500 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400">Horarios</p>
                      <p className="text-white font-semibold">Lun - Sáb: 9:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mapa */}
              <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">Nuestra Ubicación</h4>
                <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">Mapa interactivo próximamente</p>
                </div>
              </div>
            </div>

            {/* Formulario de Contacto */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Envíanos un Mensaje</h3>
              <form id="contact-form" action={handleContactSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre Completo *
                  </label>
                  <Input
                    name="name"
                    required
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    required
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    name="message"
                    required
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                    placeholder="Cuéntanos en qué podemos ayudarte..."
                    rows={6}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isContactSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-emerald-500 hover:from-purple-700 hover:to-emerald-600 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                >
                  {isContactSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-emerald-500 rounded-full flex items-center justify-center">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
                    INK LIFE
                  </h3>
                  <p className="text-xs text-gray-400">TATTOO ACADEMY</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Formando artistas del tatuaje con pasión, técnica y profesionalismo. 
                Tu journey en el mundo del ink comienza aquí.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#inicio" className="hover:text-purple-400 transition-colors">Inicio</a></li>
                <li><a href="#cursos" className="hover:text-purple-400 transition-colors">Cursos</a></li>
                <li><a href="#galeria" className="hover:text-purple-400 transition-colors">Galería</a></li>
                <li><a href="#sobre-mi" className="hover:text-purple-400 transition-colors">Sobre Mí</a></li>
                <li><a href="#contacto" className="hover:text-purple-400 transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+598 92 153 567</li>
                <li>info@inklifetattoo.com</li>
                <li>Maldonado, Uruguay</li>
                <li>Lun - Sáb: 9:00 - 18:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 INK LIFE TATTOO ACADEMY. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  )
}