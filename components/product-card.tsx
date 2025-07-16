"use client"

import { useState } from "react"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/lib/cart-context"
import type { Course, ServiceSize } from "@/lib/products"

interface ProductCardProps {
  product: Course | { type: "tattoo" | "removal"; name: string; description: string; sizes: ServiceSize[] }
  type: "course" | "tattoo" | "removal"
}

export default function ProductCard({ product, type }: ProductCardProps) {
  const { dispatch } = useCart()
  const [selectedSize, setSelectedSize] = useState<string>("")
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    if (type === "course") {
      const course = product as Course
      dispatch({
        type: "ADD_ITEM",
        payload: {
          id: course.id,
          type: "course",
          name: course.name,
          price: course.price,
          quantity,
          details: `${course.duration} - ${course.level}`,
          image: course.image,
        },
      })
    } else {
      const service = product as { type: "tattoo" | "removal"; name: string; description: string; sizes: ServiceSize[] }
      if (!selectedSize) return

      const sizeData = service.sizes.find((s) => s.id === selectedSize)
      if (!sizeData) return

      dispatch({
        type: "ADD_ITEM",
        payload: {
          id: `${service.type}-${selectedSize}-${Date.now()}`,
          type: service.type,
          name: service.name,
          price: sizeData.price,
          quantity,
          size: selectedSize,
          details: `${sizeData.name} (${sizeData.dimensions})`,
        },
      })
    }

    dispatch({ type: "OPEN_CART" })
    setQuantity(1)
    setSelectedSize("")
  }

  if (type === "course") {
    const course = product as Course
    return (
      <Card className="h-full flex flex-col">
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl">{course.name}</CardTitle>
            <Badge variant="secondary">{course.level}</Badge>
          </div>
          <p className="text-gray-600">{course.description}</p>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <div className="space-y-2 mb-4">
            <p className="text-sm text-gray-500">Duración: {course.duration}</p>
            <div className="space-y-1">
              <p className="text-sm font-medium">Incluye:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                {course.features.slice(0, 4).map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
                {course.features.length > 4 && (
                  <li className="text-purple-600">• Y {course.features.length - 4} más...</li>
                )}
              </ul>
            </div>
          </div>
          <div className="mt-auto space-y-4">
            <div className="text-center">
              <span className="text-2xl font-bold text-purple-600">${course.price} USD</span>
            </div>
            <Button onClick={handleAddToCart} className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Agregar al Carrito
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  const service = product as { type: "tattoo" | "removal"; name: string; description: string; sizes: ServiceSize[] }
  const selectedSizeData = service.sizes.find((s) => s.id === selectedSize)

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl">{service.name}</CardTitle>
        <p className="text-gray-600">{service.description}</p>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Seleccionar tamaño:</label>
          <Select value={selectedSize} onValueChange={setSelectedSize}>
            <SelectTrigger>
              <SelectValue placeholder="Elige el tamaño" />
            </SelectTrigger>
            <SelectContent>
              {service.sizes.map((size) => (
                <SelectItem key={size.id} value={size.id}>
                  {size.name} ({size.dimensions}) - ${size.price} USD
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {selectedSizeData?.description && (
            <p className="text-sm text-gray-500 mt-1">{selectedSizeData.description}</p>
          )}
        </div>

        <div className="mt-auto space-y-4">
          {selectedSizeData && (
            <div className="text-center">
              <span className="text-2xl font-bold text-purple-600">${selectedSizeData.price} USD</span>
            </div>
          )}
          <Button
            onClick={handleAddToCart}
            disabled={!selectedSize}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white disabled:opacity-50"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Agregar al Carrito
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
