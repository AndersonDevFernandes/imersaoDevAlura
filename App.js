function pesquisar() {
  let section = document.getElementById("resultados-pesquisa")

  let campoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase()

  if (campoPesquisa === "") {
    section.innerHTML = "<p descricao-meta1>Insira um Estado do Brasil</p>"
    return
  }

  let resultados = "";

  for (let dado of dados) {
    if (dado.titulo.toLowerCase().includes(campoPesquisa)) {
      resultados +=
        `
      <div class="item-resultado">
       <h2>
         <a href="#" target="_blank">${dado.titulo}</a>
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










