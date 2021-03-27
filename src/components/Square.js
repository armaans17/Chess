import React from "react";
import { getCurrentPiece } from "../helper/peices";
import "./Square.css";

const Square = ({ parity, code }) => {
  return (
    <div className={`square ${parity % 2 === 0 ? "white" : "black"}`}>
      {getCurrentPiece(code)}
    </div>
  );
};

export default Square;
