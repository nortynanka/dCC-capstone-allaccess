import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import FeedbackPage from "./pages/FeedbackPage";
import NewLocationPage from "./pages/NewLocationPage";

import NavBar from "./components/Structure/NavBar";
import Footer from "./components/Structure/Footer";

import PrivateRoute from "./utils/PrivateRoute";

import "./App.css";

function App() {
  return (
    <body>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/newlocation" element={<NewLocationPage />} />
      </Routes>
      <Footer />
    </body>
  );
};

export default App;
