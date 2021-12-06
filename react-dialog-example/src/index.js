import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import './index.css';


export default function App() {
  return (
    <div className="container">
      <Navigation/>
      <Routes>
        <Route exact path="/one" element={<One/>}></Route>
        <Route exact path="/two" element={<Two/>}></Route>
      </Routes>
    </div>
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
      <NavLink to="/two">Two</NavLink>
    </nav>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);

