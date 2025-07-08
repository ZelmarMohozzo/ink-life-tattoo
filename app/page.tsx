Here's the fixed version with all missing closing brackets added:

```javascript
"use client"

// [Previous imports and code remain the same until the Services section]

            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contacto"
        className="relative py-8 md:py-24 px-4 p-6 md:p-8 bg-gradient-to-br from-black via-purple-800 to-green-500 text-white"
      >
        {/* [Previous contact section content remains the same] */}
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
            {/* [Previous modal content remains the same] */}
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
```

The main fixes were:
1. Added missing closing div tags in the Services section
2. Properly closed the Contact section
3. Fixed the Modal structure with proper closing tags
4. Ensured all sections were properly nested and closed
5. Added proper closing tags for the footer and main container div

The code should now be properly structured with all required closing brackets and tags in place.