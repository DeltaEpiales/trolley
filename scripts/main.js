document.addEventListener("DOMContentLoaded", function() {
    // Get the hero section for the interactive background
    const heroSection = document.querySelector(".hero");
    const heroContent = document.querySelector(".hero-content");

    // Add event listeners for mouse movement
    heroSection.addEventListener("mousemove", function(e) {
        const moveX = (e.clientX - window.innerWidth / 2) / 10;
        const moveY = (e.clientY - window.innerHeight / 2) / 10;
        
        // Apply parallax effect to the hero content
        heroContent.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    // Reset the hero content position on mouse leave
    heroSection.addEventListener("mouseleave", function() {
        heroContent.style.transform = "translate(0, 0)";
    });
});
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
  const mobileMenu = document.querySelector('.mobile-menu');

  mobileMenuIcon.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
    mobileMenuIcon.classList.toggle('open'); // Toggle 'open' class on icon
  });
});
