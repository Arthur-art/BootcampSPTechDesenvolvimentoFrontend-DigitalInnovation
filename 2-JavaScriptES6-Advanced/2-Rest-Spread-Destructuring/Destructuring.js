//Jeito antigo

let array = ["maca","banana","laranja","pera"];
let maca = array[0];
let banana =array[1];


//Novo jeito com es6 destructuring


//definindo variaveis
let [um,dois,tres,quatro,[[cinco]]] = [1,2,3,4,[[5]]];

console.log(cinco)


//destructuring arrays and objets
let obj = {
    nameUser1: "Arthur",
    ageUser1: 24,
    nameUser2: "Veigar",
    props:{
        favoriteColors:["black","red"]
    }
    

}

//acessando dados em um obj com destructuring
let {ageUser1,nameUser2,nameUser1} = obj;
 console.log(nameUser1)

let {props:{favoriteColors:[color1,color2]}} = obj;

console.log(color2)
let colors = `${color1},${color2}`;
console.log(colors);

let arrayFruits = [{name:"maca",name2:"banana",name3:"laranja",name4:"pera"}];

let [{name2}] = arrayFruits;
console.log(name2)


//functions

let arraySum = [12,12]

function sum([a,b] = [2,0]){

    return a+b;
}

console.log(sum())

function sumobj({a,b,c}){
    return a+b+c;
}

let objsum = {
    a:5,
    b:5,
    c:5
}

console.log(sumobj({a,b,c}=objsum));