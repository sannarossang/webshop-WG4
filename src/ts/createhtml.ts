import { addToCart, getCartItems } from "./cart";
import { CartItem } from "./models/CartItem";
import { Product, products } from "./models/Products";

export const totalPrice = (getCartItems: CartItem[]) => {
  let sum: number = 0;

  for (let i = 0; i < getCartItems.length; i++) {
    sum += getCartItems[i].product.price;
  }
  return sum;
};

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
    let quantity: HTMLSpanElement = document.createElement("span");

    container.className = "productInModal";

    img.className = "productInModal__image";
    title.className = "productInModal__title";
    description.className = "productInModal__description";
    price.className = "productInModal__price";
    modalButton.className = "product__button";
    quantity.className = "product__quantity";

    img.src = getCartItems[i].product.img;
    title.innerHTML = getCartItems[i].product.productname;
    description.innerHTML = getCartItems[i].product.description;
    price.innerHTML += getCartItems[i].product.price;
    quantity.innerHTML += getCartItems[i].quantity;

    container.appendChild(img);
    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(price);
    container.appendChild(modalButton);
    container.appendChild(quantity);

    modalContainer.appendChild(container);

    modalButton.addEventListener("click", function () {
      console.log("knapptryckning för modal funkar");
      addProductToCart(getCartItems[i].product);
    });

    let sum = totalPrice(getCartItems).toString();
    let totalSum = document.getElementById("sumProducts");
    totalSum.innerHTML = "Total summa: " + sum;
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

    container.className = "productInCheckout";

    img.className = "productInCheckout__image";
    title.className = "productInCheckout__title";
    description.className = "productInCheckout__description";
    price.className = "productInCheckout__price";
    productButton.className = "productInCheckout__button";

    img.src = getCartItems[i].product.img;
    title.innerHTML = getCartItems[i].product.productname;
    description.innerHTML = getCartItems[i].product.description;
    price.innerHTML += getCartItems[i].product.price;

    container.appendChild(img);
    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(price);
    container.appendChild(productButton);

    checkoutContainer.appendChild(container);

    productButton.addEventListener("click", function () {
      console.log("knapptryckning för checkout funkar");
      addProductToCart(getCartItems[i].product);
    });

    let sum = totalPrice(getCartItems).toString();
    let totalSum = document.getElementById("sumProductsCheckout");
    totalSum.innerHTML = "Total summa: " + sum;
  }
}

function addProductToCart(clickedProduct: Product) {
  addToCart(clickedProduct, 1);
  console.log(clickedProduct);
}
