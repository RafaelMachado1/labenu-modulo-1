//Criando objeto
const estudante = {
    nome: 'Rafael',
    sobrenome: 'Machado',
    NumeroDaMatricula: 3838,
    notasDoSemestre: [8, 10],
}

// Lendo e adicionando nova propriedade a objetos
estudante.modulo = 'javascript' // adicionando ao objeto uma propriedade nova
estudante['modulo'] = 'javascript' // acessando e atribuindo a propriedade modúlo

console.log(estudante.nome); // acessando a propriedade nome com anotação ponto
console.log(estudante['nome']); // acessando a propriedade nome com a anotação dos colchetes
console.log(estudante.notasDoSemestre[1]) //acessando a segunda posição do array com a anotação do ponto
console.log(estudante['notasDoSemestre'][1])// acessando a segunda posição do array com anotação do colchete
console.log(estudante.modulo) // acessando a propriedade modúlo

//copiar o objeto e alterar as propriedades
const novoEstudante = {
    ...estudante, // copiando usando spread
    nome: 'Gabriel', //Alterando a propriedade
    sobrenome: 'Araujo', // Alterando a propriedade
    NumeroDaMatricula: 3839,
    notasDoSemestre: [...estudante.notasDoSemestre, 9], //Copiando e acrescentando nota
    modulo: 'HTML' // Alterando a propriedade
}
console.log(novoEstudante)

//criando array de objetos estudantes Labenu
const arrayEstudantes = [
    {...estudante}, //copiando objeto para dentro do array
    {...novoEstudante},
    {nome: 'Rafael', graduacao: 'Marketing'}, 
    {nome: 'Gabriel', graduacao: 'Pedagogia'}
]

/*
const arrayEstudantes = [
    {estudante,novoEstudante}, // ADICIONANDO objeto dentro do array
    {nome: 'Rafael', graduacao: 'Marketing'}, 
    {nome: 'Gabriel',graduacao: 'pedagocia'}
]
*/

console.log(arrayEstudantes)


//  EXERCÍCIO DE FIXAÇÃO

//Crie um objeto carrinho. Este objeto vai guardar nossas comprar. o Objeto carrinho deve guardar
//nome da pessoa que faz as compras
// sua forma de pagamento
//seu endereço
const carrinho = {
    nome: 'Rafael',
    formaDePagamento: 'Dinheiro',
    Endereco: "Rua Vereador Jose Elias Zaquem n° 18 Teresópolis RJ"
}

//Adicione ao objeto carrinho um array de objetos chamado "compras" para guardar as compras.
//Cada compra deve possuir:
// o nome do produto
// o preço do produto
// a quantidade de unidades deste produto que serão compradas
const array = [
    {...carrinho}, 
    {nomeDoProduto: "Coca-Cola"}, 
    {precoDoProduto: "R$ 10,00"}, 
    {quantidade:"5"}
]
console.log(array[3])

//Imprima a quantidade de compras que existem no carrinho;
//Crie uma cópia do objeto, chamada "carrinhoPresente", que 
//seja igual ao carrinho original, mas com o nome da pessoa
//alterado para o nome de uma pessoa que você gosta, e a
//forma de pagamento alterada para cartão presente
const carrinhoPresente = {
    ...carrinho,
    nome: 'Gabriel',
    formaDePagamento: 'Cartão Presente',
    Endereco: "Rua Vereador Jose Elia Zaquem n° 18 Teresópolis RJ"
}
console.log(carrinhoPresente)