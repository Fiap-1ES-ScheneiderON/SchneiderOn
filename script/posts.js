const POST_LIST_ID = "posts";

const initialPosts = [
  {
    profile: {
      name: "Thiago Eiji Matumoto",
      image: "/images/thiagoPerfil.svg",
      level: {
        icon: "/images/ambientalista.svg",
        title: "ambientalista",
      },
    },
    description:
      "Estou muito feliz em compartilhar com vocês o impacto que causamos!!! Hoje foi colocado lixeiras de coleta seletiva no meu condomínio! <br>#ComprometidaComOMeioAmbiente <br>#SouSchneiderOn",
    categories: ["Coleta Seletiva", "Sustentabilidade em casa"],
    image: "/images/postagemColetaSeletiva.svg",
    interactions: {
      likes: 235,
      comments: 23,
    },
  },
  {
    profile: {
      name: "Lucas Alcântara",
      image: "/images/lucarAlcantara.svg",
      level: {
        icon: "/images/brotinho.svg",
        title: "brotinho",
      },
    },
    description:
      "Muitas pessoas não sabem, mas o óleo de cozinha pode ser reutilizado de diversas maneiras, como pro exemplo na produção de biodiesel, tintas a óleo e até sabão. Pensando nisso, resolvi compartilhar o que fazer para <span>Ver mais...</span> <br>#ReutilizeParaPreservar <br>#SomosSchneiderOn",
    categories: ["Descarte correto", "Alimentação"],
    image: "/images/postavelOleo.svg",
    interactions: {
      likes: 123,
      comments: 12,
    },
  },
];

export function displayPosts(user = "") {
  const postList = document.querySelector(`.${POST_LIST_ID}`);
  const posts = getPosts();

  posts.forEach((post) => {
    if (!user || post.profile.name === user) {
      const postHTML = renderPostHTML(post);
      postList.appendChild(postHTML);
    }
  });
}

function getPosts() {
  let posts = JSON.parse(localStorage.getItem("posts"));

  if (!posts) {
    localStorage.setItem("posts", JSON.stringify(initialPosts));
    return initialPosts;
  }

  return posts;
}

function renderPostHTML(post) {
  const div = document.createElement("div");
  div.className = "post";

  div.innerHTML = `
          <div class="profile">
            <img src="${post.profile.image}" alt="Foto de perfil">
            <div>
              <span class="name">${post.profile.name}</span>
              <div class="level">
                <img src="${post.profile.level.icon}" alt="">
                <span>${post.profile.level.title}</span>
              </div>
            </div>
          </div>
          <main>
            <p class="description">${post.description}</p>
            <div class="categories">
                ${post.categories
                  .map(
                    (category) => `
                    <p class="category">${category}</p>
                `
                  )
                  .join("")}
            </div>
            ${post.image && `<img class="post-image" src="${post.image}"/>`}
            <div class="interactions">
              <div class="likes">
                <img class="icon" id="curtida" src="/images/curtida.svg" alt="curtida da página">
                <p class="quantity">${post.interactions.likes}</p>
              </div>
              <div class="comments">
                <img class="icon" src="/images/comentario.svg" alt="comentários do post">
                <p class="quantity">${post.interactions.comments}</p>
              </div>
              <img class="save-post" id="salvar" src="/images/Salvar.svg" alt="salvar o post">
            </div>
          </main>
    `;
  return div;
}
