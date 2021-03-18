//Rest Operator

//Jeito antigo
function sum(a, b) {
  let value = 0;
  console.log(arguments);
  for (let i = 0; i < arguments.length; i++) {
    value += arguments[i];
  }

  return value;
}


//Novo jeito com Es6 (Rest operator)
const restArgs = (...args) => {
  /*let value = 0;
    console.log(args)
    for(let i in args){
        value+=args[i];
    }*/

  let value = args.reduce((value, item) => (value += item));
  console.log(value);
};




//Spread Operator

let array = [1,212,21,2,21,21,2,21,22,1,2121,21,2,12];
let SpreadArray  = (...array)=>{
  console.log(...array)
}
SpreadArray(...array.splice(1, 4))

let arrayWord = 'Arthur';
let SpreadArrayWord = (...array)=>{
  console.log(...array);
}
SpreadArrayWord(...arrayWord.split(" "));

//concatenando arrays

let array1 = ["Arthur"];
let array2 = ["Teixeira"];

let arrayConc = [...array1,...array2,"Santos"];
console.log(arrayConc)


//concatenando objetos

let objeto = {
  name: "Arthur",
  age:24
}

let objeto2 = {
  name2: "Ivar",
  age2:30
}

let spreadObj = {...objeto,...objeto2};
console.log(spreadObj)