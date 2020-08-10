import React from 'react';
import Hello from './Hello'; //Hello 컴포넌트를 불러온다.
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
      <Hello name="react" color="red" isSpecial={true} /> 
      {/*isSpecial(모든 옵션 동일)에 아무런 값을 안 넣어주면 true가 default이다.*/}
       {/*true 또한 js 코드이기 때문에 중괄호로 감싸주어야한다. */}
      <Hello color="pink"></Hello>
    </Wrapper>
  );
}

export default App;
