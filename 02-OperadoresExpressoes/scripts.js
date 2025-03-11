// Operadores Aritimeticos

// Soma
let soma1 = 5 + 3
console.log(`O resultado da soma é de: ${soma1}`)
console.log("O resultado da soma é de: ", 5 + 3)
console.log("O resultado da soma é de: ", soma1)

// Subtração
let subtracao = 33 - 10
console.log(`O resultado da subtracao é de: ${subtracao}`)
console.log("O resultado da subtracao é de: ", 5 - 3)
console.log("O resultado da subtracao é de: ", subtracao)

// Multiplicação
let multiplicacao = 32 * 4
console.log(`O resultado da multiplicacao é de: ${multiplicacao}`)
console.log("O resultado da multiplicacao é de: ", 5 * 3)
console.log("O resultado da multiplicacao é de: ", multiplicacao)

// Divisao
let divisao = 15 / 2
console.log(`O resultado da divisao é de: ${divisao}`)
console.log("O resultado da divisao é de: ", 12 / 2)
console.log("O resultado da divisao é de: ", divisao)

// Potenciação
console.log("Exponencial: ", 3 ** 3) // 3 elevado a 3
//-------------------------------------------------------------------------------

// Operadores de Incremento
let number = 10
number = number + 10 // Incrementando mais 10 na variavel number
number++ // ++ operador de incremento colocando sempre de 1 em 1, com o sinal depois ele incrementa após e não antes.

//Incrementa após por isso nao mostra no console, usando ++ após o nome
console.log(number++)
console.log(number)

//Incrementa antes, aparecendo antes no console
console.log(++number)
console.log(number)

//Decremento
console.log("Decremento após: ", number--)
console.log("Decremento antes: ", --number)

//Incrementar mais de um
number += 20
console.log(number)

//Decrementar mais de um
number -= 5
console.log(number)
