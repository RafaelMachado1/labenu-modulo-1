const numeroA = +prompt('digite um numero aleatorio');
const numeroB = +prompt('digite um numero aleatorio');

console.log("O primeiro numero é maior que segundo?", numeroA > numeroB);
console.log("O primeiro numero é igual ao segundo?", numeroA === numeroB);
console.log("O primeiro numero é divisível pelo segundo", numeroA%numeroB===0);
console.log("O segundo numero é divisível pelo primeiro", numeroB%numeroA===0);