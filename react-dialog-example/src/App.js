import React, { useState } from "react";


const App = (props) => {

const [isReversed, reverse] = useState(null);

const onClickHandle = (e) => {
  reverse(isReversed => !isReversed);
}

  return (
    <p onClick={onClickHandle}>
      {isReversed ? props.text.split('').reverse().join('') : props.text}
    </p>
  );
}

export default App;
