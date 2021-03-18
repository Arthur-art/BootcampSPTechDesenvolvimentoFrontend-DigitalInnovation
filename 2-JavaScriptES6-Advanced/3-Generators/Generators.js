/*/Generators - (funcoes com pausa)

function* hello(a,b){
    a = 5;
    b = 5;
    let value = a+b;
    console.log(value)
    yield 1;
    value = a*b;
    console.log(value)
    yield 2;
    value = a/b;
    console.log(value)
}
const it = hello();


let boolean = false;

if(boolean == true){
    console.log(it.next());
}else{
    console.log(it.next())
    console.log(it.next())
    console.log(it.next())
}


//                  //#endregion            //

function* naturalNumbers(){
    let number = 0;
    while(true){
        yield number;
        number++;
    }
}
const it = naturalNumbers();
for(let i = 0; i<=10; i++){
    console.log(it.next())
}

//                  //#endregion                /*/
//obj iterado com generators
let obj = {
    value:[10,20,30,40,50],
    *[Symbol.iterator](){
        for(let i=0;i<this.value.length;i++){
            yield this.value[i];
        }
    }
}

for(let value of obj){
    console.log(value);
}

