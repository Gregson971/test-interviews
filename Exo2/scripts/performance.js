// ============================================
// PERFORMANCE MODULE
// Handles performance optimizations like lazy loading
// ============================================

/**
 * Initialize performance optimizations
 */
export function initPerformanceOptimizations() {
  initLazyLoading();
}

/**
 * Initialize lazy loading for images using Intersection Observer
 */
function initLazyLoading() {
  if (!('IntersectionObserver' in window)) {
    // Fallback for browsers without IntersectionObserver
    loadAllImages();
    return;
  }

  const imageObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          loadImage(img);
          imageObserver.unobserve(img);
        }
      });
    },
    {
      // Start loading images 50px before they enter viewport
      rootMargin: '50px'
    }
  );

  // Observe all images with data-src attribute
  const lazyImages = document.querySelectorAll('img[data-src]');
  lazyImages.forEach(img => {
    imageObserver.observe(img);
  });
}

/**
 * Load a single image
 * @param {HTMLImageElement} img - Image element to load
 */
function loadImage(img) {
  if (img.dataset.src) {
    img.src = img.dataset.src;
    img.removeAttribute('data-src');
    img.classList.add('loaded');
  }
}

/**
 * Fallback: Load all images immediately
 */
function loadAllImages() {
  const lazyImages = document.querySelectorAll('img[data-src]');
  lazyImages.forEach(loadImage);
}
