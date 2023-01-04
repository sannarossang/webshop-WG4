import {
  clearCart,
  getCartItems,
  removeProductFromCart,
  productCounterDecrease,
  productCounterIncrease,
  totalCartItemsQuantity,
} from "./cart";
import { createHTMLforModal } from "./modal";
import { CartItem } from "./models/CartItem";

function createHTMLforCheckout(cartItems: CartItem[]) {
  let checkoutContainer = document.getElementById(
    "checkoutContainer"
  ) as HTMLDivElement;

  checkoutContainer.innerHTML = "";

  let productsTotalSum = 0;

  for (let i = 0; i < cartItems.length; i++) {
    let container: HTMLDivElement = document.createElement("div");
    let img: HTMLImageElement = document.createElement("img");
    let title: HTMLHeadingElement = document.createElement("h3");
    let artist: HTMLHeadElement = document.createElement("h4");
    let description: HTMLSpanElement = document.createElement("span");
    let articleInCheckout: HTMLElement = document.createElement("article");
    let price: HTMLSpanElement = document.createElement("span");
    let span: HTMLSpanElement = document.createElement("span");

    let quantity: HTMLSpanElement = document.createElement("span");

    container.className = "productInCheckout";

    img.className = "productInCheckout__image";
    title.className = "productInCheckout__title";
    artist.className = "productInModal__artist";
    description.className = "productInCheckout__description";
    articleInCheckout.className = "productInCheckout__article";
    price.className = "productInCheckout__price";
    span.className = "product__plusMinus";

    quantity.className = "product__quantity";

    img.src = cartItems[i].product.img;
    title.innerHTML = cartItems[i].product.productname;
    artist.innerHTML = cartItems[i].product.collection;
    description.innerHTML = cartItems[i].product.description;
    price.innerHTML += cartItems[i].product.price + ":-";
    quantity.innerHTML += cartItems[i].quantity;

    articleInCheckout.appendChild(title);
    articleInCheckout.appendChild(artist);
    articleInCheckout.appendChild(description);
    articleInCheckout.appendChild(price);

    container.appendChild(img);
    container.appendChild(articleInCheckout);

    checkoutContainer.appendChild(container);

    //product counter + and -

    const counterControls = document.createElement("div");
    const decrease = document.createElement("button");
    const increase = document.createElement("button");

    counterControls.className = "counter-controls";
    decrease.innerHTML = "-";
    increase.innerHTML = "+";
    decrease.className = "decrease";
    increase.className = "increase";

    container.appendChild(counterControls);
    counterControls.appendChild(quantity);
    span.appendChild(increase);
    span.appendChild(decrease);
    counterControls.appendChild(span);

    decrease.addEventListener("click", function () {
      productCounterDecrease(cartItems[i]);
      createHTMLforCheckout(getCartItems());
    });

    increase.addEventListener("click", function () {
      productCounterIncrease(cartItems[i]);
      createHTMLforCheckout(getCartItems());
    });

    productsTotalSum += cartItems[i].totalPrice;

    //deletebutton
    let deleteDiv = document.createElement("div");
    let checkoutDeletebutton: HTMLButtonElement =
      document.createElement("button");
    checkoutDeletebutton.innerHTML = "<i class='fa-regular fa-trash-can'></i>";
    container.appendChild(deleteDiv);
    deleteDiv.appendChild(checkoutDeletebutton);
    checkoutDeletebutton.className = "checkoutDeleteBtn";

    //clearOneProduct
    checkoutDeletebutton.addEventListener("click", function () {
      removeProductFromCart(cartItems[i].product);
      createHTMLforCheckout(getCartItems());
    });
    //

    //clearCart
    let clearCartinCheckout = document.getElementById(
      "clearCartinCheckout"
    ) as HTMLButtonElement;

    clearCartinCheckout.addEventListener("click", function () {
      clearCart();
      createHTMLforCheckout(getCartItems());
    });
    //
  }
  let totalSum = document.getElementById("sumProductsCheckout");
  totalSum.innerHTML = "Total summa: " + productsTotalSum + ":-";

  //addProductCounter
  let productCart = document.getElementById(
    "addProductCounter"
  ) as HTMLLIElement;

  productCart.value = totalCartItemsQuantity();
}

let backButton = document.getElementById("backaKnapp") as HTMLButtonElement;
backButton.addEventListener("click", backaWindow);

function backaWindow() {
  history.back();
}

//structure for pop-up
const div = document.createElement("div");
const h1 = document.createElement("h1");
const btnHome = document.createElement("button");
let pTag = document.createElement("p");

const modalId = document.getElementById("modalId") as HTMLElement;

modalId?.append(div);
div.append(pTag);
div.append(h1);

//pop-up onlick
const paymentSuccess = document.getElementById("paymentSuccess");
const btn = document.getElementById("payButton") as HTMLButtonElement; //tar id från knappen

let payform = document.getElementById("payform") as HTMLButtonElement;
payform.addEventListener("submit", (e) => {
  e.preventDefault();

  btn.style.display = "block";
  div.className = "modal-body";
  pTag.className = "pTagInCheckoutModal";
  h1.innerText = "Tack för ditt köp!";
  pTag.innerHTML = "<i class='fa-regular fa-circle-check'></i>";
  btnHome.setAttribute("id", "homeButton");
  div.append(btnHome);
  btnHome.innerHTML = "<a href='./products.html'>Fortsätt handla</a>";
  clearCart();
});

window.onclick = function (event) {
  if (event.target == paymentSuccess) {
    paymentSuccess.style.display = "none";
    location.href = "../index.html";
  }
};

let modal = document.getElementById("myModal");
let button = document.getElementById("cartButton");
let closeBtn = document.getElementById("closeButton");

button.onclick = function () {
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

createHTMLforCheckout(getCartItems());
createHTMLforModal(getCartItems());
