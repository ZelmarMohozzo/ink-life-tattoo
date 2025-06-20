import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "INK LIFE TATTOO ACADEMY - Cursos de Tatuaje en Punta del Este, Uruguay",
  description:
    "Aprende el arte del tatuaje con Nico Lemos, tatuador profesional con más de 12 años de experiencia. Cursos de tatuaje en blackwork, realismo y color en Punta del Este, Uruguay.",
  keywords:
    "tatuaje, cursos de tatuaje, academia de tatuajes, Nico Lemos, Punta del Este, Uruguay, blackwork, realismo, tatuador profesional",
  authors: [{ name: "Nico Lemos" }],
  creator: "INK LIFE TATTOO ACADEMY",
  publisher: "INK LIFE TATTOO ACADEMY",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://inklifetattoo.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "INK LIFE TATTOO ACADEMY - Cursos de Tatuaje Profesional",
    description: "Conviértete en tatuador profesional con Nico Lemos. Cursos de tatuaje en Punta del Este, Uruguay.",
    url: "https://inklifetattoo.com",
    siteName: "INK LIFE TATTOO ACADEMY",
    images: [
      {
        url: "/images/ink-life-logo-gold.png",
        width: 1200,
        height: 630,
        alt: "INK LIFE TATTOO ACADEMY Logo",
      },
    ],
    locale: "es_UY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "INK LIFE TATTOO ACADEMY - Cursos de Tatuaje",
    description: "Aprende tatuaje profesional con Nico Lemos en Punta del Este, Uruguay",
    images: ["/images/ink-life-logo-gold.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-codigo-de-verificacion-google",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
