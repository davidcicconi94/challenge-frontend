import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Characters from "../components/Characters/Characters";
import LandingPage from "../components/LandingPage/LandingPage";

const RoutesApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </Router>
  );
};

export default RoutesApp;
