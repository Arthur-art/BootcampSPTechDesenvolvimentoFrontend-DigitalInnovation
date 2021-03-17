//Jeito antigo
function sum(a, b) {
  let value = 0;
  console.log(arguments);
  for (let i = 0; i < arguments.length; i++) {
    value += arguments[i];
  }

  return value;
}
//console.log(sum(1,2,3,4,5,6));

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
//restArgs(1, 2, 3, 4, 5, 6);

