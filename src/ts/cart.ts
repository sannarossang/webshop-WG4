import { CartItem } from "../ts/models/CartItem";
import { Product } from "./models/Products";

// funktionen addToCart tar in två parametrar, första är av datatyp Product (vår klass) och den andra är av datatyp number.
export function updateCart(product: Product, quantity: number) {
  // i första if-satsen kollar vi om det finns produkter i kundens varukorg, finns det hoppar den till else men finns den inte skapar den en ny.
  if (getCartItems().length === 0) {
    let newCartItem = createCartItem(product, quantity);
    let newCartItems: CartItem[] = [newCartItem];
    // i båda fallen uppdateras localStorage.
    localStorage.setItem("myCartItems", JSON.stringify(newCartItems));
    // i else-satsen vet vi att det finns produkter i varukorgen sedan tidigare, så vi hämtar den (let customerCartItems: CartItem[] = getCartItems())
  } else {
    let currentCartItems: CartItem[] = getCartItems();
    // hämtar den produkt kunden klickat på från kundens varukorg
    let foundCartItem: CartItem = getCartItem(currentCartItems, product);
    //om quantity blir mindre än 1 tar vi bort produkten
    if (quantity < 1) {
      let index = currentCartItems.indexOf(foundCartItem);
      currentCartItems.splice(index, 1);
    }
    //kollar om den hämtade produkten redan finns i listan, om den redan finns uppdaterar vi quantity
    if (foundCartItem !== null) {
      foundCartItem.quantity = quantity;
      foundCartItem.totalPrice = foundCartItem.quantity * product.price;
    } else {
      //om den inte finns lägger den till produkten i listan
      let newCartItem: CartItem = createCartItem(product, quantity);
      currentCartItems.push(newCartItem);
    } //det sista som händer är att localStorage uppdateras med rätt värden (produkter, antal)
    console.log(currentCartItems, foundCartItem);
    localStorage.setItem("myCartItems", JSON.stringify(currentCartItems));
  }
}

export function getCartItem(currentCartItems: CartItem[], product: Product) {
  for (let i = 0; i < currentCartItems.length; i++) {
    if (currentCartItems[i].product.id === product.id) {
      return currentCartItems[i];
    }
  }
  return null;
}

export function getCartItems() {
  let newCartItems: CartItem[] = [];
  let cartItemsFromLocalStorage: string =
    localStorage.getItem("myCartItems") || "[]";
  let cartItemObjects = JSON.parse(cartItemsFromLocalStorage);
  for (let i = 0; i < cartItemObjects.length; i++) {
    let cartItem: CartItem = new CartItem(
      cartItemObjects[i].product,
      cartItemObjects[i].quantity,
      cartItemObjects[i].totalPrice
    );
    newCartItems.push(cartItem);
  }
  return newCartItems;
}

export function clearCart() {
  let emptyCartItems: string = "[]";
  localStorage.setItem("myCartItems", emptyCartItems);
}

export function removeProductFromCart(product: Product) {
  let currentCartItems: CartItem[] = getCartItems();
  let removeProduct: CartItem = getCartItem(currentCartItems, product);
  let removeProductIndex = currentCartItems.indexOf(removeProduct);
  currentCartItems.splice(removeProductIndex, 1);
  localStorage.setItem("myCartItems", JSON.stringify(currentCartItems));
}

export function productCounterDecrease(cartItem: CartItem) {
  cartItem.quantity -= 1;
  updateCart(cartItem.product, cartItem.quantity);
}

export function productCounterIncrease(cartItem: CartItem) {
  cartItem.quantity += 1;
  updateCart(cartItem.product, cartItem.quantity);
}

export function totalCartItemsQuantity() {
  let totalQuantity = 0;
  let cartItems = getCartItems();
  for (let i = 0; i < cartItems.length; i++) {
    totalQuantity = totalQuantity + cartItems[i].quantity;
  }
  return totalQuantity;
}

function createCartItem(product: Product, quantity: number) {
  return new CartItem(product, quantity, quantity * product.price);
}

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
