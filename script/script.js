document.addEventListener('DOMContentLoaded', () => {
  const curtidaImgs = document.querySelectorAll('.container_curtidas_icon[id="curtida"]');
  const novaImagemSrc = './images/curtidaVerde.svg'; // Substitua pelo caminho da nova imagem

  curtidaImgs.forEach(curtidaImg => {
      curtidaImg.addEventListener('click', () => {
          if (curtidaImg.src.endsWith('curtida.svg')) {
              curtidaImg.src = novaImagemSrc;
          } else {
              curtidaImg.src = './images/curtida.svg';
          }
      });
  });
});