document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
  const mobileMenu = document.querySelector('.mobile-menu');

  mobileMenuIcon.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
    mobileMenuIcon.classList.toggle('open'); // Toggle 'open' class on icon
  });
});