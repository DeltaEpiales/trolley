document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuIcon = document.querySelector(".mobile-menu-icon-container");
    const mobileMenu = document.querySelector(".mobile-menu");

    mobileMenuIcon.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
        
        // Toggle the z-index value based on the presence of the class
        if (mobileMenu.classList.contains("active")) {
            mobileMenu.style.zIndex = "1001";
        } else {
            mobileMenu.style.zIndex = "-1";
        }
    });
});
