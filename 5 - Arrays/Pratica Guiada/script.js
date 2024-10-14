/*
let arrayStrings = ['Banana', 'Mamão', 'Amora'];
let arrayNumber = [8, 2, 5];
let arraySortido  = ["banana", 12, true]
let arrayNum = [20]
let arrayVazio = []

console.log(arrayStrings.length) // identificar tamanho do array
console.log(arrayStrings[2]) //acessando string dentro do array
console.log(arrayStrings) // acessando array

console.log(arraySortido.includes(12)) //O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente.
console.log(arraySortido.includes(true))
console.log(arraySortido.includes(10))
console.log(arraySortido.includes("bananinha"))

console.log(arrayNum)
console.log(arrayVazio)

//link para saber mais métodos a repeito do array
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes


//      MANIPULAÇÃO DE ARRAYS

let copiarArrayString = arrayStrings 
console.log(copiarArrayString)

copiarArrayString.push("uva")
console.log(copiarArrayString)
console.log(arrayStrings)

// assim ele adiciona no primeiro array tb. fazendo uma referência

//  COPIANDO CORRETAMENTE
let copiarArrayStrings = arrayStrings.slice() //copiando de forma correta sem alterar o array original
console.log(copiarArrayStrings)

copiarArrayStrings.push("uva") //adiciona um ou mais elementos ao final
console.log("original", arrayStrings)
console.log("cópia", copiarArrayStrings)

copiarArrayStrings.pop() //remove o ultimo ítem
console.log(copiarArrayStrings)

copiarArrayStrings.splice(2,2) // remove N elementos à partir da posição I
console.log(copiarArrayStrings)

//MÉTODO PARA ORDENAR O ARRAY (colocar em ordem crescente ou decrecente)
// link com a documentação: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
arrayStrings.sort()
console.log(arrayStrings)*/

let arrayNumber = [5,8,2,7]
console.log(arrayNumber)
arrayNumber.sort()
console.log(arrayNumber)
arrayNumber.reverse() // ordem decrescente
console.log(arrayNumber)

arrayNumber.pop()
console.log(arrayNumber)

arrayNumber.push(6)
console.log(arrayNumber)

arrayNumber.splice(2,1)
console.log(arrayNumber)