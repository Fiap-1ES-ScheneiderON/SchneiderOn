const CHALLENGE_LIST_ID = "challenge-list";

const challenges = [
  {
    description: "Curta 5 postagens que achar interessante",
    price: 15,
    icon: "/images/curtida.svg",
  },
  {
    description: "Comente 5 post que achar interessante",
    price: 20,
    icon: "/images/ComentarioDesafio.svg",
  },
  {
    description: "Faça uma postagem na SchneiderON",
    price: 25,
    icon: "/images/Post_add.svg"
  },
];

function displayChallengeList() {
  const challengeList = document.querySelector(`.${CHALLENGE_LIST_ID}`);
  console.log(CHALLENGE_LIST_ID)

  challenges.forEach((challenge, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <label for="challenge-${index}" class="challenge">
        <div class="check">
          <input type="checkbox" id="challenge-${index}">
          <img src="${challenge.icon}" alt="Icon do desafio de curtidas">
        </div>
        <div class="description">${challenge.description}</div>
        <div class="price">
          <span>${challenge.price}</span>
          <img src="/images/bi_coin.png" alt="">
        </div>
      </label>
    `;

    challengeList.appendChild(li);
  });
}

displayChallengeList();
