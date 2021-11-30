import React, { useEffect } from "react";


function App() {

  useEffect(() => {
    document.title = 'Hello world';
  }, [])


  return (
    <div className="container">
      useEffect
    </div>
  );
}

export default App;
