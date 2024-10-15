// PRIMEIRA FORMA DE FAZER

/*let idade = 20
let terminouEnsinoMedio = true
let cursandoAlgumaFaculdade = true

if(idade >= 18 ){
    console.log('A pessoa é maior de idade')
}else{(idade < 18) 
    console.log('A pessoa é menor de idade')
}
if(terminouEnsinoMedio === true){
    console.log('Terminou o ensino médio:','sim')
}else{(terminouEnsinoMedio === false)
    console.log('Terminou o ensino médio:','não')
}
if(cursandoAlgumaFaculdade === true){
    console.log('Está cursando alguma faculdade:','sim')
}else{(cursandoAlgumaFaculdade === false)
    console.log('Está cursando alguma faculdade:','não')
}*/


// SEGUNDA MANEIRA DE FAZER ENSINADO NO FEEDBACK
let idade1 = 20
let terminouEnsinoMedio1 = true
let aPessoaNaoEstaCursandoAlgumaFaculdade = true

if(idade1 >= 18 ){
    console.log('A pessoa é maior de idade')
}else{(idade1 < 18) 
    console.log('A pessoa é menor de idade')
}

////////////////////////////// SE O VALOR FOR FALSE: TRUE'TERMINOU O ENSOINO MÉDIO' COM FALSE RETORNA FALSE
if(terminouEnsinoMedio1) { // TERMINOU O ENSINO MÉDIO É TRUE     TRUE + TRUE RETORNA TRUE
    console.log('Terminou o ensino médio:','sim')
}else{
    console.log('Terminou o ensino médio:','não')
}

if(!aPessoaNaoEstaCursandoAlgumaFaculdade){ // CURSANDO ALGUMA FACULDADE É FALSE'!'  FALSE + FALSE RETORNA FALSE
    console.log('A pessoa não estuda em nenhuma faculdade')
}else{
    console.log('A pessoa estuda em uma faculdade')
}