import React from "react";
import { Routes, Route} from 'react-router-dom';

import About from "./About";
import Contact from "./Contact";
import AllContacts from "./AllContacts";
import Home from "./Home";
import User from "./User";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const End = styled.div`
  font-size: 24px;
  color: #8857d8;
`;

const App = () => (
  <main>
    <Wrapper>
      <User/>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact/:id" element={<Contact />}></Route>
          <Route path="/contact" element={<AllContacts />}></Route>
          <Route path="/" element={<Home />}></Route>
      </Routes>
      <End>End</End>
    </Wrapper>
  </main>
)

export default App;
