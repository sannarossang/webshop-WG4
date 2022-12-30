import { Product } from "./models/Products";
import { addToCart, getCartItems, getCustomerCartItem } from "./cart";
import { products } from "./models/Products";
import { createHTMLforModal } from "./createhtml";
import { CartItem } from "./models/CartItem";

function createHTMLforProducts(products: Product[]): void {
  let productsContainer = document.getElementById(
    "productsContainer"
  ) as HTMLDivElement;

  productsContainer.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    let container: HTMLDivElement = document.createElement("div");
    let img: HTMLImageElement = document.createElement("img");
    let articleInProduct: HTMLElement = document.createElement("article");
    let title: HTMLHeadingElement = document.createElement("h3");
    let description: HTMLSpanElement = document.createElement("span");
    let price: HTMLSpanElement = document.createElement("span");
    let button: HTMLButtonElement = document.createElement("button");
    let divContainer: HTMLDivElement = document.createElement("div");

    // container.setAttribute("fa-light fa-cart-circle-plus", "XX")

    container.className = "product";

    img.className = "product__image";
    title.className = "product__title";
    description.className = "product__description";
    price.className = "product__price";
    button.className = "product__button";
    articleInProduct.className = "product__article";
    divContainer.className = "product__divContainer";

    img.src = products[i].img;
    title.innerHTML = products[i].productname;
    description.innerHTML = products[i].description;
    price.innerHTML += products[i].price + ":-";

    container.appendChild(img);
    container.appendChild(articleInProduct);

    articleInProduct.appendChild(title);
    articleInProduct.appendChild(description);
    articleInProduct.appendChild(price);
    divContainer.appendChild(articleInProduct);
    divContainer.appendChild(button);
    container.appendChild(divContainer);

    productsContainer.appendChild(container);

    button.addEventListener("click", function () {
      //om varan redan finns pluss kvantitet.. annars lägg till qty: 1
      let cartItem: CartItem = getCustomerCartItem(getCartItems(), products[i]);
      if (cartItem != null) {
        let increasedQty: number = cartItem.quantity + 1;
        console.log(increasedQty);
        addToCart(products[i], increasedQty);
      } else {
        addToCart(products[i], 1);
      }
      createHTMLforModal(getCartItems());
    });

    button.innerHTML = "<i class='fa-solid fa-cart-plus'></i>";

    img.addEventListener("click", () => {
      console.log("trycka på bilde funkar");
      location.href = "../html/productdetails.html?id=" + products[i].id;
    });
  }
}

let backButton = document.getElementById("backaKnapp") as HTMLButtonElement;
backButton.addEventListener("click", backaWindow);

function backaWindow() {
  history.back();
}

let modal = document.getElementById("myModal");
let btn = document.getElementById("cartButton");
let closeBtn = document.getElementById("closeButton");

btn.onclick = function () {
  modal.style.display = "block";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let burgerBtn = document.getElementById("burgerMenu");
let burgerModal = document.getElementById("burgerModal");

burgerBtn.onclick = function () {
  burgerModal.style.display = "block";
};

window.onclick = function (event) {
  if (event.target == burgerModal) {
    burgerModal.style.display = "none";
  }
};

createHTMLforProducts(products);
createHTMLforModal(getCartItems());

function updateCartTotal() {
  throw new Error("Function not implemented.");
}

//FILTER
let btnOne = document.createElement("button");
let btnTwo = document.createElement("button");
let btnThree = document.createElement("button");

btnOne.innerHTML = "Alla";
btnTwo.innerHTML = "Ljusa tapeter";
btnThree.innerHTML = "Mörka tapeter";

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
  selectedFilter = "Mörk";
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
    let title: HTMLHeadingElement = document.createElement("h3");
    let description: HTMLSpanElement = document.createElement("span");
    let price: HTMLSpanElement = document.createElement("span");
    let button: HTMLButtonElement = document.createElement("button");

    container.className = "product";

    img.className = "product__image";
    title.className = "product__title";
    description.className = "product__description";
    price.className = "product__price";
    button.className = "product__button";

    img.src = filteredList[i].img;
    title.innerHTML = filteredList[i].productname;
    description.innerHTML = filteredList[i].description;
    price.innerHTML += filteredList[i].price;

    container.appendChild(img);
    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(price);
    container.appendChild(button);

    productsContainer.appendChild(container);

    button.addEventListener("click", function () {
      console.log("knapptryckning funkar");
      addProductToCart(products[i]);
      //location.reload();
    });

    button.innerHTML = "<i class='fa-solid fa-cart-plus'></i>";

    img.addEventListener("click", () => {
      console.log("trycka på bilde funkar");
      location.href = "../html/productdetails.html?id=" + products[i].id;
    });
  }
}

//
