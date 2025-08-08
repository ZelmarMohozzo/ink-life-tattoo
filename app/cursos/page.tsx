"use client"

import ProductCard from "@/components/product-card"
import { courses } from "@/lib/products"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function CursosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-100 to-white text-black py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-purple-600 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver al Inicio
          </Link>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Nuestros Cursos de Tatuaje</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre la formación profesional que te convertirá en un tatuador experto. Todos nuestros cursos son
            presenciales y con atención personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <ProductCard key={course.id} product={course} type="course" />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">¿Tienes preguntas o quieres agendar una consulta gratuita?</p>
          <Link href="/#contacto">
            <Button className="bg-purple-500 hover:bg-purple-600 text-white font-bold px-8 py-4 text-lg rounded-full shadow-lg transform transition-all duration-300 hover:scale-105">
              CONTACTAR AHORA
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
