//Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking

let ordemCrepusculo = ["Crepúsculo", "Lua Nova", "Eclipse", "Amanhecer - Parte 1", "Amanhecer - Parte 2"]
let ranking = 1

for (let i of ordemCrepusculo) {
    console.log(`" ${ranking++}: ${[i]}" `)
}