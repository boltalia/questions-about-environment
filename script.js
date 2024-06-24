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
                afirmacao:"Hmmmm, isto não é bom, para falarmos sobre meio ambiente é extremamente necessário saber sobre nossas florestas,"
            
            },
            {
                texto: "obtenho este conhecimento!",
                afirmacao: "Que bom, é essencial ter conhecimento sobre nossa querida floresta,"
            }
        ]
    },
    {
        enunciado: "conhece alguma ONG relacionada?",
        alternativas: [
            {
                texto: "Sim!!!",
                afirmacao: "incrível, ter ciência dessas organizações é de eximia ajuda,"
            },
            {
                texto: "Não!!!",
                afirmacao: "que pena, seria magnifico conhecer alguma,"
            }
        ]
    },
    {
        enunciado: "Realiza alguma ativida para a preservação do ambiente?",
        alternativas: [
            {
                texto: "SIM! REALIZO",
                afirmacao: "Excelente, isto é um pequeno passo para a melhora do planeta terra, "
            },
            {
                texto: "NÃO! NÃO AJUDO",
                afirmacao: "Nada legal, não contribuir com o meio ambiente é prejudicar você mesmo,"
            }
        ]
    },
    {
        enunciado: "Prejudica de alguma forma o meio ambiente?",
        alternativas: [
            {
                texto: "SIM! Prejudico",
                afirmacao: "inaceitável, vivemos um momento de gigante delicadeza e prejudicar o meio ambiente só piora este momento,"
            },
            {
                texto: "NÃO! NÃo Prejudico",
                afirmacao: "que bom, quanto mais ajudam, melhor,"
            }
        ]
    },
    {
        enunciado: "Você acredita na melhora ambiental a curto prazo? ",
        alternativas: [
            {
                texto: "SIM! temos capacidade",
                afirmacao: "ter esperança é o caminho, com a ajuda em massa conseguiremos a melhora."
            },
            {
                texto: "NÃO! nao temos condições",
                afirmacao: "uma resposta esperada, realmente vivemos uma situação complicada e de complexa resolução."
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