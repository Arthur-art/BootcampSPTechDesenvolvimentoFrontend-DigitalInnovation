'use strict';

function Animal(qtdePatas){
    this.qtdePatas = qtdePatas;
    this.moviment = function(){};
}

function Cachorro(morde){
    Animal.call(this, 4);

    this.morde = morde;
    this.latir = function(){
        console.log('Au! au!');
    }
}

const pug = new Cachorro (false);
const pitbull = new Cachorro (true);

//console.log(pitbull)


class Person{
    constructor(name){
        this.name = name;
    }
}

class PessoaF extends Person{
    constructor(name,cpf){
        super(name);
        this.cpf = cpf;
    }
}
