import { Product } from "./models/Products";
import { updateCart, getCartItems, getCartItem } from "./cart";
import { products } from "./models/Products";
import { createHTMLforModal } from "./modal";
import { CartItem } from "./models/CartItem";

function createHTMLforProducts(products: Product[]): void {
  let productsContainer = document.getElementById(
    "productsContainer"
  ) as HTMLDivElement;

  productsContainer.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    //produkter
    let container: HTMLDivElement = document.createElement("div");
    let img: HTMLImageElement = document.createElement("img");
    let articleInProduct: HTMLElement = document.createElement("article");
    let title: HTMLHeadingElement = document.createElement("h3");
    let artist: HTMLHeadElement = document.createElement("h4");
    let description: HTMLSpanElement = document.createElement("span");
    let price: HTMLSpanElement = document.createElement("span");
    let button: HTMLButtonElement = document.createElement("button");
    let divContainer: HTMLDivElement = document.createElement("div");

    container.className = "product";

    img.className = "product__image";
    title.className = "product__title";
    artist.className = "product__artist";
    description.className = "product__description";
    price.className = "product__price";
    button.className = "product__button";
    articleInProduct.className = "product__article";
    divContainer.className = "product__divContainer";

    img.src = products[i].img;
    img.alt = products[i].alttext;
    title.innerHTML = products[i].productname;
    artist.innerHTML = products[i].collection;
    description.innerHTML = products[i].description;
    price.innerHTML += products[i].price + ":-";

    container.appendChild(img);
    container.appendChild(articleInProduct);

    articleInProduct.appendChild(title);
    articleInProduct.appendChild(artist);
    articleInProduct.appendChild(description);
    articleInProduct.appendChild(price);
    divContainer.appendChild(articleInProduct);
    divContainer.appendChild(button);
    container.appendChild(divContainer);

    productsContainer.appendChild(container);

    button.addEventListener("click", function () {
      let cartItem: CartItem = getCartItem(getCartItems(), products[i]);
      if (cartItem != null) {
        let increasedQty: number = cartItem.quantity + 1;
        updateCart(products[i], increasedQty);
      } else {
        updateCart(products[i], 1);
      }
      createHTMLforModal(getCartItems());
    });

    button.innerHTML = "<i class='fa-solid fa-cart-plus'></i>";

    //klick p?? bild f??r att komma till produktdetaljer f??r vald produkt
    img.addEventListener("click", () => {
      location.href = "../html/productdetails.html?id=" + products[i].id;
    });
  }
}

//backa-knapp
let backButton = document.getElementById("returnButton") as HTMLButtonElement;
backButton.addEventListener("click", backaWindow);

function backaWindow() {
  history.back();
}

//modal f??r varukorg
let modal = document.getElementById("myModal");
let btn = document.getElementById("cartButton");
let closeBtn = document.getElementById("closeButton");

//??ppna modal
btn.onclick = function () {
  modal.style.display = "block";
};

//st??ngningskryss f??r modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};

//funktionalitet f??r att kunna trycka utanf??r f??r att st??nga ??? not working atm
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//hamburgermeny
let burgerBtn = document.getElementById("burgerMenu");
let burgerModal = document.getElementById("burgerModal");

burgerBtn.onclick = function () {
  burgerModal.style.display = "block";
};

//funktionalitet f??r att kunna trycka utanf??r f??r att st??nga hamburgermenyn
window.onclick = function (event) {
  if (event.target == burgerModal) {
    burgerModal.style.display = "none";
  }
};

createHTMLforProducts(products);
createHTMLforModal(getCartItems());

//filtrering f??r produkter
let btnOne = document.createElement("button");
let btnTwo = document.createElement("button");
let btnThree = document.createElement("button");

btnOne.innerHTML = "Alla";
btnTwo.innerHTML = "Ljusa tapeter";
btnThree.innerHTML = "M??rka tapeter";

btnOne.className = "filterBtn";
btnTwo.className = "filterBtn";
btnThree.className = "filterBtn";

let filter = document.getElementById("filter");
filter.appendChild(btnOne);
filter.appendChild(btnTwo);
filter.appendChild(btnThree);

let selectedFilter: string = "";

btnOne.addEventListener("click", () => {
  selectedFilter = "Alla";
  filterAlternatives(products);
});
btnTwo.addEventListener("click", () => {
  selectedFilter = "Ljus";
  filterAlternatives(products);
});
btnThree.addEventListener("click", () => {
  selectedFilter = "M??rk";
  filterAlternatives(products);
});

function filterAlternatives(products: Product[]) {
  let filteredList = products.filter((wallpapers) => {
    return wallpapers.primaryColor === selectedFilter;
  });

  if (selectedFilter === "Alla") {
    createHTMLforProducts(products);
  } else {
    showFilteredProducts(filteredList);
  }
}

function showFilteredProducts(filteredList: Product[]) {
  let productsContainer = document.getElementById(
    "productsContainer"
  ) as HTMLDivElement;

  productsContainer.innerHTML = "";

  for (let i = 0; i < filteredList.length; i++) {
    let container: HTMLDivElement = document.createElement("div");
    let img: HTMLImageElement = document.createElement("img");
    let articleInProduct: HTMLElement = document.createElement("article");
    let title: HTMLHeadingElement = document.createElement("h3");
    let artist: HTMLHeadElement = document.createElement("h4");
    let description: HTMLSpanElement = document.createElement("span");
    let price: HTMLSpanElement = document.createElement("span");
    let button: HTMLButtonElement = document.createElement("button");
    let divContainer: HTMLDivElement = document.createElement("div");

    container.className = "product";

    img.className = "product__image";
    title.className = "product__title";
    artist.className = "product__artist";
    description.className = "product__description";
    price.className = "product__price";
    button.className = "product__button";
    articleInProduct.className = "product__article";
    divContainer.className = "product__divContainer";

    img.src = filteredList[i].img;
    title.innerHTML = filteredList[i].productname;
    artist.innerHTML = filteredList[i].collection;
    description.innerHTML = filteredList[i].description;
    price.innerHTML += filteredList[i].price + ":-";

    articleInProduct.appendChild(title);
    articleInProduct.appendChild(artist);
    articleInProduct.appendChild(description);
    articleInProduct.appendChild(price);

    container.appendChild(img);
    divContainer.appendChild(articleInProduct);
    divContainer.appendChild(button);
    container.appendChild(divContainer);

    productsContainer.appendChild(container);

    button.addEventListener("click", function () {
      let cartItem: CartItem = getCartItem(getCartItems(), filteredList[i]);
      if (cartItem != null) {
        let increasedQty: number = cartItem.quantity + 1;
        updateCart(filteredList[i], increasedQty);
      } else {
        updateCart(filteredList[i], 1);
      }
      createHTMLforModal(getCartItems());
    });

    button.innerHTML = "<i class='fa-solid fa-cart-plus'></i>";

    //klick p?? bild fr??n filtreringen f??r att komma till vald produkt
    img.addEventListener("click", () => {
      location.href = "../html/productdetails.html?id=" + filteredList[i].id;
    });
  }
}
