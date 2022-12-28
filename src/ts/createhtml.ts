import { addToCart, clearCart, getCartItems } from "./cart";
import { CartItem } from "./models/CartItem";
import { Product, products } from "./models/Products";

export const totalPrice = (getCartItems: CartItem[]) => {
  let sum: number = 0;

  for (let i = 0; i < getCartItems.length; i++) {
    sum += getCartItems[i].product.price;
  }
  return sum;
};

export function createHTMLforModal(getCartItems: CartItem[]) {
  let modalContainer = document.getElementById(
    "modalContainer"
  ) as HTMLDivElement;

  modalContainer.innerHTML = "";

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
    let productCounter = document.createElement("div");
    let span1 = document.createElement("span");
    let input = document.createElement("input");
    let span2 = document.createElement("span");

    productCounter.className = "counter";
    span1.className = "down";
    span1.innerText = "-";
    span1.onclick = function () {
      decreaseCount(event, this);
    };
    input.type = "text";
    input.value = "1";
    span2.className = "up";
    span2.innerText = "+";
    span1.onclick = function () {
      increaseCount(event, this);
    };
    container.appendChild(productCounter);
    productCounter.appendChild(span1);
    productCounter.appendChild(input);
    productCounter.appendChild(span2);

    function increaseCount(a: any, b: any) {
      var input = b.previousElementSibling;
      var value = parseInt(input.value, 10);
      value = isNaN(value) ? 0 : value;
      value++;
      input.value = value;
    }

    function decreaseCount(a: any, b: any) {
      var input = b.nextElementSibling;
      var value = parseInt(input.value, 10);
      if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
      }
    }

    //-------

    let sum = totalPrice(getCartItems).toString();
    let totalSum = document.getElementById("sumProducts");
    totalSum.innerHTML = "Total summa: " + sum;

    //clearCart

    let clearCartinModal = document.getElementById(
      "clearCartinModal"
    ) as HTMLButtonElement;

    clearCartinModal.addEventListener("click", function () {
      console.log("knapptryckning funkar");
      emptyCart();
    });

    // //clearOneProduct
    // modalDeleteButton.addEventListener("click", function () {
    //   console.log("knapptryckning funkar");
    //   deleteCartItem();
    // });
  }
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

    let sum = totalPrice(cartItems).toString();
    let totalSum = document.getElementById("sumProducts");
    totalSum.innerHTML = "Total summa: " + sum;

    //clearCart
    let clearCartinCheckout = document.getElementById(
      "clearCartinCheckout"
    ) as HTMLButtonElement;

    clearCartinCheckout.addEventListener("click", function () {
      emptyCart();
    });
  }
}

function addProductToCart(clickedProduct: Product) {
  addToCart(clickedProduct, 1);
  console.log(clickedProduct);
}

function emptyCart() {
  clearCart();
  createHTMLforCheckout(getCartItems());
  createHTMLforModal(getCartItems());
}

// function deleteCartItem() {
//   clearOneProductinCart();
//   createHTMLforCheckout(getCartItems());
//   createHTMLforModal(getCartItems());
// }
