const pets = [
    {
        name: 'rex',
        type: 'dog',
        age:10
    },
    {
        name: 'miau',
        type: 'cat',
        age:23
    },
    {
        name: 'gulp',
        type: 'dog',
        age:12
    },
    {
        name: 'flid',
        type: 'fish',
        age:14
    },
    {
        name: 'rex',
        type: 'dog',
        age:10
    },
    {
        name: 'cack',
        type: 'cat',
        age:23
    },
    {
        name: 'bk201',
        type: 'dog',
        age:12
    },
    {
        name: 'ivar',
        type: 'fish',
        age:14
    }

];

let reduceAge = pets.reduce((total,pets)=>{
    return total += pets.age;
}, 0)
console.log(reduceAge)