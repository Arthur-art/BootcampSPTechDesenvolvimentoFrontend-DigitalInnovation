//Retorna o tamanho de uma string
const textSize='Text'.length;
//console.log(textSize);

//Retorna um array quebrando a string por um delimitador
const splittedText = 'Text'.split('x');
//console.log(splittedText);

//Busca por um valor e substitui por outro
const replacedText = 'Text'.replace('Text', 'Texto');
//console.log(replacedText);

//Retorna a "fatia" de um valor
const lastChar = 'Text'.slice(-1);
//console.log(lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
//console.log('Valor da string da primeira letra menos a ultima', allWithoutLastChar);

//Retorna N caracters a partir de uma posicao
const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2);
console.log(twoCharsBeforeFirstPos);



