import { displayPosts } from "./posts.js";

function enableSearchPosts() {
  const searchBar = document.querySelector(".search-bar");

  searchBar.addEventListener("keyup", (event) => {
    const value = event.target.value;
    displayPosts("", value);
  });
}

enableSearchPosts();
