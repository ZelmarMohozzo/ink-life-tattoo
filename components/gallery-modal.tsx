"use client"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight, Share2 } from "lucide-react"

interface GalleryModalProps {
  isOpen: boolean
  onClose: () => void
  currentImage: string
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
  const [isAnimating, setIsAnimating] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true)
      setImageLoaded(false)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
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
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose, onNext, onPrev])

  if (!isOpen && !isAnimating) return null

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setIsAnimating(false)
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "INK LIFE TATTOO - Trabajo de Nico Lemos",
          text: currentAlt || "Increíble trabajo de tatuaje",
          url: window.location.href,
        })
      } catch (err) {
        console.log("Error sharing:", err)
      }
    }
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
      onAnimationEnd={handleAnimationEnd}
    >
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 p-4 md:p-6 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center justify-between">
          <div className="text-white">
            <h3 className="text-lg md:text-xl font-semibold">INK LIFE TATTOO</h3>
            <p className="text-sm text-gray-300">
              {currentIndex + 1} de {totalImages}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleShare()
              }}
              className="p-2 text-white hover:text-amber-400 transition-colors rounded-full hover:bg-white/10"
              aria-label="Compartir"
            >
              <Share2 size={20} />
            </button>

            <button
              onClick={onClose}
              className="p-2 text-white hover:text-amber-400 transition-colors rounded-full hover:bg-white/10"
              aria-label="Cerrar modal"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white hover:text-amber-400 transition-colors rounded-full hover:bg-white/10 backdrop-blur-sm"
        aria-label="Imagen anterior"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white hover:text-amber-400 transition-colors rounded-full hover:bg-white/10 backdrop-blur-sm"
        aria-label="Siguiente imagen"
      >
        <ChevronRight size={32} />
      </button>

      {/* Main content */}
      <div
        className={`relative max-w-6xl max-h-[90vh] mx-4 transition-transform duration-300 ${
          isOpen ? "scale-100" : "scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Loading spinner */}
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        <img
          src={currentImage || "/placeholder.svg"}
          alt={currentAlt || "Trabajo de tatuaje por Nico Lemos"}
          className={`max-h-[90vh] max-w-full object-contain rounded-lg shadow-2xl transition-opacity duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
        <div className="text-center">
          <p className="text-white text-sm md:text-base mb-2">{currentAlt || "Trabajo realizado por Nico Lemos"}</p>
          <div className="flex items-center justify-center space-x-4 text-xs md:text-sm text-gray-300">
            <span>INK LIFE TATTOO ACADEMY</span>
            <span>•</span>
            <span>Maldonado, Uruguay</span>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800">
        <div
          className="h-full bg-amber-400 transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / totalImages) * 100}%` }}
        />
      </div>
    </div>
  )
}
