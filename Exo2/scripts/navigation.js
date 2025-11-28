// ============================================
// NAVIGATION MODULE
// Handles smooth scrolling and active link highlighting
// ============================================

/**
 * Initialize smooth scroll behavior for navigation links
 */
export function initSmoothScroll() {
  const navLinks = document.querySelectorAll('.nav__link');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const navHeight = document.querySelector('.nav').offsetHeight;
        const targetPosition = targetSection.offsetTop - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Update active navigation link based on scroll position
 */
export function initActiveNavLinks() {
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('.nav__link');
  const nav = document.querySelector('.nav');

  if (!nav) return;

  const updateActiveLink = () => {
    const navHeight = nav.offsetHeight;
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - navHeight - 100;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    // Update active class
    navLinks.forEach(link => {
      link.classList.remove('nav__link--active');
      const href = link.getAttribute('href').substring(1);

      if (href === currentSection) {
        link.classList.add('nav__link--active');
      }
    });
  };

  // Use throttle for better performance
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveLink();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Initial check
  updateActiveLink();
}
