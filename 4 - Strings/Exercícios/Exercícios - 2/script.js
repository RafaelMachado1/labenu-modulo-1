const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const minhaString2 = "Eu não sou supersticioso, mas sou um pouco ________."

//a
console.log(minhaString.trim())
//b
console.log(minhaString.length , minhaString2.length)
//c
const novaMinhaString = minhaString2.replaceAll("________" , "sticioso")
console.log(novaMinhaString)