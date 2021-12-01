import React, { useReducer } from "react";


const App = () => {

  const initialState = {
    name: 'Vital',
    age: 26,
    town: 'NN'
  }

  function reducer(state, action) {
    switch (action.type) {
      case 'change-age':
        return {
          ...state,
          age: action.payload
        }
      case 'change-name':
        return {
          ...state,
          name: action.payload
        }
      case 'change-town':
        return {
          ...state,
          town: action.payload
        }
      default: 
        throw new Error('Unknown acion');  
    }
  }

const [state, dispatch] = useReducer(reducer, initialState)

const onChangeName = () => {
  dispatch({type: 'change-name', payload: 'Alex'});
}

const onChangeAge = () => {
  dispatch({type: 'change-age', payload: 27});
}
const onChangeTown = () => {
  dispatch({type: 'change-town', payload: 'Kazan'})
}



  return (
      <div>
        <p>{state.name}</p>
        <button onClick={onChangeName}>Change name</button>
        <p>{state.age}</p>
        <button onClick={onChangeAge}>Change age</button>
        <p>{state.town}</p>
        <button onClick={onChangeTown}>Change Town</button>
      </div>
  );
}

export default App;
