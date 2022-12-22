import { Product } from "./models/Products";
import { products } from "./models/Products";
import { createHTML } from "../ts/products";
import { myFunction } from "./cart";

// const wrapper = document.getElementById("wrapper") as HTMLElement;
// const div = document.createElement("div");
// let img = document.createElement("img");
// img.src = "../assets/imagewallpaper1.png";
// img.alt = "This is a picture of a wallpaper";
// wrapper.append(div)
// div.append(img)

// //lägger till produktbeskrivning
// const aside = document.createElement("aside");
// let h1 = document.createElement("h1");
// let p = document.createElement("p");
// h1.innerText = "Varm sommar";
// p.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae laudantium sint ab voluptatem autem illo cum, debitis commodi dignissimos provident amet nostrum velit non veritatis voluptate sequi. Ea, recusandae eius?";
// wrapper.append(aside)
// aside.append(h1)
// aside.append(p)

// let div= document.getElementsByClassName("product");
console.log("Start");

function searchById() {
  const paramSearch: URLSearchParams = new Proxy(
    new URLSearchParams(window.location.search),
    {
      get: (searchParams, id) => searchParams.get(id.toString()),
    }
  );

  let id = paramSearch.get("id");

  console.log(id);
}

function createHTMLForItem(products: Product[]) {
  if (searchById === null) {
    alert("Du har gjort fel");
  } else {
    for (let i = 0; i < products.length; i++) {
      let container: HTMLDivElement = document.createElement("div");

      let img: HTMLImageElement = document.createElement("img");
      let title: HTMLHeadingElement = document.createElement("h3");
      let description: HTMLSpanElement = document.createElement("span");
      let price: HTMLSpanElement = document.createElement("span");
      let button: HTMLButtonElement = document.createElement("button");

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

      const productDetailContainer = document.getElementById(
        "productDetailContainer"
      ) as HTMLElement;
      productDetailContainer.appendChild(container);
    }
  }
}

createHTMLForItem(products);
