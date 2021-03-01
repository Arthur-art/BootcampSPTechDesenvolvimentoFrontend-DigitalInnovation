const users = ["Arthur", "Mateus", "Vitu", "Jennifer"];

//enum
const gender = {
  MAN: Symbol("M"),
  WOMAN: Symbol("W"),
};

const persons = [
  {
    name: "Arthur",
    age: 24,
    gender: gender.MAN,
  },
  {
    name: "Jennifer",
    age: 24,
    gender: gender.WOMAN,
  },
  {
    name: "Mateus",
    age: 22,
    gender: gender.MAN,
  },
  {
    name: "Vitu",
    age: 27,
    gender: gender.MAN,
  },
];

//console.log('Items:', persons.length);

//Verifica se é array
//console.log(Array.isArray(persons));

//Iterar os itens do array
persons.forEach((persons) => {
  //console.log(Object.values(persons));
});

//Fintrar array
const mans = persons.filter((person) => person.gender === gender.MAN);
//console.log(mans)

//Retornar um novo, adicionar uma propriedade, em uma copia do array
const personWithCourse = persons.map((person) => {
  person.course = "Introducao ao JS";
  return person;
});
//console.log(personWithCourse);

//Transformar um array em outro tipo, somando todas as idades
const totalAge = persons.reduce((age, person) => {
  age += person.age;
  return age;
}, 0);
//console.log(totalAge)

//Juntando operacoes
const totalEvenAges = persons
  .filter((person) => person.age % 2 === 0)
  .reduce((age, person) => {
    age += person.age;
    return age;
  }, 0);
console.log(totalEvenAges);
