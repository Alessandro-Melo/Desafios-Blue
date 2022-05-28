const prompt = require('prompt-sync')();

console.log("Manipulação de Medicamentos")
console.log(`O processo de manipulação de medicamentos segue diretrizes da Agência Nacional de Vigilância Sanitária, 
que deve ser seguida pelos técnicos responsáveis.Tais diretrizes são denominadas Procedimentos Operacionais Padrão(POP).
Logo abaixo responda ao questionário com 1 para SIM E 0 para NÃO`)


let answer1 = +prompt("A balança analítica deve ser ligada e só será utilizada depois de 30 minutos? ")

let answer2 = +prompt("Preencher todos formulários de Controle de Ambiente e Equipamentos do Laboratório? ")

let answer3 = +prompt("Verificar temperatura e calibrar balanças?")

let answer4 = +prompt("Assepsia das bancadas de manipulação?")

let answer5 = +prompt("Lavar muito bem as mãos antes de iniciar toda e qualquer manipulação? ")


sucess = (answer1 + answer2 + answer3 + answer4 + answer5)

if(sucess == 5 ){
    console.log("Parabéns, você é um excelente profissional!!")
} else if(sucess < 5 && sucess > 2){
    console.log("Você precisa ser mais diligente.")
} else{
    console.log("Precisa fazer um curso de reciclagem.")
}