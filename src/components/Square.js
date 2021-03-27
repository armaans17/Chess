import React, { useContext } from "react";
import { MainContext } from "../context/main";
import { getCurrentPiece } from "../helper/peices";
import "./Square.css";

const Square = ({ parity, code }) => {
  const { handleColorChange, isWhite } = useContext(MainContext);

  return (
    <div className={`square ${parity % 2 === 0 ? "white" : "black"}`}>
      {getCurrentPiece(code, handleColorChange, isWhite)}
    </div>
  );
};

export default Square;
