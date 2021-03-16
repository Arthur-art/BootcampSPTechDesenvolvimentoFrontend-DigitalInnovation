//forEach (Iteracao de cada item dentro de um array)
const array = ["Arthur", "vitu", "ivar", "mateus"];
const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayTestFlat = [[1, [2], 3], 4, 5, 6, [7, 8, 9], 10];

array.forEach((value, index, array) => {
  console.log(
    `Index: ${index}/ o Value:  ${value} / e o array que estou iterando: ${array}`
  );
});

//map (Retorna um novo array, do mesmo tamanho, iterando cada item de um array)
function arrayMap(array) {
  array.map((value) => {
    return console.log(value * 2);
  });
}

//arrayMap(arrayNumber);

/*flat (Retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva, de acordo com
    a profundidade especificada (depth))*/

const arrayFlat = arrayTestFlat.flat(2);
console.log(arrayFlat);

//flatMap (Retorna um novo array assim como a funcao map e executa um flat de profundidade)
const arrayFlatMap = arrayTestFlat.flatMap((value, flat) => {
  return value;
});
console.log(arrayFlatMap);


//find (Retorna o primeiro item de um array que satisfaz a condicao)
function arrayFind(array){
    console.log(array.find((value)=>{
       return value > 2;
    }));
}
arrayFind(arrayNumber)



//Filter (Retorna um novo array com todos os elementos que satisfazem a condicao)
function arrayFilter(array){
    console.log(array.filter((value)=>{
        return value > 2;
    }));
}

arrayFilter(arrayNumber);


//some (retorna um booleano caso tenha pelo menos um item de um array que satisfaz a condicao)
const arraySome = arrayNumber.some((value)=>{
    return value > 1;
})
console.log(arraySome);



// every (retorna um booleano verificando todos os elementos que satisfazem a condicao)

const arrayEvery = arrayNumber.every((value)=>{
    return value > 2;
})
console.log(arrayEvery);

//A função Math.floor(x) retorna o menor número inteiro dentre o número "x".(Arredonda pra baixo)

const floor = Math.floor(12.1);
console.log(floor)

//Math.ceil() que retorna o maior número inteiro que é maior que o número passado, por exemplo Math.(arredonda pra cima)

const ceil = Math.ceil(12.1);
console.log(ceil)


