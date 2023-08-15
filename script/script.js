document.addEventListener('DOMContentLoaded', () => {
  const curtidaImgs = document.querySelectorAll('.container_curtidas_icon[id="curtida"]');
  const novaImagemSrc = './images/curtidaVerde.svg'; 

  curtidaImgs.forEach(curtidaImg => {
      curtidaImg.addEventListener('click', () => {
          if (curtidaImg.src.endsWith('curtida.svg')) {
              curtidaImg.src = novaImagemSrc;
          } else {
              curtidaImg.src = './images/curtida.svg';
          }
      });
  });

  const salvarImgs = document.querySelectorAll('.container_salvar_icon[id="salvar"]');
  const novaImagemSalvarSrc = './images/SalvarVerde.svg';

  salvarImgs.forEach(salvarImgs => {
      salvarImgs.addEventListener('click', () => {
          if (salvarImgs.src.endsWith('Salvar.svg')) {
            salvarImgs.src = novaImagemSalvarSrc;
          } else {
            salvarImgs.src = './images/Salvar.svg';
          }
      });
  });
});

