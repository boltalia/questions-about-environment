import { aleatorio, nome } from './aleatorio.js';
import { perguntas } from './perguntas.js';

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM completamente carregado e analisado.");
    if (botaoIniciar) {
        botaoIniciar.addEventListener('click', iniciaJogo);
    } else {
        console.error("Botão de iniciar não encontrado.");
    }
});

function iniciaJogo() {
    console.log("Iniciando o jogo...");
    atual = 0;
    historiaFinal = "";
    telaInicial.style.display = 'none';
    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classList.remove("mostrar");
    caixaResultado.classList.remove("mostrar");
    mostraPergunta();
}

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = ""; // Limpar as alternativas
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
    caixaPerguntas.classList.add("mostrar");
    caixaAlternativas.classList.add("mostrar");
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    if (opcaoSelecionada.proxima !== undefined) {
        atual = opcaoSelecionada.proxima;
    } else {
        mostraResultado();
        return;
    }
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = `Em 2049, ${nome}`;
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.innerHTML = ""; // Limpar alternativas
    caixaResultado.classList.add("mostrar");
}

function jogaNovamente() {
    console.log("Jogando novamente...");
    atual = 0;
    historiaFinal = "";
    caixaResultado.classList.remove("mostrar");
    telaInicial.style.display = 'block';
    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classList.remove("mostrar");
}

if (botaoJogarNovamente) {
    botaoJogarNovamente.addEventListener("click", jogaNovamente);
} else {
    console.error("Botão de jogar novamente não encontrado.");
}

function substituiNome() {
    for (const pergunta of perguntas) {
        pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
    }
}

substituiNome();
