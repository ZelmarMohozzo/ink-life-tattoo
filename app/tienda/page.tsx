"use client"

import { Button } from "@/components/ui/button"
import { products } from "@/lib/products"
import { useCart } from "@/lib/cart-context"
import { useState } from "react"
import { CartSidebar } from "@/components/cart-sidebar"
import { ProductCard } from "@/components/product-card"

export default function StorePage() {
  const { addToCart } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-100 to-white text-black">
      {/* Header for Store Page */}
      <header className="bg-black/50 backdrop-blur-sm sticky top-0 z-50 border-b border-purple-500/20 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a href="/" className="text-white hover:text-purple-400 transition-colors flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-left"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            <span className="font-mbf-royal text-lg">VOLVER AL INICIO</span>
          </a>
          <img src="/images/banner_inkedlife.png" alt="INK LIFE TATTOO" className="h-16 object-contain" />
          <Button
            variant="ghost"
            className="relative text-white hover:text-purple-400"
            onClick={() => setIsCartOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shopping-cart"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            <span className="sr-only">Carrito de compras</span>
          </Button>
        </div>
      </header>

      {/* Store Section */}
      <main className="flex-1 py-12 md:py-24">
        <section id="store" className="container mx-auto px-4">
          <h1
            className="text-4xl md:text-5xl font-bold mb-8 text-center font-serif tracking-widest 
           text-gray-800 drop-shadow-[0_0_15px_rgba(0,0,0,0.1)]"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            TIENDA INK LIFE
          </h1>
          <p
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg md:text-xl"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            Encuentra los mejores productos para tatuadores y entusiastas.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        </section>
      </main>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Footer */}
      <footer className="bg-black/95 backdrop-blur-sm border-t border-purple-500/20 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} INK LIFE TATTOO ACADEMY. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
