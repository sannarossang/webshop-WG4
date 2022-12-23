import * as functions from "./cart";
import { Product } from "./models/Products";
import { products } from "./models/Products";
import { addToCart } from "../ts/cart";
import { getCartItems } from "../ts/cart";
import { CartItem } from "./models/Cart";

let backButton = document.getElementById("backaKnapp") as HTMLButtonElement;
backButton.addEventListener("click", backaWindow);

function backaWindow() {
  history.back();
}

//structure for pop-up
const div = document.createElement("div");
const h1 = document.createElement("h1");
const btnHome = document.createElement("button");

const modalId = document.getElementById("modalId") as HTMLElement;

modalId.append(div);
div.append(h1);

//pop-up onlick
const paymentSuccess = document.getElementById("paymentSuccess");
const btn = document.getElementById("payButton") as HTMLButtonElement; //tar id från knappen

btn.onclick = function () {
  btn.style.display = "block";
  div.className = "modal-body";
  h1.innerText = "Tack för ditt köp!";
  div.append(btnHome);
};

window.onclick = function (event) {
  if (event.target == paymentSuccess) {
    paymentSuccess.style.display = "none";
    location.href = "../index.html";
  }
};

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

function createHTMLforCartItemList(customerCartItems: CartItem[]) {
  let cartItemContainer = document.getElementById(
    "cartItemList"
  ) as HTMLDivElement;

  cartItemContainer.innerHTML = "";

  for (let i = 0; i < customerCartItems.length; i++) {
    let container: HTMLDivElement = document.createElement("div");
    let img: HTMLImageElement = document.createElement("img");
    let title: HTMLHeadingElement = document.createElement("h3");
    let description: HTMLSpanElement = document.createElement("span");
    let price: HTMLSpanElement = document.createElement("span");
    let button: HTMLButtonElement = document.createElement("button");

    container.className = "productInCart";

    img.className = "productInCart__image";
    title.className = "productInCart__title";
    description.className = "productInCart__description";
    price.className = "producInCart__price";
    button.className = "productInCart__button";

    img.src = products[i].img;
    title.innerHTML = products[i].productname;
    description.innerHTML = products[i].description;
    price.innerHTML += products[i].price;

    container.appendChild(img);
    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(price);
    container.appendChild(button);

    cartItemContainer.appendChild(container);
  }
}

createHTMLforCartItemList(getCartItems());
