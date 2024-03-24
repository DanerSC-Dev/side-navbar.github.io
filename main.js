const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {
  if (nav.classList.contains("side-bar")) {
    // Si el menú está visible, ocultarlo
    nav.classList.remove("side-bar");
  } else {
    // Si el menú está oculto, mostrarlo
    nav.classList.add("side-bar");
  }
});

