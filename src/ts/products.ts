import { Product } from "./models/Products";
import imagewallpaper1 from "../assets/imagewallpaper1.png";
import imagewallpaper2 from "../assets/imagewallpaper2.png";
import imagewallpaper3 from "../assets/imagewallpaper3.png";
import imagewallpaper4 from "../assets/imagewallpaper4.png";
import imagewallpaper5 from "../assets/imagewallpaper5.png";
import imagewallpaper6 from "../assets/imagewallpaper6.png";
import imagewallpaper7 from "../assets/imagewallpaper7.png";
import imagewallpaper8 from "../assets/imagewallpaper8.png";

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
  imagewallpaper1,
  "lite info om produkten"
);

let wallpaper2 = new Product(
  "wallpaper 2",
  430,
  "romantic",
  "flowers",
  "boråstapeter",
  "unnizetterling",
  imagewallpaper2,
  "lite info om produkten"
);

let wallpaper3 = new Product(
  "wallpaper 3",
  431,
  "romantic",
  "flowers",
  "boråstapeter",
  "unnizetterling",
  imagewallpaper3,
  "lite info om produkten"
);

let wallpaper4 = new Product(
  "wallpaper 4",
  431,
  "romantic",
  "flowers",
  "boråstapeter",
  "unnizetterling",
  imagewallpaper4,
  "lite info om produkten"
);

let wallpaper5 = new Product(
  "wallpaper 5",
  429,
  "romantic",
  "flowers",
  "boråstapeter",
  "unnizetterling",
  imagewallpaper5,
  "lite info om produkten"
);

let wallpaper6 = new Product(
  "wallpaper 6",
  430,
  "romantic",
  "flowers",
  "boråstapeter",
  "unnizetterling",
  imagewallpaper6,
  "lite info om produkten"
);

let wallpaper7 = new Product(
  "wallpaper 7",
  431,
  "romantic",
  "flowers",
  "boråstapeter",
  "unnizetterling",
  imagewallpaper7,
  "lite info om produkten"
);

let wallpaper8 = new Product(
  "wallpaper 8",
  431,
  "romantic",
  "flowers",
  "boråstapeter",
  "unnizetterling",
  imagewallpaper8,
  "lite info om produkten"
);

let products: Product[] = [
  wallpaper1,
  wallpaper2,
  wallpaper3,
  wallpaper4,
  wallpaper5,
  wallpaper6,
  wallpaper7,
  wallpaper8,
];

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
  }

  function addToCart(clickedProduct: Product) {
    console.log("Du klickade på:", clickedProduct);
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

