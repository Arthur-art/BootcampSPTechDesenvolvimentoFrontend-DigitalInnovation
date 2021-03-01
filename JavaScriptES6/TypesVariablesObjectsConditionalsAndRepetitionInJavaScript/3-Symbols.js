// Symbols sao unicos, previnem conflito entre nomes de propriedades
const nameSymbol1 = Symbol('Arthur');
const nameSymbol2 = Symbol('Arthur');
//console.log(nameSymbol1,nameSymbol2)

const user = {
    [nameSymbol1]:'Ivar',
    [nameSymbol2]:'Teixeira',
    lastName:'Santos'
}
console.log(user)

//Symbols criam propriedades que não são enumerables, não aparecem no for in
for(let key in user){
    if(user.hasOwnProperty(key)){
        console.log(`Valor da chave ${key}: ${user[key]}`);
    }
}

//Exibir symbols de um objeto
console.log(Object.getOwnPropertySymbols(user));

//Acessando todas as propriedades do objeto
console.log(Reflect.ownKeys(user));

//Criar um enum
const directions = {
    up: Symbol('Up'),
    down: Symbol('Down'),
    left: Symbol('Left'),
    right: Symbol('right')
};