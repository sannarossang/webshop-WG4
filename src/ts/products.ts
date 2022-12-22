import { Product } from "./models/Products";
import { products } from "./models/Products";

  createHTML(products);

export function createHTML(products: Product[]) {
  let productsContainer = document.getElementById(
    "productsContainer"
  ) as HTMLDivElement;

  productsContainer.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    let container: HTMLDivElement = document.createElement("div");
    let img: HTMLImageElement = document.createElement("img");
    let title: HTMLHeadingElement = document.createElement("h3");
    let description: HTMLSpanElement = document.createElement("span");
    let price: HTMLSpanElement = document.createElement("span");
    let button: HTMLButtonElement = document.createElement("button");

    // container.addEventListener("click", () => {
    //   handleClick(products[i])
    // });

    // container.setAttribute("fa-light fa-cart-circle-plus", "XX")

    container.className = "product";

    img.className = "product__image";
    title.className = "product__title";
    description.className = "product__description";
    price.className = "product__price";
    button.className = "product__button";

    img.src = products[i].img;
    title.innerHTML = products[i].productname;
    description.innerHTML = products[i].description;
    price.innerHTML += products[i].price;

    container.appendChild(img);
    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(price);
    container.appendChild(button);

    productsContainer.appendChild(container);

    button.addEventListener("click", function () {
      addToCart(products[i]);
    });

    container.addEventListener("click", ()=> {
      console.log("clickhändelse funkar")
      location.href = "../html/productdetails.html?id=" + products[i].id;
    })
  }

  function addToCart(clickedProduct: Product) {
    console.log("Du klickade på:", clickedProduct);
  }
  }

