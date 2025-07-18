"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

interface Product {
  id: string
  name: string
  price: number
  image: string
  description: string
}

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col bg-white text-black">
      <CardHeader className="p-0">
        <div className="relative w-full h-48">
          <Image
            src={product.image || "/placeholder.png"}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-1">
        <CardTitle className="text-xl font-bold mb-2 text-gray-800">{product.name}</CardTitle>
        <p className="text-gray-600 text-sm line-clamp-3">{product.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-4 border-t bg-gray-50">
        <span className="text-2xl font-bold text-purple-600">${product.price.toFixed(2)}</span>
        <Button
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md"
          onClick={() => onAddToCart(product)}
        >
          Añadir al Carrito
        </Button>
      </CardFooter>
    </Card>
  )
}
