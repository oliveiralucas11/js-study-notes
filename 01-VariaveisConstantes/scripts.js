// Variaveis e Constantes
// - Variavel é um espaço reservado na memória para armazenar algo temporariamente, ela pode ser alterada e modificada a qualquer momento.

//Declarar uma variavel sem valor
var user 
console.log(user) // Ele retorna como conteudo undefined, pois não tem valor definido 

//Declarar uma variavel com valor
var email = "lucas@gmail.com"
console.log(email) // Vai retornar o valor na variavel, sendo ela uma string

//Substituir o valor da variavel
email = "joao@email.com"
console.log(email) // Agora o valor a ser mostrado sera o alterado e não o definido anteriormente. 

//Declarar uma variavel let sem valor
let user2 // Essa variavel nao permite que outra seja criada com o mesmo nome sobreescrevendo a si mesma uma vez colocada o nome não pode ser usada em outra variavel a nao ser que seja alterada.
console.log(user2)

//Declarar variavel let com valor
let email2 = "lucasoo@gmail.com"
console.log(email2)
email2 = "joaozinho@gmail.com"
console.log(email2) // Mesma funcionalidade da var padrão mudando somente o fato de nao poder criar outra variavel com mesmo nome sobreescrevendo a mesma.

//-------------------------------------------------------------------

//Constantes são valores reservados na memoria porém eles são fixos nao podendo serem alterados ao longo do código, como é feito nas variaveis normais.

//Declarar constante com valor
const number = 32
console.log(number) // O conteudo da constante é fixa e não pode ser alterado ex: number=40 , dara erro.
//--------------------------------------------------------------------------

//Escopo
// É a regiao do codigo onde uma determinada variavel é acessivel ou visivel

//O escopo define o contexto na qual uma variavel pode ser referenciada ou modificada

//Tente pensar no contexto como comodos de uma casa. Por exemplo, para usar o fogao você deve estar na cozinha.
//--------------------------------------------------------------------------------


//Case-Sensitive 
//Podemos criar variaveis com o mesmo nome apenas alterando alguma letra para maiuscula ou minuscula
let username = "Joao"
let userName = "Lucas"

console.log(username)
console.log(userName)

//Podemos
let $email = "rodrigo@email.com"
let _email = "lucas@email.com"
let Ação = "cadastrar"
let user_email = "roberto@email.com"
console.log($email)
console.log(_email)
console.log(Ação)
console.log(user_email)

//Nao Podemos
//let 1user = "Lucas"

//RECOMENDACOES
//Escrever sempre os nomes de variaveis em ingles
//Não usar acento nem caracteres especiais

//Pode se definir os nomes através do camelCase
let productName = "Nome de produto"
let firstName = "Lucas"
let lastName = "Bueno"

//Pode-se também usar o snake_case usando _

let product_name = "Teclado"
let last_name = "Lucas"
let first_name = "Oliveira"
//--------------------------------------------------------------------------------------

// Tipos de Variaveis
// Tipo string : que armazena somente textos em aspas dulas
let myName = "Lucas Oliveira" // tipo string com aspas duplas ou simples
console.log(myName)
console.log(typeof myName) // typeof usado pra saber qual o tipo da variavel que está sendo armazenada
console.log("Uma string com aspas")
console.log('uma string com aspas simples')

//Quando utilizar uma ou outra?
console.log('Uma string com "aspas duplas" dentro de aspas simples')

console.log("Uma string com 'aspas simples' dentro de aspas duplas")

console.log(`
  Uma string com acento grave permite
  multiplas linhas.
  `)

  // Template literals (template strings, interpolação de strings)
  let userData = "Lucas Oliveira"
  let userDataEmail = "lucasoliveria@email.com"
  
  // Podemos passar mais de um parametro
  console.log(userData, userDataEmail)

  // Concatenar texto
  let message = "Ola, " + userData + ". Você conectou com o email: " + userDataEmail
  console.log(message)

  // Template literals (Interpolação)
  console.log(`Ola, ${userData}. Você conectou com o email: ${userDataEmail}`)
  //--------------------------------------------------------------------------------------


  // Tipo Number

  // Inteiro positivo
  let integerPositive = 5
  console.log(integerPositive)
  console.log(typeof integerPositive)
  console.log(5)

  // Inteiro negativo
  let integerNegative = -5
  console.log(integerNegative)
  console.log(typeof integerNegative)
  console.log(-5)

  // Numeros reais ou float
  let floatNumber = 32.21
  console.log(floatNumber)
  console.log(typeof floatNumber)
  console.log(22.22)

  // NaN - Not a Number
  console.log(12.5 / "Rodrigo") // esse valor vai retornar NaN, pois aqui estamos tentando dividir um numero por um texto e isso nao é possivel.
  //-------------------------------------------------------------------------------------------


  // Tipo Boolean
  console.log(true) // verdadeiro
  console.log(false) // Falso

  let isLoading = true 
  console.log(isLoading)
  console.log(typeof isLoading)
  //----------------------------------------------------------------------------------------------


  // Tipo undefined e null

  //Undefined (indefinido) tipo de dado que o javascript atribui de forma automatica para uma variavel que ainda nao tem valor.
  let emptiness
  console.log("O valor é: ", emptiness) // Valor recebido sera definido com undefined até que eu mude o seu valor.

  // Null é um tipo de dado pra dizer que o conteudo de uma variavel é literalmente vazio/nulo
  let empty = null
  console.log("O valor dessa var é: ", empty)
  console.log(typeof empty)
  //--------------------------------------------------------------------------------------------------

  
  /* Conversão de tipos (type casting ou type conversion):
    ocorre quando você explicitamente transforma um valor de um tipo para o outro. 
    Isso é feito de forma consciente, usando funções ou metodos especificos para realizar a conversao.
  */
  let value = "9"
  console.log(typeof value)
  console.log(typeof Number(value)) // Fazendo uma conversao do tipo string para tipo Number

  let age = 18
  console.log(typeof age)
  console.log(String(age)) // Convertendo do jeito tradicional
  console.log(age.toString()) // Convertendo number para um texto de um outro jeito

  let options = 1 
  console.log(typeof options)
  console.log(Boolean(options)) // Converter numero para boolean sendo numero 1 como verdadeiro e 0 falso.

    
/*  Coerção de tipos:
    acontece de forma automatica (implicitamente). O Javascript tenta automaticamente converter um dos valores para um tipo compativel
    antes de realizar a operação. 
*/

  console.log("10" + 5) // O javascript vai tentar converter automaticamente para fazer a operação, convertendo o 5 fazendo ele passar a ser um texto e concatenando os 2 virando 105

