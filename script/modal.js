import { createNewPost } from "./newPost.js";

const CATEGORIES_OPTIONS = [
  "Alimentação",
  "Beleza e cuidados pessoais",
  "Tecnologia",
  "Educação",
  "Negócios",
  "Esporte",
  "Saúde",
  "Sustentabilidade em casa",
  "Coleta seletiva",
  "Ecologia",
  "Energia",
  "Sustentabilidade",
];

function displayModal() {
  const modal = document.querySelector(".modal");
  modal.innerHTML = renderModalHTML();

  selectCategoryEvent();
  closeModalEvent();
  onSubmitHandler();
}

function renderModalHTML() {
  return `
    <form action="" class="new-post-form">
      <header>
        <div class="profile">
          <img src="/images/perfil.svg" alt="Foto de perfil">
          <div>
            <span class="name">Paula Freitas</span>
            <div class="level">
              <img src="/images/semente.png" alt="">
              <span>Semente</span>
            </div>
          </div>
        </div>
        <img src="/images/close-x.svg" class="close-modal-icon">
      </header>
      <select name="category" id="select-category">
        <option value="" disabled selected>Selecione as categorias</option>
        ${CATEGORIES_OPTIONS.map(
          (category) => `<option value="${category}">${category}</option>`
        )}
      </select>

      <div class="categories-selected"></div>
      <textarea name="description" class="description-input"
        placeholder="Contribua para uma sociedade mais sustentável..."></textarea>

      <footer>
        <div>
          <img class="" src="/images/foto_postagem.svg" alt=""></td>
          <img class="" src="/images/camera_postagem.svg" alt=""></td>
          <img class="" src="/images/list_postagem.svg" alt=""></td>
          <img class="" src="/images/mapa_postagem.svg" alt=""></td>
        </div>
        <button type="submit" class="submit_postagem">Enviar</button>
      </footer>
    </form>
    `;
}

function selectCategoryEvent() {
  const select = document.querySelector("#select-category");
  const categoriesSelectedElement = document.querySelector(
    ".categories-selected"
  );
  const categoriesSelected = Array.from(categoriesSelectedElement.children);

  select.addEventListener("change", (event) => {
    const value = event.target.value;
    const categoryAlreadySelected = categoriesSelected.some((category) =>
      category.textContent.includes(value)
    );
    if (!categoryAlreadySelected) {
      const div = document.createElement("div");
      div.className = "category";
      div.innerText = value;
      categoriesSelectedElement.appendChild(div);
    }
  });
}

export function openModal() {
  document.querySelector(".modal").classList.add("active");
}

export function closeModal() {
  document.querySelector("#select-category").value = ""
  document.querySelector(".description-input").value = ""
  document.querySelector(".categories-selected").innerHTML = ""
  document.querySelector(".modal").classList.remove("active");
}

function closeModalEvent() {
  const closeIcon = document.querySelector(".close-modal-icon");

  closeIcon.addEventListener("click", () => closeModal());
}

function onSubmitHandler() {
  document
    .querySelector(".new-post-form")
    .addEventListener("submit", createNewPost);
}

displayModal();
