 let ouro = 150;
 let valorEspada = 3;
 let xp = 15;

 if (ouro >= 100) {
    console.log("Vocâ comprou a espada mágica!");
    ouro -= valorEspada;
 } else if (xp >= 5) {
    console.log("suba alguns níveis antes de comprar a espada mágica");
 } else {
    console.log("Vocâ não tem moedas suficientes"); 
 } 

 console.log(`Quantidade de ouro no inventário: ${ouro}`);
 
