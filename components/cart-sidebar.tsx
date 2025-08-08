"use client"

import { X, Plus, Minus, Trash2, ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { tattooSizes, removalSizes } from "@/lib/products"

export default function CartSidebar() {
  const { state, dispatch } = useCart()

  const handleQuantityChange = (id: string, newQuantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity: newQuantity } })
  }

  const handleSizeChange = (id: string, newSize: string, type: "tattoo" | "removal") => {
    const sizes = type === "tattoo" ? tattooSizes : removalSizes
    const sizeData = sizes.find((s) => s.id === newSize)
    if (sizeData) {
      dispatch({
        type: "UPDATE_SIZE",
        payload: { id, size: newSize, price: sizeData.price },
      })
    }
  }

  const handleCheckout = async () => {
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: state.items,
        }),
      })

      const { url } = await response.json()
      window.location.href = url
    } catch (error) {
      console.error("Error creating checkout session:", error)
    }
  }

  if (!state.isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => dispatch({ type: "CLOSE_CART" })} />

      {/* Sidebar */}
      <div className="relative ml-auto w-full max-w-md bg-white shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="text-lg font-semibold">Carrito de Compras</h2>
            <Button variant="ghost" size="sm" onClick={() => dispatch({ type: "CLOSE_CART" })}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {state.items.length === 0 ? (
              <div className="text-center text-gray-500 mt-8">
                <ShoppingCart className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>Tu carrito está vacío</p>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <Card key={`${item.id}-${item.size || "default"}`}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-medium">{item.name}</h3>
                          {item.size && (
                            <p className="text-sm text-gray-500">
                              Tamaño:{" "}
                              {tattooSizes.find((s) => s.id === item.size)?.name ||
                                removalSizes.find((s) => s.id === item.size)?.name}
                            </p>
                          )}
                          {item.details && <p className="text-sm text-gray-500">{item.details}</p>}
                          <p className="font-semibold text-purple-600">${item.price} USD</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Size selector for tattoos and removals */}
                      {(item.type === "tattoo" || item.type === "removal") && (
                        <div className="mt-3">
                          <Select
                            value={item.size}
                            onValueChange={(value) => handleSizeChange(item.id, value, item.type)}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Seleccionar tamaño" />
                            </SelectTrigger>
                            <SelectContent>
                              {(item.type === "tattoo" ? tattooSizes : removalSizes).map((size) => (
                                <SelectItem key={size.id} value={size.id}>
                                  {size.name} ({size.dimensions}) - ${size.price}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      )}

                      {/* Quantity controls */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                        <p className="font-semibold">${(item.price * item.quantity).toFixed(2)} USD</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span className="text-purple-600">${state.total.toFixed(2)} USD</span>
              </div>
              <Button
                onClick={handleCheckout}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                size="lg"
              >
                Proceder al Pago
              </Button>
              <Button variant="outline" onClick={() => dispatch({ type: "CLEAR_CART" })} className="w-full">
                Vaciar Carrito
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
