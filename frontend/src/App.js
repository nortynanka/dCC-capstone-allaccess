import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import FeedbackPage from "./pages/FeedbackPage";

import NavBar from "./components/Structure/NavBar";
import Footer from "./components/Structure/Footer";

import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
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
        <Route path="/home" element={<HomePage /> } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
