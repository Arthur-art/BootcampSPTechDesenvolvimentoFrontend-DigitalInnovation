/*Faça a leitura de um valor inteiro. Em seguida,
 calcule o menor número de notas possíveis (cédulas) onde o valor pode ser decomposto.
 As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1.
  Na sequência mostre o valor lido e a relação de notas necessárias.
  */

let valor = parseInt(gets());
let notas = [100, 50, 20, 10, 5, 2, 1];
let saque = '';

console.log(valor);
for(let i = 0; i < notas.length; i++){
    saque +=`${Math.floor(valor/notas[i])} nota(s) de R$ ${(notas[i])},00\n`;
    valor %= notas[i];
}
console.log(saque);