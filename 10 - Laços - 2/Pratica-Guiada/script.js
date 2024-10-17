// Pratica Guiada feita na aula
const megaSena = [
    [1, 2, 3, 4, 5, 6],
    [11, 22, 33, 44, 55, 66],
    [10, 20, 30, 40, 50, 60],
    [9, 19, 28, 29, 49, 59 ]
  ]
  
  // Exercício 1
  if(megaSena.length === 4){
    //escrever o código
    for (let i = 0; i < megaSena.length; i++){
      //percorre o array pai
      let sorteio = `Sorteio ${i + 1}:`
  
      for(let j = 0; j < megaSena[i].length; j++){
        //Percorre o array filho
       sorteio += `${megaSena[i][j]}`
      }
      console.log(sorteio)
    }
  }else{
    console.log('É necessário alterar o número de itens do array')
  }

  //---------------------------------------------------------------------------------------
  //Exercício 2
if (megaSena.length === 4){
    for (let i in megaSena){
      // For in percorre o array e objetos busca o índice de cada posição
      let sorteio = `Sorteio ${Number(i) + 1}:`
  
      for (let j of megaSena[i]){
        //For of percorre o array e objetos buscando o valor de cada posição
        sorteio += `${j}`
      }
      console.log(sorteio)
    }
  }else{
    console.log('É necessário alterar o número de itens do array')
  }

//---------------------------------------------------------------------------------------
  // Exercício de fixação
const filmes = [
    {
      titulo: 'O Auto da Compadecida',
      ano: 2000,
      diretor: 'Guel Arraes',
      elenco: [
        'Selton Mello',
        'Mateus Nachtergaele',
        'Marco Nanini',
        'Fernanda Montenegro',
      ],
    },
    {
      titulo: 'Carandiru',
      ano: 2001,
      diretor: 'Hector Babenco',
      elenco: [
        'Wagner Moura',
        'José Carlos Vasconcelos',
        'Ailton Graça',
        'Caio Blat',
      ],
    },
    {
      titulo: 'Aquarius',
      ano: 2012,
      diretor: 'Kléber Mendonça Filho',
      elenco: [
        'Sônia Braga',
        'Humberto Carrão',
        'Maeve Jinkings',
        'Bárbara Colen',
      ],
    },
  ]
  
  // escreva seu código abaixo 👇🏻
  // Jeito certo de fazer!
  for (let f in filmes){ // For in percorre o array e objetos busca o índice de cada posição
    let string
    string = `${filmes[f].titulo} de ${filmes[f].ano}
    dirigido por ${filmes[f].diretor} tem no elenco:`
  
    for (let elenco of filmes[f].elenco){ //For of percorre o array e objetos buscando o valor de cada posição
      string += `${elenco},`
    }
    console.log(string)
  }


  

  