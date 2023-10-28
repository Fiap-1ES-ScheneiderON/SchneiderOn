const INITIATIVE_LIST_ID = "initiative-list";

const iniciativa = [
  {
    parceiro: "Programa VolunteerIn",
    descricao:
      "Criado em 2012, nosso programa VolunteerIn inspira as pessoas a darem retorno às comunidades, por meio de orientação, treinamento e contribuição para iniciativas significativas dos parceiros locais. Ao apoiá-los, amplificamos o poder da cidadania responsável e do desenvolvimento sustentável.",
    imagem: "../images/VolunteerIn-IC-1080x1080.jpg",
    points: 300,
  },

  {
    parceiro: "Ação World Clean Up Day 2021",
    descricao:
      "O movimento aconteceu no dia 18 de Setempro de 2021 pela quarta vez (desde 2018) e segundo o site do World Clean Up Day mais de 50 milhões de pessoas saíram para limparem seus bairros, cidades e comunidades dos resíduos. Nós da Schneider também vamos fazer a nossa parte! Participe do nosso Webinar e saiba como fazer a diferença",
    imagem: "../images/WORLD-CLEAN-UP-DAY.jpg",
    points: 300,
  },
];

function displayInitiative() {
  const inciativaList = document.querySelector(`.${INITIATIVE_LIST_ID}`);
  iniciativa.forEach((item) => {
    const div = document.createElement("div");
    div.className = "partner";
    div.innerHTML = `
    <img class="imagem-parceiro" src="${item.imagem}"/>
    <div class="initiativeContainer"> 
      <h1 class="title">${item.parceiro}</h1>
      <p>${item.descricao} </p>
      <div class="initiaviveSubscribe"> 
        <a href="#">Increver-se</a>
        <div class="coins">
          <span>${item.points}</span>
          <img src="/images/bi_coin.png" />
        </div>
      </div> 
    </div>

    `;
    inciativaList.appendChild(div);
  });
}

displayInitiative();
