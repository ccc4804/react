import React, {useState} from 'react'

function InputSample(){
    const [text, setText] = useState('')
    // ''인 컴포넌트의 정보를 불러온다.

    const onChange = (e) => {
        setText(e.target.value)  
        // e.target은 이벤트가 일어난 target의 DOM 정보를 가지고 있다.
        // e.target.value는 해당 이벤트가 일어난 곳의 값을 의미한다.
    }

    const onReset = () => {
        setText('')
    }

    return (
        <div>
            <input onChange={onChange} value = {text}/>
            <button onClick={onReset} >초기화</button>
            <div>
                <b>값: </b>
                {text}
            </div>
        </div>
    )
}

export default InputSample