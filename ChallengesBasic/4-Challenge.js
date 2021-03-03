/*Faça a leitura de um valor inteiro. Em seguida,
 calcule o menor número de notas possíveis (cédulas) onde o valor pode ser decomposto.
 As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1.
  Na sequência mostre o valor lido e a relação de notas necessárias.
  */


let value = 1850;
let arrayNotes = [100,50,20,10,5,2,1];
let html = '';
console.log(value)
for(let i in arrayNotes){
  html+=`${Math.floor(value/arrayNotes[i])} nota(s) de R$ ${(arrayNotes[i])},00\n`;
  value %= arrayNotes[i];
}
console.log(html);
