//no currying o parameter a sempre vai ser 2 e so alteramos o parameter b
function parameter(a){
    return function(b){
        return a+b;
    }
}

const sum = parameter(2);

console.log(sum(2));