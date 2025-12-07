const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("show");
});