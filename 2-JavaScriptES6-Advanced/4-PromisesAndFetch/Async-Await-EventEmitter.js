// ES7 -  Await  

const Timeout = () => new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Data')
    }, 1000)
})

const simpleFunction = async ()=>{
    const data = await Timeout();
    return data;
}
simpleFunction()
.then(response=>{
    console.log(response)
})

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