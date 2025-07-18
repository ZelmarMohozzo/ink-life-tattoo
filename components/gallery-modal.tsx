"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface GalleryModalProps {
  isOpen: boolean
  onClose: () => void
  currentImage: string
  currentAlt: string
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
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none shadow-none">
        <div className="relative flex items-center justify-center h-[70vh] md:h-[80vh]">
          <Image
            src={currentImage || "/placeholder.png"}
            alt={currentAlt}
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={onPrev}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={onNext}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
          <div className="absolute bottom-4 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
            {currentIndex + 1} / {totalImages}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
