import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Characters from "../components/Characters/Characters";
import Details from "../components/Details/Details";
import LandingPage from "../components/LandingPage/LandingPage";
import Navbar from "../components/Navbar/Navbar";

const RoutesApp = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/characters" element={<Characters />} />
        <Route path={"/characters/:name/details"} element={<Details />} />
      </Routes>
    </Router>
  );
};

export default RoutesApp;
