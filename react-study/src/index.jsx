import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Button from './components/Button';
import ListKeys from './components/ListsKeys';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Button />
    <ListKeys />
  </React.StrictMode>,
  document.getElementById('root')
);

