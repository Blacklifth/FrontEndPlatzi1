/*añade selector de clase en una variable*/
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuMobileIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuNavShoppingCart = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

/*añade un evento de tipo "click" a la variable que esta apuntando al elemento con la clase del selector*/
menuEmail.addEventListener("click", toggleDesktopMenu);
menuMobileIcon.addEventListener("click", toggleMobileMenu);
menuNavShoppingCart.addEventListener("click", toggleCarritoAside);

/*esta funcion nos permite quitar u otorgar la clase inactive en el elemento seleccionado*/
function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains("inactive");
    //si el aside esta abierto
    if(!isAsideClosed){
        aside.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains("inactive");
    //si el aside esta abierto
    if(!isAsideClosed){
        aside.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
    //si el menu esta abierto
    if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add("inactive");
    }

    aside.classList.toggle("inactive");
}
