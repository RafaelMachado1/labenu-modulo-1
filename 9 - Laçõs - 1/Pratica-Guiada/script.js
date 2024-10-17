// Prática guiada

//ELEMENTOS NECESSÁRIOS PARA QUALQUER LAÇO

/*
Inicialização de váriável
Condição de continuação
Um conjunto de ações
Uma alteração que mude a condição de continuação
*/

// While (enquanto)
/* Vamos criar um sistema em que a pessoa será solicitada a inserir vários números, um
após o outro.
Quando digitar o número "0", devemos parar de solicitar novos inputs e imprimir no console
a soma de todos os números indicads.
Ex: Vamos supor que ele coloque: 10, 3, 50, 7, 0.
O resultado deve ser: 70. */

//----------------------------------------------------------------------------------------

let numeroWhile = Number(prompt("Insira um número aleatório."))
let soma = 0

while(numeroWhile !== 0){

    soma = soma + numeroWhile
    console.log(soma)
    
    numeroWhile = Number(prompt("Insira outro número aleatório."))
}

console.log("Saiu do laço while.")


//----------------------------------------------------------------------------------------
// For (para/por)
/* Vamos escrever um programa que recebe um numero aleatório por prompt
Esse programa deve escrever os números de 0 até o valor que foi digitado pela pessoa.
Para isso, vamos utilizar um laço for que roda por x vezes, onde o X é o número digitado. */

// variavel = Number(prompt("string"))
// for(inicialização de variavel; condição/verificação booleana; incremento++)
// for(let i = numero inicial; i condição da variavel; i++ significa incremento+1


let numeroFor = Number(prompt("Insira um número aleatório."))

for(let i = 0; i <= numeroFor; i++){

    console.log(i)
}
console.log("Fim do laço for.")


//-----------------------------------------------------------------------------------------
// for com arrays
// Declara uma variável = array [elementos]
// for(let i = número inicial; i condição da variavel.length; i++ indice+1 )
// console.log(`string de impressão`)
// console.log(`string de fim`)

const numeros = [2, 4, 6, 8, 10]

for(let i=0; i < numeros.length; i++){
    console.log(`O número do índice ${i} é ${numeros[i]}`)
}
console.log("Fim do for array.")


//-----------------------------------------------------------------------------------------

// Exercicio de fixação
/* 1) Utilizando o laço while, escreva um código que recebe um prompt esperando
seu tipo de usuário. O tipo de usuário é representado pelas letras abaixo.
- "A": Administrador;
- "B": Usuário comum;
- "C": Usuário assinante
Enquanto o valor passado for diferente da letra que representa "administrador",
o laço deve se repetir, exibindo a mensagem: "Acesso negado".
Quando o valor for igual ao da letra que representa "administrador", o laço
deve parar e a mensagem "Boas vindas, admin!" deve ser impressa.*/

let usertype = prompt(`Digite o seu tipo de usuário! \n "A" para Administrador \n "B" para Usuário comum \n "C" para Usuário assinante.`).toLowerCase()

while(usertype !== "a"){

    console.log("Acesso negado!")
    
    usertype = prompt(`Digite o seu tipo de usuário! \n "A" para Administrador \n "B" para Usuário comum \n "C" para Usuário assinante.`).toLowerCase()
}
console.log("Boas vindas, admin!")


//-----------------------------------------------------------------------------------------
// 2) Escreva, utilizando o laço for, um programa que escreva a tabuada do número aleatório.

// variável = number(prompt("string"))
// for(variavel i = valor inicial; variavel i <= 10; i++) que significa (variavel i + 1){
// console.log(`${variavel} x ${variavel i} = ${variavel * variavel i}`)
// console.log("Fim.")
//}

let numeroAleatorio = Number(prompt("Digite um número aleatório para ver sua tabuada."))

for(let i = 1; i <= 10; i++){

    console.log(`${numeroAleatorio} x ${i} = ${numeroAleatorio * i}`)
}
console.log("Fim da tabuada!")


//-----------------------------------------------------------------------------------------
// 3) Crie um laço for que recebe um array de strings, e imprima no console
// a string em caixa alta.

// variavel = array [elementos]
// for(let i = numero inicial para posição do array; i menor que variavel de array
// .length; i++) (incremento/indice +1){
// console.log(variavel de array[variavel i].toUpperCase)}

const meusPets = ["Ully", "Thor", "Bob", "Alfredo", "Zoe"]

for(let i = 0; i < meusPets.length; i++){
    console.log(meusPets[i].toUpperCase())
}