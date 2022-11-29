import React from "react";
import "./Landing.style.css";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/characters");
  };

  return (
    <div className="all">
      <h2 className="text-center text-6xl p-5 text-white">
        Star Wars Web - By David Cicconi
      </h2>
      <div className="text-center mt-32">
        <button
          onClick={handleClick}
          className="bg-amber-200 hover:bg-amber-400  text-slate-800 font-bold py-4 px-6 border border-blue-700 rounded-md "
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Landing;
