import React, { useReducer, useMemo, createContext } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import produce from 'immer';

// 크롬의 콘솔창에서 immer (produce)를 사용할 수 있게 설정함
window.produce =  produce

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

// 외부의 컴포넌트에서 사용 가능하게 context를 export 해준다.
export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { users } = state;

  const count = useMemo(() => countActiveUsers(users), [users]);

  // 아래는 JSX
  return (
    // UserDispatch Context의 value에 dispatch를 지정해준다.
    <UserDispatch.Provider value = {dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성 사용자 수 : {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
