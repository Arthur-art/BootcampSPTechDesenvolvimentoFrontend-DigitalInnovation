function method1(){
    console.log('JavaScript ES6')
}

let obj = {
    method1
};

//obj.method1()


//Concatenando propriedades de um objeto es6
let propName = 'user';
let name = 'name';
let objName = {
    [name + propName]:'Arthur'
}



console.log(objName)