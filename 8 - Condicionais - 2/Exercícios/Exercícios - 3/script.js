//código a ser reescrito

if(nome === "José"){
    console.log("Oi, Zé!");
} else {
    console.log("Olá, "+nome);
}

if(idade >= 18){
    console.log("pode tirar carteira de motorista!");
} else {
    console.log("Ainda não pode tirar carteira de motorista");
}

//if ternário
const nome = prompt('digite seu nome')
const idade = prompt('digite sua idade')
console.log(nome === 'José'?  'Oi, Zé' : 'nome não é José')
console.log(idade >= 18 ? 'pode tirar carteira':'ainda não pode tirar carteira')