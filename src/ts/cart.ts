import { CartItem } from "../ts/models/CartItem";
import { Product, products } from "./models/Products";

export function getCustomerCartItem(
  customerCartItems: CartItem[],
  product: Product
) {
  for (let i = 0; i < customerCartItems.length; i++) {
    if (customerCartItems[i].product.id === product.id) {
      return customerCartItems[i];
    }
  }
  return null;
}
// funktionen addToCart tar in två parametrar, första är av datatyp Product (vår klass) och den andra är av datatyp number.
export function addToCart(product: Product, quantity: number) {
  // i första if-satsen kollar vi om det finns produkter i kundens varukorg, finns det hoppar den till else men finns den inte skapar den en ny.
  if (getCartItems().length === 0) {
    let cartObj = new CartItem(product, quantity);
    let cartItems: CartItem[] = [cartObj];
    // i båda fallen uppdateras localStorage.
    localStorage.setItem("myCartItems", JSON.stringify(cartItems));
    // i else-satsen vet vi att det finns produkter i varukorgen sedan tidigare, så vi hämtar den (let customerCartItems: CartItem[] = getCartItems())
  } else {
    let customerCartItems: CartItem[] = getCartItems();
    // hämtar den produkt kunden klickat på från kundens varukorg
    let customerCartItem: CartItem = getCustomerCartItem(
      customerCartItems,
      product
    );
    //kollar om den hämtade produkten redan finns i listan, om den redan finns plussar den bara antal
    if (customerCartItem !== null) {
      customerCartItem.quantity = quantity;
    } else {
      //om den inte finns lägger den till produkten i listan
      let newCartItem: CartItem = new CartItem(product, quantity);
      customerCartItems.push(newCartItem);
    } //det sista som händer är att localStorage uppdateras med rätt värden (produkter, antal)
    localStorage.setItem("myCartItems", JSON.stringify(customerCartItems));
  }
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

export function clearCart() {
  let emptyCart: string = "[]";
  localStorage.setItem("myCartItems", emptyCart);
}

// export function removeProductFromCart(removedProduct: Product) {
//   ta bort den klickade produkten från varukorgen
//   pos=i;
//   getCartItems().splice(pos, 1)
//   localStorage.getItem
// .-
//   let emptyOneProduct: string = "object";
//   localStorage.setItem("myCartItems", emptyOneProduct);
// }

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
