const review = [
  {
    id: 1,
    name: "Catalina Rodriguez",
    job: "Graphic Deigner",
    img: "/Carrusel/img/Catalina Rodriguez.jpeg",
    text: "Ejemplo 1: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsaexcepturi explicabo. Maxime excepturi quas perferendis adipisci explicabo hic, nostrum nesciunt inventore magnam voluptatibus delectus veniam, consequuntur vero soluta quod sequi.",
  },
  {
    id: 2,
    name: "David Salazar",
    job: "Sistem Engineer",
    img: "/Carrusel/img/Catalina Rodriguez.jpeg",
    text: "Ejemplo 2: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsaexcepturi explicabo. Maxime excepturi quas perferendis adipisci explicabo hic, nostrum nesciunt inventore magnam voluptatibus delectus veniam, consequuntur vero soluta quod sequi.",
  },
  {
    id: 3,
    name: "Johana Gomez",
    job: "Credit analyst",
    img: "https://img.freepik.com/foto-gratis/mujer-hermosa-joven-que-sonrie-posando-sobre-pared-purpura_176420-2852.jpg?t=st=1720125962~exp=1720129562~hmac=444aa8c795ac5d48a989f531261238e9b44a8e71dac0a9652288b042de39cf30&w=740",
    text: "Ejemplo 3: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsaexcepturi explicabo. Maxime excepturi quas perferendis adipisci explicabo hic, nostrum nesciunt inventore magnam voluptatibus delectus veniam, consequuntur vero soluta quod sequi.",
  },
  {
    id: 4,
    name: "Santiago Serrano",
    job: "Abogado",
    img: "/Carrusel/img/Catalina Rodriguez.jpeg",
    text: "Ejemplo 4: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsaexcepturi explicabo. Maxime excepturi quas perferendis adipisci explicabo hic, nostrum nesciunt inventore magnam voluptatibus delectus veniam, consequuntur vero soluta quod sequi.",
  },
];

const img = document.getElementById("img");
const author = document.getElementById("name");
const job = document.getElementById("job");
const text = document.getElementById("info");

const atras = document.querySelector(".atras");
const adelante = document.querySelector(".adelante");
const random = document.querySelector(".btn");

let startItem = 0;

document.addEventListener("DOMContentLoaded", function () {
  const item = review[startItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

document.getElementById("adelante").addEventListener("click", function () {
  startItem = startItem + 1;
  const item = review[startItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

document.getElementById("atras").addEventListener("click", function () {
  startItem = startItem - 1;
  const item = review[startItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});
