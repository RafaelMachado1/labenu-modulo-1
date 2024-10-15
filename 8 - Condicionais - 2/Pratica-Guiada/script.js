
//PRATICA GUIADA 1

const idadeDependente=prompt('Solicitação de dependente\n qual a idade do dependente')

// 1 - Utilizando if aninhado
if(idadeDependente >=13){
    if(idadeDependente<18){
        console.log('Seu filho já pode ter um cartão vinculado ao seu')
        }
}else{
    console.log('Consulte outras possibilidades do Labank');
}

// 2 - Utilizando  operadores lógicos
if(idadeDependente>=13 && idadeDependente<=18){
    console.log('seu filho já pode ter um cartão vinculado ao seu')
}else{
    console.log('Consulte outras possibilidades do Labank')
}


//PRATICA GUIADA 2
// If ternário
console.log('Pratica Guiada 2 - if ternário')

const idadeDendente = number = prompt('Solicitação de dependente\n qual a idade do dependente')

console.log(idadeDendente >= 13? 'A idade do dependente é igual ou maior que 13, já pode ter um cartão':
 'Verifique as opções possíveis')

  //PRATICA GUIADA 3
 // switch-case
const numeroRamal=Number(prompt('Solicitação de cartão de crédito \n Digite a opção desejada: \n 1- Fácil \n 2- Black \n 3- Platinum \n 4- MasterGold'))

switch(numeroRamal){
    case 1:
        console.log('Cartão Fácil adquirido')
        break;
    case 2: 
        console.log('Cartão Black adquirido')
        break;
    case 3:
        console.log('Cartão Platinum adquirido')   
        break;
    case 4:
        console.log('Cartão Master Gold adquirido')   
        break;   
    default:
}


//EXERCICIO DE FIXACAO
const numero = +prompt('digite um número')

if( numero %2 === 0 && numero %3 === 0  ){
    console.log('O numero é divisivel por 2 e por 3')
     console.log(numero === 30? 'numero = 30? Ufa acertei':"numero = 30? não acertei")
     
     switch(numero){
        case 6:
            console.log('O número é 6')
            break;
        case 12:
            console.log('O número é 12')
            break;
        case 18:
            console.log('O número é 18')
            break;
        case 24:
            console.log('O número é 24')
            break;
        case 30:
            console.log('O número é 30')
            break;
        default:
        console.log('O número é maior que 30 ou menor que 6')
     }
}else{
    console.log('O número não é divisivel por 2 e nem por 3')
}