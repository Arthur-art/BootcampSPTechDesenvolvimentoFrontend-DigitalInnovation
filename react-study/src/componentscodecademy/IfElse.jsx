import React from 'react';

export default class IfElse extends React.Component{
    render(){

        const cointToss = ()=>{
            return Math.random() < 0.5 ? 'heads' : 'tails';
        };

        const pics = {
            kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
            doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
          };
          let img;

          if(cointToss === 'tails'){
              img = (
                 <img src={pics.kitty} alt=""/>
              );
          }else{
              img = (
                  <img src={pics.doggy} alt=""/>
              )
          }


      return (
          <div>
              {img}
          </div>
      )  
    }
}