document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener("DOMContentLoaded", function () {
    const titulos = document.querySelectorAll(".parceiro_iniciativa_titulo");

    titulos.forEach((titulo) => {
      titulo.addEventListener("click", () => {
        const conteudo = titulo.nextElementSibling;

        if (conteudo.style.display === "none") {
          conteudo.style.display = "flex";
          conteudo.previousElementSibling.style.height = "auto"; // Ajusta a altura para mostrar o conteúdo
        } else {
          conteudo.style.display = "none";
          conteudo.previousElementSibling.style.height = "0"; // Oculta o conteúdo ajustando a altura para 0
        }
      });
    });
  });
});
