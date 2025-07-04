// Operador Condicional Ternario
let age = 16
console.log(age >= 18 // Condicão
  ? "Voce pode dirigir" // Se verdadeiro
  : "Voce não pode dirigir") // Se falso

// o sinal de '?' ele é o operador que indica pra gente o que deve acontecer caso o resultado da condição for verdadeiro, já o ':'indica qual vai ser o resultado caso a condição seja falsa
console.log(age <= 18 ? "Você nao pode dirigir" : "Você já pode dirigir parabens!!")
console.log (age >= 18 ? "Voce ja pode ser preso" : "Voce ainda nao pode ser preso")
//------------------------------------------------------------------------------

/**
    Falsy quando um valor é considerado false e Truthy quando é considerado verdadeiro em contextos
    onde um boolean é obrigatorio (condicionais e loops).
 */
console.log("### EXEMPLOS DE FALSY###")
console.log(false ? "VERDADEIRO" : "False")
console.log(0 ? "VERDADEIRO" : "False")
console.log(-0 ? "VERDADEIRO" : "False")
console.log("" ? "VERDADEIRO" : "False")
console.log(null ? "VERDADEIRO" : "False")
console.log(undefined ? "VERDADEIRO" : "False")
console.log(NaN ? "VERDADEIRO" : "False")

console.log("### EXEMPLOS DE TRUTHY###")
console.log(true ? "VERDADEIRO" : "False")
console.log({} ? "VERDADEIRO" : "False")
console.log([] ? "VERDADEIRO" : "False")
console.log(1 ? "VERDADEIRO" : "False")
console.log(3.32 ? "VERDADEIRO" : "False")
console.log("Lucas" ? "VERDADEIRO" : "False")
console.log(" " ? "VERDADEIRO" : "False")
console.log(Infinity ? "VERDADEIRO" : "False")
console.log(-Infinity ? "VERDADEIRO" : "False")
console.log(-1 ? "Verdadeiro" : "False")
//-----------------------------------------------------------------------------------

//Estrutura de condicão if (se)
let hour = 11

if(hour <= 12){
  console.log("Bom dia!")

} // Chave é obrigatorio quando o if executa apenas uma instrução

// ELSE (se nao)
let age1 = 23

if(age1 <= 18){
  console.log("Você nao pode dirigir")
}else {
  console.log("Voce já pode dirigir")
}

// IF ELSE IF

let hour1 = 11

if(hour1 <= 12){
  console.log("Bom dia")
} 
else if(hour1 >= 18){
  console.log("Boa noite")
}
else if(hour1 > 12 ) {
  console.log("Boa tarde")
}

if (hour1 <= 12){
  console.log("Bom dia")
}
else if(hour1 > 12 && hour1 <= 18){
  console.log("Boa tarde")
} else {
  console.log("Boa noite")
}
//------------------------------------------------------------------------

//Estrutura de condição SWITCH 
//Mais usado quando você quer analisar caso a caso

// Mais usado em atendimento automatizado (bot) onde precisamos ter uma lista de opcoes pra serem digitadas.

let option = 1

switch(option){
  case 1:
    console.log("Consultar pedido")
    break // Usamos o break pra quando o caso for encontrado ele termina aqui o codigo se nao ele continua
  case 2:
    console.log("Falar com atendente")
    break // Quando ele encontra o comando break ele interrompe o comando switch
  case 3:
    console.log("Cancelar pedido")
    break
    default: // Como se fosse o else do if para caso a pessoa selecione um numero que nao esteja no switch
    console.log("Opção invalida")
}
//------------------------------------------------------------------------

// Estrutura de tratamento de exceções (try,catch)

try {
  //tenta executar algo
  console.log(result) // Nao vai aparecer o erro , ao contrario vai aparecer no catch o nome q eu botar para o erro
} catch (error){
  // Captura o erro pra trata-lo
  console.log(error)
  console.log("Nao foi possivel executar seu pedido. Tente novamente mais tarde.")
} finally {
  console.log("fim") // ele vai executar o conteudo do finally independente se tem erro ou não
}

//Podemos tambem usar como exceção

let result = 1 

try {
  if (result === 0 ) {
    throw new Error("o valor é igual a 0")
  }
} catch (error) {
  console.log(error)


} finally {
  console.log("Fim")
}










