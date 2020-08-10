import React from "react";

// 컴포넌트 이름은 대문자로 시작된다. 카멜 표기법이다.
/*function Hello(props){
    return <div style={{
        color: props.color
    }}>안녕하세요 {props.name}</div>
}*/

// 비구조화 할당 사용
function Hello({ color, name, isSpecial }) {
  return (
    <div
      style={{
        color: color,
      }}
    >
      {isSpecial && <b>*</b>} {/*옆의 코드와 동일하다. {isSpecial ? <b>*</b> : null}*/}
      안녕하세요 {name}
    </div>
  );
}

// 특정 값을 빠트렸을 때 default 값을 지정해준다.
Hello.defaultProps = {
  name: "이름없음",
};

export default Hello;
