export { Product };

import imagewallpaper1 from "../../assets/imagewallpaper1.png";
import imagewallpaper2 from "../../assets/imagewallpaper2.png";
import imagewallpaper3 from "../../assets/imagewallpaper3.png";
import imagewallpaper4 from "../../assets/imagewallpaper4.png";
import imagewallpaper5 from "../../assets/imagewallpaper5.png";
import imagewallpaper6 from "../../assets/imagewallpaper6.png";
import imagewallpaper7 from "../../assets/imagewallpaper7.png";
import imagewallpaper8 from "../../assets/imagewallpaper8.png";

class Product {
  productname: string;
  price: number;
  style: string;
  pattern: string;
  trademark: string;
  collection: string;
  img: string;
  description: string;
  id: string;
  constructor(
    productname: string,
    price: number,
    style: string,
    pattern: string,
    trademark: string,
    collection: string,
    img: string,
    description: string,
    id: string
  ) {
    this.productname = productname;
    this.price = price;
    this.style = style;
    this.pattern = pattern;
    this.trademark = trademark;
    this.collection = collection;
    this.img = img;
    this.description = description;
    this.id = id;
  }
}

let wallpaper1 = new Product(
  "wallpaper 1",
  429,
  "romantic",
  "flowers",
  "boråstapeter",
  "unnizetterling",
  imagewallpaper1,
  "lite info om produkten",
  "1"
);

let wallpaper2 = new Product(
  "wallpaper 2",
  430,
  "romantic",
  "flowers",
  "boråstapeter",
  "unnizetterling",
  imagewallpaper2,
  "lite info om produkten",
  "2"
);

let wallpaper3 = new Product(
  "wallpaper 3",
  431,
  "romantic",
  "flowers",
  "boråstapeter",
  "unnizetterling",
  imagewallpaper3,
  "lite info om produkten",
  "3"
);

let wallpaper4 = new Product(
  "wallpaper 4",
  431,
  "romantic",
  "flowers",
  "boråstapeter",
  "unnizetterling",
  imagewallpaper4,
  "lite info om produkten",
  "4"
);

let wallpaper5 = new Product(
  "wallpaper 5",
  429,
  "romantic",
  "flowers",
  "boråstapeter",
  "unnizetterling",
  imagewallpaper5,
  "lite info om produkten",
  "5"
);

let wallpaper6 = new Product(
  "wallpaper 6",
  430,
  "romantic",
  "flowers",
  "boråstapeter",
  "unnizetterling",
  imagewallpaper6,
  "lite info om produkten",
  "6"
);

let wallpaper7 = new Product(
  "wallpaper 7",
  431,
  "romantic",
  "flowers",
  "boråstapeter",
  "unnizetterling",
  imagewallpaper7,
  "lite info om produkten",
  "7"
);

let wallpaper8 = new Product(
  "wallpaper 8",
  431,
  "romantic",
  "flowers",
  "boråstapeter",
  "unnizetterling",
  imagewallpaper8,
  "lite info om produkten",
  "8"
);

export let products: Product[] = [
  wallpaper1,
  wallpaper2,
  wallpaper3,
  wallpaper4,
  wallpaper5,
  wallpaper6,
  wallpaper7,
  wallpaper8,
];
