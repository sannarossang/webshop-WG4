import { getCartItems } from "./cart";
import { createHTMLforModal } from "./modal";

//modal för varukorg
let modal = document.getElementById("myModal");
let btn = document.getElementById("cartButton");
let closeBtn = document.getElementById("closeButton");

//öppna modal
btn.onclick = function () {
  modal.style.display = "block";
};

//stängningskryss för modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};

//funktionalitet för att kunna trycka utanför för att stänga – not working atm
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

//funktionalitet för att kunna trycka utanför för att stänga hamburgermenyn
window.onclick = function (event) {
  if (event.target == burgerModal) {
    burgerModal.style.display = "none";
  }
};

createHTMLforModal(getCartItems());
