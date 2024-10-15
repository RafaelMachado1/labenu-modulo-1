const num = +prompt('digite seu número aqui')

//if aninhado
if(num %2 === 0 ){
    if(num %3 === 0)
    console.log('Número divisivel por 2 e por 3')
}else{
    console.log('seu Número não é divisivel por 2 e por 3')
}

//Utilizando operador lógico
if(num %2 ===0 && num %3 === 0){
    console.log('Número divisivel por 2 e por 3')
}else{
    console.log('seu Número não é divisivel por 2 e por 3')
}