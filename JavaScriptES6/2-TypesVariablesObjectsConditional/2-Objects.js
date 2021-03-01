let user = {
    name:'Arthur'
};

//Alterando a propriedade de um objeto
user.name = 'Ivar';
user['name'] = 'BK201';


//Criando uma propriedade
user.lastName = 'Teixeira';


//Deletando propriedade
delete user.name;
//console.log(user.name,user.lastName);


const functionsUser = {
    name:'Arthur',
    lastName:'Teixeira',
    age:24
}

//Recupera as chaves de um objeto(propriedades)

console.log(Object.keys(functionsUser));

//Recupera os valores das chaves de um objeto

console.log(Object.values(functionsUser));

//Retorna um array de arrays contendo [nome_prop, valor_prop]

console.log(Object.entries(functionsUser));

//Mergear propriedades de objetos
Object.assign(functionsUser, {fullName:'Arthur Teixeira'})

console.log(Object.values(functionsUser));

//Retorna um novo object mergeando dois ou mais object

console.log(Object.assign({}, functionsUser,{age:26}));

//Previne todas as alteracoes em um object

const newObject = {
    foo:'bar',
    name:'Ivar',
    age:24
};
Object.freeze(newObject);

//Permite apenas alteracoes de propriedades existentes em um object

const person = {
    name:'Gojou'
};
Object.seal(person);
