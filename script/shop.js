const SHOP_LIST_ID = "shop-list";
const shopItems = [
  {
    title: "Caderno",
    image: "/images/caderno.png",
  },
  {
    title: "Garrafa",
    image: "/images/garrafaSchneiderOn.png",
  },
  {
    title: "Caneca",
    image: "/images/caneca1.png",
  },
  {
    title: "Caneca",
    image: "/images/caneca2.png",
  },
  {
    title: "Botons",
    image: "/images/botons.png",
  },
  {
    title: "Mousepad",
    image: "/images/mousePad.png",
  },
];

function displayShopItems() {
  const shopList = document.querySelector(`.${SHOP_LIST_ID}`);
  shopItems.forEach((item) => {
    const div = document.createElement("div");
    div.className = "shop-item";

    div.innerHTML = `
            <img src="${item.image}"/>
            <div class="title">${item.title}</div>
            <a href="#">Comprar</a>
        `;
    shopList.appendChild(div);
  });
}

displayShopItems();
