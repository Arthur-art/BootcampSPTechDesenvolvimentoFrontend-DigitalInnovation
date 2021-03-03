
/*Desafio
Você deve fazer a leitura de 5 valores inteiros. Em seguida mostre quantos valores informados são pares, quantos valores 
informados são ímpares, quantos valores informados são positivos e quantos valores informados são negativos.

Entrada
Você receberá 5 valores inteiros.

Saída
Exiba a mensagem conforme o exemplo de saída abaixo, sendo uma mensagem por linha e não esquecendo o final de linha após cada uma. */

const numeros = new Array()

for (let i = 0; i < 5; i++) {
  numeros[i] = parseInt(gets().split(" "))
}

let numPares = function (item) {
  if (item != 0) {
    return item % 2 == 0;
  }
  return (item == 0);
};

let numImpares = function (item) {
  if (item < 0) {
    return item % 2 == -1;
  }
  if (item > 0) {
    return item % 2 == 1;
  }
};

let numPositivos = function (item) {
  return item > 0;
};

let numNegativos = function (item) {
  return item < 0;
};


console.log(`${numeros.filter(numPares).length} valor(es) par(es)
${numeros.filter(numImpares).length} valor(es) impar(es)
${numeros.filter(numPositivos).length} valor(es) positivo(s)
${numeros.filter(numNegativos).length} valor(es) negativo(s)`)