document.addEventListener('DOMContentLoaded', () => {
  const curtidaImgs = document.querySelectorAll('.container_curtidas_icon[id="curtida"]');
  const novaImagemSrc = '../images/curtidaVerde.svg';

  curtidaImgs.forEach(curtidaImg => {
      const numeroTag = curtidaImg.nextElementSibling; // Selecionar o próximo elemento (p) após a imagem

      curtidaImg.addEventListener('click', () => {
          if (curtidaImg.src.endsWith('curtida.svg')) {
              curtidaImg.src = novaImagemSrc;
              numeroTag.textContent = parseInt(numeroTag.textContent) + 1; // Somar 1
          } else {
              curtidaImg.src = '../images/curtida.svg';
              numeroTag.textContent = parseInt(numeroTag.textContent) - 1; // Subtrair 1
          }
      });
  });


});
