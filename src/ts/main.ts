import { products } from "./models/Products";
import { getCartItems } from "../ts/cart";
import { CartItem } from "./models/Cart";

function createHTMLforCartItemList(customerCartItems: CartItem[]) {
  let cartItemContainer = document.getElementById(
    "cartItemListIndex"
  ) as HTMLDivElement;

  cartItemContainer.innerHTML = "";

  for (let i = 0; i < customerCartItems.length; i++) {
    let container: HTMLDivElement = document.createElement("div");
    let img: HTMLImageElement = document.createElement("img");
    let title: HTMLHeadingElement = document.createElement("h3");
    let description: HTMLSpanElement = document.createElement("span");
    let price: HTMLSpanElement = document.createElement("span");
    let button: HTMLButtonElement = document.createElement("button");

    container.className = "productInCart";

    img.className = "productInCart__image";
    title.className = "productInCart__title";
    description.className = "productInCart__description";
    price.className = "producInCart__price";
    button.className = "productInCart__button";

    img.src = products[i].img;
    title.innerHTML = products[i].productname;
    description.innerHTML = products[i].description;
    price.innerHTML += products[i].price;

    container.appendChild(img);
    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(price);
    container.appendChild(button);

    cartItemContainer.appendChild(container);
  }
}

createHTMLforCartItemList(getCartItems());
