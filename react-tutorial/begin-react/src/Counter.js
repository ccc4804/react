import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    //this.handleIncrease = this.handleIncrease.bind(this) // 해당 함수에서 this가 가르키는 것을 설정해준다.
    // this.handleDecrease = this.handleDecrease.bind(this)
    this.state = {
      counter: 0,
      fixed: 1,
      updateMe: {
        toggleMe: false,
        dontChangeMe: 1,
      },
    };
  }

  handleIncrease = () => {
    console.log("increase");
    /*this.setState({
      counter: this.state.counter + 1,
    });*/

    // 아래와 같이 state를 매개변수로 사용하지 않으면 setState를 연달아 작성하여 사용할 시
    // 값은 +1만 된다.
    // 그 이유는 react는 상태를 바로 업데이트 하지 않고 
    // virtual DOM과 real DOM을 비교하여 업데이트 하기 때문이다.
    // 따라서 아래와 같이 매개변수를 받아서 사용하는 것이 좋다.
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  };

  handleDecrease = () => {
    console.log("decrease");
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  handledToggle = () => {
    this.setState({
      updateMe: {
        ...this.state.updateMe,
        toggleMe: !this.state.updateMe.toggleMe,
      },
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <p>고정된 값: {this.state.fixed}</p>
      </div>
    );
  }
}

/*
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
*/

export default Counter;
