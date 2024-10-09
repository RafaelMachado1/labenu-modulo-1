//Pratica Guiada 1
function imprimirOla(Ola){
    console.log(`Saudação: ${Ola}`)
}
//----------------------------------------------

//Pratica guiada 2
imprimirOla("Ola")

function imprimirNome(nome){  //Função classica
    console.log(`Nome ${nome}`)
}

//const imprimirNome = function(nome){ //Expressão de função
    //console.log(`Nome ${nome}`)
//}

imprimirNome("Rodrigo")
imprimirNome("Rafael")
imprimirNome("Lana")
//-----------------------------------------------------------------



//Pratica Guiada 3
/*function somaNumeros(n1 , n2){
    //console.log(n1 + n2) Apenas imprimi no console
    return n1+n2 // Para utilizar a função

}*/


const somaNumeros=(n1 , n2)=>{  // arrow function Outra forma de declarar uma função
    return n1+n2 // Para utilizar a função

}

const retorno = somaNumeros(2, 5)

console.log(retorno);
//--------------------------------------------------------------


//Pratica Guiada 4
const imprimirNumeros=(array)=>{
    const novoArray=[]

    novoArray.push(array[0], array[array.length-1])


    return novoArray
}

const retornoArray = imprimirNumeros([23, 25, 47, 15,95, 447,])
console.log(retornoArray)



//---------------------------------------------------
// prática guiada 5

function retornarPares(array){  // Fazendo com o If
    const novoArray=[]
    for(let valor of array){
        if(valor%2===0){
            novoArray.push(valor)
        }
    }
    return novoArray
}
console.log(retornarPares([1,2,3,4,5,6,7,8]))



function retornarPares(array){ // Fazendo com Operador lógico &&
    const novoArray=[]
    for(let valor of array){
        valor%2===0 && novoArray.push(valor)
    }
    return novoArray
}
console.log(retornarPares([1,2,3,4,5,6,7,8]))

//--------------------------------------------

//Exercício de fixação



function arrayNumeros(array){  
    const novoArray=[]

        novoArray.push(array[0]/2, array[array.length - 1]/2)

    return novoArray
 }


console.log(arrayNumeros([50,20,48,54]))
console.log(arrayNumeros([200,59,61,88]))