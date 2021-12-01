import React, { useState } from "react";


const App = (props) => {

const [isReversed, reverse] = useState(null);
const [color, changeColor] = useState(0);

const colors = ["#001f3f", "#39cccc", "#39c5cc", "#d9cccc"];
const styles = {color: colors[color]}


const onClickHandle = (e) => {
  reverse(isReversed => !isReversed);
  changeColor(i => i + 1)
}

  return (
      <p onClick={onClickHandle} style={styles}>
        {isReversed ? props.text.split('').reverse().join('') : props.text}
      </p>
  );
}

export default App;
