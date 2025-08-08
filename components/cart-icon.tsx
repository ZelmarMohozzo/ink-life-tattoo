"use client"

import { ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"

export default function CartIcon() {
  const { state, dispatch } = useCart()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => dispatch({ type: "TOGGLE_CART" })}
      className="relative text-white hover:text-purple-400 transition-colors"
    >
      <ShoppingCart className="w-6 h-6" />
      {state.items.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {state.items.reduce((total, item) => total + item.quantity, 0)}
        </span>
      )}
    </Button>
  )
}
