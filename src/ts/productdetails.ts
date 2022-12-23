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
// let h1 = document.createElement("h1");
// let p = document.createElement("p");
// h1.innerText = "Varm sommar";
// p.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae laudantium sint ab voluptatem autem illo cum, debitis commodi dignissimos provident amet nostrum velit non veritatis voluptate sequi. Ea, recusandae eius?";
// wrapper.append(aside)
// aside.append(h1)
// aside.append(p)

// let div= document.getElementsByClassName("product");

function searchById() {
  const paramSearch: URLSearchParams = new URLSearchParams(
    window.location.search
  );
  let id = paramSearch.get("id");
  return id;
}

function createHTMLForItem(products: Product[]) {
  let id = searchById();
  if (id === null) {
    alert("Du har gjort fel");
  }

  for (let i = 0; i < products.length; i++) {
    if (id === products[i].id) {
      //DIV
      const container: HTMLDivElement = document.createElement("div");
      let img: HTMLImageElement = document.createElement("img");

      container.className = "productImage";
      img.className = "product__image";
      img.src = products[i].img;

      container.appendChild(img);

      //ASIDE
      const aside = document.createElement("aside");
      let h1 = document.createElement("h1");
      let p = document.createElement("p");
      let span = document.createElement("span");
      h1.innerText = products[i].productname;
      p.innerText = products[i].description;
      span.innerHTML += products[i].price;
      const button = document.createElement("button");

      aside.append(h1);
      aside.append(p);
      aside.className = "productDetails";
      aside.append(span);
      aside.append(button);

      const productDetailContainer = document.getElementById(
        "productDetailContainer"
      ) as HTMLElement;
      productDetailContainer.appendChild(container);
      productDetailContainer.appendChild(aside);
    }
  }
}

createHTMLForItem(products);
