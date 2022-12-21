import { Cart } from "./models/Cart";
import { Product } from "./models/Products";

export function addToCart(product: Product, quantity: number) {
  console.log("addToCart");
  let cartObj = new Cart(product, quantity);
  localStorage.setItem("myCartObject", JSON.stringify(cartObj));
}

export function getCart(product: Product, quantity: number) {
  console.log("getCart");
  let cartObjFromLS = localStorage.getItem("myCartObject") || "{}";
  let cartObjLS = JSON.parse(cartObjFromLS);
  for (let i = 0; i < cartObjLS.length; i++) {
    new Cart(cartObjLS[i].product, cartObjLS[i].quantity);
    return getCart;
  }
}
function confirm() {}
function checkOut() {}
