/*añade selector de clase en una variable*/
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuMobileIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuNavShoppingCart = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container")

/*añade un evento de tipo "click" a la variable que esta apuntando al elemento con la clase del selector*/
menuEmail.addEventListener("click", toggleDesktopMenu);
menuMobileIcon.addEventListener("click", toggleMobileMenu);
menuNavShoppingCart.addEventListener("click", toggleCarritoAside);

/*esta funcion nos permite quitar u otorgar la clase inactive en el elemento seleccionado*/
function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains("inactive");
    //si el aside esta abierto
    if (!isAsideClosed) {
        aside.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains("inactive");
    //si el aside esta abierto
    if (!isAsideClosed) {
        aside.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
    //si el menu esta abierto
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive");
    }

    aside.classList.toggle("inactive");
}
//array para almacenar la lista de productos como objetos
const productList = [];

productList.push(
    {
        name: "bike",
        price: 225,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        detail: "este producto es asombroso",
    },
    {
        name: "consola",
        price: 235,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        detail: "este producto es asombroso 1",
    },
    {
        name: "pantalla",
        price: 245,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        detail: "este producto es asombroso 2",
    }
);

/*
<div class="product-card">
<img
    src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    alt=""
/>
<div class="product-info">
    <div>
        <p>$120,00</p>
        <p>Bike</p>
    </div>
    <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="" />
    </figure>
</div>
</div>
*/
function renderProducts(arr){
    for (product of arr) {
        //div principal
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        //img dentro del div principal
        const productCardImg = document.createElement("img");
        productCardImg.setAttribute("src", product.image);
        //div dentro del div principal
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-card-info");
        //div dentro del div product info
        const productInfoDiv = document.createElement("div");
        //p dentro del div de product info
        const productInfoDivPrice = document.createElement("p");
        productInfoDivPrice.innerText = "$" + product.price;
        //p dentro del div de product info
        const productInfoDivName = document.createElement("p");
        productInfoDivName.innerText = product.name;
    
        const productInfoFigure = document.createElement("figure");
    
        const productInfoFigureImg = document.createElement("img");
        productInfoFigureImg.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
    
        productInfoDiv.appendChild(productInfoDivName);
        productInfoDiv.appendChild(productInfoDivPrice);
        productInfoFigure.appendChild(productInfoFigureImg);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productCardImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);