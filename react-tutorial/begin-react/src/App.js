import React, { useRef } from "react";
import UserList from "./UserList";

function App() {
  const users = [
    {
      id: 1,
      username: "hee",
      email: "test1@test.com",
    },
    {
      id: 2,
      username: "yoon",
      email: "test2@test.com",
    },
    {
      id: 3,
      username: "hw",
      email: "test3@test.com",
    },
  ];

  const nextId = useRef(4);

  const onCreate = () => {
    console.log(nextId.current);
    nextId.current += 1;
  }

  // 아래는 JSX
  return <UserList users={users} />;
}

export default App;
