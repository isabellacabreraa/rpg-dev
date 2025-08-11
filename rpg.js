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

// === CONTINUAÇÃO DA SAGA ÉPICA - NÍVEL 3 ===

nivelPersonagem++;
let local = "Castelo dos Arrays"

console.log(`Após enfrentar uma árdua batalha com ${inimigoAtual} e derrota-ló, ${nomePersonagem} enfrenta uma nova missão. Ela deve explorar as masmorras mais profundas do ${local}`);

// Novos elementos para o castelo (inventário mágico - primeira coleção arcana)

let inventario = ["Poção de Vida", "Arco de Gelo", "Armadura do Dragão"];
let aliados = ["Arqueira Emma", "Guerreiro Nezha", "Mago Kitay", "Guerreiro Altan"];
let inimigos = ["Vaisra", "Su Daji", "Moag"];
let salas = ["Biblioteca do Tempo", "Armadilha de Chamas", "Torre do Dragão", "Sala dos Caldeirões"];
let tesouroColetado = [];

console.log(`🏰 - ${nomePersonagem} adentra ${local}`);
console.log(`Inventário inicial: ${inventario.length} itens mágicos`);

console.log(`${nomePersonagem} explora o castelo e encontra os determinados cômodos: ${salas} além de outros locais que não possuiam nada que poderia auxilia-lá em sua missão. Os nomes foram tirados exclusivamente da criatividade de ${nomePersonagem}.`);

let pocoes = ["Agilidade Extra", "Flor de Papoula", "Cura do Dragão"];

console.log(`${nomePersonagem} encontrou ${pocoes.length} poções mágicas, porém uma chamou mais sua atenção que as outras sendo ela a de ${pocoes[1]}`);

let pocaoQuebrada = pocoes.shift();

console.log(`Por conta de um descuido de ${nomePersonagem} a poção de ${pocaoQuebrada} acabou caindo e se estilhaçando no piso de pedras`);

// Modificando elemento específico
inventario[0] = "Poção de Vida Suprema";

// Métodos de array fundamentais

inventario.push("Coroa de Papoulas");
console.log(`Durante sua busca pelas masmorras profundas ${nomePersonagem} se depara com um novo item para o seu inventário a ${inventario[3]}.`);



console.log("Porém com novos aliados também surgem novos inimigos");

for (let i = 0; i < inimigos.length; i++) {
   console.log("Inimigos" + (i+1) + ":" + inimigos[i]);
}


if (vidaPersonagem => 100) {
    console.log(`${nomePersonagem} encontrou novos pergaminhos perdidos pelo caminho com ajuda de ${aliados[1]}.`);
} else {
    console.log(`O tempo distorce ao redor do ${nomePersonagem}!`);
    vidaPersonagem -= 10;
}


// Recrutando aliados com for tradicional
console.log(`${nomePersonagem} convoca seus aliados para a batalha final`);

for (let i = 0; i < aliados.length; i++) {
let aliado = aliados[i];
console.log(" Aliado " + (i + 1) + ": " + aliado + " se junta à missão!");
} 

if ( manaAtual => 30) { 
    console.log(" Como líder mágico, " + aliados + " multiplica o poder da equipe!");
    ouro += 50;
    } else if (i === 1) { 
    console.log(" Como defensor principal, " + aliados + " fortalece a resistência!");
    vidaMaxima += 30;
    } else { 
    console.log("Como especialista, " + aliados + " aprimora táticas de combate!");
    experiencia += 40;
    }
    
    console.log("Equipe completa! Ouro: " + ouro + " | Vida atual: " + vidaPersonagem);


    let danoRecebido = [];

console.log(+ nomePersonagem + " enfrenta " + inimigos.length + " inimigos épicos!");


for (let i = 0; i < inimigos.length; i++) {
let inimigo = inimigos[i];
let dano = Math.floor(Math.random() * 30) + 10; 

console.log(" Rodada " + (i + 1) + " - Enfrentando: " + inimigos);
console.log(  + nomePersonagem + " causa " + dano + " de dano!");

danoRecebido.push(dano); 


if (i === 0) {
console.log("Primeira vitória! Cristais fragmentados concedem bônus!");
tesouroColetado.push("Fragmento de Cristal");
} else if (i === 1) {
console.log("Segunda batalha! As sombras drenam energia, mas " + nomePersonagem + " resiste!");
vidaPersonagem -= 15;
} else {
console.log("Batalha final! O dragão recua! Vitória épica alcançada!");
xp += 100;
tesouroColetado.push("Escama Dragônica");
}
}


let danoTotal = 0;
for (let i = 0; i < danoRecebido.length; i++) {
danoTotal += danoRecebido[i];
console.log(" Rodada " + (i + 1) + " - Dano: " + danoRecebido[i]);
}

console.log("Dano total causado: " + danoTotal);
console.log("Tesouros coletados: " + tesouroColetado.length + " itens épicos!");

// === EPÍLOGO: O MESTRE DOS ARRAYS ===
console.log("");
console.log("👑 === EPÍLOGO: " + nomePersonagem + " - CONQUISTADOR DO CASTELO ===");

// Estatísticas finais da jornada
console.log("📈 Estatísticas Finais da Aventura:");
console.log("• Nível alcançado: " + nivel);
console.log("• Experiência total: " + xp);
console.log("• Vida restante: " + vidaPersonagem);
console.log("• Ouro acumulado: " + ouro);
console.log("• Itens no inventário: " + inventario.length);
console.log("• Aliados conquistados: " + aliados.length);
console.log("• Tesouros épicos: " + tesouroColetado.length);


console.log("");
console.log("A LENDA CONTINUA...");
console.log("Após conquistar o Castelo dos Arrays, " + nomePersonagem + " emergiu transformado.");
console.log("O domínio sobre as coleções arcanas fluía em suas veias como magia pura.");
console.log("Cada loop executado havia forjado sua mente em algoritmos de ferro e determinação.");
console.log("Os arrays sussurravam segredos ancestrais, revelando padrões ocultos da realidade.");
console.log("Aliados admiravam sua capacidade de organizar caos em estruturas harmoniosas.");
console.log("O inventário repleto de artefatos místicos brilhava com poder recém-descoberto.");
console.log("Mas no horizonte, novas aventuras aguardavam o Mestre dos Códigos Arcanos.");
console.log("Rumores falavam de torres onde funções aguardavam para serem dominadas.");
console.log("E objetos legendários que guardariam os segredos da programação orientada.");
console.log("A jornada estava longe do fim - era apenas o início de uma saga maior.");
console.log("Pois " + nomePersonagem + " havia provado ser digno do título supremo:");
console.log("A ARQUEIRA EM CHAMAS");

console.log("");
console.log(" FIM DO NÍVEL 3 | AGUARDE FUTURAS AVENTURAS NA ACADEMIA DOS CÓDIGOS! ");