// Nível 1: Desafio

// 1 CRIAÇÃO DAS VARIÁVEIS PRINCIPAIS
let nome = "Runin";
let classe = "Arqueira";
let nivel = 20;
let vida = 100;
let ouro = 70;
let xp = 40;

console.log(` Bem-vindo(a), ${nome}, da classe ${classe}.`);
console.log(`Nível: ${nivel} | Vida: ${vida} | Ouro: ${ouro} | XP: ${xp}`);

// 2 DEFINIÇÃO DE CONSTANTES MÁGICAS
const NOME_ARMA = "Arco de Cinzas";
const DANO_BASE = 80;
const NOME_ARMADURA = "Asa de Fênix";
const DEFESA_BASE = 45;

console.log(` Arma equipada: ${NOME_ARMA} - Dano Base: ${DANO_BASE}`);
console.log(`Armadura equipada: ${NOME_ARMADURA} Defesa Base: ${DEFESA_BASE}`);


// 3 APLICAÇÃO DE OPERADORES DE ATRIBUIÇÃO
xp += 150; // Ganhou 150 de XP
ouro -= 30; // Comprou poção
vida += 40; // Usou a poção
let danoEncantado = DANO_BASE * 2;

console.log(`Xp atualizado: ${xp} | Ouro restante: ${ouro} | Vida atualizada: ${vida}`);


// 4 CÁLCULO DE ATRIBUTOS FINAIS
let ataqueTotal = nivel + danoEncantado;
let defesaTotal = DEFESA_BASE + (nivel / 2);

console.log(`Ataque Total: ${ataqueTotal}`);
console.log(`Defesa Total: ${defesaTotal}`);


// 5 AVALIAÇÃO DE PRONTIDÃO COM OPERADORES LÓGICOS
let vidaSuficiente = vida > 70;
let ataqueForte = ataqueTotal > 60;
let nivelAvancado = nivel >= 10;
let podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado);

console.log(` Avaliação de Prontidão:`);
console.log("Vida suficiente?", vidaSuficiente);
console.log("Ataque forte?", ataqueForte);
console.log("Nível avançado?", nivelAvancado);
console.log("Pode enfrentar o Guardião?", podeEnfrentarGuardiao);


// 6📜 GERAÇÃO DA LORE DO PERSONAGEM

console.log(`${nome}, da classe ${classe}, emergiu das ruínas digitais de Technoterra com sua arma, o ${NOME_ARMA}, feito das cinzas do fogo ardente agora possui o dobro do seu poder original.`);
console.log(`A armadura ${NOME_ARMADURA} brilha com a luz das chamas antigas, sendo protegida ${defesaTotal} pontos de defesa.`);
console.log(`Com nível ${nivel}, ${ataqueTotal} pontos de ataque e ${xp} de XP acumulado, ${nome} é uma lenda viva.`);
console.log(`Após um intenso treinamento e uma poção mágica, sua vida foi restaurada para ${vida} pontos.`);
console.log(`Mesmo com apenas ${ouro} moedas restantes, sua determinação permanece inabalável.`);
console.log(`No coração das Florestas Binárias, o Guardião da Última Firewall aguarda.`);
console.log(`Runin respira fundo — sua hora chegou.`);
console.log(`Vida suficiente? ${vidaSuficiente} | Ataque forte? ${ataqueForte} | Nível avançado? ${nivelAvancado}`);
console.log(`Pode enfrentar o Guardião? ${podeEnfrentarGuardiao} — a batalha final se aproxima, seu destino está sendo compilado .`);


//⚔️ Nível 2: A Batalha dos Algoritmos

// === CONTINUAÇÃO DA SUA JORNADA DO NÍVEL 1 ===

let nomePersonagem = "Runin";
let classePersonagem = "Arqueira";
let nivelPersonagem = 20;
let vidaPersonagem = 140;   
let manaAtual = 50;
let manaMaxima = 50;
let esperiencia = 190;
let ouro02 = 40;

// Novos atributos 

let forca = 15;
let defesa = 15;
let agilidade = 20;
let combatesVencidos = 5;

// Estado atual da jornada 

let localAtual = "Florestas Binárias";
let inimigoAtual = "Guardião da Última Firewall";
let missaoAtual = "derrotar o Guardião e proteger a última Firewall";

// PRÓLOGO 

console.log(`Se camuflando nas sombras da escuridão das ${localAtual}, ${nome} se encontra procurando seu inimigo o ${inimigoAtual} para completar a missão que foi determinada a ela de ${missaoAtual}.`);

// Capítulo 01

// Dificuldades pelo caminho 

let dificuldade = "alta";
let desafio = "penhasco de códigos maliciosos";

if (agilidade >= 15) {
    console.log(`${nomePersonagem} encontra dificuldades durante o percurso, sendo uma delas um ${desafio}, porém contando com sua extrema agilidade ${nomePersonagem} consegue enfrentar este desafio com facilidade.`);
} else {
    console.log(`${nomePersonagem} enfrenta dificuldades sendo uma delas um ${desafio}. ${nomePersonagem} Não consegue encarar este desafio e acaba se machucando levemente.`);
} 

// por conta do grande esforço acaba perdendo 20 pontos de vida 

vidaPersonagem -= 20;

// Capítulo 02

if (vidaPersonagem >= 80) {
    console.log(`Mesmo após momentos de desespero e esforço por conta das dificuldades ${nomePersonagem} continua com ${vidaPersonagem} pontos de vida que são suficientes para continuar sua jornada, mesmo com os riscos.`);
}

// Capítulo 03

let poderInimigo = 25;

console.log(`Depois de longas horas caminhando pelo terreno com elevações e perigos ${nomePersonagem} finalmente encontra seu inimigo o ${inimigoAtual}`);
console.log(`Após uma intensa troca de olhares em busca de descobrir quem daria o primeiro golpe, ${nomePersonagem} se cansa da enrolação e atira a primeira flecha. `);


if (vidaPersonagem >= 150) {
    console.log(`Com pouca vida, ${nomePersonagem} deve fazer uma escolha que pode salvar ou ceifar sua vida`);
    console.log(`${nomePersonagem} ataca com toda a força que resta em seu corpo`);
    poderInimigo -= (forca * 2);
} else if (manaAtual >= 30 && classe === "Guerreira") {
    console.log(`${nomePersonagem} centraliza toda a sua força e suas habilidades com espada para derrotar seu inimigo o ${inimigoAtual}`);
    console.log("Que habilidade indescritível!!");
    poderInimigo -= (forca + 20);
    manaAtual -+ 30;
} else if (agilidade >= 15) {
    console.log("Com sua agilidade extrema, executa um ataque tão gracioso que poderia ser facilmente uma apresentação de cisne negro.. ou devemos dizer cisne em chamas");
    poderInimigo -= forca;
} else {
    console.log(`${nomePersonagem} se defente e ataca com uma habilidade e eficácia sem iguais. Suas flechas acertão os locais escolhidos com precisão, e quando essas se esgotão sua força e agilidade a ajudam a se defender de maneira eficaz`);
    poderInimigo -= (forca / 2);
    vida += 10;
    
}

// EPÍLOGO 

if (poderInimigo <=150) {
    console.log(`VITÓRIA!! ${nomePersonagem} vence seu inimigo ${inimigoAtual}`);
    esperiencia += 100;
    combatesVencidos++;
    console.log(`Uma nova lenda surge como uma fênix em chamas... `);
} else { console.log("⚔️ A batalha foi árdua, mas " + nomePersonagem + " sobrevive para lutar outro dia!");
}

console.log("");
console.log("🏁 FIM DO CAPÍTULO - Aguarde o próximo nível da aventura!");