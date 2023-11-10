//1. Faça um programa que peça o nome e a idade do usuário, se for maior ou igual a 18 mostre a mensagem "Olá, NOME, pode dirigir" senão mostre a mensagem "NOME Volte em alguns anos"

let nome = "Flavio"
let idade = 38

if(idade >= 18){
    console.log("Olá, " + nome + ", pode dirigir")
}else{
    console.log(nome + "Volte em alguns anos")
}