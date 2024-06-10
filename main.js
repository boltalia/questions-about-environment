const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você tem algum conhecimento afundo sobre a floresta brasileira?",
        alternativas: [
            "obtenho este conhecimento!",
            "sou leigo neste assunto!"
        ]
    },
    {
        enunciado: "conhece alguma ONG relacionada?",
        alternativas: [
            "Sim!!!",
            "Não!!!",
        ]
    },
    {
        enunciado: "Realiza alguma ativida para a preservação do ambiente?",
        alternativas: [
            "SIM! REALIZO",
            "NÃO! NÃO AJUDO"
        ]
    },
    {
        enunciado: "Prejudica de alguma forma o meio ambiente?",
        alternativas: [
            "SIM! Prejudico",
            "NÃO! NÃo Prejudico"
        ]
    },
    {
        enunciado: "Você acredita na melhora ambiental a curto prazo? ",
        alternativas: [
            "SIM! temos capacidade",
            "NÃO! nao temos condições"
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();