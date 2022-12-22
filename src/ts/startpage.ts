import { Product } from "./models/Products";
import { createHTML } from "./products";
import * as products from "./products";

/*export function openCart() {
  let cart = document.getElementById("cartButton");
  cart?.addEventListener("click", () => {
    createHTML;
  });
} */

export function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  const { target } = event;
  if (target) (target as HTMLButtonElement).matches(".dropbtn");
  var myDropdown = document.getElementById("myDropdown");
  if (myDropdown.classList.contains("show")) {
    myDropdown.classList.remove("show");
  }
};

let modal = document.getElementById("myModal");
let btn = document.getElementById("cartButton");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

function closeSpan() {
  span.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

closeSpan();

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
