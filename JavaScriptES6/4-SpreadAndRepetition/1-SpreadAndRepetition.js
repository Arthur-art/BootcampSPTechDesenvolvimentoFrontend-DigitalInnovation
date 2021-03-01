//Spread 
const user = {
    name:'Arthur',
    lasName:'Teixeira'
};
function getUserWithFullName(user){
    return {
        ...user,
        fullName: `${user.name} ${user.lasName}`
    }
}

const userWithFullName = getUserWithFullName(user);
//console.log(userWithFullName);

let person = ['Arthur','vitu','mateus','znagef'];

let personSpread = ['miguel','ivar',...person];
//console.log(personSpread);


function func(arg1,arg2,arg3){
    return arg1+arg2+arg3;
}
let arg = [12,12,12];
console.log(func(...arg));


//continue, pula um dado de acordo com a condicao
const array = [1,2,3,4,5,6];

for(let index = 0; index < array.length; index++){
    const element = array[index];

    if(element % 2 === 0 ){
        continue;
    }
    console.log(element);
}