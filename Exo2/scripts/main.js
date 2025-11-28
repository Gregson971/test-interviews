// ============================================
// MAIN APPLICATION ENTRY POINT
// Initializes all modules when DOM is ready
// ============================================

import { initSmoothScroll, initActiveNavLinks } from './navigation.js';
import { initCarousels } from './carousel.js';
import { initAccessibility } from './accessibility.js';
import { initPerformanceOptimizations } from './performance.js';

/**
 * Initialize all application features
 */
function init() {
  // Navigation
  initSmoothScroll();
  initActiveNavLinks();

  // Carousels
  initCarousels();

  // Accessibility
  initAccessibility();

  // Performance optimizations
  initPerformanceOptimizations();

  // Log successful initialization
  console.log('🚀 The Galactic Center initialized successfully');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  // DOM already loaded
  init();
}
