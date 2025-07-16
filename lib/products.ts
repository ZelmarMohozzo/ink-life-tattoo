export interface Course {
  id: string
  name: string
  duration: string
  price: number
  level: string
  description: string
  features: string[]
  image: string
}

export interface ServiceSize {
  id: string
  name: string
  dimensions: string
  price: number
  description?: string
}

export const courses: Course[] = [
  {
    id: "curso-inicial",
    name: "Curso Inicial",
    duration: "1 mes",
    price: 800,
    level: "Básico",
    description: "Curso básico para iniciarse en el mundo del tatuaje",
    features: ["Bioseguridad", "Estilos de tatuajes", "Máquinas", "Materiales", "Línea sólida", "Relleno sólido"],
    image: "/images/course-basic.jpg",
  },
  {
    id: "curso-completo",
    name: "Curso Completo",
    duration: "2 meses",
    price: 1400,
    level: "Intermedio",
    description: "Curso intermedio con técnicas avanzadas",
    features: [
      "Bioseguridad",
      "Estilos de tatuajes",
      "Máquinas",
      "Materiales",
      "Línea sólida",
      "Relleno sólido",
      "Color sólido",
      "Sombras",
    ],
    image: "/images/course-intermediate.jpg",
  },
  {
    id: "curso-full",
    name: "Curso Full",
    duration: "3 meses",
    price: 2200,
    level: "Completo",
    description: "Curso completo con posibilidad laboral en el estudio",
    features: [
      "Bioseguridad",
      "Estilos de tatuajes",
      "Máquinas",
      "Materiales",
      "Línea sólida",
      "Relleno sólido",
      "Color sólido",
      "Sombras",
      "Texturas",
      "Técnica realismo color y sombra",
      "Posibilidad laboral en el estudio",
    ],
    image: "/images/course-advanced.jpg",
  },
]

export const tattooSizes: ServiceSize[] = [
  {
    id: "small",
    name: "Pequeño",
    dimensions: "hasta 5cm",
    price: 75,
    description: "Ideal para diseños simples y minimalistas",
  },
  {
    id: "medium",
    name: "Mediano",
    dimensions: "5cm - 15cm",
    price: 185,
    description: "Perfecto para diseños con detalles moderados",
  },
  {
    id: "large",
    name: "Grande",
    dimensions: "más de 15cm",
    price: 350,
    description: "Para diseños complejos y detallados",
  },
]

export const removalSizes: ServiceSize[] = [
  {
    id: "small-removal",
    name: "Pequeño",
    dimensions: "hasta 5cm",
    price: 115,
    description: "1-3 sesiones aproximadamente",
  },
  {
    id: "medium-removal",
    name: "Mediano",
    dimensions: "5cm - 15cm",
    price: 200,
    description: "3-6 sesiones aproximadamente",
  },
  {
    id: "large-removal",
    name: "Grande",
    dimensions: "más de 15cm",
    price: 300,
    description: "6-10 sesiones aproximadamente",
  },
]
