"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import Image from "next/image"
import { MinusCircle, PlusCircle, Trash2 } from "lucide-react"
import { Separator } from "./ui/separator"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useToast } from "./ui/use-toast"

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart()
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)
  const { toast } = useToast()

  const handleCheckout = async () => {
    setIsProcessing(true)
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cartItems }),
      })

      if (!response.ok) {
        const errorData = await response.text()
        throw new Error(`Failed to create checkout session: ${errorData}`)
      }

      const { sessionId } = await response.json()
      router.push(`https://checkout.stripe.com/pay/${sessionId}`)
      clearCart() // Clear cart after successful checkout initiation
      onClose()
    } catch (error: any) {
      console.error("Error during checkout:", error)
      toast({
        title: "Error en el pago",
        description: error.message || "Hubo un problema al iniciar el proceso de pago. Inténtalo de nuevo.",
        variant: "destructive",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:w-[400px] flex flex-col bg-white text-black">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold text-gray-800">Tu Carrito</SheetTitle>
          <SheetDescription className="text-gray-600">
            Revisa los artículos en tu carrito antes de proceder al pago.
          </SheetDescription>
        </SheetHeader>
        <Separator className="my-4" />
        <div className="flex-1 overflow-y-auto pr-4 -mr-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 mt-8">Tu carrito está vacío.</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-2 border rounded-lg shadow-sm bg-gray-50">
                  <Image
                    src={item.image || "/placeholder.png"}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-6 w-6 text-gray-700 hover:bg-gray-200 bg-transparent"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <MinusCircle className="h-4 w-4" />
                      </Button>
                      <span className="text-gray-800 font-medium">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-6 w-6 text-gray-700 hover:bg-gray-200 bg-transparent"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <PlusCircle className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="ml-auto text-red-500 hover:bg-red-100"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Eliminar</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <Separator className="my-4" />
        <div className="flex justify-between items-center text-lg font-bold text-gray-900">
          <span>Total:</span>
          <span>${getTotalPrice().toFixed(2)}</span>
        </div>
        <Button
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 mt-4 text-lg font-semibold"
          onClick={handleCheckout}
          disabled={cartItems.length === 0 || isProcessing}
        >
          {isProcessing ? "Procesando..." : "Proceder al Pago"}
        </Button>
      </SheetContent>
    </Sheet>
  )
}
