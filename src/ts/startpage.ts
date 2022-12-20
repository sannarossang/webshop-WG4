export function openCart() {
  let cart = document.getElementById("cartButton");
  cart?.addEventListener("click", () => {
    alert("du klickade på varukorgen!");
  });
}

export function openMobileMenu() {
  let menu = document.getElementById("mobileMenu");
  menu?.addEventListener("click", () => {
    alert("du öppnade menyn");
  });
}
