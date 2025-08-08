"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductCard from "@/components/product-card"
import { courses, tattooSizes, removalSizes } from "@/lib/products"

export default function TiendaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-100 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Tienda INK LIFE</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestros cursos profesionales de tatuaje y servicios especializados. Todos nuestros productos
            incluyen la calidad y experiencia que nos caracteriza.
          </p>
        </div>

        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="courses">Cursos</TabsTrigger>
            <TabsTrigger value="tattoos">Tatuajes</TabsTrigger>
            <TabsTrigger value="removal">Remoción Láser</TabsTrigger>
          </TabsList>

          <TabsContent value="courses">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <ProductCard key={course.id} product={course} type="course" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tattoos">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProductCard
                product={{
                  type: "tattoo",
                  name: "Tatuaje Personalizado",
                  description:
                    "Tatuaje profesional realizado por Nico Lemos. Trabajamos todos los estilos: Blackwork, Realismo, Neotradicional, Dotwork, Tribales.",
                  sizes: tattooSizes,
                }}
                type="tattoo"
              />
            </div>
          </TabsContent>

          <TabsContent value="removal">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProductCard
                product={{
                  type: "removal",
                  name: "Remoción de Tatuaje con Láser",
                  description:
                    "Servicio profesional de remoción de tatuajes con tecnología láser de última generación. Proceso seguro y efectivo.",
                  sizes: removalSizes,
                }}
                type="removal"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
