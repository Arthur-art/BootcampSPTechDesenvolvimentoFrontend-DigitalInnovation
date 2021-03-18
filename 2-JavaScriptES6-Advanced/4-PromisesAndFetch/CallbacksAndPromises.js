/*/Callback Hell

function doSomething(callback){
    setTimeout(()=>{
        callback('First data');
    }, 1000);
}

function doOtherSomething(callback){
    setTimeout(()=>{
        callback('Second data');
    }, 1000);
}

function doAll(){
    doSomething((data)=>{
        let processedData = data.split('  ');

        doOtherSomething((data2)=>{
            let processedData2 = data2.split('  ');

            setTimeout(()=>{
                console.log(processedData,processedData2);
            })
        })
    })
}

doAll()



//                  //#endregion            /*/



//Promises


const myPromise = () => new Promise((resolve,reject)=>{
    //throw new Error('Primary function not ok')
    setTimeout(()=>{
        resolve('Primary Function is ok');
    },1000);
});
const myPromise2 = () => new Promise((resolve,reject)=>{
    //throw new Error('something went wrong')
    setTimeout(()=>{
        resolve('Second Function is ok');
    },1000);
});

//Executando functions ao mesmo tempo em paralelo
Promise.all([myPromise(), myPromise2()]).then((response)=>console.log(response));

//Executando a primeira que foi resolvida
Promise.race([myPromise(), myPromise2()]).then((response)=>console.log(response));
/*/
myPromise()
.then((resolve)=>{
    console.log(resolve)
    return myPromise();
})
.catch((error)=>{
    console.warn(error)
})
myPromise2()
.then((resolve)=>{
    console.log(resolve)
    return myPromise2();
})
.catch((error)=>{
    console.warn(error)
})
/*/