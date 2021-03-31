/*import React from 'react'cria um objeto JavaScript. Este objeto contém propriedades que são 
necessárias para fazer o React funcionar, como React.createElement()e React.Component. */
import React from 'react'
/*import ReactDOM from 'react-dom'cria outro objeto JavaScript. 
Este objeto contém métodos que ajudam o React a interagir com o DOM, como ReactDOM.render(). */
import ReactDOM from 'react-dom'
import IfElse from './componentscodecademy/IfElse'

const Div = React.createElement("h1", null, "React - codecademy");
const attribut = (e)=> {
  e.target.setAttribute("style", "font-size:3rem;")
}
const DivTitle = <div onMouseOver={attribut}>{Div}</div>
ReactDOM.render(
  <React.StrictMode>
    <div>{DivTitle}</div>
    <IfElse/>
  </React.StrictMode>,
  document.getElementById('container')
);

