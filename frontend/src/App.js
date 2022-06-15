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

import "./pages/PageStructure.css";

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
        <Route className="routeLink" path="/home" element={<HomePage /> } />
        <Route className="routeLink" path="/login" element={<LoginPage />} />
        <Route className="routeLink" path="/register" element={<RegisterPage />} />
        <Route className="routeLink" path="/feedback" element={<FeedbackPage />} />
        <Route className="routeLink" path="/newlocation" element={<NewLocationPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
