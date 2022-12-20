import { Product } from "./models/Products";

window.onload = function () {
  console.log("onload");
  createHTML(products);
};

let wallpaper1 = new Product(
  "wallpaper 1",
  429,
  "romantic",
  "flowers",
  "boråstapeter",
  "unnizetterling",
  "src/assets/wallpaper1.png",
  "lite info om produkten"
);

let wallpaper2 = new Product(
  "wallpaper 1",
  429,
  "romantic",
  "flowers",
  "boråstapeter",
  "unnizetterling",
  "src/assets/wallpaper2.png",
  "lite info om produkten"
);

let wallpaper3 = new Product(
  "wallpaper 1",
  429,
  "romantic",
  "flowers",
  "boråstapeter",
  "unnizetterling",
  "/Users/sannarossang/Documents/Medieinstitutet/webshop-WG4/src/assets/wallpaper10.png",
  "lite info om produkten"
);

let products: Product[] = [wallpaper1, wallpaper2, wallpaper3];

function createHTML(products: Product[]) {
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

    container.className = "product";

    img.className = "product__image";
    title.className = "product__title";
    description.className = "product__description";
    price.className = "product__price";

    img.innerHTML = products[i].img;
    title.innerHTML = products[i].productname;
    description.innerHTML = products[i].description;
    price.innerHTML += products[i].price;

    container.appendChild(img);
    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(price);

    productsContainer.appendChild(container);
  }
}
