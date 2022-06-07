import React, {useContext} from "react";

const UserInfoDisplay = ({ user }) => {
  return (
    <div id="userInfo">
      <h2>Name: {user.name}</h2>
      <h2>Lives in : {user.location}</h2>
      <h2>Is Admin: {user.isAdmin ? "Yes" : "No"}</h2>
    </div>
  );
};

export default UserInfoDisplay;
