import { getCartItems } from "./cart";
import { createHTMLforCheckout, createHTMLforModal } from "./createhtml";

let backButton = document.getElementById("backaKnapp") as HTMLButtonElement;
backButton.addEventListener("click", backaWindow);

function backaWindow() {
  history.back();
}

//structure for pop-up not working atm
const div = document.createElement("div");
const h1 = document.createElement("h1");
const btnHome = document.createElement("button");

const modalId = document.getElementById("modalId") as HTMLElement;

modalId?.append(div);
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
