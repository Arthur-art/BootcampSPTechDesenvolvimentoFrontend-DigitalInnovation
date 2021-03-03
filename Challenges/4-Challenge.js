/*Faça a leitura de um valor inteiro. Em seguida,
 calcule o menor número de notas possíveis (cédulas) onde o valor pode ser decomposto.
 As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1.
  Na sequência mostre o valor lido e a relação de notas necessárias.
  
  o meu deu 60 linhas
é só usar o %
divide por 100
/ 100 pega qtas notas de 100 precisou
% 100 vai dar o resto
pega o resto dessa divisao e divide por 50
resto / 50 = qtas notas de 50 precisou
resto % 50 = resto pra dividir por 20 depois
vai assim, descendo até chegar na nota de 1
  
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