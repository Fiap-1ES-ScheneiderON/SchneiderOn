const SIDEBAR_ID = "sidebar";
const navItems = [
  {
    text: "Página Inicial",
    link: "/index.html",
    icon: "/images/icon-home.svg",
  },
  {
    text: "Loja Scheneider",
    link: "/pages/shop.html",
    icon: "/images/icon-cart.svg",
  },
  {
    text: "Missões",
    link: "/pages/challenge.html",
    icon: "/images/icon-flag.svg",
  },
  {
    text: "Iniciativas Scheneider",
    link: "/pages/initiative.html",
    icon: "/images/icon-thumb-up.svg",
  },
  {
    text: "Perfil",
    link: "/pages/perfil.html",
    icon: "/images/icon-person.svg",
  },
  {
    text: "Outros",
    link: "#",
    icon: "/images/icon-menu.svg",
  },
];

function createSideBar() {
  const sidebar = document.querySelector(`.${SIDEBAR_ID}`);
  const logo = createLogo();
  const navBar = createNavBar();
  const footer = createSideBarFooter();

  sidebar.appendChild(logo);
  sidebar.appendChild(navBar);
  sidebar.appendChild(footer)
}

function createLogo() {
  const imgElement = document.createElement("img");
  imgElement.src = "/images/SchneiderOnFinal.png";
  imgElement.height = 72;
  imgElement.width = 242;
  return imgElement;
}

function createNavBar() {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  navItems.forEach(item => {
    const li = document.createElement("li");
    const selected = window.location.pathname.includes(item.link)

    li.innerHTML = `
        <a href="${item.link}" class="menuItem ${selected && "selected"}" alt="${item.text}">
            <img src=${item.icon} />
            <span>${item.text}</span>
        </a>
    `;

    ul.appendChild(li);
  });

  nav.appendChild(ul);

  return nav;
}

function createSideBarFooter() {
  const footer = document.createElement("div")
  footer.className = "sidebar-footer"

  footer.innerHTML = `
    <a class="new-post" href="/pages/postagem.html">Postagem</a>
    <a class="profile-settings" href="/pages/perfil.html">
      <img class="profile" src="/images/perfil.svg"/>
      <div class="info">
      <span>Paula Freitas</span>
        <div class="level">
          <img src="/images/SementeFoto.svg" />
          <span>Semente</span>
        </div>
      </div>
      <div class="coins">
        <span>125</span>
        <img src="/images/bi_coin.png" />
      </div>
    </a>
  `

  return footer
}
createSideBar();
