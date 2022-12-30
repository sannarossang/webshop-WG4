import { addToCart, getCartItems } from "./cart";
import { clearCart, removeProductFromCart } from "./cart";
import { CartItem } from "./models/CartItem";
import { Product } from "./models/Products";

export function createHTMLforModal(cartItems: CartItem[]) {
  let modalContainer = document.getElementById(
    "modalContainer"
  ) as HTMLDivElement;

  modalContainer.innerHTML = "";

  let productsTotalSum = 0;

  for (let i = 0; i < cartItems.length; i++) {
    let container: HTMLDivElement = document.createElement("div");
    let img: HTMLImageElement = document.createElement("img");
    let title: HTMLHeadingElement = document.createElement("h3");
    let artist: HTMLHeadElement = document.createElement("h4");
    let description: HTMLSpanElement = document.createElement("span");
    let articleInModal: HTMLElement = document.createElement("article");
    let price: HTMLSpanElement = document.createElement("span");
    let span: HTMLSpanElement = document.createElement("span");

    let quantity: HTMLSpanElement = document.createElement("span");

    container.className = "productInModal";

    img.className = "productInModal__image";
    articleInModal.className = "productInModal__article";
    title.className = "productInModal__title";
    artist.className = "productInModal__artist";
    description.className = "productInModal__description";
    price.className = "productInModal__price";
    span.className = "product__plusMinus";

    quantity.className = "product__quantity";

    img.src = cartItems[i].product.img;
    title.innerHTML = cartItems[i].product.productname;
    artist.innerHTML = cartItems[i].product.collection;
    description.innerHTML = cartItems[i].product.description;
    price.innerHTML += cartItems[i].product.price + ":-";
    quantity.innerHTML += cartItems[i].quantity;

    articleInModal.appendChild(title);
    articleInModal.appendChild(artist);
    articleInModal.appendChild(description);
    articleInModal.appendChild(price);

    container.appendChild(img);
    container.appendChild(articleInModal);

    modalContainer.appendChild(container);

    //product counter + and -

    const counterControls = document.createElement("div");
    const decrease = document.createElement("button");
    const increase = document.createElement("button");

    counterControls.className = "counter-controls";
    decrease.innerHTML = "-";
    increase.innerHTML = "+";
    decrease.className = "decrease";
    increase.className = "increase";

    container.appendChild(counterControls);
    counterControls.appendChild(quantity);
    span.appendChild(increase);
    span.appendChild(decrease);
    counterControls.appendChild(span);

    decrease.addEventListener("click", function () {
      productCounterDecrease(cartItems[i], false);
      createHTMLforModal(getCartItems());
    });

    increase.addEventListener("click", function () {
      productCounterIncrease(cartItems[i], false);
      createHTMLforModal(getCartItems());
    });

    productsTotalSum += cartItems[i].totalPrice;

    //deletebutton
    let deleteDiv = document.createElement("div");
    let checkoutDeletebutton: HTMLButtonElement =
      document.createElement("button");
    checkoutDeletebutton.innerHTML = "<i class='fa-regular fa-trash-can'></i>";
    checkoutDeletebutton.className = "checkoutDeleteBtn";
    container.appendChild(deleteDiv);
    deleteDiv.appendChild(checkoutDeletebutton);

    //clearOneProduct
    checkoutDeletebutton.addEventListener("click", function () {
      deleteCartItem(cartItems[i].product, false);
    });
    //

    //clearCart
    let clearCartinModal = document.getElementById(
      "clearCartinModal"
    ) as HTMLButtonElement;

    clearCartinModal.addEventListener("click", function () {
      emptyCart(false);
    });
    //
  }
  let totalSum = document.getElementById("sumProducts");
  totalSum.innerHTML = "Total summa: " + productsTotalSum + ":-";
}

export function createHTMLforCheckout(cartItems: CartItem[]) {
  let checkoutContainer = document.getElementById(
    "checkoutContainer"
  ) as HTMLDivElement;

  checkoutContainer.innerHTML = "";

  let productsTotalSum = 0;

  for (let i = 0; i < cartItems.length; i++) {
    let container: HTMLDivElement = document.createElement("div");
    let img: HTMLImageElement = document.createElement("img");
    let title: HTMLHeadingElement = document.createElement("h3");
    let artist: HTMLHeadElement = document.createElement("h4");
    let description: HTMLSpanElement = document.createElement("span");
    let articleInCheckout: HTMLElement = document.createElement("article");
    let price: HTMLSpanElement = document.createElement("span");
    let span: HTMLSpanElement = document.createElement("span");

    let quantity: HTMLSpanElement = document.createElement("span");

    container.className = "productInCheckout";

    img.className = "productInCheckout__image";
    title.className = "productInCheckout__title";
    artist.className = "productInModal__artist";
    description.className = "productInCheckout__description";
    articleInCheckout.className = "productInCheckout__article";
    price.className = "productInCheckout__price";
    span.className = "product__plusMinus";

    quantity.className = "product__quantity";

    img.src = cartItems[i].product.img;
    title.innerHTML = cartItems[i].product.productname;
    artist.innerHTML = cartItems[i].product.collection;
    description.innerHTML = cartItems[i].product.description;
    price.innerHTML += cartItems[i].product.price + ":-";
    quantity.innerHTML += cartItems[i].quantity;

    articleInCheckout.appendChild(title);
    articleInCheckout.appendChild(artist);
    articleInCheckout.appendChild(description);
    articleInCheckout.appendChild(price);

    container.appendChild(img);
    container.appendChild(articleInCheckout);

    checkoutContainer.appendChild(container);

    //product counter + and -

    const counterControls = document.createElement("div");
    const decrease = document.createElement("button");
    const increase = document.createElement("button");

    counterControls.className = "counter-controls";
    decrease.innerHTML = "-";
    increase.innerHTML = "+";
    decrease.className = "decrease";
    increase.className = "increase";

    container.appendChild(counterControls);
    counterControls.appendChild(quantity);
    span.appendChild(increase);
    span.appendChild(decrease);
    counterControls.appendChild(span);

    decrease.addEventListener("click", function () {
      productCounterDecrease(cartItems[i], true);
    });

    increase.addEventListener("click", function () {
      productCounterIncrease(cartItems[i], true);
    });

    productsTotalSum += cartItems[i].totalPrice;

    //deletebutton
    let deleteDiv = document.createElement("div");
    let checkoutDeletebutton: HTMLButtonElement =
      document.createElement("button");
    checkoutDeletebutton.innerHTML = "<i class='fa-regular fa-trash-can'></i>";
    container.appendChild(deleteDiv);
    deleteDiv.appendChild(checkoutDeletebutton);
    checkoutDeletebutton.className = "checkoutDeleteBtn";

    //clearOneProduct
    checkoutDeletebutton.addEventListener("click", function () {
      deleteCartItem(cartItems[i].product, true);
    });
    //

    //clearCart
    let clearCartinCheckout = document.getElementById(
      "clearCartinCheckout"
    ) as HTMLButtonElement;

    clearCartinCheckout.addEventListener("click", function () {
      emptyCart(true);
    });
    //
  }
  let totalSum = document.getElementById("sumProductsCheckout");
  totalSum.innerHTML = "Total summa: " + productsTotalSum + ":-";
}

function productCounterDecrease(cartItem: CartItem, inCheckOut: boolean) {
  cartItem.quantity -= 1;
  addToCart(cartItem.product, cartItem.quantity);
  createHTMLforModal(getCartItems());
  if (inCheckOut) {
    createHTMLforCheckout(getCartItems());
  }
}

function productCounterIncrease(cartItem: CartItem, inCheckOut: boolean) {
  cartItem.quantity += 1;
  addToCart(cartItem.product, cartItem.quantity);
  createHTMLforModal(getCartItems());
  if (inCheckOut) {
    createHTMLforCheckout(getCartItems());
  }
}

function emptyCart(inCheckOut: boolean) {
  clearCart();
  createHTMLforModal(getCartItems());
  if (inCheckOut) {
    createHTMLforCheckout(getCartItems());
  }
}

function deleteCartItem(deleteProduct: Product, inCheckOut: boolean) {
  removeProductFromCart(deleteProduct);
  createHTMLforModal(getCartItems());
  if (inCheckOut) {
    createHTMLforCheckout(getCartItems());
  }
}
