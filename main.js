const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como você se sente em relação à vida no campo?",
        alternativas: [
            {
                texto: "Eu sinto uma paz e tranquilidade imensa no campo. O ar fresco, o contato direto com a natureza e o ritmo mais lento de vida são uma verdadeira conexão com o que é essencial. A vida aqui parece mais autêntica, sem a correria da cidade.",
                afirmacao: "pessoa que vive no campo ou tem uma ligação forte com ele."
            },
            {
                texto: "Adoro o campo, mas também gosto do dinamismo da cidade. No campo, encontro o descanso e a serenidade que preciso, enquanto a cidade oferece as oportunidades de crescimento profissional e cultural. Acredito que o equilíbrio entre ambos pode trazer o melhor dos dois mundos.",
                afirmacao: "pessoa que gosta de ambos, campo e cidade"
            }
        ]
    },
    {
        enunciado: "Quais os maiores desafios de viver em um ambiente rural ou urbano?",
        alternativas: [
            {
                texto: "Viver no campo tem desafios, como o acesso limitado a serviços e infraestrutura, como saúde e educação. Além disso, a internet e a conectividade nem sempre são ideais. Mas, para mim, esses desafios são menores diante da qualidade de vida que tenho aqui",
                afirmacao: "viver no campo tem seus desafilos mais é muito bom ar puro"
            },
            {
                texto: "Para quem busca um equilíbrio, o desafio é encontrar tempo e energia para desfrutar de ambos os ambientes. Viver no campo me dá tranquilidade, mas a cidade é um polo de oportunidades. A dificuldade está em gerenciar o tempo entre esses dois mundos",
                afirmacao: " vive na cidade ou no campo cada um temsuas vantagens"
            }
        ]
    },
    {
        enunciado: "O que você acha que a cidade pode aprender com o campo?",
        alternativas: [
            {
                texto: "A cidade pode aprender muito sobre como viver de forma mais simples e sustentável. No campo, a relação com a natureza é mais direta e respeitosa. A cidade poderia adotar mais práticas sustentáveis, como hortas urbanas e sistemas de reciclagem mais eficientes",
                afirmacao: "<b>Pragmatismo</b> A falta de investimento governamental na saúde pública decorre de orçamentos restritos e outras prioridades de gastos, levando a infraestrutura precária e serviços de saúde insuficientes."
            },
            {
                texto: "desigualdades na distribuição de recursos",
                afirmacao: "<b>Detalhista</b>,Desigualdades na distribuição de recursos na saúde pública ocorrem quando os recursos são alocados de maneira desigual entre diferentes regiões ou populações. Isso pode resultar em acesso desigual a serviços de saúde, com áreas mais pobres ou rurais recebendo menos apoio e, portanto, enfrentando maiores desafios em termos de qualidade e acesso a cuidados médicos."
            }
        ]
    },
    {
        enunciado: "Por que a violência obstétrica está cada vez mais banalizada? ",
        alternativas: [
            {
                texto: "Negligência médica",
                afirmacao: "<b>Foco</b> Apesar do uso de algumas técnicas serem restringidas apenas para casos específicos, ainda são utilizadas diariamente por profissionais da saúde."
            },
            {
                texto: "Desinformação da população.",
                afirmacao: "<b>Curiosidade</b> Mesmo com fácil acesso a informação, o assunto é pouco comentado e dado certa  importância. "
            }
        ]
    },
    {
        enunciado: "Como evitar que ocorra a extinção de animais nativos?",
        alternativas: [
            {
                texto: "Criação de mais áreas de proteção ambiental, com grande biodiversidade ajudaria a melhorar esse cenário?",
                afirmacao: "Sim, pois preservando nosso meio ambiente, protegemos nossos animais e facilitamos sua reprodução "
            },
            {
                texto: "Evitar intervenções de espécies não nativas neste ambiente pode ser uma alternativa?",
                afirmacao: "Sim, animais de um determinado local não estão preparados para lidar com predadores de outras áreas, levando a um extermínio da espécie local"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.innerHTML = historiaFinal;
    caixaAlternativas.innerHTML = "";
}

mostraPergunta(); 