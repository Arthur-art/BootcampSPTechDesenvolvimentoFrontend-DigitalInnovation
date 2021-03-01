const user = {
    name:'Arthur',
    lasName:'Teixeira'
};
//console.log(user);

//usando spread "..." o objeto user foi copiado para dentro da function, o objeto original não foi alterado
//e foi adicinado um novo elemento "fullName" na copia do objeto user
function getUserWithFullName(user){
    return {
        ...user,
        fullName: `${user.name} ${user.lasName}`
    }
}

const userWithFullName = getUserWithFullName(user);
//console.log(userWithFullName);

const students = [
    {
        name:'Grace',
        grade: 7
    },
    {
        name:'Jennifer',
        grade: 4
    },
    {
        name:'Paul',
        grade: 10
    },
];

function getApprovedStudents(studentsList){
    return studentsList.filter((student)=>student.grade >=7)
}
console.log(getApprovedStudents(students));


