//

fetch("https://swapi.dev/api/planets/2/", ).then((response) => {

 if(response.status===200){
        console.log(response)
    }else{
        throw new Error('Request error')
    }
  
  response.json().then((data) => {
    console.log(data)
    let props = Object.values(data)
    let {name,diameter,climate,terrain,population,residents} = data;
    //console.log(name,diameter,climate,terrain,population,residents[0])
    console.log(props)
  })
  .catch(error =>{
      console.warn(error);
  })
});

//

