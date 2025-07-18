"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "./ui/button"
import { useCart } from "@/lib/cart-context"

interface CartIconProps {
  onClick: () => void
}

export function CartIcon({ onClick }: CartIconProps) {
  const { cartItems } = useCart()
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <Button variant="ghost" className="relative" onClick={onClick}>
      <ShoppingCart className="h-6 w-6" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-purple-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">
          {itemCount}
        </span>
      )}
      <span className="sr-only">Carrito de compras</span>
    </Button>
  )
}
