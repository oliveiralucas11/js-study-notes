/*
DOM - DOCUMENT OBJECT MODEL
É a representacao dados dos objetos que compoem a estrutura eo conteudo de um documento na WEB
(uma pagina HTML é um documento).

O DOM representa o documento com nós e objetos (estrutura de arvore) que pode ser acessado e modificado

*/

//Acessando Elementos no DOM

//Visualizar o conteudo do document.
console.log(document)

// Obter o title da pagina
console.log(document.title) // Vai pegar dentro do documento q é o HTML o titulo da pagina.

//Acessar elemento pelo ID (SELETOR ID)
const guest = document.getElementById("guest-1")
console.log(guest)

//Vizualizar as propriedades do objeto
console.dir(guest)

//Acessar elemento com class (SELETOR CLASS)
const guestsByClass = document.getElementsByClassName("guest")
console.log(guestsByClass)
console.log(guestsByClass.item(0)) // Exibe o primeiro elemento da lista de classes se tiver masi de uma.

//Selecionar lista de elementos pela tag.
const guestsbyTag = document.getElementsByTagName("li")
console.log(guestsbyTag)
//----------------------------------------------------------------------------------------------

//Query Selector
//Ele retorna sempre o primeiro elemento e nao todos que estao la a nao ser que seja usado o queryselectorall
const guest1 = document.querySelector("#guest-2") // Para selecionar o elemento pelo ID usa #
console.log(guest1)
const guest2 = document.querySelector(".guest") // Indica que ta selecionando pela classe
console.log(guest2)

//Retorna todos os elementos encontrados pelo query
const guest3 = document.querySelectorAll(".guest")
console.log(guest3)
//--------------------------------------------------------------------------------------------

//Manipulando Conteudo
const guest4 = document.querySelector("#guest-1 span") // Selecionando o elemento pelo id
console.log(guest4.textContent) // Acessando o texto dentro do ID

guest4.textContent = "Lucas Oliveira" // Atribui novo texto ao conteudo