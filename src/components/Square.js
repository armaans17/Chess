import React from "react";
import "./Square.css";

const Square = ({ parity }) => {
  return (
    <div className={`square ${parity % 2 === 0 ? "white" : "black"}`}></div>
  );
};

export default Square;
