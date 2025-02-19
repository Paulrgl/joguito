let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.0});
};
function exibirMensagemInicial(){

    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número de 1 a 10');
}
exibirMensagemInicial();

function verificarChute(){
let chute = document.querySelector('input').value;


 if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou mizeravi');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Acertou com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
 } else{
    if(chute > numeroSecreto){
    exibirTextoNaTela('h1', 'Burro!');
    exibirTextoNaTela('p', 'o número secreto é menor');
    }
    else{
        exibirTextoNaTela('h1','Burro!');
        exibirTextoNaTela('p','o número secreto é maior');
        tentativas++;
        limparCampo();
    } 
 }   

};
function gerarNumeroAleatorio() {
 let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1 );
 let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;

if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumeroSorteados = [];
}

 if (listaDeNumeroSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
 } else{
    listaDeNumeroSorteados.push(numeroEscolhido);
    console.log(listaDeNumeroSorteados);
    return numeroEscolhido;
  
 }
 }

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}