import { addToCart, getCartItems } from "./cart";
// import { clearCart } from "./cart";
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

    img.src = cartItems[i].product.img;
    title.innerHTML = cartItems[i].product.productname;
    description.innerHTML = cartItems[i].product.description;
    price.innerHTML += cartItems[i].product.price;
    quantity.innerHTML += cartItems[i].quantity;

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
      productCounterDecrease(cartItems[i]);
      createHTMLforModal(getCartItems());
    });

    increase.addEventListener("click", function () {
      productCounterIncrease(cartItems[i]);
      createHTMLforModal(getCartItems());
    });

    productsTotalSum += cartItems[i].totalPrice;

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

  let productsTotalSum = 0;

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
    // quantity.innerHTML += cartItems[i].quantity;

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
      productCounterDecrease(cartItems[i]);
      createHTMLforCheckout(getCartItems());
    });

    increase.addEventListener("click", function () {
      productCounterIncrease(cartItems[i]);
      createHTMLforCheckout(getCartItems());
    });

    productsTotalSum += cartItems[i].totalPrice;

    //clearCart
    // let clearCartinCheckout = document.getElementById(
    //   "clearCartinCheckout"
    // ) as HTMLButtonElement;

    // clearCartinCheckout.addEventListener("click", function () {
    //   emptyCart();
    // });
  }
  let totalSum = document.getElementById("sumProductsCheckout");
  totalSum.innerHTML = "Total summa: " + productsTotalSum;
}

function productCounterDecrease(cartItem: CartItem) {
  cartItem.quantity--;
  console.log(cartItem.quantity);
  addToCart(cartItem.product, cartItem.quantity);
}

function productCounterIncrease(cartItem: CartItem) {
  cartItem.quantity++;
  addToCart(cartItem.product, cartItem.quantity);
}

function addProductToCart(clickedProduct: Product) {
  addToCart(clickedProduct, 1);
  createHTMLforModal(getCartItems());
  createHTMLforCheckout(getCartItems());
}

// function reduceCart(getCartItems: CartItem[], cartItem: CartItem) {
//   cartItem.quantity--;
//   if (cartItem.quantity < 1) {
//     let index = getCartItems.indexOf(cartItem);
//     getCartItems.splice(index, 1);
//   }
//   localStorage.setItem("myCartItems", JSON.stringify(getCartItems));
//   createHTMLforModal(getCartItems);
// }

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
