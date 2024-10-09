/*a) Uma função que receba 2 números como parâmetros, e,
dentro da função, faça a soma das duas entradas e imprima 
o resultado. Invoque a função e imprima no console o resultado.*/

/*
function somaNumeros(n1 , n2){
    const soma = n1 + n2  
   
    return soma
}
console.log(somaNumeros(6,6))
*/




/*b) Uma função que recebe 2 números e imprime um booleano 
que informa se o primeiro número é **maior ou igual** ao segundo.*/
/*
function comparaNumeros(num1, num2) {
    if (num1>num2) {
        console.log(`O primeiro número é Maior que o segundo`)
    }else if (num2>num1){
        console.log(`O Segundo número é Maior que o primeiro`)
    }else if(num1===num2){
        console.log(`Os números são iguais`)
    }else{
        alert('Entrada inválida')
    }
    return verificacao
}

console.log(comparaNumeros(5,5))*/


/*
// c) Uma função que receba um número e imprima se ele é par ou não
function numerosPares(n1){
    const pares = n1 
    if(n1 %2===0){
    console.log('Esse número é par')
}else{
    console.log('Esse número é impar')
}
}
console.log(numerosPares(10))*/


//d) Uma função que recebe uma mensagem (`string`) como parâmetro
// e imprima o tamanho dessa mensagem, juntamente com uma versão 
//dela contendo apenas letras maiúsculas.

const string = (text) =>{
    console.log(`${text.toUpperCase()}`)
    console.log(`Tamanho da String: ${text.length} Caracteres`)
}

string(prompt('Digite aqui uma mensagem.'))

