import React from "react";

function User({ user, onRemove, onToggle }) {
  //props로 받아온다.

  const { username, email, id, active } = user;

  return (
    <div>
      <b
        style={{
          color: active ? "green" : "black",
          cursor: "pointer", //curson가 pointer이면 마우스를 올렸을 때 손가락 모양이 된다.
        }}
        onClick={() => onToggle(id)}
      >
        {username}
      </b>{" "}
      <span>({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
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
          onRemove={onRemove}
          onToggle={onToggle}
        />
        //key가 있으면 key를 설정해준다.
        //key가 없으면 key={index}로 설정해주는데 이는 매우 비효율적인 구조이다.
        //index는 배열의 순서만 의미하므로 배열의 구조상 삽입, 변경, 삭제 시 비효율적이기 때문이다.
      ))}
    </div>
  );
}

export default UserList;
