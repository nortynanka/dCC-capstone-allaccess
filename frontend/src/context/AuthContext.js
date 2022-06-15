import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const BASE_URL_USERS = "http://localhost:3013/api/users";
  const BASE_URL_LOCATIONS = "http://localhost:3013/api/locations";
  const decodedUser = localStorage.getItem("token");
  const decodedToken = decodedUser ? jwtDecode(decodedUser) : null;
  const [user, setUser] = useState(() => decodedToken);
  const [isServerError, setIsServerError] = useState(false);
  const navigate = useNavigate();

  const registerUser = async (registerData) => {
    try {
      let response = await axios.post(
        `${BASE_URL_USERS}/register`,
        registerData
      );
      if (response.status === 200) {
        let token = response.headers["x-auth-token"];
        localStorage.setItem("token", token);
        setUser(jwtDecode(token));
        navigate("/login");
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const registerLocation = async (registerData) => {
    try {
      let response = await axios.post(
        `${BASE_URL_LOCATIONS}/createNew`,
        registerData
      );
      if (response.status === 200) {
        console.log("Successfully registered data.");
        navigate("/");
      } else {
        navigate("/locations/createNew");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async (loginData) => {
    try {
      let response = await axios.post(`${BASE_URL_USERS}/login`, loginData);
      console.log(response);
      if (response.status === 200) {
        localStorage.setItem("token", response.data);
        setUser(jwtDecode(response.data));
        setIsServerError(false);
        navigate("/");
      } else {
        navigate("/register");
      }
    } catch (error) {
      console.log(error.message);
      setIsServerError(true);
    }
  };

  const logoutUser = () => {
    if (user) {
      localStorage.removeItem("token");
      setUser(null);
      navigate("/");
    }
  };

  const contextData = {
    user,
    loginUser,
    logoutUser,
    registerUser,
    registerLocation,
    isServerError,
    setUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
