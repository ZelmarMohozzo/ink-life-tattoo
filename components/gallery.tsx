"use client"

import { useState } from "react"
import GalleryModal from "./gallery-modal"

interface GalleryProps {
  images: {
    src: string
    alt: string
  }[]
}

export default function Gallery({ images }: GalleryProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [filter, setFilter] = useState("todos")

  const categories = [
    { id: "todos", name: "Todos", count: 38 },
    { id: "realismo", name: "Realismo", count: 21 },
    { id: "mandala", name: "Mandala", count: 6 },
    { id: "blackwork", name: "Blackwork", count: 11 },
    { id: "color", name: "Color", count: 1 },
  ]

  const getFilteredImages = () => {
    if (filter === "todos") return images

    const filterMap: { [key: string]: number[] } = {
      realismo: [2, 3, 9, 10, 12, 14, 16, 17, 18, 19, 22, 23, 24, 26, 27, 29, 34, 35, 36, 37], // Índices de imágenes realistas
      mandala: [8, 11, 15, 30, 33], // Índices de mandalas
      blackwork: [0, 1, 4, 5, 6, 7, 13, 20, 21, 25, 31, 33], // Índices de blackwork
      color: [32],
    }

    return images.filter((_, index) => filterMap[filter]?.includes(index))
  }

  const filteredImages = getFilteredImages()

  const openModal = (imageSrc: string) => {
    const imageIndex = images.findIndex((img) => img.src === imageSrc)
    setCurrentImageIndex(imageIndex)
    setModalOpen(true)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div>
      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 font-mbf-royal">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setFilter(category.id)}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
              filter === category.id
                ? "bg-indigo-700 text-emerald-300 shadow-lg transform scale-105"
                : "bg-black/50 text-gray-300 hover:bg-indigo-700 hover:text-white border border-gray-600"
            }`}
          >
            {category.name}
            <span className="ml-2 text-xs opacity-75">({category.count})</span>
          </button>
        ))}
      </div>

      {/* Grid de imágenes */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
        {filteredImages.map((image, index) => (
          <div
            key={`${filter}-${index}`}
            className="group relative aspect-square overflow-hidden rounded-lg border border-white-400/20 cursor-pointer hover:border-white-400 transition-all duration-500 hover:shadow-xl hover:shadow-white-400/20 hover:-translate-y-2"
            onClick={() => openModal(image.src)}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                <div className="w-12 h-12 rounded-full bg-white-500/90 flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Etiqueta de categoría */}
            <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="px-2 py-1 bg-black/70 text-purple-400 text-xs rounded-full backdrop-blur-sm">
                {image.alt.includes("mandala") || image.alt.includes("geométrico")
                  ? "Mandala"
                  : image.alt.includes("realista") ||
                      image.alt.includes("Jesucristo") ||
                      image.alt.includes("águila") ||
                      image.alt.includes("tigre")
                    ? "Realismo"
                    : image.alt.includes("dragón")
                      ? "Color"
                      : "Blackwork"}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Mensaje si no hay resultados */}
      {filteredImages.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No se encontraron trabajos en esta categoría.</p>
        </div>
      )}

      {/* Estadísticas */}
      <div className="mt-12 md:mt-16 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-4 md:p-6 rounded-lg border border-gray-700">
            <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">{images.length}+</div>
            <div className="text-gray-300 text-sm md:text-base">Trabajos Realizados</div>
          </div>
          <div className="bg-gray-800/50 p-4 md:p-6 rounded-lg border border-gray-700">
            <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">12+</div>
            <div className="text-gray-300 text-sm md:text-base">Años de Experiencia</div>
          </div>
          <div className="bg-gray-800/50 p-4 md:p-6 rounded-lg border border-gray-700">
            <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">150+</div>
            <div className="text-gray-300 text-sm md:text-base">Clientes Satisfechos</div>
          </div>
          <div className="bg-gray-800/50 p-4 md:p-6 rounded-lg border border-gray-700">
            <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">5</div>
            <div className="text-gray-300 text-sm md:text-base">Estilos Dominados</div>
          </div>
        </div>
      </div>

      <GalleryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        currentImage={images[currentImageIndex]?.src}
        currentAlt={images[currentImageIndex]?.alt}
        onNext={nextImage}
        onPrev={prevImage}
        currentIndex={currentImageIndex}
        totalImages={images.length}
      />
    </div>
  )
}
