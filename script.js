const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");
const yearElement = document.getElementById("year");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}