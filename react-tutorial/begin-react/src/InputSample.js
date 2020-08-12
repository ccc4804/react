import React, { useState, useRef } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });

  // useState가 여러 개 일 때는 객체를 만들어서 상태 값을 받아온다.
  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;

    /*
        const nextInputs = {
            ...inputs,
            [name]: value //[] 대괄호는 객체마다 key를 의미한다.
        }

        setInputs(nextInputs)
        */

    // 위와 동일한 클린 코드이다.
    // 불변성을 지키기 위해서 객체를 복사해와서 특정 값을 변경해야한다.
    // 이렇게 해야 컴포넌트 최적화가 된다.
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const nameInput = useRef();

  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
    nameInput.current.focus(); // focus nameinput에 적용함
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput} /*DOM에 직접 접근함 */
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
