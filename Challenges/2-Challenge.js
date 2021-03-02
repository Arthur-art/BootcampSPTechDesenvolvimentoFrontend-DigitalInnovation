/*Crie um programa que leia um número e mostre os números pares até esse número, inclusive ele mesmo.*/


let number = gets();

function Rest(number){
    let num = 0;
    for(let i = 0; i<number; i++){
        ++num;
        if(num%2==0){
            console.log(num);
        }
    }
    
}
Rest(number);