import React, { useContext, useState } from 'react';
import AuthContext from "../../context/AuthContext";

const UserCard = () => {

    const user = useContext(AuthContext);
    const decodedUser = localStorage.getItem("token");

    return (
        
        <div id="userCard">
                <p className="text">Name: </p>
                <p className="text">{user.name}</p>
                <p className="text">Lives in: </p>
                <p className="text">{user.location}</p>
        </div>

     );
}
 
export default UserCard;