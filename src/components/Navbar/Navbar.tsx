import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex-initial  p-5 border-solid bg-black text-yellow-300">
        <h1>Star Wars API</h1>
        <div className="flex flex-row-reverse  space-x-reverse">
          <Link to="/" className="mx-10">
            Home
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
