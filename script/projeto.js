document.addEventListener("DOMContentLoaded", () => {

  const comentario = document.querySelector(".container_comentarios");
  const overlayProjeto = document.querySelector(".overlayProjeto");

  // Função para mostrar o div de overlay
  function showOverlayProjeto() {
    overlayProjeto.style.display = "block";
  }

  // Função para esconder o div de overlay
  function hideOverlayProjeto() {
    overlayProjeto.style.display = "none";
  }

  // Evento de clique na imagem header_menu
  comentario.addEventListener("click", () => {
    showOverlayProjeto();
  });

  // Evento de clique fora do div de overlay
  window.addEventListener("click", (event) => {
    if (event.target !== overlayProjeto && event.target !== comentario) {
      hideOverlayProjeto();
    }
  });

})