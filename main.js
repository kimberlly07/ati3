function criaCartao(categoria,pergunta,resposta){
let container = document.getElementById ('container');
let cartao = document.createElement ('article');
cartao.className = 'cartao';
cartao.innerHTML = `
<div class="conteudo-cartao">
    <h3>${categoria}</h3>
    <div class="perguntas-cartao">
        <p>${pergunta}</p>
    </div>
    <div class="resposta-cartao">
        <p>${resposta}</p>
    </div>
</div>
`

let resposrtaEstaVisivel = false;
function viraCartao(){
    resposrtaEstaVisivel = !resposrtaEstaVisivel;
    cartao.classList.toggle('active', resposrtaEstaVisivel);
}
cartao.addEventListener('click', viraCartao);
container.appendChild(cartao);
}