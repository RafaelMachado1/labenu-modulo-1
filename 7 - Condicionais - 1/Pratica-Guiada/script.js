// PRATICA GUIADA

const bool1 = false
const bool2 = true
const bool3 = true

if(bool1){  // sempre verifica se é true
    alert('Entrou no if. Bool1 é true')
} 
else{
    alert('entrou no else. bool 1 é false')
}
// nesse caso como ele é false ele entrou no else

if(bool1 === bool2){  // sempre verifica se a condição é verdadeira
    alert('O valor de bool1 e bool2 são iguais')
}else if(bool2 === bool3){
    alert('O valor de bool2 e bool3 são iguais')
}else if(bool1 === bool3){
    alert('O valor de bool1 e bool3 são iguais')
}else{
    alert('Não existem valores iguais') // esse
}

let idade = 16

if(idade >= 60 || idade >= 16 && idade < 18){
    console.log('Título facultativo')
}else if(idade >=18){
    console.log('Tem direito ao Título de leitor')
}else{
    console.log('Você não tem a idade mínima para emissão do título de leitor')
}


//PRA GUARDAR NA CABEÇA
const media = 5

if(media >= 5 && media <= 10){
    alert ('Aprovado')
}else if (media >= 3  && media <5){
    alert('Recuperação')
}else if(media >= 0 && media <3){
    alert('Reprovado')
}else{
    alert('Dados inválidos')
    }