//Jeito antigo 
const multiply = (a,b)=>{
    //verifica se b é undefined, se for ele vale 1, se não vale o valor informado
    b=typeof b === 'undefined' ? 1 : b;
    //ou
    if(typeof b === 'undefined'){
        b=1;
    }else{
        b=b;
    }
    return a*b;
}

//Novo jeito com ES6
const multiplyEs6 = (a,b=1)=>{
    return a*b;
}


//console.log(multiplyEs6(5))

//gerando id randomicos
function randomNumber(){
    return Math.random() *10;
}

const multiplyRandom = (a,b=randomNumber())=>{
    return a+b;
}

console.log(multiplyRandom(5))