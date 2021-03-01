const user = {
    name:'Arthur',
    lasName:'Teixeira'
};
console.log(user);

//usando spread "..." o objeto user foi copiado para dentro da function
//e adicinou um novo elemento "fullName" a copia do objeto
function getUserWithFullName(user){
    return {
        ...user,
        fullName: `${user.name} ${user.lasName}`
    }
}

const userWithFullName = getUserWithFullName(user);
console.log(userWithFullName);