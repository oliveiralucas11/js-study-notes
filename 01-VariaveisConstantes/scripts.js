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
