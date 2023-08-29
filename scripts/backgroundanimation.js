// backgroundAnimation.js

const background = document.querySelector('.background');
const cozySection = document.querySelector('.cozy');
const menuItems = document.querySelectorAll('.menu-item');
const menuSection = document.querySelector('.menu'); // Define menuSection

document.addEventListener('DOMContentLoaded', function () {
  const siteContainer = document.querySelector('.site-container');

  siteContainer.addEventListener('scroll', function () {
    const scrolled = window.scrollY;
    const opacity = Math.min(1, scrolled / 300);

    menuItems.forEach(function (item) {
      item.style.backgroundColor = `rgba(200, 200, 200, ${opacity})`;
    });
  });
});

// When the page scrolls, update the opacity and background colors
window.addEventListener('scroll', () => {
  const opacity = Math.min(1, window.scrollY / menuSection.offsetHeight);
  background.style.opacity = opacity;

  // Update background color based on opacity
  const grayOpacity = 0.9; // Adjust the opacity as needed
  cozySection.style.backgroundColor = `rgba(200, 200, 200, ${grayOpacity * opacity})`;

  // Apply opacity to all menu items
  menuItems.forEach(function (item) {
    item.style.backgroundColor = `rgba(200, 200, 200, ${grayOpacity * opacity})`;
  });
});
