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
  constructor(
    public productname: string,
    public price: number,
    public style: string,
    public pattern: string,
    public trademark: string,
    public collection: string,
    public img: string,
    public description: string,
    public id: string
  ) {}
}

let wallpaper1 = new Product(
  "Tulip Infusion",
  299,
  "bohemic flowers",
  "tulips",
  "boråstapeter",
  "Unni Zetterling design",
  imagewallpaper1,
  "Tulip Infusion är ett av våra mest älskade tapetmönster. Låt vårens blomsterglädje pryda hemmets väggar för glädje hemma - året om.",
  "1"
);

let wallpaper2 = new Product(
  "Almost Amaryllis",
  199,
  "bohemic flowers",
  "flowers",
  "boråstapeter",
  "Unni Zetterling design",
  imagewallpaper2,
  "Almost Amaryllis är julblomman som tagit de svenska hemmen med storm - även uppåt väggarna. En klassiker som aldrig går ur tiden.",
  "2"
);

let wallpaper3 = new Product(
  "Dahlia Mix",
  399,
  "romantic",
  "flowers",
  "boråstapeter",
  "Unni Zetterling design",
  imagewallpaper3,
  "Dahlia Mix är en vacker kombinationstapet med grå botten som gör sig väl i all från vardagsrum til barnrum och kök. Ett säkert kort - helt enkelt!",
  "3"
);

let wallpaper4 = new Product(
  "Sweet Pea",
  399,
  "bohemic flowers",
  "flowers",
  "boråstapeter",
  "Unni Zetterling design",
  imagewallpaper4,
  "Sweet Pea är vår stormönstrade tapet med luktärtor till skillnad från Minimalistic Sweet Pea som är ett mer avskalat mönster.",
  "4"
);

let wallpaper5 = new Product(
  "Poppy",
  429,
  "bohemic flowers",
  "flowers",
  "boråstapeter",
  "Unni Zetterling design",
  imagewallpaper5,
  "Poppy är ett av våra mest sålda mönster. Med tapetens mörka botten skapas romantik och dramatik på ett välkomponerat sätt. ",
  "5"
);

let wallpaper6 = new Product(
  "Classic Eucalyptus",
  499,
  "bohemic flowers",
  "flowers",
  "boråstapeter",
  "Unni Zetterling design",
  imagewallpaper6,
  "Classic Eucalyptus är ett blomstermix-mönster som tack vare sin ljusa botten funkar i hemmets alla rum.",
  "6"
);

let wallpaper7 = new Product(
  "Minimalistic Sweet Pea",
  399,
  "bohemic flowers",
  "flowers",
  "boråstapeter",
  "Unni Zetterling design",
  imagewallpaper7,
  "Minimalistic Sweet Pea är uppföljaren till Sweet Pea - för den som föredrar en mer minimalistisk tappning på vår storsäljare.",
  "7"
);

let wallpaper8 = new Product(
  "Romantic Tulip",
  299,
  "bohemic flowers",
  "flowers",
  "boråstapeter",
  "Unni Zetterling design",
  imagewallpaper8,
  "Romantic Tulip är en av våra mest älskade tapeter med sin ljusblå botten och smutsrosa tulpan i magisk kombination med yviga ängsblommor.",
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
