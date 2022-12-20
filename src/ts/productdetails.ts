const body = document.body
const main = document.createElement("main");
const div = document.createElement("div");
div.setAttribute("id", "header") 


body.append(main) //lägger till main i bodyn
main.append(div)  //lägger till div i main

let img = document.createElement("img");
img.src = "../assets/wallpaper1.png";
img.alt = "This is a picture of a wallpaper";
div.append(img)

//lägger till produktbeskrivning
const aside = document.createElement("aside");
let h1 = document.createElement("h1");
let p = document.createElement("p");
h1.innerText = "Varm sommar";
p.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae laudantium sint ab voluptatem autem illo cum, debitis commodi dignissimos provident amet nostrum velit non veritatis voluptate sequi. Ea, recusandae eius?";
main.append(aside)
aside.append(h1)
aside.append(p)


