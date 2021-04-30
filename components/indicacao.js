import indicacoes from './listaDeIndicacoes.js';
// Necessário passar pelo stringify antes senão o js não reconhece como algo parseavel
let indicacoesString = JSON.stringify(indicacoes)
let arrayIndicacoes = JSON.parse(indicacoesString)

function criaElemento(event) {
  const secao = document.querySelector('[data-principal]');
  // Criando o elemento indicacao
  const indicacao = document.createElement('section');
  indicacao.classList.add("indicacao");
  indicacao.setAttribute("data-indicacao", "");
  // Atribuindo o conteudo filho de indicacao. Uso de template string
  const conteudo = `
    <img class = "indicacao__imagem" src="${arrayIndicacoes[event].imagem}"></img>
    <p class = "indicacao__p">${arrayIndicacoes[event].texto}</p>
    <button class = "indicacao__botao--ler"><a href="${arrayIndicacoes[event].endereco}">Ler</a></button>
    <button class = "indicacao__botao--voltar">Voltar</button>
    `;
  // Atribuindo os filhos e anexando no elemento pai main
  indicacao.innerHTML = conteudo;
  secao.appendChild(indicacao)
}

export default criaElemento
