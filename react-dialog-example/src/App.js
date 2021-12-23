import React from "react";
import { render } from '@testing-library/react';

function App() {
    
    
    
    return (
      <div className="container">
        <h1>TEST</h1>
      </div>
    )
  }

  test ('Simple test', () => {
    render(<App/>)
  })


export default App;