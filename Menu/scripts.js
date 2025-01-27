const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "Breakfast",
    price: 15.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "Lunch",
    price: 13.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "Shakes",
    price: 6.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "Breakfast",
    price: 20.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "Lunch",
    price: 22.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "Shakes",
    price: 18.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "Breakfast",
    price: 8.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "Lunch",
    price: 12.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "Shakes",
    price: 16.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Steak Dinner",
    category: "Dinner",
    price: 39.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
window.addEventListener("DOMContentLoaded", () => {
  displayMenu(menu);
  displayBtn(menu);
  filtrar();
});

//menu//
function displayMenu(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<div class="item">
            <div class="imagen">
              <img
                src="${item.img}"
                alt="${item.img}"
                class="comida"
              />
            </div>
            <div class="comida">
              <div class="nombre-comida">
                <h3>${item.title}</h3>
                <h3 class="precio">$ ${item.price}</h3>
              </div>
              <hr>
              <p>${item.desc}</p>
            </div>
          </div>`;
  });
  displayMenu = displayMenu.join("");
  document.getElementById("items-menu").innerHTML = displayMenu;
}

//btn//
function displayBtn(menuItems) {
  let Btnfilter = [...new Set(menuItems.map((item) => item.category))];
  Btnfilter.unshift("Todos");

  let displayBtn = Btnfilter.map(function (foca) {
    return `<button class="filtrar" >${foca}</button>`;
  });

  displayBtn = displayBtn.join("");
  document.getElementById("btn-filtro").innerHTML = displayBtn;
}
//Filtro//
function filtrar() {
  document.querySelector(".btn-filtro").querySelectorAll(".filtrar").forEach(function (btn) {
      btn.addEventListener("click", () => {
        let category = menu.filter(function (comida) {
          if (comida.category === btn.textContent) {
            return comida;
          }
        });
        if(btn.textContent==='Todos'){
          displayMenu(menu);
        }else{
          displayMenu(category);
        }

      });
    });
}
