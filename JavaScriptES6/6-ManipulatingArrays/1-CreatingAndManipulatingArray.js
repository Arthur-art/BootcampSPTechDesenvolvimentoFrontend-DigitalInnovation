//Array.of (Cria uma nova instancia de array a partir do numero de parametros informados)
const arrayOf = Array.of(1,2,"3","4",5,"seis",function sum(a,b){return a+b})
console.log(arrayOf);
console.log(arrayOf[6](5,5));

//Array.from (Cria uma nova instancia do array a partir de um parametro array-like ou iterable object)
const divArray = Array.from('div');
console.log(divArray);



//Concat(Concatena um ou mais arrays retornando um novo array)

const fruit = ['maca','laranja','banana'];
const salty = ['coxinha','enrolado','pastel'];

const foods = fruit.concat(salty);
console.log(foods);

//----------------------------------------------------------------------


let array = [123456789];
let phrase = String(array);
let arrayPhrase = Array.from(phrase);


//Adicionar um item no fim do array

arrayPhrase.push('10');


//Adicionar um item no começo do array

arrayPhrase.unshift('0');


//Remover elemento do fim de um array

arrayPhrase.pop();


//Remover elemento do começo de um array

arrayPhrase.shift();


//Pegar somente alguns elementos do array
//OBS: slice não altera o array original. Ele retorna uma cópia de elementos do array original.
//Elementos do array original são copiados para o array retornado da seguinte maneira:

//console.log(arrayPhrase.slice(1,4));


//Remover um ou mais itens em qualquer posição do array

//console.log(arrayPhrase.splice(1, 4));


//Encontrar a posição de um elemento no array

let position = arrayPhrase.indexOf("7");

console.log(position);
console.log(arrayPhrase.splice(6, 1));
console.log(arrayPhrase);




