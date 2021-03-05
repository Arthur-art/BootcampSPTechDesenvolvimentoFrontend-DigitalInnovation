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


//Diferenca entre usar um map e um forEach

//map
let mapArray = pets.map((pets)=>{
    return pets.name;
});


//forEach
let forEachArray = [];
pets.forEach((pets)=>{
    forEachArray.push(pets.name);
})


console.log(mapArray)
console.log(forEachArray)