import React, { useEffect, useState } from "react";


const App = (props) => {

const [isReversed, reverse] = useState(null);
const [color, changeColor] = useState(0);
const [renderCount, setRenderCount] = useState(1);

const colors = ["#001f3f", "#39cccc", "#39c5cc", "#d9cccc"];
const styles = {color: colors[color]}


const onClickHandle = (e) => {
  reverse(isReversed => !isReversed);
  changeColor(i => i + 1)
}

useEffect(() => {
    if (isReversed !== null) {
      setRenderCount(count => count + 1)
    }
}, [isReversed])

  return (
      <div>
        <p onClick={onClickHandle} style={styles}>
          {isReversed ? props.text.split('').reverse().join('') : props.text}
        </p>
        Render {renderCount} раз
      </div>
  );
}

export default App;
