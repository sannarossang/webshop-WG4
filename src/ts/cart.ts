import { CartItem } from "./models/Cart";
import { Product } from "./models/Products";

export function addToCart(product: Product, quantity: number) {
  if (Object.keys(getCartItems()).length === 0) {
    //carten finns inte, skapa en ny
    let cartObj = new CartItem(product, quantity);
    let cartItems: CartItem[] = [cartObj];
    localStorage.setItem("myCartItems", JSON.stringify(cartItems));
  } else {
    let customerCartItems: CartItem[] = getCartItems();
    let customerCartItem: CartItem = getCustomerCartItem(
      customerCartItems,
      product
    );
    if (customerCartItem !== null) {
      customerCartItem.quantity++;
    } else {
      let newCartItem: CartItem = new CartItem(product, quantity);
      customerCartItems.push(newCartItem);
    }
    localStorage.setItem("myCartItems", JSON.stringify(customerCartItems));
  }
}

function getCustomerCartItem(customerCartItems: CartItem[], product: Product) {
  for (let i = 0; i < customerCartItems.length; i++) {
    if (customerCartItems[i].product.id === product.id) {
      return customerCartItems[i];
    }
  }
  return null;
}

export function getCartItems() {
  let cartItems: CartItem[] = [];
  let cartItemsFromLS: string = localStorage.getItem("myCartItems") || "[]";
  let cartItemsObjects = JSON.parse(cartItemsFromLS);
  for (let i = 0; i < cartItemsObjects.length; i++) {
    let cartItem: CartItem = new CartItem(
      cartItemsObjects[i].product,
      cartItemsObjects[i].quantity
    );
    cartItems.push(cartItem);
  }
  return cartItems;
}

function confirm() {}
function checkOut() {}

let modal = document.getElementById("myModal");
let btn = document.getElementById("cartButton");
let closeBtn = document.getElementById("closeButton");

btn.onclick = function () {
  modal.style.display = "block";
};

// closeBtn.onclick = function () {
//   modal.style.display = "none";
// };

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
