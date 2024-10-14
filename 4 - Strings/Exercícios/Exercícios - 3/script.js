//a
const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`
console.log(frase)

//b
const frase2 = frase.replace("verde" , "rosa").replace("azul" , "laranja")
console.log(frase2)

//c
console.log(frase2.includes("verde"))
console.log(frase2.includes("laranja"))


//extra
const extra = "mas não deixe o gato sair"
const extra2 = extra.toUpperCase()
const fraseFinalMaiusculo = `Jorge tem uma casa rosa e com portão laranja, com os dizeres: "BOAS VINDAS, ${extra2} "`
console.log(fraseFinalMaiusculo)