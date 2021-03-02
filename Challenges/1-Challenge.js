/*
Crie um programa que leia 6 valores. Você poderá receber valores negativos e/ou positivos como entrada,
 devendo desconsiderar os valores nulos. Em seguida, apresente a quantidade de valores positivos digitados.
*/

let line; 
let numpos = 0;
for(let i = 6; i != 0; i--){
line = parseFloat(gets())
if(line > 0){
  numpos = numpos + 1;
}
}
console.log(numpos + " valores positivos")