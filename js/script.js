// Carousel functionality
let currentSlideIndex = 0
const slides = document.querySelectorAll(".carousel-slide")
const dots = document.querySelectorAll(".dot")
const progressFill = document.querySelector(".progress-fill")
let autoSlideInterval

function showSlide(index) {
  // Hide all slides
  slides.forEach((slide) => slide.classList.remove("active"))
  dots.forEach((dot) => dot.classList.remove("active"))

  // Show current slide
  slides[index].classList.add("active")
  dots[index].classList.add("active")

  // Update progress bar
  const progressWidth = ((index + 1) / slides.length) * 100
  progressFill.style.width = progressWidth + "%"
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length
  showSlide(currentSlideIndex)
  resetAutoSlide()
}

function previousSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length
  showSlide(currentSlideIndex)
  resetAutoSlide()
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval)
  startAutoSlide()
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 5000)
}

// Gallery functionality
const galleryImages = []
for (let i = 1; i <= 38; i++) {
  const categories = ["realismo", "tradicional", "geometrico", "blackwork", "color"]
  const randomCategory = categories[Math.floor(Math.random() * categories.length)]
  galleryImages.push({
    src: `images/tattoo${i}.jpeg`,
    alt: `Tatuaje ${i}`,
    category: randomCategory,
  })
}

let displayedImages = 0
const imagesPerLoad = 12
let currentFilter = "all"

function loadGalleryImages() {
  const gallery = document.getElementById("gallery")
  const loadMoreBtn = document.getElementById("loadMoreBtn")

  const imagesToLoad = Math.min(imagesPerLoad, galleryImages.length - displayedImages)

  for (let i = 0; i < imagesToLoad; i++) {
    const imageIndex = displayedImages + i
    const imageSrc = galleryImages[imageIndex].src

    const galleryItem = document.createElement("div")
    galleryItem.className = "gallery-item fade-in-up"
    galleryItem.style.animationDelay = i * 0.1 + "s"

    galleryItem.innerHTML = `
            <img src="${imageSrc}" alt="${galleryImages[imageIndex].alt}" loading="lazy">
        `

    galleryItem.addEventListener("click", () => openModal(imageSrc, galleryImages[imageIndex].alt))
    gallery.appendChild(galleryItem)
  }

  displayedImages += imagesToLoad

  if (displayedImages >= galleryImages.length) {
    loadMoreBtn.style.display = "none"
  }
}

function initGallery() {
  const galleryGrid = document.getElementById("gallery-grid")
  const loadMoreBtn = document.getElementById("load-more-btn")
  const modal = document.getElementById("gallery-modal")
  const modalImage = document.getElementById("modal-image")
  const modalClose = document.querySelector(".modal-close")
  const modalPrev = document.getElementById("modal-prev")
  const modalNext = document.getElementById("modal-next")

  let currentModalIndex = 0
  let filteredImages = galleryImages

  // Filter functionality
  const filterButtons = document.querySelectorAll(".filter-btn")
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Update active filter button
      filterButtons.forEach((b) => b.classList.remove("active"))
      this.classList.add("active")

      // Get filter value
      currentFilter = this.getAttribute("data-filter")

      // Filter images
      if (currentFilter === "all") {
        filteredImages = galleryImages
      } else {
        filteredImages = galleryImages.filter((img) => img.category === currentFilter)
      }

      // Reset gallery
      displayedImages = 0
      galleryGrid.innerHTML = ""
      loadImages()
    })
  })

  function loadImages() {
    const imagesToLoad = filteredImages.slice(displayedImages, displayedImages + imagesPerLoad)

    imagesToLoad.forEach((image, index) => {
      const galleryItem = document.createElement("div")
      galleryItem.className = "gallery-item"

      // Add random size classes for variety
      const sizeClasses = ["", "gallery-item-large", "gallery-item-wide", "gallery-item-tall"]
      const randomSize = Math.random() < 0.1 ? sizeClasses[Math.floor(Math.random() * sizeClasses.length)] : ""
      if (randomSize) galleryItem.classList.add(randomSize)

      galleryItem.innerHTML = `
          <img src="${image.src}" alt="${image.alt}" class="gallery-image">
          <div class="gallery-overlay">
              <div class="gallery-category-badge" style="background: ${getCategoryColor(image.category)}">
                  ${image.category}
              </div>
          </div>
      `

      // Add click event for modal
      galleryItem.addEventListener("click", () => {
        currentModalIndex = displayedImages + index
        openModal()
      })

      galleryGrid.appendChild(galleryItem)
    })

    displayedImages += imagesToLoad.length

    // Hide load more button if all images are loaded
    if (displayedImages >= filteredImages.length) {
      if (loadMoreBtn) loadMoreBtn.style.display = "none"
    } else {
      if (loadMoreBtn) loadMoreBtn.style.display = "block"
    }
  }

  function getCategoryColor(category) {
    const colors = {
      realismo: "#e74c3c",
      tradicional: "#3498db",
      geometrico: "#9b59b6",
      blackwork: "#2c3e50",
      color: "#f39c12",
    }
    return colors[category] || "#95a5a6"
  }

  function openModal() {
    if (modal && modalImage && filteredImages[currentModalIndex]) {
      modalImage.src = filteredImages[currentModalIndex].src
      modalImage.alt = filteredImages[currentModalIndex].alt
      modal.style.display = "block"
      document.body.style.overflow = "hidden"
    }
  }

  function closeModal() {
    if (modal) {
      modal.style.display = "none"
      document.body.style.overflow = "auto"
    }
  }

  function nextModalImage() {
    currentModalIndex = (currentModalIndex + 1) % filteredImages.length
    openModal()
  }

  function prevModalImage() {
    currentModalIndex = (currentModalIndex - 1 + filteredImages.length) % filteredImages.length
    openModal()
  }

  // Event listeners
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", loadImages)
  }

  if (modalClose) {
    modalClose.addEventListener("click", closeModal)
  }

  if (modalNext) {
    modalNext.addEventListener("click", nextModalImage)
  }

  if (modalPrev) {
    modalPrev.addEventListener("click", prevModalImage)
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal()
      }
    })
  }

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (modal && modal.style.display === "block") {
      if (e.key === "Escape") {
        closeModal()
      } else if (e.key === "ArrowRight") {
        nextModalImage()
      } else if (e.key === "ArrowLeft") {
        prevModalImage()
      }
    }
  })

  // Initial load
  if (galleryGrid) {
    loadImages()
  }
}

// Modal functionality
function openModal(imageSrc, altText) {
  const modal = document.getElementById("galleryModal")
  const modalImage = document.getElementById("modalImage")

  modalImage.src = imageSrc
  modalImage.alt = altText
  modal.style.display = "flex"
  document.body.style.overflow = "hidden"
}

function closeModal() {
  const modal = document.getElementById("galleryModal")
  modal.style.display = "none"
  document.body.style.overflow = "auto"
}

// Mobile menu functionality
function toggleMobileMenu() {
  const mobileMenu = document.querySelector(".mobile-menu")
  mobileMenu.classList.toggle("active")
}

function closeMobileMenu() {
  const mobileMenu = document.querySelector(".mobile-menu")
  mobileMenu.classList.remove("active")
}

// Contact form functionality
function handleContactForm(event) {
  event.preventDefault()

  const formData = new FormData(event.target)
  const name = formData.get("name")
  const email = formData.get("email")
  const phone = formData.get("phone")
  const message = formData.get("message")

  // Simple validation
  if (!name || !email || !message) {
    alert("Por favor, completa todos los campos requeridos.")
    return
  }

  // In a real application, you would send this data to a server
  alert(`Gracias ${name}! Tu mensaje ha sido enviado. Te contactaremos pronto.`)
  event.target.reset()
}

// Smooth scrolling for navigation links
function smoothScroll(target) {
  const element = document.querySelector(target)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Start carousel
  showSlide(0)
  startAutoSlide()

  // Load initial gallery images
  initGallery()

  // Event listeners
  document.getElementById("loadMoreBtn").addEventListener("click", loadGalleryImages)
  document.getElementById("closeModal").addEventListener("click", closeModal)
  document.getElementById("galleryModal").addEventListener("click", function (e) {
    if (e.target === this) closeModal()
  })

  // Mobile menu event listeners
  document.querySelector(".mobile-menu-btn").addEventListener("click", toggleMobileMenu)
  document.querySelector(".close-menu").addEventListener("click", closeMobileMenu)

  // Close mobile menu when clicking on links
  document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu)
  })

  // Contact form
  document.getElementById("contactForm").addEventListener("submit", handleContactForm)

  // Smooth scrolling for all navigation links
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const target = this.getAttribute("href")
      smoothScroll(target)
    })
  })

  // Keyboard navigation for modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal()
    }
  })

  // Pause carousel on hover
  const heroSection = document.querySelector(".hero-section")
  heroSection.addEventListener("mouseenter", () => clearInterval(autoSlideInterval))
  heroSection.addEventListener("mouseleave", startAutoSlide)
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-up")
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(".course-card, .gallery-item")
  elementsToAnimate.forEach((el) => observer.observe(el))
})
