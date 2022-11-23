import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name }: any) => {
  const finalName = name.replace(/ /g, "").toLowerCase();
  console.log(finalName);
  return (
    <Link to={{ pathname: `/details/${finalName}` }}>
      <h3>{name}</h3>
    </Link>
  );
};

export default Card;
