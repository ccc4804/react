import React, { useRef, useState, useMemo, useCallback } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는 중...");
  return users.filter((user) => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }, [inputs]);

  const [users, setUsers] = useState([
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
  ]);

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };

    //배열이 불변이 되어야 하므로 배열 추가 시 새로운 배열이 만들어지는 spread, concat등을 사용해야한다.
    //setUsers([...users, user])
    setUsers(users => users.concat(user));

    setInputs({
      username: "",
      email: "",
    });

    console.log(nextId.current);
    nextId.current += 1;
  },[username, email]);

  const onRemove = useCallback((id) => {
    setUsers(users => users.filter((user) => user.id !== id));
  },[]);

  const onToggle = useCallback((id) => {
    setUsers(users =>
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  },[]);

  // useMemo를 사용하면 특정 deps만 인식하여 처리한다.
  const count = useMemo(() => countActiveUsers(users),[users]);

  // 아래는 JSX
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}

export default App;
