import React, { useContext } from "react";
import { MainContext } from "../context/main";

import { setCurrentPiece } from "../pieceLogic/peices";
import "./Square.css";

const Square = ({ parity, code, coordinates }) => {
  const { handleMove, pieceSelected, handleChangePositon } = useContext(
    MainContext
  );

  const isWhite = parity % 2 === 0 ? "white" : "black";
  const givePointer = code !== "" ? "pointer" : "";

  const handleSquare = () => {
    if (pieceSelected) {
      return handleChangePositon(code, coordinates);
    }
    return handleMove(code, coordinates);
  };

  return (
    <div
      className={`square ${isWhite} ${givePointer} `}
      onClick={() => handleSquare()}
      draggable="true"
    >
      {setCurrentPiece(code)}
    </div>
  );
};

export default Square;
