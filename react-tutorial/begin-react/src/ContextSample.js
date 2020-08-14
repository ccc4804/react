import React, { createContext, useContext, useState } from "react";

// Context는 일종의 전역변수이다. 모두가 사용가능하다.
// createContext : Context를 생성한다.
const MyContext = createContext("defaultValue");

function Child() {
  //useContext : 해당 Context의 value를 불러온다.
  const text = useContext(MyContext);
  return <div>안녕하세요? {text}</div>
}

function Parent({ text }) {
  return <Child text={text} />
}

function GrandParent({ text }) {
  return <Parent text={text} />
}

function ContextSample({ text }) {
    const [value, setValue] = useState(true)
   
  return (
    // Context.Provider : Context 제공자인데 value 값을 입력하면 해당 Context의 value가 변경된다.
    <MyContext.Provider value={value ? 'GOOD' : 'BAD'}>
      <GrandParent text="GOOD2" />
      <button onClick={()=>
      setValue(!value)
    }>Click Me!</button>
    </MyContext.Provider>
  );
}

export default ContextSample;
