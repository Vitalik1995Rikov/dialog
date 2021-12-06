import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';



export default function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Route exact path="/one">
        <One/>
      </Route>
      <Route exact path="/two">
        <Two/>
      </Route>
    </BrowserRouter>
  )
}

function One() {

}

function Two() {

}

function Navigation() {

}

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);

