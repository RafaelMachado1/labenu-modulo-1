/*
let nacionalidade = prompt('Escreva sua nacionalidade') //.tolowercase() //= adicione o prompt aqui

if(nacionalidade === 'brasileira'){
    console.log('Nacionalidade Brasileira')
}else if(nacionalidade === 'Brasileira'){
    console.log('Nacionalidade Brasileira')

}else if(nacionalidade === 'argentina'){
    console.log('Nacionalidade Argentina') 
}else if(nacionalidade === 'Argentina'){
    console.log('Nacionalidade Argentina')

}else if(nacionalidade === 'uruguaia'){
    console.log('Nacionalidade Uruguaia')
}else if (nacionalidade === 'uruguaia'){
    console.log('Nacionalidade Uruguaia')

}else if(nacionalidade === 'chilena'){
    console.log('Nacionalidade Chilena')
}else if(nacionalidade === 'chilena'){
    console.log('Nacionalidade Chilena')

}else if(nacionalidade === 'colombiana'){
    console.log('Nacionalidade Colombiana')
}else if(nacionalidade === 'Colombiana'){
    console.log('nacionalidade Colombiana')

}else{
    console.log('não encontrado')
}
*/

// SEGUNDA MANEIRA DE FAZER ENSINADO NA AULA
let nacionalidade1 = prompt('Escreva sua nacionalidade').toLocaleLowerCase() // converte todos os caracteres em minúsculas

if(nacionalidade1 === 'brasileira' || 
    nacionalidade1 === 'argentina' || 
    nacionalidade1 === 'uruguaia' || 
    nacionalidade1 === 'chilena' || 
    nacionalidade1 === 'colombiana'){
    console.log(nacionalidade1)
}
 else{
    console.log('nacionalidade não encontrada')
 }