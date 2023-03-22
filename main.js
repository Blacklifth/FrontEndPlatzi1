/*añade selector de clase en una variable*/
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
/*añade un evento de tipo "clic" a menu email que esta apuntando al elemento con la clase navbar-email*/
menuEmail.addEventListener("click", toggleDesktopMenu);
function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
}

const menuMobileIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

menuMobileIcon.addEventListener("click", toggleMobileMenu);
/*esta funcion nos permite quitar u otorgar la clase inactive en el elemento seleccionado*/
function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
}
