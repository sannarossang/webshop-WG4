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
  "https://colorama.cdn.storm.io/9f8000a2-a43e-4a1f-8046-5ea963f72056?width=700&mode=crop&heightratio=1&height=700&quality=80",
  "lite info om produkten"
);

let wallpaper2 = new Product(
  "wallpaper 2",
  430,
  "romantic",
  "flowers",
  "boråstapeter",
  "unnizetterling",
  "https://colorama.cdn.storm.io/9f8000a2-a43e-4a1f-8046-5ea963f72056?width=700&mode=crop&heightratio=1&height=700&quality=80",
  "lite info om produkten"
);

let wallpaper3 = new Product(
  "wallpaper 3",
  431,
  "romantic",
  "flowers",
  "boråstapeter",
  "unnizetterling",
  "https://colorama.cdn.storm.io/9f8000a2-a43e-4a1f-8046-5ea963f72056?width=700&mode=crop&heightratio=1&height=700&quality=80",
  "lite info om produkten"
);

let products: Product[] = [wallpaper1, wallpaper2, wallpaper3];

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

    container.className = "product";

    img.className = "product__image";
    title.className = "product__title";
    description.className = "product__description";
    price.className = "product__price";

    //img.innerHTML = products[i].img;
    img.src = products[i].img;
    title.innerHTML = products[i].productname;
    description.innerHTML = products[i].description;
    price.innerHTML += products[i].price;

    container.appendChild(img);
    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(price);

    productsContainer.appendChild(container);
  }

  // ----------

    //open productdetails page
    const button = document.createElement("button");
    button.setAttribute("id", "hello-button")
    const helloButton: any = document.getElementById("hello-button");
    div.append(button)
    helloButton.addEventListener("click", sayHello); 

    function sayHello(){
    let a = document.createElement("a");
    a.innerText = "./productdetails.ts";
    img.appendChild(a)
    }
    
  }

