import React, { useState } from "react";

function App() {
    
    let [{count1, count2}, setCount] = useState({count1: 0, count2: 10});

    
    function onClick() {
        setCount(currentState => ({
            ...currentState,
            count1: currentState.count1 + 1
        }))
    }
    
    return (
      <div className="container">
        <h3>Count: {count1}</h3>
        <h3>Count: {count2}</h3>
        <button onClick={onClick}></button>
      </div>
    )
  }


export default App;