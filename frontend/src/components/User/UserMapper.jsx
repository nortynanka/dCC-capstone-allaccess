import React from "react";

const UserMapper = ({users}) => {
  return (
    <ul>
      {users.map((user) => <li key={user._id}><UserInfo user={user}/></li>)}
    </ul>
  );
};

export default UserMapper;