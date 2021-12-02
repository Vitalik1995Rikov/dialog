import React, { useRef } from "react";


const App = () => {

  const text = useRef(null);

  const handleClick = () => {
    text.current.value ='Learn React';
  }
  
  return (
      <div>
        <button onClick={handleClick}>Add text</button>
        <label>
          Text will add after click button
        </label>
        <textarea ref={text}></textarea>
      </div>
  );
}

export default App;
