// Função como declarar
function message() {
  console.log("Ola, é bom ter você por aqui!")
}

message() // Pra função ser executada precisamos chamar ela pela nome dela seguido dos ()

//Parametro: é a variavel (escopo da função) que irá receber um valor em uma função
//Argumentos: é o valor que é passado para a função.


//Passando o parametro username.
function message1(username) { // O parametro username é uma variavel que foi criada somente no escopo da função e pode ser usada dentro da função tendo seu valor definido ao chamar essa função
  console.log("Ola", username)

}

// Passando argumentos.
message("ROdrigo") // Posso definir o valor desse parametro 'username' ao chamar a função e colocando o valor dentro dos parenteses, só é possivel quando chamamos a função pois é uma variavel de escopo somente da função e não pode ser chamada fora dela.

function sum(a, b) {
  console.log(a + b)
}

sum(10, 20)
sum(7, 3)

//Definindo um valor (argumento) padrão
function joinText(text1, text2 = "", text3 = ""){ // O sinal de = "" significa que se o valor nao for definido ou utilizado ele retornara como uma string vazia e deixara de dar resultado undefined.
  console.log(text1, text2, text3)
}

joinText("Lucas", "Oliveira", "Bueno")
joinText("Lucas") // Ficara somente no text1 e o resto ficara undefined por que ainda nao foram definidos com valores.
//---------------------------------------------------------------------

//Retornando valores, dentro das funções podemos fazer toda uma operação dentro mesmo das funções
function sum1(a, b){
  let result = a + b
  

  return result // caso queiramos retornar o valor pra usar fora da função
}

let response = sum(10,20)
console.log(response) // Para recebermos o retorno da função devemos armazenar a sua chamada dentro de uma variavel e chama-la pela variavel.

console.log(sum(3,6)) // Ou podemos chamar direto no console log sem precisar armazenar primeiro em uma variavel e chama-la da variavel.