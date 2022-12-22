import { Cart } from "./models/Cart";
import { Product } from "./models/Products";

export function addToCart(product: Product, quantity: number) {
  if (Object.keys(getCart()).length === 0) {
    //carten finns inte, skapa en ny
    let productList: Product[] = [product];
    let cartObj = new Cart(productList, quantity);
    localStorage.setItem("myCartObject", JSON.stringify(cartObj));
  } else {
    let myCart: Cart = getCart();
    myCart.products.push(product);
    localStorage.setItem("myCartObject", JSON.stringify(myCart));
  }
}

export function getCart() {
  let cartObjFromLS = localStorage.getItem("myCartObject") || "{}";
  let cart: Cart = JSON.parse(cartObjFromLS);
  return cart;
}

function confirm() {}
function checkOut() {}

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
