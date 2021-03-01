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

console.log(personSpread);