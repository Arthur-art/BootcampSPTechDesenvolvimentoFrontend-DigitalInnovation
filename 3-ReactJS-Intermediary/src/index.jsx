import React,{Fragment} from 'react'
import ReactDOM from 'react-dom'
import {ToDoList} from './components/ToDoList/ToDoList'

ReactDOM.render(
  <Fragment>
    <ToDoList/>
  </Fragment>,
  document.getElementById('container')
);

 