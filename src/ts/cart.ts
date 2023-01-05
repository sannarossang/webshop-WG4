import { CartItem } from "../ts/models/CartItem";
import { Product } from "./models/Products";

export function updateCart(product: Product, quantity: number) {
  if (getCartItems().length === 0) {
    let newCartItem = createCartItem(product, quantity);
    let newCartItems: CartItem[] = [newCartItem];
    localStorage.setItem("myCartItems", JSON.stringify(newCartItems));
  } else {
    let currentCartItems: CartItem[] = getCartItems();
    let foundCartItem: CartItem = getCartItem(currentCartItems, product);
    if (quantity < 1) {
      let index = currentCartItems.indexOf(foundCartItem);
      currentCartItems.splice(index, 1);
    }
    if (foundCartItem !== null) {
      foundCartItem.quantity = quantity;
      foundCartItem.totalPrice = foundCartItem.quantity * product.price;
    } else {
      let newCartItem: CartItem = createCartItem(product, quantity);
      currentCartItems.push(newCartItem);
    }
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
