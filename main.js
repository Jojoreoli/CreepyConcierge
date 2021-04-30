import criaElemento from './components/indicacao.js'

// getByClassName na verdade retorna um array de elementos com o nome da class
const botao = document.getElementsByClassName("principal__escolhas__botao");
// Percorrendo o array de botoes e adicionando o escutador
for (let i = 0; i < botao.length; i++) {
  botao[i].addEventListener('click', escondeElemento);
  console.log(i);
}

// Essa func controla a exibição de conteúdo
function escondeElemento(evento) {
  const cabecalho = document.querySelector('[data-cabecalho]');
  const escolhas = document.querySelector('[data-escolhas]');
  const indicacao = document.querySelector('[data-indicacao]');

  if (cabecalho.className === "principal__cabecalho" && escolhas.className === "principal__escolhas"){
    // passando o valor do botão clicado para a const
    const valor = evento.target.dataset.valor
    // Escondendo o conteúdo atual
    cabecalho.className = "escondido";
    escolhas.className = "escondido";
    // Chamando a func para criar o componente indicacao
    criaElemento(valor);
  }
  else {
    // Voltando para a tela inicial
    cabecalho.className = "principal__cabecalho";
    escolhas.className = "principal__escolhas";
    // Removendo o conteúdo dinâmico desenhado
    indicacao.remove();
  }
}
// Aqui usando event delegation pra fazer o botão de volar funcionar e é MUITO MAGICO
document.addEventListener('click', function(e){
  if(e.target && e.target.className == 'indicacao__botao--voltar'){
    escondeElemento()
  }
})



export default escondeElemento
