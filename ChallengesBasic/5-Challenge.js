/*Você deve calcular o consumo médio de um automóvel onde será informada 
a distância total percorrida (em Km) e o total de combustível consumido (em litros). */



let a = parseInt(gets());
let b = parseFloat(gets());
let total = parseFloat(a / b).toFixed(3);
console.log(total + " km/l");