document.addEventListener("DOMContentLoaded", () => {
  const imagens = document.querySelector(".carrossel-imagens");
  const total = imagens.children.length;
  let index = 0;

  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  const larguraImagem = imagens.children[0].clientWidth;

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % total;
    imagens.style.transform = `translateX(-${index * larguraImagem}px)`;
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + total) % total;
    imagens.style.transform = `translateX(-${index * larguraImagem}px)`;
  });

  function atualizarCarrossel() {
  const largura = document.querySelector(".carrossel").clientWidth;
  imagens.style.transform = `translateX(-${index * largura}px)`;
}

});