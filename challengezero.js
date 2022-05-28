const prompt = require('prompt-sync')();

console.log(`Sou detetive e investigo o sumiço da vítima.
Por favor, responda 1 para SIM e 0 para NÃO`)

let r = parseInt(prompt("Conhece a vítima? "))

let r2 = parseInt(prompt("Falou com a vítima no dia do fato?"))

let r3 = parseInt(prompt("Teve alguma desavença com a vítima?"))

let r4 = parseInt(prompt("Esteve na praça em que a vítima sumiu?"))

let r5 = parseInt(prompt("No dia do fato, passou a noite fora?"))


t = (r + r2 + r3 + r4 + r5)


if (t >= 4){
  console.log("Você é CULPADO!")
} else if (t == 3){
  console.log("Você é SUSPEITO!")
} else {
  console.log("Você é INOCENTE!")
}