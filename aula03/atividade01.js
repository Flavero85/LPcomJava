// ARRAY

let frutas = ["laranja", "abacaxi", "morango"]
//              0           1           2

// exibir array inteiro
console.dir(frutas)

// exibir uma posição do array
console.log(frutas[1])

// alterando o valor de uma posição do array

frutas[1] = "Pera"
console.dir(frutas)

// Adicionar um novo elemento no inicio do array

frutas.unshift("uva") // unshift é um metodo do array
console.dir(frutas) // dir é um metodo do console

// Adiconar um novo elemento no final do array

total = frutas.push('melao')
console.dir(frutas)


// Ordenar o array em ordem crescente

frutas.sort()
console.dir(frutas)

// Ordenar o array em ordem decrescente


frutas.reverse()
console.dir(frutas)

// Remover o primeiro item do array

frutas.shift()
console.dir(frutas)


// Remover o ultimo item do array

frutas.pop()
console.log(frutas)