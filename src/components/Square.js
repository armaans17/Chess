import React, { useContext, useState } from "react";
import { MainContext } from "../context/main";

import { setCurrentPiece } from "../helper/peices";
import "./Square.css";

const Square = ({ parity, code, coordinates }) => {
  const { handleMove, pieceSelected, handleChangePositon } = useContext(
    MainContext
  );

  const handleSquare = () => {
    console.log(pieceSelected);
    if (pieceSelected) {
      return handleChangePositon(code, coordinates);
    }
    return handleMove(code, coordinates);
  };

  return (
    <div
      className={`square ${parity % 2 === 0 ? "white" : "black"}`}
      onClick={() => handleSquare()}
      draggable="true"
    >
      {setCurrentPiece(code)}
    </div>
  );
};

export default Square;
