// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);
  
  // Set up animations for each section
  setupScrollAnimations();
  
  // Handle smooth scrolling for navigation links
  setupSmoothScrolling();
});

/**
 * Set up GSAP ScrollTrigger animations for all sections
 */
function setupScrollAnimations() {
  // Select all sections with scroll animations
  const sections = document.querySelectorAll('.scroll-section');
  
  // Set up animations for each section
  sections.forEach(section => {
    // Find all animate items within this section
    const animateItems = section.querySelectorAll('.animate-item');
    
    // Create a ScrollTrigger for this section
    ScrollTrigger.create({
      trigger: section,
      start: "top 80%", // Start animation when the top of the section is 80% from the top of the viewport
      end: "bottom 20%", // End animation when the bottom of the section is 20% from the top of the viewport
      markers: false, // Set to true for debugging
      onEnter: () => animateItems.forEach(item => animateElement(item, true)),
      onLeave: () => animateItems.forEach(item => animateElement(item, false)),
      onEnterBack: () => animateItems.forEach(item => animateElement(item, true)),
      onLeaveBack: () => animateItems.forEach(item => animateElement(item, false))
    });
  });
  
  // For staggered card animations in grids
  const cardGrids = document.querySelectorAll('.grid');
  cardGrids.forEach(grid => {
    const cards = grid.querySelectorAll('.animate-item');
    
    // Create a more advanced animation for card grids
    ScrollTrigger.create({
      trigger: grid,
      start: "top 80%",
      markers: false,
      onEnter: () => {
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          stagger: 0.1, // Add 0.1s delay between each card animation
          duration: 0.6,
          ease: "power2.out"
        });
      },
      onLeave: () => {
        // Only animate out if scrolling fast (optional)
        if (ScrollTrigger.isScrolling()) {
          gsap.to(cards, {
            opacity: 0,
            y: 30,
            stagger: 0.05,
            duration: 0.4
          });
        }
      },
      onEnterBack: () => {
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.6
        });
      },
      onLeaveBack: () => {
        // Only animate out if scrolling fast (optional)
        if (ScrollTrigger.isScrolling()) {
          gsap.to(cards, {
            opacity: 0,
            y: 30,
            stagger: 0.03,
            duration: 0.4
          });
        }
      }
    });
  });
}

/**
 * Animate a single element in or out based on scroll position
 */
function animateElement(element, isVisible) {
  if (isVisible) {
    element.classList.add('is-visible');
  } else {
    element.classList.remove('is-visible');
  }
}

/**
 * Set up smooth scrolling for navigation links
 */
function setupSmoothScrolling() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      
      const navHeight = document.querySelector('nav').offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
} 