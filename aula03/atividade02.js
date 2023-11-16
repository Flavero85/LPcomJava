let personagem = [
    "Astride",
    "Anjo",
    "Luz",
    "espada da sinceridade",
    100, //vida
    50, //força
]

console.log("======== FICHA DO PERSONAGEM =======")
console.log("Nome: " + personagem[0])
console.log("Classe: " + personagem[1])
console.log("Raça: " + personagem[2])
console.log("Equipamento: " + personagem[3])
console.log("Vida: " + personagem[4])
console.log("Força: " + personagem[5])


console.log("CAPITULO 01 - O INICIO")
console.log("Você acaba de chegar na cidade e foi logo procurarum igreja para orar")
console.log("Voce ouve um borburinho sobre o capeta da xuxa influenciando os baixinhos")
console.log("Voce tenta se aproxximar e a xuxa começa a cantar marquei um x um x um x no seu coração. Role o dado e faça um teste e ve se consegue quebrar o disco de vinil")

let dado = Math.floor(Math.random() * (6 - 1 + 1)) + 1
if(dado > 5){
    console.log("SUCESSO!!! Voce conseguiu desligar a vitrola")
}else{
    console.log("FALHA!!! Voce nao alcançou a vitrola e ela começou a girar o disco ao contrario, perca 2 pontos de vida")
    personagem[4] = personagem[4] - 2
    console.log("Vida: " + personagem[4])
}