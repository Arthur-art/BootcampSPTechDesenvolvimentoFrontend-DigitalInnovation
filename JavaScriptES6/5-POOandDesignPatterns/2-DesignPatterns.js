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


//Singleton (Cria uma unica instancia de uma funcao construtora e retorna a mesma toda vez que for chamada)
/*function Pessoa(){
    if(!Pessoa.instance){
        Pessoa.instance = this;
    }
    return Pessoa.instance;
}

const priInstance = Pessoa.call({name: 'Arthur'});
const segInstance = Pessoa.call({name: 'Ivar'});

console.log(priInstance)
console.log(segInstance)*/


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



//Usando Decorator na function Singleton acima
let permission = false;
function call(fn){
    return !!permission && fn();
}

function Pessoa(){
    if(!Pessoa.instance){
        Pessoa.instance = this;
    }
    return Pessoa.instance;
}

const priInstance = Pessoa.call({name: 'Arthur'});
const segInstance = Pessoa.call({name: 'Ivar'});

console.log(call(()=>priInstance))
console.log(call(()=>segInstance))


//Observer (A instancia subscriber mantem uma colecao de objetos e notifica todos eles quando ocorrem mudancas no estado)
class Observable{
    constructor(){
        this.observables = [];
    }

    subscriber(fn){
        this.observables.push(fn);
    }

    notify(data){
        this.observables.forEach(fn => fn(data));
    }

    unsubscribe(fn){
        this.observables = this.observables.filter(obs => obs !== fn);
    }
}

const eye = new Observable();

const logData1 = data => console.log(`Subscrible 1 : ${data}`);
const logData2 = data => console.log(`Subscrible 2 : ${data}`);
const logData3 = data => console.log(`Subscrible 3 : ${data}`);

eye.subscriber(logData1);
eye.subscriber(logData2);
eye.subscriber(logData3);

eye.notify('notified 1');

eye.unsubscribe(logData2);
eye.notify('notified 2');

