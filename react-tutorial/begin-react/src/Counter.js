import React, { useReducer } from "react";

function reducer(state, action){
  switch(action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      throw new Error('Unhandled action')
  }
}

function Counter() {
  // dispatch : 액션을 발생 시킨다.
  // useReducer(reducer,0) => reducer 함수를 불러오고 초기값은 0이다.
  const [number, dispatch] = useReducer(reducer, 0)

  const onIncrease = () => {
    dispatch({
      type: 'INCREMENT'
    })
  };
  const onDecrease = () => {
    dispatch({
      type: 'DECREMENT'
    })
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
