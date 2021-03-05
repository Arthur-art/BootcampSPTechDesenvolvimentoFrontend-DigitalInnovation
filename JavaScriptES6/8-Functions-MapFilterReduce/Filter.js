//Retirando itens duplicados do array com filter
const filterFunction = (()=>{
    let array = [2,2,2,3,4,56,7,1,2,3,4];
    /*é checado se o elemento na primeira posicao que ele 
    foi encontrado é === a posicao em que esta o indice position, se for filter recebe true e 
    o element entra na variavel elementTrue, se não recebe false e é excluido de elementTrue*/
    let uniqueProducts = array.filter((element,position,array)=>{
        let elementTrue =  array.indexOf(element) === position;
        //console.log(elementTrue)
        //console.log(element);
        //console.log(position);
        //console.log(array.indexOf(element));
        return elementTrue;
    });

    
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
   //console.log(petsAge)

})();
