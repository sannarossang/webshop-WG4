import { CartItem } from "./models/Cart";
import { Product, products } from "./models/Products";

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
