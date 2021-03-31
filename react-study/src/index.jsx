import React from 'react'
import ReactDOM from 'react-dom'
import This from './componentscodecademy/This'

const Div = React.createElement("h1", null, "React - codecademy");
const attribut = (e)=> {
  e.target.setAttribute("style", "font-size:3rem;")
}
const DivTitle = <div onMouseOver={attribut}>{Div}</div>
ReactDOM.render(
  <React.StrictMode>
    <div>{DivTitle}</div>
    <This/>  
  </React.StrictMode>,
  document.getElementById('container')
);

