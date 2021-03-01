//Factory (Todas as functions que retornam um objeto, sem a necessidade de chama-las com o new, sao consideradas funcoes Factory)
function person(customProperties){
    return{
        name: 'Arthur',
        lasName: 'Teixeira',
        ...customProperties
    }
}

const PersonP = person({name: 'Custom Name', age:24});
//console.log(PersonP);


//Singleton (Cria uma unia instancia de uma funcao construtora e retorna a mesma toda vez que for chamada)
function Pessoa(){
    if(!Pessoa.instance){
        Pessoa.instance = this;
    }
    return Pessoa.instance;
}

const priInstance = Pessoa.call({name: 'Arthur'});
const segInstance = Pessoa.call({name: 'Ivar'});

console.log(priInstance)
console.log(segInstance)


//Decorator (Uma funcao decorator recebe uma outra funcao como parametro e estende o seu comportamento sem modificala explicitamente)
//A funcao so é executada caso loggedin for true;
let loggedin = true;

function callIfAuthenticated(fn){
    return !!loggedin && fn();
}

function sum(a,b){
    return a+b;
}
console.log(callIfAuthenticated(()=> sum(2,3)));
