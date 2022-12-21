import { Product } from "./Products";

export class Cart {
  products: Product[];
  quantity: number;

  constructor(products: Product[], quantity: number) {
    this.products = products;
    this.quantity = quantity;
  }
}
