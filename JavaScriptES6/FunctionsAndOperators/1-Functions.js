//Arrow function
function fn(){
    return console.log('Code here');
}

const arrowfn = () => console.log('Code here');

const arrowfn2 = () => {
    return console.log('Code here');
}


//Principal diferenca entre ArrowFunction e Function normal
//A ArrowFunction irá retornar o this.name que referencia o escopo da funcao
//A Function irá retornar o user.name pois é o contexto que ela foi executada
(()=>{
    this.name = 'Arthur';

    const getNameArrowFn = () => this.name;

    function getName(){
        return this.name;
    }

    const user = {
        name:'Nome no objeto de execucao',
        //Atribuindo Propriedades "getNameArrowFn:getNameArrowFn"
        getNameArrowFn,
        getName
    }

    console.log(user.getNameArrowFn())
})();

//Function também sao objetos que permitem serem chamados
fn.prop = 'Propriedade';

//console.log(fn.prop)

//Receber parametros
let value = 'Arthur';
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

//logValue(value)


//Currying Receber e retornar funcoes
const controlFnExec = fnParam => allowed =>{
    if(allowed){
        fnParam();
    }
}

//Arrow function acima como uma function normal
/*function controlFnExec(fnParam){
    return function(allowed){
        if(allowed){
            fnParam();
        }
    }
}*/

/*const handleFnExecution = controlFnExec(fn);
handleFnExecution(true); //Executara a funcao fn
handleFnExecution();*/ // Não Executara a funcao fn

