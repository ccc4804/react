import React, { useRef, useReducer, useMemo, useCallback } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import useInputs from './useInputs'

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는 중...");
  return users.filter((user) => user.active).length;
}

// App 컴포넌트의 설정 값을 외부로 뺀다.
const initialState = {
  users: [
    {
      id: 1,
      username: "hee",
      email: "test1@test.com",
      active: true,
    },
    {
      id: 2,
      username: "yoon",
      email: "test2@test.com",
      active: false,
    },
    {
      id: 3,
      username: "hw",
      email: "test3@test.com",
      active: false,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_USER":
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      throw new Error("Unhandled action");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [form, onChange, reset] = useInputs({
    username: '',
    email:''
  })

  const {username, email} = form;

  // 기존에 3개의 유저가 등록 되어있으므로 다음 id 값인 4가 기본값이다.
  const nextId = useRef(initialState.users.length + 1);
  // const nextId = useRef(4);

  const { users } = state;

  const onCreate = useCallback(
    (e) => {
      dispatch({
        type: "CREATE_USER",
        user: {
          id: nextId.current,
          username,
          email,
        },
      });
      nextId.current += 1;
      reset()
    },
    [username, email, reset]
  );

  const onToggle = useCallback((id) => {
    dispatch({
      type: "TOGGLE_USER",
      id,
    });
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({
      type: "REMOVE_USER",
      id,
    });
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  // 아래는 JSX
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}

export default App;
