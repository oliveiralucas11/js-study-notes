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



