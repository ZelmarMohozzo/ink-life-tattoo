"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Users, Award, Star, MapPin, Phone, Mail, Instagram, CheckCircle, ArrowRight, Palette, Zap, Target, ShoppingCart } from "lucide-react"
import Gallery from "@/components/gallery"
import { submitConsultation, submitContactForm } from "./actions/contact"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { CartProvider, useCart } from "@/components/cart-context"
import CartSidebar from "@/components/cart-sidebar"

// Datos de las imágenes de la galería
const galleryImages = [
  { src: "/images/tattoo1.jpeg", alt: "Tatuaje blackwork geométrico en brazo" },
  { src: "/images/tattoo2.jpeg", alt: "Tatuaje blackwork tribal en espalda" },
  { src: "/images/tattoo3.jpeg", alt: "Retrato realista en blanco y negro" },
  { src: "/images/tattoo4.jpeg", alt: "Tatuaje realista de águila" },
  { src: "/images/tattoo5.jpeg", alt: "Diseño blackwork minimalista" },
  { src: "/images/tattoo6.jpeg", alt: "Tatuaje blackwork ornamental" },
  { src: "/images/tattoo7.jpeg", alt: "Tatuaje blackwork abstracto" },
  { src: "/images/tattoo8.jpeg", alt: "Diseño mandala detallado" },
  { src: "/images/tattoo9.jpeg", alt: "Retrato realista femenino" },
  { src: "/images/tattoo10.jpeg", alt: "Tatuaje realista de tigre" },
  { src: "/images/tattoo11.jpeg", alt: "Diseño mandala geométrico" },
  { src: "/images/tattoo12.jpeg", alt: "Retrato realista masculino" },
  { src: "/images/tattoo13.jpeg", alt: "Tatuaje blackwork lineal" },
  { src: "/images/tattoo14.jpeg", alt: "Retrato realista con sombreado" },
  { src: "/images/tattoo15.jpeg", alt: "Diseño mandala circular" },
  { src: "/images/tattoo16.jpeg", alt: "Tatuaje realista de animal" },
  { src: "/images/tattoo17.jpeg", alt: "Retrato realista detallado" },
  { src: "/images/tattoo18.jpeg", alt: "Tatuaje realista en brazo" },
  { src: "/images/tattoo19.jpeg", alt: "Retrato realista femenino detallado" },
  { src: "/images/tattoo20.jpeg", alt: "Tatuaje blackwork geométrico" },
  { src: "/images/tattoo21.jpeg", alt: "Diseño blackwork ornamental" },
  { src: "/images/tattoo22.jpeg", alt: "Retrato realista con detalles" },
  { src: "/images/tattoo23.jpeg", alt: "Tatuaje realista de rostro" },
  { src: "/images/tattoo24.jpeg", alt: "Retrato realista en pierna" },
  { src: "/images/tattoo25.jpeg", alt: "Tatuaje blackwork minimalista" },
  { src: "/images/tattoo26.jpeg", alt: "Retrato realista masculino detallado" },
  { src: "/images/tattoo27.jpeg", alt: "Tatuaje realista de animal salvaje" },
  { src: "/images/tattoo28.jpeg", alt: "Diseño blackwork abstracto" },
  { src: "/images/tattoo29.jpeg", alt: "Retrato realista con sombreado perfecto" },
  { src: "/images/tattoo30.jpeg", alt: "Diseño mandala espiritual" },
  { src: "/images/tattoo31.jpeg", alt: "Tatuaje blackwork tribal moderno" },
  { src: "/images/tattoo32.jpeg", alt: "Tatuaje de dragón a color" },
  { src: "/images/tattoo33.jpeg", alt: "Diseño mandala y blackwork combinado" },
  { src: "/images/tattoo34.jpeg", alt: "Retrato realista de Jesucristo" },
  { src: "/images/tattoo35.jpeg", alt: "Tatuaje realista de león" },
  { src: "/images/tattoo36.jpeg", alt: "Retrato realista femenino artístico" },
  { src: "/images/tattoo37.jpeg", alt: "Tatuaje realista de lobo" },
  { src: "/images/tattoo38.jpeg", alt: "Diseño realista con detalles perfectos" },
]

// Componente principal con CartProvider
function HomePage() {
  return (
    <CartProvider>
      <HomePageContent />
    </CartProvider>
  )
}

// Contenido principal de la página
function HomePageContent() {
  const { toast } = useToast()
  const { addItem } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Datos de los cursos reordenados según solicitud
  const courses = [
    {
      id: "inicial",
      title: "Curso Inicial",
      duration: "1 mes",
      price: 25000,
      description: "Fundamentos básicos del tatuaje",
      features: [
        "Introducción al mundo del tatuaje",
        "Técnicas básicas de dibujo",
        "Manejo de equipos",
        "Normas de higiene y seguridad",
        "Práctica en piel sintética"
      ],
      popular: false
    },
    {
      id: "completo",
      title: "Curso Completo",
      duration: "2 meses",
      price: 45000,
      description: "Formación intermedia completa",
      features: [
        "Todo lo del curso inicial",
        "Técnicas avanzadas de sombreado",
        "Diseño de tatuajes personalizados",
        "Práctica en diferentes estilos",
        "Gestión de clientes",
        "Portfolio profesional"
      ],
      popular: true
    },
    {
      id: "full",
      title: "Curso Full",
      duration: "3 meses",
      price: 65000,
      description: "Formación completa con posibilidad laboral",
      features: [
        "Todo lo de los cursos anteriores",
        "Especialización en estilos específicos",
        "Técnicas de realismo y color",
        "Gestión de estudio",
        "Marketing para tatuadores",
        "Posibilidad de trabajo en el estudio",
        "Certificación profesional"
      ],
      popular: false
    }
  ]

  const handleAddToCart = (course: typeof courses[0]) => {
    addItem({
      id: course.id,
      name: course.title,
      price: course.price,
      duration: course.duration,
      description: course.description
    })
    
    toast({
      title: "¡Curso agregado!",
      description: `${course.title} se agregó a tu carrito.`,
    })
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
        description: "Hubo un problema al enviar la consulta.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleContactSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
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
        description: "Hubo un problema al enviar el mensaje.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/images/ink-life-logo-gold.png" 
              alt="INK LIFE TATTOO ACADEMY" 
              className="h-10 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold font-mbf-royal text-amber-400">INK LIFE</h1>
              <p className="text-xs text-gray-300">TATTOO ACADEMY</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#inicio" className="hover:text-amber-400 transition-colors">Inicio</a>
            <a href="#cursos" className="hover:text-amber-400 transition-colors">Cursos</a>
            <a href="#galeria" className="hover:text-amber-400 transition-colors">Galería</a>
            <a href="#instructor" className="hover:text-amber-400 transition-colors">Instructor</a>
            <a href="#contacto" className="hover:text-amber-400 transition-colors">Contacto</a>
          </nav>

          <div className="flex items-center space-x-3">
            <CartSidebar />
            <span className="text-amber-400 hover:text-amber-300 cursor-pointer">
              <Phone className="w-4 h-4 inline mr-2" />
              +598 92 153 567
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero-background-new.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-purple-900/60 to-black/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Foto del instructor agregada */}
            <div className="mb-8 flex justify-center">
              <img 
                src="/images/instructor-nico.png" 
                alt="Nico Lemos - Instructor" 
                className="w-24 h-24 rounded-full border-3 border-amber-400 shadow-xl object-cover"
              />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mbf-royal">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600">
                INK LIFE
              </span>
              <br />
              <span className="text-white">TATTOO ACADEMY</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Conviértete en un tatuador profesional con Nico Lemos
            </p>

            {/* Texto destacado sobre cursos presenciales */}
            <div className="mb-8 p-4 bg-amber-400/20 border border-amber-400 rounded-lg">
              <p className="text-amber-400 font-bold text-lg">
                🎯 Cursos Exclusivamente Presenciales
              </p>
              <p className="text-gray-300">
                Máximo 2 alumnos por clase para atención personalizada
              </p>
            </div>
            
            <p className="text-lg mb-8 text-gray-400 max-w-2xl mx-auto">
              Más de 12 años de experiencia • Especialista en Blackwork, Realismo y Color
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-bold px-8 py-4 text-lg"
                onClick={() => document.getElementById('cursos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Target className="w-5 h-5 mr-2" />
                VER CURSOS
              </Button>
              
              <span className="text-amber-400 hover:text-amber-300 cursor-pointer px-8 py-4 text-lg border border-amber-400 rounded-lg hover:bg-amber-400/10 transition-colors">
                <Phone className="w-5 h-5 mr-2 inline" />
                CONTACTAR AHORA
              </span>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Cursos Section */}
      <section id="cursos" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mbf-royal">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Nuestros Cursos
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Elige el programa que mejor se adapte a tus objetivos profesionales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {courses.map((course, index) => (
              <Card key={course.id} className={`relative bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 ${course.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {course.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                    MÁS POPULAR
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  <CardTitle className="text-2xl font-bold text-white mb-2">{course.title}</CardTitle>
                  <CardDescription className="text-gray-300">{course.description}</CardDescription>
                  <div className="flex items-center justify-center gap-4 mt-4">
                    <div className="flex items-center gap-1 text-purple-400">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-purple-400">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">Max 2 alumnos</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-purple-400">${course.price.toLocaleString()}</span>
                    <span className="text-gray-400 ml-2">UYU</span>
                  </div>
                  
                  <ul className="space-y-2">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="pt-6">
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold"
                    onClick={() => handleAddToCart(course)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Agregar al Carrito
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Galería Section */}
      <section id="galeria" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mbf-royal">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-600">
                Galería de Trabajos
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explora algunos de los increíbles trabajos realizados en nuestro estudio
            </p>
          </div>

          <Gallery images={galleryImages} />
        </div>
      </section>

      {/* Instructor Section */}
      <section id="instructor" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mbf-royal">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600">
                      Conoce a tu Instructor
                    </span>
                  </h2>
                  <h3 className="text-3xl font-bold text-white mb-4">Nico Lemos</h3>
                  {/* Nueva descripción según solicitud */}
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Vive en Maldonado, Uruguay, donde combina su estado de tatuador con una academia prestigiosa para formar a los próximos tatuadores profesionales.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700">
                    <div className="text-3xl font-bold text-amber-400 mb-2">12+</div>
                    <div className="text-gray-300">Años de Experiencia</div>
                  </div>
                  <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700">
                    <div className="text-3xl font-bold text-amber-400 mb-2">500+</div>
                    <div className="text-gray-300">Tatuajes Realizados</div>
                  </div>
                  <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700">
                    <div className="text-3xl font-bold text-amber-400 mb-2">50+</div>
                    <div className="text-gray-300">Alumnos Formados</div>
                  </div>
                  <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700">
                    <div className="text-3xl font-bold text-amber-400 mb-2">3</div>
                    <div className="text-gray-300">Estilos Dominados</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-white">Especialidades</h4>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="outline" className="border-purple-500 text-purple-400 px-4 py-2">
                      <Palette className="w-4 h-4 mr-2" />
                      Blackwork
                    </Badge>
                    <Badge variant="outline" className="border-emerald-500 text-emerald-400 px-4 py-2">
                      <Zap className="w-4 h-4 mr-2" />
                      Realismo
                    </Badge>
                    <Badge variant="outline" className="border-amber-500 text-amber-400 px-4 py-2">
                      <Star className="w-4 h-4 mr-2" />
                      Color
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10">
                  {/* Foto del instructor actualizada */}
                  <img 
                    src="/images/instructor-nico.png" 
                    alt="Nico Lemos - Instructor Principal" 
                    className="w-full max-w-md mx-auto rounded-2xl shadow-2xl border-4 border-amber-400/30"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-amber-500 to-yellow-600 text-black p-4 rounded-xl shadow-lg">
                    <div className="flex items-center gap-2">
                      <Award className="w-6 h-6" />
                      <div>
                        <div className="font-bold">Certificado</div>
                        <div className="text-sm">Tatuador Profesional</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulta Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mbf-royal">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Agenda tu Consulta
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Reserva una consulta personalizada para conocer más sobre nuestros cursos
              </p>
            </div>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-8">
                <form id="consultation-form" action={handleConsultationSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">Nombre Completo</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        required 
                        className="bg-gray-700 border-gray-600 text-white"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Email</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        required 
                        className="bg-gray-700 border-gray-600 text-white"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">Teléfono</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        required 
                        className="bg-gray-700 border-gray-600 text-white"
                        placeholder="+598 XX XXX XXX"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="course" className="text-white">Curso de Interés</Label>
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
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-white">Fecha Preferida</Label>
                      <Input 
                        id="date" 
                        name="date" 
                        type="date" 
                        required 
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time" className="text-white">Hora Preferida</Label>
                      <Select name="time" required>
                        <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                          <SelectValue placeholder="Selecciona una hora" />
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

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">Mensaje (Opcional)</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      className="bg-gray-700 border-gray-600 text-white"
                      placeholder="Cuéntanos sobre tu experiencia previa o expectativas..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3"
                  >
                    {isSubmitting ? "Enviando..." : "Agendar Consulta"}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mbf-royal">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-600">
                  Preguntas Frecuentes
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Resolvemos las dudas más comunes sobre nuestros cursos
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-gray-800/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-purple-400">
                  ¿Necesito experiencia previa para tomar los cursos?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  No es necesario tener experiencia previa. Nuestro Curso Inicial está diseñado para principiantes absolutos. 
                  Te enseñaremos desde los fundamentos básicos hasta técnicas avanzadas, adaptándonos a tu nivel.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-gray-800/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-purple-400">
                  ¿Qué incluye el precio del curso?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  El precio incluye todas las clases teóricas y prácticas, materiales de práctica (piel sintética), 
                  uso de equipos profesionales durante las clases, y certificado al finalizar. Los equipos personales 
                  se adquieren por separado según tus necesidades.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-gray-800/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-purple-400">
                  ¿Cuántos estudiantes hay por clase?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Mantenemos un máximo de 2 estudiantes por clase para garantizar atención personalizada y 
                  un aprendizaje efectivo. Esto nos permite adaptar la enseñanza al ritmo de cada alumno.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-gray-800/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-purple-400">
                  ¿Ofrecen certificación oficial?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Sí, al completar cualquiera de nuestros cursos recibirás un certificado de INK LIFE TATTOO ACADEMY 
                  que avala tu formación. El Curso Full incluye certificación profesional que te habilita para trabajar 
                  en el campo del tatuaje.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-gray-800/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-purple-400">
                  ¿Hay posibilidades de trabajo después del curso?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Los estudiantes que completen el Curso Full con excelente desempeño tienen la posibilidad de 
                  trabajar en nuestro estudio. También te ayudamos con orientación para establecer tu propio 
                  emprendimiento o buscar oportunidades en otros estudios.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-gray-800/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-purple-400">
                  ¿Los cursos son presenciales u online?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Todos nuestros cursos son exclusivamente presenciales. Creemos que el tatuaje es un arte que 
                  requiere práctica directa y supervisión constante para garantizar la mejor formación y seguridad.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mbf-royal">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600">
                  Contacto
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                ¿Tienes preguntas? Estamos aquí para ayudarte
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Información de contacto */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Teléfono</p>
                        <p className="text-gray-300">+598 92 153 567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Email</p>
                        <p className="text-gray-300">info@inklifetattoo.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Ubicación</p>
                        <p className="text-gray-300">Maldonado, Uruguay</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                        <Instagram className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Instagram</p>
                        <p className="text-gray-300">@inklifetattoo</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Horarios de Atención</h4>
                  <div className="space-y-2 text-gray-300">
                    <p>Lunes a Viernes: 9:00 - 18:00</p>
                    <p>Sábados: 9:00 - 15:00</p>
                    <p>Domingos: Cerrado</p>
                  </div>
                </div>
              </div>

              {/* Formulario de contacto */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Envíanos un Mensaje</CardTitle>
                  <CardDescription className="text-gray-300">
                    Te responderemos lo antes posible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form id="contact-form" action={handleContactSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name" className="text-white">Nombre</Label>
                      <Input 
                        id="contact-name" 
                        name="name" 
                        required 
                        className="bg-gray-700 border-gray-600 text-white"
                        placeholder="Tu nombre"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="contact-email" className="text-white">Email</Label>
                      <Input 
                        id="contact-email" 
                        name="email" 
                        type="email" 
                        required 
                        className="bg-gray-700 border-gray-600 text-white"
                        placeholder="tu@email.com"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="contact-message" className="text-white">Mensaje</Label>
                      <Textarea 
                        id="contact-message" 
                        name="message" 
                        required 
                        className="bg-gray-700 border-gray-600 text-white"
                        placeholder="Tu mensaje..."
                        rows={5}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    >
                      {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/images/ink-life-logo-gold.png" 
                  alt="INK LIFE TATTOO ACADEMY" 
                  className="h-8 w-auto"
                />
                <div>
                  <h3 className="text-lg font-bold font-mbf-royal text-amber-400">INK LIFE</h3>
                  <p className="text-xs text-gray-400">TATTOO ACADEMY</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Formando tatuadores profesionales con más de 12 años de experiencia en el arte del tatuaje.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#inicio" className="hover:text-amber-400 transition-colors">Inicio</a></li>
                <li><a href="#cursos" className="hover:text-amber-400 transition-colors">Cursos</a></li>
                <li><a href="#galeria" className="hover:text-amber-400 transition-colors">Galería</a></li>
                <li><a href="#instructor" className="hover:text-amber-400 transition-colors">Instructor</a></li>
                <li><a href="#contacto" className="hover:text-amber-400 transition-colors">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
              <div className="mt-4">
                <p className="text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Maldonado, Uruguay
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  <Phone className="w-4 h-4 inline mr-1" />
                  +598 92 153 567
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 INK LIFE TATTOO ACADEMY. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  )
}

export default HomePage