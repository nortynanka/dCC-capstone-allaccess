import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const NavBar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "green" }}>
            Login
          </Link>
        </li>
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "green" }}>
            Register
          </Link>
        </li>
        {/* <li>
                    <Link to="/friends" style={{ textDecoration: "none", color: "green" }}>
                        <b>Friends</b>
                    </Link>
                </li> */}
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
