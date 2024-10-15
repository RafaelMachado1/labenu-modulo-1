let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

if(nacionalidade === "brasileira"){
    console.log("a pessoa é do Brasil!");
} else if(nacionalidade === "argentina"){
    console.log("a pessoa é da Argentina!");
} else if(nacionalidade === "uruguaia"){
    console.log("a pessoa é do Uruguai!");
} else if(nacionalidade === "chilena"){
    console.log("a pessoa é do Chile!");
} else if(nacionalidade === "colombiana"){
    console.log("a pessoa é da Colômbia!");
} else{
    console.log("nacionalidade não encontrada")
}

//switch case
  if(nacionalidade)   {
     switch(nacionalidade){
        case 'brasileiro':
            console.log('brasileiro')
            break;
        case 'argentino':
            console.log('argentino')
            break;
        case 'uruguaio':
            console.log('uruguaio')
            break;
        case 'chileno':
            console.log('chileno')
            break;
        case 'colombiano':
            console.log('colombiano')
            break;
        default:
        console.log('nacionalidade não encontrada!')
     }
}