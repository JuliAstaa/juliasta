const hamburgerToggle = document.getElementById("hamburger-toggle");
const navMenu = document.getElementById("nav-menu");
const html = document.querySelector("html");

hamburgerToggle.addEventListener("click", () => {
  hamburgerToggle.classList.toggle("hamburger-active");
  navMenu.classList.toggle("nav-active");
});

const toggleSM = document.getElementById("toggle-sm");
const ligthDarkModeSm = document.getElementById("light-dark-mode-sm");
toggleSM.addEventListener("click", () => {
  if (toggleSM.checked) {
    html.classList.add("dark");
    ligthDarkModeSm.innerHTML = `<img src="./src/img/moon.png" alt=""
    />`;
  } else {
    html.classList.remove("dark");
    ligthDarkModeSm.innerHTML = `<img src="./src/img/sun.png" alt=""
    />`;
  }
});

const toggleLG = document.getElementById("toggle-lg");
const ligthDarkModeLg = document.getElementById("light-dark-mode-lg");
toggleLG.addEventListener("click", () => {
  if (toggleLG.checked) {
    html.classList.add("dark");
    ligthDarkModeLg.innerHTML = `<img src="./src/img/moon.png" alt=""
    />`;
  } else {
    html.classList.remove("dark");
    ligthDarkModeLg.innerHTML = `<img src="./src/img/sun.png" alt=""
    />`;
  }
});
