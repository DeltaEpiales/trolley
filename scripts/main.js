document.addEventListener("DOMContentLoaded", function() {
    const trolleyImage = document.querySelector(".trolley-image");
    const ribbon = document.querySelector(".ribbon");

    const trolleyStartPosition = {
        x: trolleyImage.offsetLeft,
        y: trolleyImage.offsetTop
    };

    document.addEventListener("mousemove", function(e) {
        const moveX = (e.clientX - window.innerWidth / 2) / 20;
        const moveY = (e.clientY - window.innerHeight / 2) / 20;

        const newX = trolleyStartPosition.x + moveX;
        const newY = trolleyStartPosition.y + moveY;

        trolleyImage.style.transform = `translate(${newX}px, ${newY}px)`;
        ribbon.style.transform = `translateX(${moveX}px)`;
    });

    document.addEventListener("mouseleave", function() {
        trolleyImage.style.transform = `translate(${trolleyStartPosition.x}px, ${trolleyStartPosition.y}px)`;
        ribbon.style.transform = "translateX(0)";
    });
});
