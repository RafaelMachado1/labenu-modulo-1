const nome = prompt("Qual é o seu nome?")
const nomeMaiusculo = nome.toLocaleUpperCase()
console.log(nomeMaiusculo)
const cor = prompt("Qual é a sua cor predileta?")
const citacao = prompt("Qual é a sua citação predileta?")

const stringConcatenada = 'A cor favorita de ' + nome + ' é ' + cor + ' e a citação predileta é:' + citacao + '\.'
console.log('STRING CONCATENADA', stringConcatenada)

const templateString = `${nome} \nCor favorita: ${cor}`
console.log('TEMPLATE STRING', templateString)

const tamanho = nome.length
console.log('o seu nome tem', tamanho, 'caracteres!')

const temA = nomeMaiusculo.includes('A')
console.log('Seu nome tem a letra A?', temA)

// Exercício de fixação
const nomeUsuario = prompt('Qual o seu nome?')
const emailUsuario = prompt('Qual seu e-mail?')
const tamanho1 = nomeUsuario.length

console.log(`O email ${emailUsuario} foi cadastrado com sucesso. Bem vindo!, ${nomeUsuario}. Seu nome possui ${tamanho1} caracteres`)

const temArroba = emailUsuario.includes('@')
console.log(`Seu email possui @: ${temArroba}`) // retorna trul ou false caso tenha arroba

const frase = `O email ${emailUsuario} foi cadastrado com sucesso. Boas vindas, ${nomeUsuario}. Seu nome possui ${tamanho1} caracteres`
const novaFrase = frase.replaceAll("r", "l") // método que troca aletra r por l
console.log(novaFrase)