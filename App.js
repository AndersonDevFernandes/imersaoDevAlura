function pesquisar() {
  let section = document.getElementById("resultados-pesquisa")
  console.log(section)

  let resultados = ""

  for (let dado of dados) {
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

  section.innerHTML = resultados
}






