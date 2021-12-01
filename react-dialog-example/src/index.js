import React from 'react';
import ReactDOM from 'react-dom';


import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App text="Строка 1"/>
    <App text="Строка 2"/>
  </React.StrictMode>,
  document.getElementById('root')
);

