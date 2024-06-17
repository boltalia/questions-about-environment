const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você tem algum conhecimento afundo sobre a floresta brasileira?",
        alternativas: [
            {
                texto: "sou leigo neste assunto!",
                afirmacao: "afimação"
            },
            {
                texto: "obtenho este conhecimento!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "conhece alguma ONG relacionada?",
        alternativas: [
            {
                texto: "Sim!!!",
                afirmacao: "afirmação"
            },
            {
                texto: "Não!!!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Realiza alguma ativida para a preservação do ambiente?",
        alternativas: [
            {
                texto: "SIM! REALIZO",
                afirmacao: "afirmação"
            },
            {
                texto: "NÃO! NÃO AJUDO",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Prejudica de alguma forma o meio ambiente?",
        alternativas: [
            {
                texto: "SIM! Prejudico",
                afirmacao: "afirmação"
            },
            {
                texto: "NÃO! NÃo Prejudico",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você acredita na melhora ambiental a curto prazo? ",
        alternativas: [
            {
                texto: "SIM! temos capacidade",
                afirmacao: "afirmação"
            },
            {
                texto: "NÃO! nao temos condições",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

