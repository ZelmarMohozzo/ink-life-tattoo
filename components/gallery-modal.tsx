"use client"

import { useEffect, useCallback } from "react"
import { X, ChevronLeft, ChevronRight, Download, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface GalleryModalProps {
  isOpen: boolean
  onClose: () => void
  currentImage?: string
  currentAlt?: string
  onNext: () => void
  onPrev: () => void
  currentIndex: number
  totalImages: number
}

export default function GalleryModal({
  isOpen,
  onClose,
  currentImage,
  currentAlt,
  onNext,
  onPrev,
  currentIndex,
  totalImages,
}: GalleryModalProps) {
  // Manejar teclas del teclado
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isOpen) return

      switch (event.key) {
        case "Escape":
          onClose()
          break
        case "ArrowLeft":
          onPrev()
          break
        case "ArrowRight":
          onNext()
          break
      }
    },
    [isOpen, onClose, onNext, onPrev],
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleDownload = async () => {
    if (!currentImage) return

    try {
      const response = await fetch(currentImage)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = `tatuaje-${currentIndex + 1}.jpg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Error downloading image:", error)
    }
  }

  const handleShare = async () => {
    if (navigator.share && currentImage) {
      try {
        await navigator.share({
          title: currentAlt || `Tatuaje ${currentIndex + 1}`,
          text: "Mira este increíble tatuaje de Ink Life Academy",
          url: window.location.href,
        })
      } catch (error) {
        console.error("Error sharing:", error)
      }
    } else {
      // Fallback: copiar URL al clipboard
      navigator.clipboard.writeText(window.location.href)
    }
  }

  if (!isOpen || !currentImage) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      {/* Overlay para cerrar */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Contenido del modal */}
      <div className="relative max-w-7xl max-h-[90vh] mx-4">
        {/* Controles superiores */}
        <div className="absolute top-4 right-4 z-10 flex gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={handleShare}
            className="bg-black/50 hover:bg-black/70 text-white border-0"
          >
            <Share2 className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={handleDownload}
            className="bg-black/50 hover:bg-black/70 text-white border-0"
          >
            <Download className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={onClose}
            className="bg-black/50 hover:bg-black/70 text-white border-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Contador */}
        <div className="absolute top-4 left-4 z-10 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {totalImages}
        </div>

        {/* Imagen principal */}
        <div className="relative">
          <Image
            src={currentImage || "/placeholder.svg"}
            alt={currentAlt || `Imagen ${currentIndex + 1}`}
            width={1200}
            height={800}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            priority
          />
        </div>

        {/* Controles de navegación */}
        <Button
          variant="secondary"
          size="sm"
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-0 p-2"
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="secondary"
          size="sm"
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-0 p-2"
          disabled={currentIndex === totalImages - 1}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Información de la imagen */}
        <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg backdrop-blur-sm">
          <h3 className="text-lg font-semibold mb-1">{currentAlt || `Tatuaje ${currentIndex + 1}`}</h3>
          <p className="text-sm opacity-80">Trabajo realizado en Ink Life Academy - Escuela de Tatuajes</p>
        </div>
      </div>

      {/* Indicadores de navegación por teclado */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-xs text-center">
        <p>Usa ← → para navegar • ESC para cerrar</p>
      </div>
    </div>
  )
}
