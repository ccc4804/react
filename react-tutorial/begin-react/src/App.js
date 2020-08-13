import React, { useRef, useState } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "hee",
      email: "test1@test.com",
      active: true
    },
    {
      id: 2,
      username: "yoon",
      email: "test2@test.com",
      active: false
    },
    {
      id: 3,
      username: "hw",
      email: "test3@test.com",
      active: false
    },
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };

    //배열이 불변이 되어야 하므로 배열 추가 시 새로운 배열이 만들어지는 spread, concat등을 사용해야한다.
    //setUsers([...users, user])
    setUsers(users.concat(user));

    setInputs({
      username: "",
      email: "",
    });

    console.log(nextId.current);
    nextId.current += 1;
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  const onToggle = id => {
    setUsers(users.map(
      user => user.id === id ? {...user, active: !user.active} : user
    ))
  }

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
    </>
  );
}

export default App;
