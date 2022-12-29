import { Product } from "./Products";

export class CartItem {
  product: Product;
  quantity: number;
  totalPrice: number;

  constructor(product: Product, quantity: number, totalPrice: number) {
    this.product = product;
    this.quantity = quantity;
    this.totalPrice = totalPrice;
  }
}
