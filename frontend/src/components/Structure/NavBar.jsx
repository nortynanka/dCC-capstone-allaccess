import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

import "./NavBar.css";


const NavBar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="navBar">
      <ul>
        <li className="navBrand">
          <Link className="navBrand" to="/home"><i>all</i>Access</Link>
        </li>
        <li className="navLink">
          <Link to="/register">Register</Link>
        </li>
        <li className="navLink">
          <Link to="/feedback">Submit Feedback</Link>
        </li>
        <li className="navLink">
          <Link to="/newlocation">Add a Business</Link>
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
