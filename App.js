function pesquisar() {
  let section = document.getElementById("resultados-pesquisa")

  let campoPesquisa = document.getElementById("campo-pesquisa").value

  if (campoPesquisa == "") {
    section.innerHTML = "<p descricao-meta1>Insira um Estado do Brasil</p>"
    return
  }



  let resultados = "";
  let titulo = "";

  for (let dado of dados) {

    titulo = dado.titulo.toLowerCase()

    /* não foi colocado o campo descrição como feito na aula pois não se aplica nesse caso ||
      dado.descricao.includes(campoPesquisa)) */

    if (dado.titulo.includes(campoPesquisa)) {
      resultados +=
        `
      <div class="item-resultado">
       <h2>
         <a href="#" targe="_blank">${dado.titulo}</a>
       </h2>
       <img src="${dado.imagem}" alt="imagem do estado" class="flag">
       <p class="descricao-meta1">${dado.valor}</p>
       <p class="descricao-meta">${dado.extenso}</p>
      </div>
     `
    }
  }

  section.innerHTML = resultados
}

const likeButton = document.getElementById('likeButton');
const likeCount = document.getElementById('likeCount');
let count = 0;

likeButton.addEventListener('click', () => {
  count++;
  likeCount.textContent = count;
  // Salvar o valor de count no localStorage (opcional)
  localStorage.setItem('likeCount', count);
});

// Carregar o valor de count do localStorage (opcional)
const storedCount = localStorage.getItem('likeCount');
if (storedCount) {
  count = parseInt(storedCount);
  likeCount.textContent = count;
}






