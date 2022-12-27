import { CartItem } from "./models/CartItem";
import { products } from "./models/Products";

export function createHTMLforModal(getCartItems: CartItem[]) {
  let modalContainer = document.getElementById(
    "modalContainer"
  ) as HTMLDivElement;

  modalContainer.innerHTML = "";

  console.log("i createHTMLformodal");

  for (let i = 0; i < getCartItems.length; i++) {
    console.log("i loopen createHTMLforModal");

    let container: HTMLDivElement = document.createElement("div");
    let img: HTMLImageElement = document.createElement("img");
    let title: HTMLHeadingElement = document.createElement("h3");
    let description: HTMLSpanElement = document.createElement("span");
    let price: HTMLSpanElement = document.createElement("span");

    container.className = "productInModal";

    img.className = "productInModal__image";
    title.className = "productInModal__title";
    description.className = "productInModal__description";
    price.className = "producInModal__price";

    img.src = products[i].img;
    title.innerHTML = products[i].productname;
    description.innerHTML = products[i].description;
    price.innerHTML += products[i].price;

    container.appendChild(img);
    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(price);

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

    modalContainer.appendChild(container);
  }
}

export function createHTMLforCheckout(getCartItems: CartItem[]) {
  let checkoutContainer = document.getElementById(
    "checkoutContainer"
  ) as HTMLDivElement;

  checkoutContainer.innerHTML = "";

  for (let i = 0; i < getCartItems.length; i++) {
    let container: HTMLDivElement = document.createElement("div");
    let img: HTMLImageElement = document.createElement("img");
    let title: HTMLHeadingElement = document.createElement("h3");
    let description: HTMLSpanElement = document.createElement("span");
    let price: HTMLSpanElement = document.createElement("span");
    let button: HTMLButtonElement = document.createElement("button");

    container.className = "productInCheckout";

    img.className = "productInCheckout__image";
    title.className = "productInCheckout__title";
    description.className = "productInCheckout__description";
    price.className = "productInCheckout__price";
    button.className = "productInCheckout__button";

    img.src = products[i].img;
    title.innerHTML = products[i].productname;
    description.innerHTML = products[i].description;
    price.innerHTML += products[i].price;

    container.appendChild(img);
    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(price);
    container.appendChild(button);

    checkoutContainer.appendChild(container);
  }
}
