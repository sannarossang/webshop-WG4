export { Product };

class Product {
  productname: string;
  price: number;
  style: string;
  pattern: string;
  trademark: string;
  collection: string;
  img: string;
  description: string;
  constructor(
    productname: string,
    price: number,
    style: string,
    pattern: string,
    trademark: string,
    collection: string,
    img: string,
    description: string
  ) {
    this.productname = productname;
    this.price = price;
    this.style = style;
    this.pattern = pattern;
    this.trademark = trademark;
    this.collection = collection;
    this.img = img;
    this.description = description;
  }
}
