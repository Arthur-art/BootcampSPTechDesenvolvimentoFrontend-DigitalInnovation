//var não respeita o contexto de escopo, ja let e const sim;
(()=>{
    let test = 'value function';
    console.log(test);
    if(true){
        let test = 'value into escope';
        console.log(test);
    }
    console.log(test);
})();
