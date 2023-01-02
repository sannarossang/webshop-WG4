import { getCartItems } from "./cart";
import { createHTMLforCheckout, createHTMLforModal } from "./createhtml";

let backButton = document.getElementById("backaKnapp") as HTMLButtonElement;
backButton.addEventListener("click", backaWindow);

function backaWindow() {
  history.back();
}

//structure for pop-up
const div = document.createElement("div");
const h1 = document.createElement("h1");
const btnHome = document.createElement("button");
let span = document.createElement("span");
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
  div.appendChild(span);
  div.append(btnHome);
  span.innerHTML = "<a href='./products.html'>Fortsätt handla</a>";
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
