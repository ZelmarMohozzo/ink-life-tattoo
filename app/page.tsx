"use client"

import React, { useState } from 'react'
import { Calendar, Clock, MapPin, Phone, Mail, Instagram, Star, Award, Users, Palette } from 'lucide-react'

export default function HomePage() {
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-100 to-white text-black">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm sticky top-0 z-50 border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              INK LIFE TATTOO ACADEMY
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#inicio" className="text-white hover:text-purple-300 transition-colors">Inicio</a>
              <a href="#servicios" className="text-white hover:text-purple-300 transition-colors">Servicios</a>
              <a href="#galeria" className="text-white hover:text-purple-300 transition-colors">Galería</a>
              <a href="#contacto" className="text-white hover:text-purple-300 transition-colors">Contacto</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-green-800">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            INK LIFE TATTOO ACADEMY
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Transforma tu pasión en profesión. Aprende el arte del tatuaje con los mejores profesionales.
          </p>
          <button 
            onClick={() => setIsCalendarModalOpen(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Reservar Cita
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-purple-200">
              <Palette className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Curso Básico</h3>
              <p className="text-gray-600 mb-4">
                Aprende los fundamentos del tatuaje desde cero con nuestro curso completo.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Técnicas básicas</li>
                <li>• Higiene y seguridad</li>
                <li>• Práctica supervisada</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-purple-200">
              <Award className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Curso Avanzado</h3>
              <p className="text-gray-600 mb-4">
                Perfecciona tu técnica con métodos avanzados y estilos especializados.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Técnicas avanzadas</li>
                <li>• Estilos especializados</li>
                <li>• Portafolio profesional</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-purple-200">
              <Users className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Mentoría Personal</h3>
              <p className="text-gray-600 mb-4">
                Recibe atención personalizada para desarrollar tu estilo único.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Atención 1 a 1</li>
                <li>• Desarrollo de estilo</li>
                <li>• Seguimiento continuo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contacto"
        className="relative py-8 md:py-24 px-4 p-6 md:p-8 bg-gradient-to-br from-black via-purple-800 to-green-500 text-white"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Contacto</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-3" />
                  <span>Dirección del estudio</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-3" />
                  <span>+1 234 567 890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-3" />
                  <span>info@inklifetattoo.com</span>
                </div>
                <div className="flex items-center">
                  <Instagram className="w-6 h-6 mr-3" />
                  <span>@inklifetattoo</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Horarios</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span>9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span>Cerrado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Formulario de Cita */}
      {isCalendarModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setIsCalendarModalOpen(false)}
        >
          <div
            className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-black p-8 rounded-lg shadow-2xl max-w-md w-full mx-4 border border-purple-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Reservar Cita</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Tu teléfono"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Servicio
                </label>
                <select className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>Curso Básico</option>
                  <option>Curso Avanzado</option>
                  <option>Mentoría Personal</option>
                </select>
              </div>
              <div className="flex space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => setIsCalendarModalOpen(false)}
                  className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                >
                  Reservar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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