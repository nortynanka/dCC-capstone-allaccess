import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const NavBar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/feedback">Feedback</Link>
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
