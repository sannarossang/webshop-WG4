import { CartItem } from "./models/CartItem";
import { Product } from "./models/Products";
import { addToCart, getCartItems } from "./cart";

export function createHTMLforModal(getCartItems: CartItem[]) {
  let modalContainer = document.getElementById(
    "modalContainer"
  ) as HTMLDivElement;

  modalContainer.innerHTML = "";

  for (let i = 0; i < getCartItems.length; i++) {
    let container: HTMLDivElement = document.createElement("div");
    let img: HTMLImageElement = document.createElement("img");
    let title: HTMLHeadingElement = document.createElement("h3");
    let description: HTMLSpanElement = document.createElement("span");
    let price: HTMLSpanElement = document.createElement("span");

    let modalButton: HTMLButtonElement = document.createElement("button");
    let clearCartinModalButton: HTMLButtonElement =
      document.createElement("button");

    container.className = "productInModal";

    img.className = "productInModal__image";
    title.className = "productInModal__title";
    description.className = "productInModal__description";
    price.className = "productInModal__price";

    modalButton.className = "productinModal__button";
    clearCartinModalButton.className = "productinModal__clearCartModalButton";

    img.src = getCartItems[i].product.img;
    title.innerHTML = getCartItems[i].product.productname;
    description.innerHTML = getCartItems[i].product.description;
    price.innerHTML += getCartItems[i].product.price;

    container.appendChild(img);
    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(price);

    container.appendChild(modalButton);
    container.appendChild(clearCartinModalButton);

    modalContainer.appendChild(container);

    modalButton.addEventListener("click", function () {
      console.log("knapptryckning för modal funkar");
      addProductToCart(getCartItems[i].product);
    });

    clearCartinModalButton.addEventListener("click", function () {
      console.log("knapptryckning funkar");
    });
  }
}

export function createHTMLforCheckout(getCartItems: CartItem[]) {
  let checkoutContainer = document.getElementById(
    "checkoutContainer"
  ) as HTMLDivElement;

  checkoutContainer.innerHTML = "";

  for (let i = 0; i < getCartItems.length; i++) {
    let container: HTMLDivElement = document.createElement("div");
    let img: HTMLImageElement = document.createElement("img");
    let title: HTMLHeadingElement = document.createElement("h3");
    let description: HTMLSpanElement = document.createElement("span");
    let price: HTMLSpanElement = document.createElement("span");
    let productButton: HTMLButtonElement = document.createElement("button");
    let clearCartinCheckoutButton: HTMLButtonElement =
      document.createElement("button");

    container.className = "productInCheckout";

    img.className = "productInCheckout__image";
    title.className = "productInCheckout__title";
    description.className = "productInCheckout__description";
    price.className = "productInCheckout__price";

    productButton.className = "productInCheckout__button";
    clearCartinCheckoutButton.className =
      "productinModal__clearCartinCheckoutButton";

    img.src = getCartItems[i].product.img;
    title.innerHTML = getCartItems[i].product.productname;
    description.innerHTML = getCartItems[i].product.description;
    price.innerHTML += getCartItems[i].product.price;

    container.appendChild(img);
    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(price);

    container.appendChild(productButton);
    container.appendChild(clearCartinCheckoutButton);

    checkoutContainer.appendChild(container);

    productButton.addEventListener("click", function () {
      console.log("knapptryckning för checkout funkar");
      addProductToCart(getCartItems[i].product);
    });

    clearCartinCheckoutButton.addEventListener("click", function () {
      console.log("knapptryckning funkar");
    });
  }
}

function addProductToCart(clickedProduct: Product) {
  addToCart(clickedProduct, 1);
  console.log(clickedProduct);
}
