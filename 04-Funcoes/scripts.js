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
//-----------------------------------------------------------------------------------

/* 
  Comentario de documentação em Javascript (sintaxe de JSDoc).
  O JSDoc é um padrao para incorporar documentação no codigo-fonte a 
  partir desses comentarios.
 */


  /**
   * Authenticates the user
   * 
   * @param {String} email user email.
   * @param {String} password more than 6 characters.
   * @returns {Number} user id.
   */
  function signIN (email, password){
    // Fluxo de autenticação do usuário.


    return 7
  }


  signIN("lucas@email.com", "123456")
//-------------------------------------------------------------------------------------

//Função anonima (função que não possui nome)
// Muito comum guardar função dentro de variavel usando função anonima porem nesse caso não guardamos o retorno dela em uma variavel , mas sim a função inteira.

// Ela é usada imediatamente e guardada em uma variavel.
const showMessage = function (){ // criando a função diretamente de uma variavel/constante tornando ela uma função anonima sem nome.
  return "Ola, Lucas"

}

console.log(showMessage())

const showMessage1 = function (name, data){

  return "Ola, " + name + data

}

console.log(showMessage1("Lucas", " hoje é dia 11/03"))
//----------------------------------------------------------------------------------------

//Arrow Function (função de seta)
// Também conseguimos colocar ela dentro de uma variavel como na função anonima

const showArrow = () => { // Nesse caso apenas tiramos o "function" e usamos apenas o parenteses com o sinal de maior ou igual =>
  console.log("Olá")

}

console.log(showArrow())
showArrow()

const showArrow1 = (nameUser) => {
  console.log(`Ola, ${nameUser}`) // Com interpolação
}

showArrow1("Lucas")
console.log(showArrow1("Emilly"))
//-----------------------------------------------------------------------------------------

// CALLBACK FUNCTION: é uma função passada para outra função como argumento
function execute(taskName, callBack){
  console.log("Executando a tarefa: ", taskName)
  callBack()

}
function callBack() {
  console.log("Tarefa Finalizada")
}

//Passando para a função
execute("Download do arquivo...", callBack)

//Criando a função no proprio parametro (função anonima)
execute("Upload do arquivo...", function(){
  console.log("Função de callback com uma função anonima")
})

//Utilizando arrow function
execute("Excluindo arquivo...", () => {
  console.log("Arquivo excluido!")
})