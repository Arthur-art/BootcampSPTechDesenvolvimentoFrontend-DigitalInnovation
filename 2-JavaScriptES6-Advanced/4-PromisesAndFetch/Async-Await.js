/*/ ES7 -  Await  - usando quando você precisa esperar uma promise resolver

const Timeout = () => new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Data ok')
    }, 1000)
})

const simpleFunction = async ()=>{
    //espera o timeout resolver para terminar de executar a function
    const data = await Timeout();
    console.log(data)
    const dataJson = await fetch('https://swapi.dev/api/planets/1/').then(resStream => resStream.json())
    return dataJson;
}
simpleFunction()
.then(response=>{
    console.log(response)
})

/*/

/* Async/

const sum = async (a=0,b=0)=>{
    //throw new Error('function not ok')
    return a+b;
}
sum(6,6)
.then(response=>{
    if(response === 12){
        console.log('function ok')
    }else{
        console.log('function not ok')
    }
})
.catch(error=>{
    console.log(error)
})


/*/

