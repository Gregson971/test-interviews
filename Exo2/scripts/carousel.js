// ============================================
// CAROUSEL MODULE
// Handles carousel navigation and interactions
// ============================================

/**
 * Initialize all carousels on the page
 */
export function initCarousels() {
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach(carousel => {
    initSingleCarousel(carousel);
  });
}

/**
 * Initialize a single carousel
 * @param {HTMLElement} carousel - The carousel element
 */
function initSingleCarousel(carousel) {
  const track = carousel.querySelector('.carousel__track');
  const prevButton = carousel.querySelector('.carousel__btn--prev');
  const nextButton = carousel.querySelector('.carousel__btn--next');
  const slides = Array.from(carousel.querySelectorAll('.carousel__slide'));

  if (!track || !prevButton || !nextButton || slides.length === 0) {
    return;
  }

  const slideWidth = slides[0].getBoundingClientRect().width + 16; // including gap

  // Navigation buttons
  prevButton.addEventListener('click', () => {
    const scrollAmount = slideWidth * 3; // Scroll 3 cards at a time
    track.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

  nextButton.addEventListener('click', () => {
    const scrollAmount = slideWidth * 3; // Scroll 3 cards at a time
    track.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

  // Mouse drag to scroll
  initDragToScroll(track);

  // Keyboard navigation
  initKeyboardNavigation(track, slideWidth);

  // Set initial cursor
  track.style.cursor = 'grab';
}

/**
 * Initialize drag-to-scroll functionality
 * @param {HTMLElement} track - The carousel track
 */
function initDragToScroll(track) {
  let isDown = false;
  let startX;
  let scrollLeft;

  track.addEventListener('mousedown', (e) => {
    isDown = true;
    track.style.cursor = 'grabbing';
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  track.addEventListener('mouseleave', () => {
    isDown = false;
    track.style.cursor = 'grab';
  });

  track.addEventListener('mouseup', () => {
    isDown = false;
    track.style.cursor = 'grab';
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    track.scrollLeft = scrollLeft - walk;
  });
}

/**
 * Initialize keyboard navigation for carousel
 * @param {HTMLElement} track - The carousel track
 * @param {number} slideWidth - Width of a single slide
 */
function initKeyboardNavigation(track, slideWidth) {
  track.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      track.scrollBy({
        left: -slideWidth,
        behavior: 'smooth'
      });
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      track.scrollBy({
        left: slideWidth,
        behavior: 'smooth'
      });
    }
  });
}
