import { Product } from "./models/Products";
import { products } from "./models/Products";
import { createHTML } from "../ts/products";

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

let backButton = document.getElementById("backaKnapp") as HTMLButtonElement;
backButton.addEventListener("click", backaWindow);

function backaWindow() {
  history.back();
}

createHTMLForItem(products);

let modal = document.getElementById("myModal");
let btn = document.getElementById("cartButton");
let closeBtn = document.getElementById("closeButton");

btn.onclick = function () {
  modal.style.display = "block";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let burgerBtn = document.getElementById("burgerMenu");
let burgerModal = document.getElementById("burgerModal");

burgerBtn.onclick = function () {
  burgerModal.style.display = "block";
};

window.onclick = function (event) {
  if (event.target == burgerModal) {
    burgerModal.style.display = "none";
  }
};
