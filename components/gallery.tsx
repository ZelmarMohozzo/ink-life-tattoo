"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GalleryModal from "./gallery-modal"
import { Trash2 } from "lucide-react"

// Definir las categorías de tatuajes
const categories = [
  { id: "all", label: "Todos" },
  { id: "blackwork", label: "Blackwork", color: "bg-gray-800" },
  { id: "realismo", label: "Realismo", color: "bg-amber-700" },
  { id: "neotradicional", label: "Neotradicional", color: "bg-red-700" },
  { id: "minimalista", label: "Minimalista", color: "bg-zinc-600" },
  { id: "acuarela", label: "Acuarela", color: "bg-blue-600" },
]

// Función para asignar categorías aleatorias a las imágenes
const assignRandomCategory = (index: number) => {
  if (index % 5 === 0) return "blackwork"
  if (index % 7 === 0) return "realismo"
  if (index % 3 === 0) return "neotradicional"
  if (index % 4 === 0) return "minimalista"
  if (index % 6 === 0) return "acuarela"

  const categoryIds = categories.slice(1).map((cat) => cat.id)
  return categoryIds[Math.floor(Math.random() * categoryIds.length)]
}

// Función para determinar el tamaño de la imagen en el collage
const getItemSize = (index: number) => {
  if (index % 7 === 0) return "gallery-item-large"
  if (index % 5 === 0) return "gallery-item-wide"
  if (index % 3 === 0) return "gallery-item-tall"
  return ""
}

// Función para obtener el color de la categoría
const getCategoryColor = (categoryId: string) => {
  const category = categories.find((cat) => cat.id === categoryId)
  return category?.color || "bg-gray-800"
}

interface GalleryProps {
  images: { src: string; alt: string }[]
}

export default function Gallery({ images: initialImages }: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({})
  const [imagesWithCategories, setImagesWithCategories] = useState<Array<{ src: string; category: string }>>([])
  const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set())
  const galleryRef = useRef<HTMLDivElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Estado para controlar cuántas imágenes se muestran
  const initialDisplayCount = 24 // Número inicial de imágenes a mostrar (aumentado para miniaturas)
  const loadMoreCount = 24 // Cuántas imágenes más cargar por clic
  const [displayCount, setDisplayCount] = useState(initialDisplayCount)

  // Generar las imágenes con categorías al inicio, usando las imágenes pasadas por prop
  useEffect(() => {
    const images = initialImages.map((img, i) => ({
      src: img.src,
      category: assignRandomCategory(i),
    }))
    setImagesWithCategories(images)
    setDisplayCount(initialDisplayCount) // Reset display count when images change
  }, [initialImages])

  // Configurar Intersection Observer para animaciones
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleImages((prev) => new Set([...prev, index]))
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    )

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  // Observar elementos cuando cambia la categoría o el número de imágenes mostradas
  useEffect(() => {
    if (observerRef.current) {
      // Limpiar observaciones anteriores
      observerRef.current.disconnect()
      setVisibleImages(new Set())

      // Observar nuevos elementos después de un pequeño delay
      setTimeout(() => {
        const elements = document.querySelectorAll(".gallery-item")
        elements.forEach((el) => {
          if (observerRef.current) {
            observerRef.current.observe(el)
          }
        })
      }, 100)
    }
  }, [selectedCategory, displayCount]) // Add displayCount as a dependency

  // Manejar la apertura del modal
  const handleImageClick = (index: number) => {
    setSelectedImage(index)
    setModalOpen(true)
  }

  // Manejar la carga de imágenes
  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }))
  }

  // Filtrar imágenes por categoría
  const filteredImages = imagesWithCategories.filter(
    (img) => selectedCategory === "all" || img.category === selectedCategory,
  )

  // Imágenes a mostrar (limitadas por displayCount)
  const imagesToDisplay = filteredImages.slice(0, displayCount)

  // Función para cargar más imágenes
  const loadMoreImages = () => {
    setDisplayCount((prevCount) => Math.min(prevCount + loadMoreCount, filteredImages.length))
  }

  // Función para eliminar todo (solo para demostración, no persistente)
  const deleteEverything = () => {
    if (confirm("¿Estás seguro de que quieres eliminar todo? Esta acción no se puede deshacer.")) {
      setImagesWithCategories([])
      setVisibleImages(new Set())
      setLoadedImages({})
      alert("¡Todo eliminado!")
    }
  }

  // Estadísticas de la galería
  const stats = [
    { label: "Total de Tatuajes", value: imagesWithCategories.length },
    { label: "Blackwork", value: imagesWithCategories.filter((img) => img.category === "blackwork").length },
    { label: "Realismo", value: imagesWithCategories.filter((img) => img.category === "realismo").length },
    { label: "Neotradicional", value: imagesWithCategories.filter((img) => img.category === "neotradicional").length },
  ]

  return (
    <div className="py-12" ref={galleryRef}>
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mbf-royal">Galería de Tatuajes</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Explora nuestra colección de trabajos realizados por nuestros artistas y estudiantes. Cada pieza refleja
          nuestra pasión por el arte del tatuaje.
        </p>
      </div>
      {/* Estadísticas */}
      
      {/* Tabs de categorías */}
      <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <TabsList className="bg-gray-800">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="data-[state=active]:bg-gray-700">
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <Button
            onClick={deleteEverything}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white border-0 font-bold"
          >
            <Trash2 className="h-4 w-4" />
            ¡Elimínalo ya!
          </Button>
        </div>

        {/* Contenido de las tabs */}
        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            <div className="gallery-collage">
              {imagesToDisplay.map((image, index) => {
                const originalIndex = imagesWithCategories.findIndex((img) => img.src === image.src)
                const isLoaded = loadedImages[originalIndex]
                const itemSizeClass = getItemSize(originalIndex)
                const categoryColor = getCategoryColor(image.category)
                const isVisible = visibleImages.has(originalIndex)

                // Determinar dirección de animación basada en posición
                const animationDirection = index % 2 === 0 ? "slide-in-left" : "slide-in-right"
                const animationDelay = (index % 6) * 100 // Escalonar animaciones

                return (
                  <div
                    key={originalIndex}
                    data-index={originalIndex}
                    className={`gallery-item ${itemSizeClass} ${isLoaded ? "" : "skeleton"} ${
                      isVisible ? animationDirection : "gallery-item-hidden"
                    }`}
                    style={{
                      animationDelay: `${animationDelay}ms`,
                    }}
                    onClick={() => handleImageClick(originalIndex)}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={`Tatuaje ${originalIndex + 1}`}
                      className={`gallery-image ${isLoaded ? "opacity-100" : "opacity-0"}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                      onLoad={() => handleImageLoad(originalIndex)}
                      priority={index < 8}
                    />

                    <div className={`gallery-category-badge ${categoryColor}`}>
                      {categories.find((cat) => cat.id === image.category)?.label}
                    </div>

                    <div className="gallery-overlay">
                      <h3 className="text-lg font-semibold">Tatuaje #{originalIndex + 1}</h3>
                      <p className="text-sm opacity-80">Haz clic para ver más detalles</p>
                    </div>
                  </div>
                )
              })}
            </div>
            {filteredImages.length > displayCount && (
              <div className="text-center mt-8">
                <Button
                  onClick={loadMoreImages}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full"
                >
                  Ver más tatuajes
                </Button>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
      {/* Modal para ver la imagen en grande */}
      <GalleryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        currentImage={imagesWithCategories[selectedImage || 0]?.src}
        currentAlt={`Tatuaje ${(selectedImage || 0) + 1}`}
        onNext={() => setSelectedImage((prev) => (prev !== null ? (prev + 1) % imagesWithCategories.length : 0))}
        onPrev={() =>
          setSelectedImage((prev) =>
            prev !== null ? (prev - 1 + imagesWithCategories.length) % imagesWithCategories.length : 0,
          )
        }
        currentIndex={selectedImage || 0}
        totalImages={imagesWithCategories.length}
      />
    </div>
  )
}
