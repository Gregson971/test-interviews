// ============================================
// ACCESSIBILITY MODULE
// Handles accessibility features and improvements
// ============================================

/**
 * Initialize accessibility features
 */
export function initAccessibility() {
  initKeyboardShortcuts();
  initScreenReaderAnnouncements();
}

/**
 * Add keyboard shortcuts for better navigation
 */
function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Skip to main content with '/' key
    if (e.key === '/') {
      e.preventDefault();
      const main = document.querySelector('.main');
      if (main) {
        main.focus();
        main.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
}

/**
 * Initialize screen reader announcement utilities
 */
function initScreenReaderAnnouncements() {
  // Create a live region for announcements
  const liveRegion = document.createElement('div');
  liveRegion.setAttribute('role', 'status');
  liveRegion.setAttribute('aria-live', 'polite');
  liveRegion.setAttribute('aria-atomic', 'true');
  liveRegion.className = 'sr-only';
  liveRegion.style.position = 'absolute';
  liveRegion.style.left = '-10000px';
  liveRegion.style.width = '1px';
  liveRegion.style.height = '1px';
  liveRegion.style.overflow = 'hidden';

  document.body.appendChild(liveRegion);

  // Store reference for global access
  window.announceToScreenReader = (message) => {
    liveRegion.textContent = message;

    // Clear after announcement
    setTimeout(() => {
      liveRegion.textContent = '';
    }, 1000);
  };
}

/**
 * Announce message to screen readers
 * @param {string} message - Message to announce
 */
export function announce(message) {
  if (window.announceToScreenReader) {
    window.announceToScreenReader(message);
  }
}
