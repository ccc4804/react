import React, { useEffect, useContext } from "react";
//import useInputs from "./useInputs";
import { UserDispatch } from './App'

const User = React.memo(function User({ user }) {
  //props로 받아온다.
  const { username, email, id, active } = user;

  // App에서 지정한 UserDispatch를 불러와서 dispatch Context에 넣어준다.
  const dispatch = useContext(UserDispatch)

  /*
  useEffect(()=>{
      console.log(uesr)
  })*/
  /*
  useEffect(() => {
    console.log("컴포넌트가 화면에 나타남");
    // props -> state로 작업할 때 사용
    // REST API를 요청
    // D3 video.js
    // setInterval, setTimeout
    return () => {
      // clearInterval, clearTimeout
      // 라이브러리 인스턴스 제거
      console.log("컴포넌트가 화면에서 사라짐");
    };
  }, []);
  */

  useEffect(() => {
    console.log("user 값이 설정 됨");
    console.log(user);
    // return은 뒷정리 함수라고 보면 된다.
    return () => {
      console.log("user 값이 바뀌기 전");
      console.log(user);
    };
  }, [user]);
  //[user]로 deps를 설정해주면 user의 값이 바뀔 때 마다 호출된다.

  return (
    <div>
      <b
        style={{
          color: active ? "green" : "black",
          cursor: "pointer", //curson가 pointer이면 마우스를 올렸을 때 손가락 모양이 된다.
        }}
        // App 컴포넌트에서 불러온 dispatch context에 onClick을 정의해준다.
        onClick={() => dispatch({
          type: 'TOGGLE_USER',
          id
        })}
      >
        {username}
      </b>{" "}
      <span>({email})</span>
      {/* App 컴포넌트에서 불러온 dispatch context에 onClick을 정의해준다. */}
      <button onClick={() => dispatch({
        type: 'REMOVE_USER',
        id
      })}>삭제</button>
    </div>
  );
});

function UserList({ users }) {
  return (
    /*
    <div>
      <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} />
    </div>
    */
    // 배열의 길이가 고정적이지 않을 때는 아래와 같이 map을 이용하여 배열을 출력한다.
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
        />
        //key가 있으면 key를 설정해준다.
        //key가 없으면 key={index}로 설정해주는데 이는 매우 비효율적인 구조이다.
        //index는 배열의 순서만 의미하므로 배열의 구조상 삽입, 변경, 삭제 시 비효율적이기 때문이다.
      ))}
    </div>
  );
}

export default React.memo(
  UserList,
  (preProps, nextProps) => nextProps.users === preProps.user
);
