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
//--------------------------------------------------------------------------------

// Ordem de precedencia em calculos
// Quando uma expressao tem multiplos operadores, na programação e em expressoes matematicas, a ordem de precedencia define qual operação vai ser realizada primeiro.
let total1 = 2 + 3 * 4
console.log(total1)

let total2 = (2 + 3) * 4 // Com o parenteses estou dizendo que eu quero que a conta entre parenteses seja feita primeiro.
//-----------------------------------------------------------------------------------

// Operadores Lógicos
let one = 1 
let two = 2

// Igual a ==
console.log(two == one) // Retornara um valor booleano de false ou true, dizendo se é igual ou não
console.log(one == 1) // Retornara verdadeiro, pois o que está dentro da variavel é o valor 1.
console.log(one == "1") // Continuara retornando verdadeiro, pois ele ira olhar dentro do conteudo e não o tipo da variavel

// Diferente de !=
console.log(one != two) // Retorna verdadeiro, pois ele é diferente de two
console.log(one != 1) // Falso pois o valor é 1.
console.log(one != "1") // Continua falso pois ele vai olhar o conteudo e não o tipo.

// Estritamente igual a ===
// Ele olha para o tipo e para o valor na hora da verificação
console.log(one === 1) // Vai dar verdadeiro normal, seus tipos e valores são iguais
console.log(one === "1") // Diferente do igual a, ele dara falso pois agora estará verificando seu valor e seu tipo.

// Estritamente diferente de !==
// Mesma ideia do estritamente igual
console.log(one !== two)
console.log(one !== 1)
console.log(two !== 2)
console.log(two !== "2")

let balance = 500
let payment = 120

// Maior que >
console.log(balance > payment) // tambem retornara verdadeiro ou falso, no caso verdadeiro

// Menor que <
console.log(balance < payment) // Verificando se o balance é menor q o payment q é falso

balance = 120

// Maior ou igual >=
console.log(balance >= payment)

// Menor ou igual <=
balance = 500
console.log(balance <= payment)

// Operadores de Atribuição
let value
value = 1 // o = é um operador de atribuição
console.log(value)

// Operador AND (E) &&
// Ele só retornara verdadeiro se ambas as condições forem verdadeiras.
let email = true
let password = true
console.log(email && password) // Retornara verdadeiro pois ambas as afirmações são verdadeiras
password = false
console.log(email && password) // Retornara falso pois uma das afirmações nao é mais verdadeira

// OR (OU) ||
// Apenas uma das afirmações precisa estar verdadeira para ele passar
console.log(email || password) // Retornara verdadeiro pois uma já esta verdadeiro
email = false
console.log(email || password) // Retornara falso pois as duas sao falsas

// NOT (negacao) !
// Ele faz a inversão de uma condicão dada anteriormente, ele verifica se ele é o oposto do valor colocado.
console.log(!password) // Ele verifica se ele é oposto de true, sendo ele setado como false