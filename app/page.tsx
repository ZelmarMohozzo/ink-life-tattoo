"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, Mail, MapPin, Clock, Star, Award, Users, Palette, Instagram, Facebook, Youtube, Calendar, MessageCircle, ChevronDown, GraduationCap, Zap, CheckCircle, ArrowRight, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { submitConsultation, submitContactForm } from "./actions/contact"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import Gallery from "@/components/gallery"
import HeroCarousel from "@/components/hero-carousel"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isContactSubmitting, setIsContactSubmitting] = useState(false)
  const { toast } = useToast()

  // Datos de las imágenes de la galería
  const galleryImages = [
    { src: "/images/tattoo1.jpeg", alt: "Tatuaje realista de león en brazo" },
    { src: "/images/tattoo2.jpeg", alt: "Tatuaje blackwork geométrico" },
    { src: "/images/tattoo3.jpeg", alt: "Tatuaje realista de Jesucristo" },
    { src: "/images/tattoo4.jpeg", alt: "Tatuaje realista de águila" },
    { src: "/images/tattoo5.jpeg", alt: "Tatuaje blackwork tribal" },
    { src: "/images/tattoo6.jpeg", alt: "Tatuaje blackwork abstracto" },
    { src: "/images/tattoo7.jpeg", alt: "Tatuaje blackwork en espalda" },
    { src: "/images/tattoo8.jpeg", alt: "Tatuaje mandala detallado" },
    { src: "/images/tattoo9.jpeg", alt: "Tatuaje realista de tigre" },
    { src: "/images/tattoo10.jpeg", alt: "Tatuaje realista de mujer" },
    { src: "/images/tattoo11.jpeg", alt: "Tatuaje mandala en brazo" },
    { src: "/images/tattoo12.jpeg", alt: "Tatuaje realista de rostro" },
    { src: "/images/tattoo13.jpeg", alt: "Tatuaje blackwork minimalista" },
    { src: "/images/tattoo14.jpeg", alt: "Tatuaje realista de animal" },
    { src: "/images/tattoo15.jpeg", alt: "Tatuaje mandala geométrico" },
    { src: "/images/tattoo16.jpeg", alt: "Tatuaje realista en pierna" },
    { src: "/images/tattoo17.jpeg", alt: "Tatuaje realista de retrato" },
    { src: "/images/tattoo18.jpeg", alt: "Tatuaje realista de ojo" },
    { src: "/images/tattoo19.jpeg", alt: "Tatuaje realista de mano" },
    { src: "/images/tattoo20.jpeg", alt: "Tatuaje blackwork en costilla" },
    { src: "/images/tattoo21.jpeg", alt: "Tatuaje blackwork en antebrazo" },
    { src: "/images/tattoo22.jpeg", alt: "Tatuaje realista de cara" },
    { src: "/images/tattoo23.jpeg", alt: "Tatuaje realista de perfil" },
    { src: "/images/tattoo24.jpeg", alt: "Tatuaje realista de mujer vintage" },
    { src: "/images/tattoo25.jpeg", alt: "Tatuaje blackwork geométrico complejo" },
    { src: "/images/tattoo26.jpeg", alt: "Tatuaje realista de rostro masculino" },
    { src: "/images/tattoo27.jpeg", alt: "Tatuaje realista de expresión" },
    { src: "/images/tattoo28.jpeg", alt: "Tatuaje realista detallado" },
    { src: "/images/tattoo29.jpeg", alt: "Tatuaje realista artístico" },
    { src: "/images/tattoo30.jpeg", alt: "Tatuaje mandala circular" },
    { src: "/images/tattoo31.jpeg", alt: "Tatuaje blackwork lineal" },
    { src: "/images/tattoo32.jpeg", alt: "Tatuaje de dragón a color" },
    { src: "/images/tattoo33.jpeg", alt: "Tatuaje mandala en espalda" },
    { src: "/images/tattoo34.jpeg", alt: "Tatuaje realista de perfil femenino" },
    { src: "/images/tattoo35.jpeg", alt: "Tatuaje realista de rostro con sombrero" },
    { src: "/images/tattoo36.jpeg", alt: "Tatuaje realista de mujer con flores" },
    { src: "/images/tattoo37.jpeg", alt: "Tatuaje realista de rostro detallado" },
    { src: "/images/tattoo38.jpeg", alt: "Tatuaje realista final" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "cursos", "galeria", "artista", "contacto"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

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
        const form = document.getElementById("consultation-form") as HTMLFormElement
        if (form) form.reset()
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
        const form = document.getElementById("contact-form") as HTMLFormElement
        if (form) form.reset()
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
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-purple-500/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src="/images/ink-life-logo-gold.png" alt="INK LIFE TATTOO" className="h-12 w-auto" />
              <div className="flex flex-col">
                <span className="font-bold text-xl font-mbf-royal bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                  INK LIFE
                </span>
                <span className="text-xs text-gray-400 font-medium tracking-wider">TATTOO ACADEMY</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-10">
              {[
                { id: "inicio", label: "INICIO" },
                { id: "cursos", label: "CURSOS" },
                { id: "artista", label: "ARTISTA" },
                { id: "galeria", label: "GALERÍA" },
                { id: "contacto", label: "CONTACTO" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                    activeSection === item.id ? "text-purple-400 border-b-2 border-purple-400 pb-1" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white hover:text-purple-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-6 border-t border-purple-500/20 bg-black/98 backdrop-blur-md">
              <div className="flex flex-col space-y-4">
                {[
                  { id: "inicio", label: "INICIO" },
                  { id: "cursos", label: "CURSOS" },
                  { id: "artista", label: "ARTISTA" },
                  { id: "galeria", label: "GALERÍA" },
                  { id: "contacto", label: "CONTACTO" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left text-sm font-medium transition-colors hover:text-purple-400 ${
                      activeSection === item.id ? "text-purple-400 pl-4 border-l-2 border-purple-400" : "text-gray-300 hover:text-white hover:pl-2"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative">
        <HeroCarousel />
      </section>

      {/* Courses Section */}
      <section id="cursos" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mbf-royal">
              <span className="bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Nuestros Cursos
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Aprende el arte del tatuaje con metodología profesional y atención personalizada
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Curso Inicial",
                duration: "1 mes",
                price: "$150",
                description: "Fundamentos básicos del tatuaje",
                features: [
                  "Técnicas básicas de tatuaje",
                  "Manejo de equipos",
                  "Higiene y seguridad",
                  "Práctica en piel sintética",
                  "Certificado de participación",
                ],
                popular: false,
              },
              {
                title: "Curso Completo",
                duration: "2 meses",
                price: "$250",
                description: "Formación integral en tatuaje",
                features: [
                  "Todo del curso inicial",
                  "Técnicas avanzadas",
                  "Diseño y composición",
                  "Práctica en modelos",
                  "Portfolio profesional",
                  "Certificación profesional",
                ],
                popular: true,
              },
              {
                title: "Curso Full",
                duration: "3 meses",
                price: "$350",
                description: "Formación completa + oportunidad laboral",
                features: [
                  "Todo del curso completo",
                  "Especialización en estilos",
                  "Gestión de negocio",
                  "Marketing para tatuadores",
                  "Posibilidad de trabajo en el estudio",
                  "Mentoring personalizado",
                ],
                popular: false,
              },
            ].map((course, index) => (
              <Card
                key={index}
                className={`relative bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 ${
                  course.popular ? "ring-2 ring-purple-500" : ""
                }`}
              >
                {course.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white">
                    Más Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-purple-400">{course.title}</CardTitle>
                  <CardDescription className="text-gray-300">{course.description}</CardDescription>
                  <div className="text-3xl font-bold text-emerald-400 mt-4">
                    {course.price}
                    <span className="text-sm text-gray-400">/{course.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {course.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => scrollToSection("contacto")}
                    className="w-full bg-gradient-to-r from-purple-600 to-emerald-500 hover:from-purple-700 hover:to-emerald-600 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                  >
                    Consultar Curso
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Course Benefits */}
          <div className="bg-gray-800/30 rounded-2xl p-8 mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-purple-400">¿Por qué elegir nuestros cursos?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Users className="w-8 h-8 text-emerald-400" />,
                  title: "Clases Reducidas",
                  description: "Máximo 2 alumnos por clase para atención personalizada",
                },
                {
                  icon: <Award className="w-8 h-8 text-purple-400" />,
                  title: "Instructor Experto",
                  description: "Más de 12 años de experiencia en el mundo del tatuaje",
                },
                {
                  icon: <Palette className="w-8 h-8 text-emerald-400" />,
                  title: "Equipos Profesionales",
                  description: "Trabajamos con equipos de última generación",
                },
                {
                  icon: <Star className="w-8 h-8 text-purple-400" />,
                  title: "Certificación",
                  description: "Certificado oficial al completar el curso",
                },
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h4 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h4>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8 text-purple-400">Preguntas Frecuentes</h3>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "¿Necesito experiencia previa para tomar el curso?",
                  answer:
                    "No, nuestros cursos están diseñados para principiantes. Comenzamos desde lo más básico y avanzamos gradualmente.",
                },
                {
                  question: "¿Qué materiales están incluidos en el curso?",
                  answer:
                    "Todos los materiales básicos están incluidos: máquinas, tintas, agujas, piel sintética para práctica, y material de higiene.",
                },
                {
                  question: "¿Puedo practicar en personas reales durante el curso?",
                  answer:
                    "Sí, en los cursos Completo y Full incluimos práctica supervisada en modelos voluntarios una vez que domines las técnicas básicas.",
                },
                {
                  question: "¿El certificado tiene validez oficial?",
                  answer:
                    "Sí, nuestro certificado es reconocido en la industria y cumple con los estándares profesionales del tatuaje.",
                },
                {
                  question: "¿Ofrecen seguimiento después del curso?",
                  answer:
                    "Absolutamente. Ofrecemos mentoring continuo y la posibilidad de trabajar en nuestro estudio para los mejores estudiantes.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-gray-700">
                  <AccordionTrigger className="text-left text-white hover:text-purple-400">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mbf-royal">
              <span className="bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Galería de Trabajos
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explora nuestra colección de tatuajes únicos y descubre la calidad de nuestro trabajo
            </p>
          </div>

          <Gallery images={galleryImages} />
        </div>
      </section>

      {/* Artist Section */}
      <section id="artista" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Artist Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="/images/nico-lemos-photo.jpeg"
                    alt="Nico Lemos - Tatuador Profesional"
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -right-6 bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">12+</div>
                    <div className="text-sm text-gray-300">Años de Experiencia</div>
                  </div>
                </div>
              </div>

              {/* Artist Info */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mbf-royal">
                    <span className="bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
                      Nico Lemos
                    </span>
                  </h2>
                  <p className="text-xl text-emerald-400 mb-6">Tatuador Profesional & Instructor</p>
                </div>

                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    Con más de 12 años de experiencia en el mundo del tatuaje, Nico Lemos se ha consolidado como uno de
                    los artistas más respetados de Punta del Este y la región.
                  </p>
                  <p>
                    Especializado en realismo, blackwork y diseños personalizados, Nico combina técnica impecable con
                    creatividad artística para crear obras únicas en la piel de sus clientes.
                  </p>
                  <p>
                    Su pasión por enseñar lo llevó a fundar INK LIFE TATTOO ACADEMY, donde comparte sus conocimientos y
                    técnicas con la próxima generación de tatuadores.
                  </p>
                </div>

                {/* Specialties */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-purple-400">Especialidades</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {["Realismo", "Blackwork", "Mandalas", "Retratos", "Geométrico", "Personalizado"].map(
                      (specialty, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-emerald-400" />
                          <span className="text-gray-300">{specialty}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* Achievements */}
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-700">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">150+</div>
                    <div className="text-sm text-gray-400">Clientes Satisfechos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">50+</div>
                    <div className="text-sm text-gray-400">Estudiantes Formados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">5</div>
                    <div className="text-sm text-gray-400">Estilos Dominados</div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                  <Button
                    onClick={() => scrollToSection("contacto")}
                    className="bg-gradient-to-r from-purple-600 to-emerald-500 hover:from-purple-700 hover:to-emerald-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Agenda tu Consulta
                    <Calendar className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mbf-royal">
              <span className="bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Contacto
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              ¿Listo para comenzar tu journey en el mundo del tatuaje? Contáctanos para más información
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="consultation" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-800 border-gray-700">
                <TabsTrigger value="consultation" className="data-[state=active]:bg-purple-600">
                  Consulta de Curso
                </TabsTrigger>
                <TabsTrigger value="contact" className="data-[state=active]:bg-purple-600">
                  Contacto General
                </TabsTrigger>
              </TabsList>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Forms */}
                <div>
                  <TabsContent value="consultation">
                    <Card className="bg-gray-800/50 border-gray-700">
                      <CardHeader>
                        <CardTitle className="text-2xl text-purple-400">Consulta de Curso</CardTitle>
                        <CardDescription className="text-gray-300">
                          Completa el formulario y nos pondremos en contacto contigo
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <form id="consultation-form" action={handleConsultationSubmit} className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-300 mb-2">Nombre completo</label>
                              <Input
                                name="name"
                                required
                                className="bg-gray-700 border-gray-600 text-white"
                                placeholder="Tu nombre"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                              <Input
                                name="email"
                                type="email"
                                required
                                className="bg-gray-700 border-gray-600 text-white"
                                placeholder="tu@email.com"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Teléfono</label>
                            <Input
                              name="phone"
                              required
                              className="bg-gray-700 border-gray-600 text-white"
                              placeholder="+598 XX XXX XXX"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Curso de interés</label>
                            <Select name="course" required>
                              <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                                <SelectValue placeholder="Selecciona un curso" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="inicial">Curso Inicial (1 mes)</SelectItem>
                                <SelectItem value="completo">Curso Completo (2 meses)</SelectItem>
                                <SelectItem value="full">Curso Full (3 meses)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-300 mb-2">Fecha preferida</label>
                              <Input
                                name="date"
                                type="date"
                                required
                                className="bg-gray-700 border-gray-600 text-white"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-300 mb-2">Hora preferida</label>
                              <Select name="time" required>
                                <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                                  <SelectValue placeholder="Selecciona horario" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="09:00">09:00</SelectItem>
                                  <SelectItem value="10:00">10:00</SelectItem>
                                  <SelectItem value="11:00">11:00</SelectItem>
                                  <SelectItem value="14:00">14:00</SelectItem>
                                  <SelectItem value="15:00">15:00</SelectItem>
                                  <SelectItem value="16:00">16:00</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Mensaje adicional (opcional)
                            </label>
                            <Textarea
                              name="message"
                              className="bg-gray-700 border-gray-600 text-white"
                              placeholder="Cuéntanos sobre tu interés en el tatuaje..."
                              rows={4}
                            />
                          </div>

                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-purple-600 to-emerald-500 hover:from-purple-700 hover:to-emerald-600 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                          >
                            {isSubmitting ? "Enviando..." : "Enviar Consulta"}
                            <Send className="w-4 h-4 ml-2" />
                          </Button>
                        </form>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="contact">
                    <Card className="bg-gray-800/50 border-gray-700">
                      <CardHeader>
                        <CardTitle className="text-2xl text-purple-400">Contacto General</CardTitle>
                        <CardDescription className="text-gray-300">
                          Envíanos un mensaje y te responderemos pronto
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <form id="contact-form" action={handleContactSubmit} className="space-y-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Nombre</label>
                            <Input
                              name="name"
                              required
                              className="bg-gray-700 border-gray-600 text-white"
                              placeholder="Tu nombre"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                            <Input
                              name="email"
                              type="email"
                              required
                              className="bg-gray-700 border-gray-600 text-white"
                              placeholder="tu@email.com"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Mensaje</label>
                            <Textarea
                              name="message"
                              required
                              className="bg-gray-700 border-gray-600 text-white"
                              placeholder="Escribe tu mensaje aquí..."
                              rows={6}
                            />
                          </div>

                          <Button
                            type="submit"
                            disabled={isContactSubmitting}
                            className="w-full bg-gradient-to-r from-purple-600 to-emerald-500 hover:from-purple-700 hover:to-emerald-600 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                          >
                            {isContactSubmitting ? "Enviando..." : "Enviar Mensaje"}
                            <Send className="w-4 h-4 ml-2" />
                          </Button>
                        </form>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </div>

                {/* Contact Info */}
                <div className="space-y-8">
                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-2xl text-purple-400">Información de Contacto</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <Phone className="w-6 h-6 text-emerald-400" />
                        <div>
                          <p className="font-semibold text-white">Teléfono</p>
                          <p className="text-gray-300">+598 92 153 567</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <Mail className="w-6 h-6 text-emerald-400" />
                        <div>
                          <p className="font-semibold text-white">Email</p>
                          <p className="text-gray-300">info@inklifetattoo.com</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <MapPin className="w-6 h-6 text-emerald-400" />
                        <div>
                          <p className="font-semibold text-white">Ubicación</p>
                          <p className="text-gray-300">Maldonado, Uruguay</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <Clock className="w-6 h-6 text-emerald-400" />
                        <div>
                          <p className="font-semibold text-white">Horarios</p>
                          <p className="text-gray-300">Lun - Sáb: 9:00 - 18:00</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Social Media */}
                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-2xl text-purple-400">Síguenos</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex space-x-4">
                        <a
                          href="#"
                          className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:scale-110 transition-transform"
                        >
                          <Instagram className="w-6 h-6 text-white" />
                        </a>
                        <a
                          href="#"
                          className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full hover:scale-110 transition-transform"
                        >
                          <Facebook className="w-6 h-6 text-white" />
                        </a>
                        <a
                          href="#"
                          className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-full hover:scale-110 transition-transform"
                        >
                          <Youtube className="w-6 h-6 text-white" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Map */}
                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardContent className="p-0">
                      <div className="relative h-64 rounded-lg overflow-hidden">
                        <img
                          src="/images/ink-life-map.jpeg"
                          alt="Ubicación INK LIFE TATTOO"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg p-3">
                          <p className="text-white font-semibold">INK LIFE TATTOO ACADEMY</p>
                          <p className="text-gray-300 text-sm">Maldonado, Uruguay</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img src="/images/ink-life-logo-gold.png" alt="INK LIFE TATTOO" className="h-8 w-auto" />
                <span className="font-bold text-xl font-mbf-royal">INK LIFE TATTOO ACADEMY</span>
              </div>
              <p className="text-gray-400 mb-4">
                Academia profesional de tatuajes en Punta del Este. Formamos a la próxima generación de artistas del
                tatuaje con técnicas avanzadas y atención personalizada.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                {[
                  { label: "Inicio", id: "inicio" },
                  { label: "Cursos", id: "cursos" },
                  { label: "Artista", id: "artista" },
                  { label: "Galería", id: "galeria" },
                  { label: "Contacto", id: "contacto" },
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-white mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+598 92 153 567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@inklifetattoo.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Maldonado, Uruguay</span>
                </li>
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