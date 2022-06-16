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

  const registerUser = async (userData) => {
    try {
      let response = await axios.post(`${BASE_URL_USERS}/register`, userData);
      if (response.status === 200) {
        let token = response.headers["x-auth-token"];
        localStorage.setItem("token", token);
        setUser(jwtDecode(token));
        navigate("/login");
      } else {
        console.log("An error occurred. Please try again.");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const registerLocation = async (locationData) => {
    try {
      let response = await axios.post(
        `${BASE_URL_LOCATIONS}/createNew`,
        locationData
      );
      if (response.status === 200) {
        console.log("Successfully registered data.");
        navigate("/");
      } else {
        console.log("An error occurred. Please try again.");
        navigate("/newlocation");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addPost = async (postData) => {
    try {
      let response = await axios.post(
        `${BASE_URL_LOCATIONS}/:locationID/createNew`,    // Function to grab place_id or MongoDB ID or other unique identifier from the specified location?
        postData
      );
      if (response.status === 200) {
        console.log("Successfully registered data.");
        navigate("/");
      } else {
        console.log("An error occurred. Please try again.");
        navigate("/");
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
        navigate("/home");
      } else {
        console.log("An error occurred. Please try again.");
        navigate("/");
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
    addPost,
    isServerError,
    setUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
