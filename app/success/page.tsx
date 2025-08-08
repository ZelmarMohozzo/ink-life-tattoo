"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [message, setMessage] = useState("")

  useEffect(() => {
    if (sessionId) {
      // In a real application, you would verify the session ID with your backend
      // For this example, we'll just simulate success
      setTimeout(() => {
        setStatus("success")
        setMessage("¡Tu compra ha sido exitosa! Gracias por tu pedido.")
      }, 1500)
    } else {
      setStatus("error")
      setMessage("No se encontró el ID de sesión. La compra no pudo ser verificada.")
    }
  }, [sessionId])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4">
      {status === "loading" && (
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500"></div>
          <p className="mt-4 text-xl">Procesando tu pago...</p>
        </div>
      )}

      {status === "success" && (
        <div className="text-center">
          <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-6 animate-bounce" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">¡Pago Exitoso!</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">{message}</p>
          <Button
            asChild
            className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <Link href="/">Volver al Inicio</Link>
          </Button>
        </div>
      )}

      {status === "error" && (
        <div className="text-center">
          <XCircle className="h-24 w-24 text-red-500 mx-auto mb-6 animate-shake" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Error en el Pago</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">{message}</p>
          <Button
            asChild
            className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <Link href="/tienda">Intentar de Nuevo</Link>
          </Button>
        </div>
      )}
    </div>
  )
}
