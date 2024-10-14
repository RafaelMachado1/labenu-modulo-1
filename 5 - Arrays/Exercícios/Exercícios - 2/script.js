const apenasNumeros = [74, 56, 9, 18, 47]
const apenasString = ["café", "leite", "pão"]
const tudoJunto = [31, 4, "goiaba", "maça", 20 > 30]

//- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log("apenasNumeros tem", apenasNumeros.length, "itens")
console.log("apenasString tem", apenasString.length, "itens")
console.log("tudoJunto tem", tudoJunto.length, "itens")

//- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
const primeiroItem = apenasNumeros[0]
const segundoItem = apenasString[1]
const terceiroItem = tudoJunto[2]
console.log(primeiroItem, segundoItem, terceiroItem)

//- Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, 
//e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. 
//Isto é, um `includes()` verdadeiro, e outro falso.
console.log(apenasNumeros.includes(9))
console.log(tudoJunto.includes("uva"))