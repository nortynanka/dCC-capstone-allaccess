import React from 'react';

const UserCard = ({user}) => {

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