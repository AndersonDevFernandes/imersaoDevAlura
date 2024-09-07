function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos (a área que mostra o que você pesquisou)
  let section = document.getElementById("resultados-pesquisa");

  // Pega o texto que o usuário digitou no campo de pesquisa, remove os espaços extras e transforma tudo em letras minúsculas
  let campoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase();

  // Verifica se o usuário não digitou nada no campo de pesquisa
  if (campoPesquisa === "") {
    // Se o campo estiver vazio, mostra uma mensagem pedindo para inserir um estado
    section.innerHTML = "<p descricao-meta1>Insira um Estado do Brasil</p>";
    return; // Para aqui, porque não há nada a pesquisar se o campo estiver vazio
  }

  // Variável onde iremos armazenar os resultados encontrados
  let resultados = "";

  // 'dados' é uma lista de informações (como os nomes e imagens dos estados)
  // Este 'for' percorre cada item dessa lista, verificando se ele corresponde à pesquisa
  for (let dado of dados) {
    // Verifica se o título (nome do estado) inclui o que foi digitado no campo de pesquisa
    if (dado.titulo.toLowerCase().includes(campoPesquisa)) {
      // Se o título corresponde à pesquisa, adiciona um bloco de resultado na variável 'resultados'
      resultados +=
        `
      <div class="item-resultado">
       <h2>
         <!-- Cria um link com o título (nome do estado) -->
         <a href="#" target="_blank">${dado.titulo}</a>
       </h2>
       <!-- Insere a imagem associada ao estado -->
       <img src="${dado.imagem}" alt="imagem do estado" class="flag">
       <!-- Mostra o valor numérico e uma descrição do valor -->
       <p class="descricao-meta1">${dado.valor}</p>
       <p class="descricao-meta">${dado.extenso}</p>
      </div>
     `;
    }
  }

  // Depois de montar todos os resultados, eles são inseridos na seção de resultados
  // Se nada for encontrado, a variável 'resultados' ficará vazia e nada será exibido
  section.innerHTML = resultados;
}
