//# Exercício 1

//a) Declare uma função que imprima `Olá, [SEU NOME]!`. 
//Chame esta função.

/*function imprimirNome(nome){
    console.log(`Olá ${nome}`)
}
const meuNome = 'Rafael'
imprimirNome('Daniel')
imprimirNome(meuNome)*/


/*const funcImprimirNome = function(nome){
    console.log(`Olá ${nome}`)
}
funcImprimirNome('Rafael')*/
//-------------------------------------------------------


//b) Declare uma função que imprima a tabuada do 6. Chame esta função.
function tabuada(){
    for(let i=1; i<=10 ; i++)
     console.log("6 x "+i+" = " + (6*i));
   }
 
 tabuada()
 
 
 /*function tabuada(){
     for(let i = 1; i<11; i++){
         console.log("Tabuada do: " + i );
         for(let j = 1; j<11; j++){
             console.log(i+ "x" +j+ "=" + (i*j))
         }
     }
 }
 
 tabuada()*/
 
 //------------------------------------------------------------
 
 
 //c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 
 
 /*const imprimirTabuada = function (tabuada){  //expressão de função
     for(var i=1; i<=10 ; i++)
      console.log("6 x "+i+" = " + (6*i));
   }
 
 imprimirTabuada()*/
 
 
 
 
 /*const tabuadaDeSeis=()=>{  //arrow Function
     for(var i=1; i<=10 ; i++)
      console.log("6 x "+i+" = " + (6*i));
   }
 
 tabuadaDeSeis()*/