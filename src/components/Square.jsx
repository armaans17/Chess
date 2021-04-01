import React, { useContext } from "react";
import { MainContext } from "../context/main";

import { setCurrentPiece } from "../pieceLogic/peices";
import "./Square.css";

const Square = ({ parity, piece, coordinates }) => {
  const { handleMove, pieceSelected, handleChangePositon } = useContext(
    MainContext
  );

  const isWhite = parity % 2 === 0 ? "white" : "black";
  const givePointer = piece.name !== "" ? "pointer" : "";

  const handleSquare = () => {
    if (pieceSelected) {
      return handleChangePositon(piece, coordinates);
    }
    return handleMove(piece, coordinates);
  };

  return (
    <div
      className={`square ${isWhite} ${givePointer} `}
      onClick={() => handleSquare()}
      draggable="true"
    >
      {setCurrentPiece(piece)}
    </div>
  );
};

export default Square;
