//Symbols - identificador unico

const nameArthur1 = Symbol('Arthur');

//console.log(nameArthur)

const obj = {
    [nameArthur1]:"Hellow",
    name:'Ivar'
}
//propriedades privadas
console.log(Object.keys(obj))

//pegando uma propriedade symbol de dentro de um obj
console.log(Object.getOwnPropertySymbols(obj))


//Well known symbols

Symbol.iterator

const array = [1,2,3,4,5];

const iterator = array[Symbol.iterator]();
/*console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())*/

while(true){
    let {value,done}=iterator.next();
    
    if(done!=false){
        break;
    }
    console.log(value);
}


for(let value of array){
    console.log(value)
}

//                     #                             //

//Deixando um objeto iteravel
const obj2 = {
    value:[10,20,30,40],
    [Symbol.iterator](){
        let i = 0;
        return{
            next:()=>{
                i++;
                return{
                    value:this.value[i -1],
                    done:i>this.value.length
                };
            }
        };
    }
};

const it = obj2[Symbol.iterator]();

for(let value of obj2){
    console.log(value)
}

let obj3 = [...obj2];

console.log(obj3)