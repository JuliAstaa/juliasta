const hamburgerToggle = document.getElementById("hamburger-toggle");
const navMenu = document.getElementById("nav-menu");

hamburgerToggle.addEventListener("click", () => {
  hamburgerToggle.classList.toggle("hamburger-active");
  navMenu.classList.toggle("nav-active");
});
