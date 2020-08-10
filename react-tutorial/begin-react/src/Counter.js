import React, { UseState, useState } from "react";

function Counter() {
  // number라는 상태를 만드는데 이 상태의 기본 값은 0으로 설정
  // setNumber는 기본 값으로 바꿔주는 함수
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    //setNumber(number + 1)
    setNumber((prevNumber) => prevNumber + 1); //함수형 업데이트로 작성한다. 최적화와 관련 있는데 뒤에 배운다.
    console.log("+1");
  };
  const onDecrease = () => {
    //setNumber(number - 1)
    setNumber((prevNumber) => prevNumber - 1);
    console.log("-1");
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
