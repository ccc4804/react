import React from 'react';
import Hello from './hello'; //Hello 컴포넌트를 불러온다.
import './App.css' //css 불러온다. 확장자명을 적지 않으면 js가 디폴트이다.

function App() {
  const name = 'react'
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  };

  // 아래는 JSX 
  return (
    <>
      {/*주석입니다.*/}
      <Hello /*셀프 클로징에서는 이렇게 주석이 가능하다.*/ />
      <Hello />
      <Hello />
      <div style={style}>{name}</div>
      <div className = "gray-box"></div>
      <input />
      <br />
    </>
  );
}

export default App;
