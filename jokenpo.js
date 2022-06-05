const prompt = require("prompt-sync")();
console.log("                 JOKENPO                  ");

console.log();

console.log("Vamos jogar JokenPo?");

console.log();

let rounds = +prompt("Quantas rodadas vai jogar?");

let userPoints = 0;
let comPoints = 0;

console.log()

while(true){
    for(let i = 0; i<rounds; i++){
       
        let comChoice = Math.floor(Math.random() *2)+1;

        let options = ['Pedra', 'Papel','Tesoura']
        let userChoice = +prompt(`Qual sua escolha?   0-${options[0]} / 1-${options[1]} / 2-${options[2]}`)

        while(userChoice != 0 && userChoice != 1 && userChoice != 2) {
            console.log("Resposta inválida");
            userChoice = +prompt(`Qual sua escolha?   0:${options[0]}  1:${options[1]}  2:${options[2]}`);
        } 

        

        console.log();

        
        if (userChoice == 0) {
            console.log("Pedra para você");
        }else if (userChoice == 1) {
            console.log("Papel para você");
        }else if(userChoice == 2) {
            console.log("Tesoura para você");
        }
            
            
        if (comChoice == 0) {
            console.log("COM escolheu Pedra");
        }else if (comChoice == 1) {
            console.log("COM escolheu Papel");
        }else {
            console.log("COM escolheu Tesoura");
        }

        console.log();

        if (userChoice === 0 && comChoice === 2) {
        console.log("Você ganhou!");
        userPoints++;
        } else if (userChoice === 0 && comChoice === 1) {
        console.log("Você perdeu!");
        comPoints++;
        } else if (userChoice === 0 && comChoice === 0) {
        console.log("Empatou!");
        }

        if (userChoice === 1 && comChoice === 0) {
        console.log("Você ganhou!");
        userPoints++;
        } else if (userChoice === 1 && comChoice === 2) {
        console.log("Você perdeu!");
        comPoints++;
        } else if (userChoice === 1 && comChoice === 1) {
        console.log("Empatou!");
        }

        if (userChoice === 2 && comChoice === 1) {
        console.log("Ganhou, ponto para você!");
        userPoints++;
        } else if (userChoice === 2 && comChoice === 0) {
        console.log("Você perdeu!");
        comPoints++;
        } else if (userChoice === 2 && comChoice === 2) {
        console.log("Empataram!"); 
        }
    }  

 console.log();

       
        if(comPoints > userPoints){
            console.log(`Você perdeu com ${userPoints} ponto(s) e ${comPoints} ponto(s) para o Computador o fez vencer.`);
        }else if(userPoints > comPoints){
            console.log(`Conseguiu vencer com ${userPoints} ponto(s) , já o Computador fez ${comPoints} ponto(s).`);
        }else{
            console.log(`Ninguém venceu, tudo empatado ${userPoints} ponto(s) para você e ${comPoints} ponto(s) para Computador`);
            }
            console.log();
                
            

        let cont = prompt("Quer continuar?").toLowerCase();

        console.log();

        if(cont == "sim"){
            rounds = +prompt("Quantas rodadas?");
            continue;
        }else if (cont == "nao"){
            console.log("Então tá bom, até a próxima!");
            break;
        }
}

   
    



