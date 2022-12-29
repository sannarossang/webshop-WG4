import { addToCart, getCartItems } from "./cart";
// import { clearCart } from "./cart";
import { CartItem } from "./models/CartItem";
import { Product } from "./models/Products";

export function createHTMLforModal(getCartItems: CartItem[]) {
  let modalContainer = document.getElementById(
    "modalContainer"
  ) as HTMLDivElement;

  modalContainer.innerHTML = "";

  let productsTotalSum = 0;

  for (let i = 0; i < getCartItems.length; i++) {
    let container: HTMLDivElement = document.createElement("div");
    let img: HTMLImageElement = document.createElement("img");
    let title: HTMLHeadingElement = document.createElement("h3");
    let description: HTMLSpanElement = document.createElement("span");
    let price: HTMLSpanElement = document.createElement("span");

    let modalDeleteButton: HTMLButtonElement = document.createElement("button");
    let quantity: HTMLSpanElement = document.createElement("span");

    container.className = "productInModal";

    img.className = "productInModal__image";
    title.className = "productInModal__title";
    description.className = "productInModal__description";
    price.className = "producttInModal__price";

    modalDeleteButton.className = "productinModal__button";
    quantity.className = "product__quantity";

    img.src = getCartItems[i].product.img;
    title.innerHTML = getCartItems[i].product.productname;
    description.innerHTML = getCartItems[i].product.description;
    price.innerHTML += getCartItems[i].product.price;
    quantity.innerHTML += getCartItems[i].quantity;

    container.appendChild(img);
    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(price);

    container.appendChild(modalDeleteButton);
    container.appendChild(quantity);

    modalContainer.appendChild(container);

    //product counter + and -

    const counterControls = document.createElement("div");
    const decrease = document.createElement("button");
    const increase = document.createElement("button");

    counterControls.className = "counter-controls";
    decrease.innerHTML = "-";
    increase.innerHTML = "+";

    container.appendChild(counterControls);
    counterControls.appendChild(decrease);
    counterControls.appendChild(increase);

    decrease.addEventListener("click", function () {
      productCounterDecrease(getCartItems[i]);
    });

    increase.addEventListener("click", function () {
      productCounterIncrease(getCartItems[i]);
    });

    productsTotalSum += getCartItems[i].totalPrice;

    //clearCart
    // let clearCartinModal = document.getElementById(
    //   "clearCartinModal"
    // ) as HTMLButtonElement;

    // clearCartinModal?.addEventListener("click", function () {
    //   console.log("knapptryckning funkar");
    //   emptyCart();
    // });

    // //clearOneProduct
    // modalDeleteButton.addEventListener("click", function () {
    //   console.log("knapptryckning funkar");
    //   deleteCartItem();
    // });
  }
  let totalSum = document.getElementById("sumProducts");
  totalSum.innerHTML = "Total summa: " + productsTotalSum;
}

export function createHTMLforCheckout(cartItems: CartItem[]) {
  let checkoutContainer = document.getElementById(
    "checkoutContainer"
  ) as HTMLDivElement;

  checkoutContainer.innerHTML = "";

  for (let i = 0; i < cartItems.length; i++) {
    let container: HTMLDivElement = document.createElement("div");
    let img: HTMLImageElement = document.createElement("img");
    let title: HTMLHeadingElement = document.createElement("h3");
    let description: HTMLSpanElement = document.createElement("span");
    let price: HTMLSpanElement = document.createElement("span");
    let productButton: HTMLButtonElement = document.createElement("button");
    let clearCartinCheckoutButton: HTMLButtonElement =
      document.createElement("button");

    container.className = "productInCheckout";

    img.className = "productInCheckout__image";
    title.className = "productInCheckout__title";
    description.className = "productInCheckout__description";
    price.className = "productInCheckout__price";

    productButton.className = "productInCheckout__button";
    clearCartinCheckoutButton.className =
      "productinModal__clearCartinCheckoutButton";

    img.src = cartItems[i].product.img;
    title.innerHTML = cartItems[i].product.productname;
    description.innerHTML = cartItems[i].product.description;
    price.innerHTML += cartItems[i].product.price;

    container.appendChild(img);
    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(price);

    container.appendChild(productButton);
    container.appendChild(clearCartinCheckoutButton);

    checkoutContainer.appendChild(container);

    productButton.addEventListener("click", function () {
      console.log("knapptryckning för checkout funkar");
      addProductToCart(cartItems[i].product);
    });

    // let sum = totalPrice(cartItems).toString();
    // let totalSum = document.getElementById("sumProductsCheckout");
    // totalSum.innerHTML = "Total summa: " + sum;

    //clearCart
    // let clearCartinCheckout = document.getElementById(
    //   "clearCartinCheckout"
    // ) as HTMLButtonElement;

    // clearCartinCheckout.addEventListener("click", function () {
    //   emptyCart();
    // });
  }
}

function productCounterDecrease(cartItem: CartItem) {
  cartItem.quantity -= 1;
  addToCart(cartItem.product, cartItem.quantity);
  createHTMLforModal(getCartItems());
}

function productCounterIncrease(cartItem: CartItem) {
  cartItem.quantity += 1;
  addToCart(cartItem.product, cartItem.quantity);
  createHTMLforModal(getCartItems());
}

function addProductToCart(clickedProduct: Product) {
  addToCart(clickedProduct, 1);
  console.log(clickedProduct);
}

// function emptyCart() {
//   clearCart();
//   createHTMLforCheckout(getCartItems());
//   createHTMLforModal(getCartItems());
// }

// function deleteCartItem() {
//   clearOneProductinCart();
//   createHTMLforCheckout(getCartItems());
//   createHTMLforModal(getCartItems());
// }
