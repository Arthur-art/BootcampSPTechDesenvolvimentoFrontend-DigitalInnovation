/*const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  const addTwo = num => num + 2;
  
  const timeFuncRuntime = funcParameter => {
    let t1 = Date.now();
    funcParameter();
    let t2 = Date.now();
    return t2 - t1;
  };
  

  let time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes)
  */

  const evenNumber = (number)=>{
    return number % 2 == 0
  }

  
  const showNumber = (func, num)=>{
      const funcResult = func(num);
      const resposta = funcResult === true ? 'Sim' : 'Não';
      const html = `o numero ${num} é um numero par ? ${resposta}`
      console.log(html)
  }
  

  const Key = prompt('Digite uma senha')
  const checkKey = prompt('Digite a senha novamente')

  const checkPass = (key1,key2)=>{
        const pass = key1 === key2 ? true : false;
        console.log(key1, key2)
        return pass;
  }
  console.log(checkPass(Key, checkKey))
  