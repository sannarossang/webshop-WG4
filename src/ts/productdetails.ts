import { Product } from "./models/Products";
import { products } from "./models/Products";
import { createHTMLforModal } from "./modal";
import { updateCart, getCartItems, getCartItem } from "./cart";
import { CartItem } from "./models/CartItem";

//Hittar rätt produkt
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
      //div för item
      const container: HTMLDivElement = document.createElement("div");
      let img: HTMLImageElement = document.createElement("img");

      container.className = "productImage";
      img.className = "productdetail__image";
      img.src = products[i].img;
      img.alt = products[i].alttext;

      container.appendChild(img);

      //aside för itemdetaljer
      const aside = document.createElement("aside");
      let h1 = document.createElement("h1");
      let artist = document.createElement("h4");
      let p = document.createElement("p");
      let span = document.createElement("span");
      h1.innerText = products[i].productname;
      artist.innerHTML = products[i].collection;
      p.innerText = products[i].description;
      span.innerHTML += products[i].price + ":-";

      //formulär
      const quantityForm = document.createElement("form");
      const quantityOfProduct = document.createElement("input");
      quantityOfProduct.setAttribute("type", "number");
      quantityOfProduct.setAttribute("required", "true");

      //formulärknapp
      const addInCartbutton = document.createElement("button");
      addInCartbutton.setAttribute("type", "submit");
      addInCartbutton.setAttribute("required", "true");
      addInCartbutton.innerHTML = "Lägg till i varukorgen";

      aside.append(h1);
      aside.append(artist);
      aside.append(p);
      aside.className = "productDetails";
      artist.className = "productDetails__artist";
      quantityOfProduct.className = "productDetails__input";
      aside.append(span);

      aside.append(addInCartbutton);
      aside.appendChild(quantityOfProduct);

      const productDetailContainer = document.getElementById(
        "productDetailContainer"
      ) as HTMLElement;
      productDetailContainer.appendChild(container);
      productDetailContainer.appendChild(aside);
      productDetailContainer.appendChild(quantityForm);
      quantityForm.appendChild(quantityOfProduct);
      quantityForm.appendChild(addInCartbutton);

      aside.appendChild(quantityForm);

      quantityForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let amountOfProduct: number = parseInt(quantityOfProduct.value);
        let cartItem: CartItem = getCartItem(getCartItems(), products[i]);
        if (cartItem != null) {
          let increasedQty: number = cartItem.quantity + amountOfProduct;
          updateCart(products[i], increasedQty);
        } else {
          updateCart(products[i], amountOfProduct);
        }
        createHTMLforModal(getCartItems());
      });
    }
  }
}

createHTMLForItem(products);

//backa-knapp
let backButton = document.getElementById("returnButton") as HTMLButtonElement;
backButton.addEventListener("click", backaWindow);

function backaWindow() {
  history.back();
}

//modal för varukorg
let modal = document.getElementById("myModal");
let btn = document.getElementById("cartButton");
let closeBtn = document.getElementById("closeButton");

//öppna modal
btn.onclick = function () {
  modal.style.display = "block";
};

//stängningskryss för modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};

//funktionalitet för att kunna trycka utanför för att stänga – not working atm
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//hamburgermeny
let burgerBtn = document.getElementById("burgerMenu");
let burgerModal = document.getElementById("burgerModal");

burgerBtn.onclick = function () {
  burgerModal.style.display = "block";
};

//funktionalitet för att kunna trycka utanför för att stänga hamburgermenyn
window.onclick = function (event) {
  if (event.target == burgerModal) {
    burgerModal.style.display = "none";
  }
};

createHTMLforModal(getCartItems());
