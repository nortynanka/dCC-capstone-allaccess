import React from "react";

const UserInfoDisplay = () => {



  return (
    <div id="userInfo">
      <h2>Name: {user.name}</h2>
      <h2>Lives in : {user.location}</h2>
    </div>
  );
};

export default UserInfoDisplay;
