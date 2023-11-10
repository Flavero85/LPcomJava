//6. Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.

let valor1 = 100, valor2 = 150, valor3 = 30

if(valor1 > valor2 && valor1 > valor3){
    console.log(valor1 + " é maior. ")
}else if(valor2 > valor1 && valor2 > valor3){
    console.log(valor2 + " é maior")
}else if(valor3 > valor2 && valor3 > valor1 )
    console.log( valor3 + " é maior")

