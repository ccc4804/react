import React from 'react';
import Hello from './hello'; //Hello 컴포넌트를 불러온다.
import './App.css' //css 불러온다. 확장자명을 적지 않으면 js가 디폴트이다.
import Wrapper from './Wrapper'

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
    <Wrapper>
      <Hello name="react" color="red" /> {/*속성을 넣어 준 것이 props이다.*/}
      <Hello color="pink"></Hello>
    </Wrapper>
  );
}

export default App;
