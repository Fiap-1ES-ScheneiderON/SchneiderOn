import { closeModal } from "./modal.js";
import { displayPosts } from "./posts.js";

export function createNewPost(event) {
  event.preventDefault();
  const categories = getSelectedCategories()
  const description = document.querySelector(".description-input").value;

  const posts = JSON.parse(localStorage.getItem("posts"));

  const newPosts = [
    {
      profile: {
        name: "Paula Freitas",
        image: "/images/perfil.svg",
        level: {
          icon: "/images/SementeFoto.svg",
          title: "semente",
        },
      },
      description,
      image: "",
      categories,
      interactions: {
        likes: 0,
        comments: 0,
      },
    },
    ...posts,
  ];

  localStorage.setItem("posts", JSON.stringify(newPosts))

  closeModal()
  displayPosts()
}

function getSelectedCategories() {
  const categoriesElement = document.querySelector(".categories-selected");
  return Array.from(categoriesElement.children).map(
    (category) => category.textContent
  );
}
