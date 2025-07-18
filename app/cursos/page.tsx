import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { CheckCircle2, GraduationCap, Lightbulb, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-100 to-white text-black">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/images/course-info.png"
          alt="Tattoo Course Hero"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg font-mbf-royal">
            Nuestros Cursos de Tatuaje
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Transforma tu pasión en una profesión con nuestra formación integral.
          </p>
          <Button
            asChild
            className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <Link href="#course-details">Explorar Cursos</Link>
          </Button>
        </div>
      </section>

      {/* Course Details Section */}
      <section id="course-details" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 font-mbf-royal text-gray-800">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="flex flex-col items-center justify-center h-full">
                <GraduationCap className="w-16 h-16 text-purple-600 mb-4" />
                <CardTitle className="text-xl font-semibold mb-2">Instructores Expertos</CardTitle>
                <CardDescription className="text-gray-600">
                  Aprende de los mejores artistas con años de experiencia.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="flex flex-col items-center justify-center h-full">
                <Lightbulb className="w-16 h-16 text-purple-600 mb-4" />
                <CardTitle className="text-xl font-semibold mb-2">Metodología Innovadora</CardTitle>
                <CardDescription className="text-gray-600">
                  Programas actualizados con las últimas técnicas y tendencias.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="flex flex-col items-center justify-center h-full">
                <Users className="w-16 h-16 text-purple-600 mb-4" />
                <CardTitle className="text-xl font-semibold mb-2">Comunidad de Apoyo</CardTitle>
                <CardDescription className="text-gray-600">
                  Únete a una red de artistas y estudiantes apasionados.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="flex flex-col items-center justify-center h-full">
                <CheckCircle2 className="w-16 h-16 text-purple-600 mb-4" />
                <CardTitle className="text-xl font-semibold mb-2">Certificación Reconocida</CardTitle>
                <CardDescription className="text-gray-600">
                  Obtén un diploma que valida tus habilidades y conocimientos.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Offerings Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 font-mbf-royal text-gray-800">
            Nuestros Programas
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/student-tattooing-practice.png"
                alt="Curso Básico de Tatuaje"
                layout="fill"
                objectFit="cover"
                quality={90}
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 text-gray-800">Curso Básico de Tatuaje</h3>
              <p className="text-lg text-gray-700 mb-6">
                Ideal para principiantes, este curso cubre los fundamentos esenciales del tatuaje, desde la higiene y
                seguridad hasta las técnicas básicas de línea y sombreado.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Introducción a equipos y materiales</li>
                <li>Prácticas en piel sintética</li>
                <li>Diseño y composición básicos</li>
                <li>Higiene y normativa sanitaria</li>
              </ul>
              <Button
                asChild
                className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-6 py-3 rounded-full shadow-md"
              >
                <Link href="/contacto">Inscribirse Ahora</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16 lg:mt-24">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold mb-4 text-gray-800">Curso Avanzado de Realismo</h3>
              <p className="text-lg text-gray-700 mb-6">
                Perfecciona tus habilidades en el arte del realismo. Aprende técnicas avanzadas de sombreado, textura y
                detalle para crear tatuajes hiperrealistas.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Técnicas de sombreado avanzado</li>
                <li>Texturas y volúmenes</li>
                <li>Retratos y figuras humanas</li>
                <li>Manejo de color en realismo</li>
              </ul>
              <Button
                asChild
                className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-6 py-3 rounded-full shadow-md"
              >
                <Link href="/contacto">Inscribirse Ahora</Link>
              </Button>
            </div>
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-xl order-1 lg:order-2">
              <Image
                src="/images/tattoo-artist-working.png"
                alt="Curso Avanzado de Realismo"
                layout="fill"
                objectFit="cover"
                quality={90}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 font-mbf-royal text-gray-800">
            Preguntas Frecuentes
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image src="/images/course-faq.png" alt="FAQ" layout="fill" objectFit="cover" quality={90} />
            </div>
            <div className="space-y-6">
              <Card className="p-6 shadow-md bg-white">
                <CardTitle className="text-xl font-semibold mb-2 text-gray-800">
                  ¿Necesito experiencia previa?
                </CardTitle>
                <CardDescription className="text-gray-700">
                  No, nuestro curso básico está diseñado para principiantes sin experiencia previa.
                </CardDescription>
              </Card>
              <Card className="p-6 shadow-md bg-white">
                <CardTitle className="text-xl font-semibold mb-2 text-gray-800">
                  ¿Qué materiales están incluidos?
                </CardTitle>
                <CardDescription className="text-gray-700">
                  Todos los materiales necesarios para las prácticas están incluidos en el costo del curso.
                </CardDescription>
              </Card>
              <Card className="p-6 shadow-md bg-white">
                <CardTitle className="text-xl font-semibold mb-2 text-gray-800">
                  ¿Hay opciones de financiación?
                </CardTitle>
                <CardDescription className="text-gray-700">
                  Sí, ofrecemos planes de pago flexibles. Contáctanos para más detalles.
                </CardDescription>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-purple-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-mbf-royal">
            ¡Comienza tu Carrera como Tatuador Hoy!
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            No esperes más para convertir tu pasión en una realidad. Inscríbete en nuestros cursos y da el primer paso
            hacia una emocionante carrera en el arte del tatuaje.
          </p>
          <Button
            asChild
            className="bg-white text-purple-700 hover:bg-gray-200 text-lg px-10 py-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <Link href="/contacto">Contáctanos para Inscribirte</Link>
          </Button>
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
