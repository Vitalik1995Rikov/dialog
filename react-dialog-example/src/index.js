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
  return <h1>One</h1>
}

function Two() {
  return <h1>Two</h1>
}

function Navigation() {
  return (
    <nav>
      <NavLink to="/one">One</NavLink>
      <NavLink to="/one">One</NavLink>
    </nav>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);

