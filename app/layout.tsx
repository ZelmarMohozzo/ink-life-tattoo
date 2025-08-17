import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/lib/cart-context"
import CartSidebar from "@/components/cart-sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "INK LIFE TATTOO - Academia y Estudio",
  description:
    "Academia de tatuajes profesional con Nico Lemos. Cursos presenciales, tatuajes personalizados y remoción láser.",
  keywords:
    "tatuajes, academia de tatuajes, curso de tatuaje, Punta del Este, Uruguay, Nico Lemos, blackwork, realismo, tattoo academy",
  authors: [{ name: "INK LIFE TATTOO ACADEMY" }],
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
    title: "INK LIFE TATTOO ACADEMY - Academia de Tatuajes",
    description: "Conviértete en un tatuador profesional con Nico Lemos. Cursos de tatuaje en Punta del Este, Uruguay.",
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
    title: "INK LIFE TATTOO ACADEMY - Academia de Tatuajes",
    description: "Conviértete en un tatuador profesional con Nico Lemos. Cursos de tatuaje en Punta del Este, Uruguay.",
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
    google: "your-google-verification-code",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* Preload critical fonts */}
        <link rel="preload" href="/fonts/mbf-royal.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap" rel="stylesheet" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "INK LIFE TATTOO ACADEMY",
              description: "Academia de tatuajes profesional en Punta del Este, Uruguay",
              url: "https://inklifetattoo.com",
              logo: "https://inklifetattoo.com/images/ink-life-logo-gold.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Punta del Este",
                addressRegion: "Maldonado",
                addressCountry: "UY",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+598-92-153-567",
                contactType: "customer service",
                availableLanguage: "Spanish",
              },
              founder: {
                "@type": "Person",
                name: "Nico Lemos",
                jobTitle: "Tatuador Profesional",
                worksFor: {
                  "@type": "Organization",
                  name: "INK LIFE TATTOO ACADEMY",
                },
              },
              offers: [
                {
                  "@type": "Course",
                  name: "Curso Inicial de Tatuaje",
                  description: "Curso básico de tatuaje de 1 mes de duración",
                  provider: {
                    "@type": "EducationalOrganization",
                    name: "INK LIFE TATTOO ACADEMY",
                  },
                },
                {
                  "@type": "Course",
                  name: "Curso Completo de Tatuaje",
                  description: "Curso intermedio de tatuaje de 2 meses de duración",
                  provider: {
                    "@type": "EducationalOrganization",
                    name: "INK LIFE TATTOO ACADEMY",
                  },
                },
                {
                  "@type": "Course",
                  name: "Curso Full de Tatuaje",
                  description: "Curso completo de tatuaje de 3 meses con posibilidad laboral",
                  provider: {
                    "@type": "EducationalOrganization",
                    name: "INK LIFE TATTOO ACADEMY",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <CartProvider>
          {children}
          <CartSidebar />
        </CartProvider>

        {/* Analytics Scripts */}
        {process.env.NODE_ENV === "production" && (
          <>
            {/* Google Analytics */}
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                  });
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  )
}
