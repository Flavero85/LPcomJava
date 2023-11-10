/* Estrutura de Decisão

if --> SE
if (condição){
    resposta Verdadeira
}
if...else --> se Senão
if (condição){
    resposta verdadeira  ==== TRUE
}else{
    resposta Falsa  ====FALSE
}
*/


let idade = 13
if (idade >= 18){
    console.log("Maior de idade")
}else{
    console.log("menor de idade")
}

console.log("Escreva o suco:\n1 - Laranja \n2 - Uva \n3 - Abacaxi")
let suco = 3
if (suco == 1){
    console.log("🍊")
}else if (suco == 2){
    console.log("🍇")
}else if (suco == 3){
    console.log("🍍")
}else{
    console.log("Opção Inválida")
}

switch ( suco ) {
    case 1:
        console.log("Suco de 🍊")
        break
    case 2:
        console.log("Suco de 🍇")
        break
    case 3:
        console.log("Suco de 🍍")
        break
    default:
        console.log("Opção Inválida")
        break
    }