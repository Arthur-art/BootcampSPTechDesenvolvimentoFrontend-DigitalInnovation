//Retirando itens duplicados do array com filter
const filterFunction = (()=>{
    let array = [2,2,2,3,4,56,7,1,2,3,4];

    let uniqueProducts = array.filter((element,i,array)=> array.indexOf(element) === i);

    console.log(uniqueProducts);
})();



//Filtrando elementos em um array de objetos
const filterObject = (()=>{
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
        }
    
    ];

   let petsAge =  pets.filter((pets)=>pets.age==14);
   console.log(petsAge)

})();
