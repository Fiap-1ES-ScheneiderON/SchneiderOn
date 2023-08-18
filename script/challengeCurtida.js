document.addEventListener("DOMContentLoaded", () => {

  const curtidaImgs = document.querySelectorAll(
    '.container_curtidas_icon[id="curtida"]'
  );
  const novaImagemSrc = "../images/curtidaVerde.svg";

  curtidaImgs.forEach((curtidaImg) => {
    const numeroTag = curtidaImg.nextElementSibling; // Selecionar o próximo elemento (p) após a imagem

    curtidaImg.addEventListener("click", () => {
      if (curtidaImg.src.endsWith("curtida.svg")) {
        curtidaImg.src = novaImagemSrc;
        numeroTag.textContent = parseInt(numeroTag.textContent) + 1; // Somar 1
      } else {
        curtidaImg.src = "../images/curtida.svg";
        numeroTag.textContent = parseInt(numeroTag.textContent) - 1; // Subtrair 1
      }
    });
  });


  
  const headerMenu = document.querySelector(".header_menu_perfil");
  const overlay = document.querySelector(".overlay");

  // Função para mostrar o div de overlay
  function showOverlay() {
    overlay.style.display = "block";
  }

  // Função para esconder o div de overlay
  function hideOverlay() {
    overlay.style.display = "none";
  }

  // Evento de clique na imagem header_menu
  headerMenu.addEventListener("click", () => {
    showOverlay();
  });

  // Evento de clique fora do div de overlay
  window.addEventListener("click", (event) => {
    if (event.target !== overlay && event.target !== headerMenu) {
      hideOverlay();
    }
  });
});
