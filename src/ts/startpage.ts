export function openCart() {
  let cart = document.getElementById("cartButton");
  cart?.addEventListener("click", () => {
    alert("du klickade på varukorgen!");
  });
}
