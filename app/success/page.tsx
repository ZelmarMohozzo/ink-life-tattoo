"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { CheckCircle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")
  const [orderDetails, setOrderDetails] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (sessionId) {
      // In a real app, you'd fetch the order details from your backend
      // For now, we'll simulate it
      setTimeout(() => {
        setOrderDetails({
          id: sessionId,
          date: new Date().toLocaleDateString(),
          items: JSON.parse(localStorage.getItem("ink-life-cart") || '{"items": []}').items,
          total: JSON.parse(localStorage.getItem("ink-life-cart") || '{"total": 0}').total,
        })
        setLoading(false)
        // Clear the cart after successful purchase
        localStorage.removeItem("ink-life-cart")
      }, 1000)
    }
  }, [sessionId])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white via-gray-100 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p>Procesando tu pedido...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-100 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-green-600 mb-2">¡Pago Exitoso!</h1>
            <p className="text-gray-600">
              Tu pedido ha sido procesado correctamente. Te hemos enviado un email de confirmación.
            </p>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Resumen del Pedido</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Número de pedido:</span>
                  <span className="font-mono text-sm">{orderDetails?.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Fecha:</span>
                  <span>{orderDetails?.date}</span>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-medium mb-2">Productos:</h4>
                  <div className="space-y-2">
                    {orderDetails?.items?.map((item: any, index: number) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span>
                          {item.name} {item.details && `(${item.details})`} x{item.quantity}
                        </span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t pt-4 flex justify-between font-semibold text-lg">
                  <span>Total:</span>
                  <span className="text-purple-600">${orderDetails?.total?.toFixed(2)} USD</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center space-y-4">
            <p className="text-gray-600">
              Para cursos presenciales, nos pondremos en contacto contigo en las próximas 24 horas para coordinar
              horarios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver al Inicio
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/tienda">Seguir Comprando</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
