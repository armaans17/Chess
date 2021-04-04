import React, { useContext, useState } from "react";
import { MainContext } from "../context/main";

import { setCurrentPiece } from "../pieceLogic/peices";
import "./Square.css";

const Square = ({ parity, piece, coordinates }) => {
  const { handleMove, pieceSelected, handleChangePositon } = useContext(
    MainContext
  );

  const isWhite = parity % 2 === 0 ? "white" : "black";
  const givePointer = piece.name !== "" ? "pointer" : "";

  const [active, setActive] = useState(false);
  let activeClass = active ? "beige" : "";

  const handleSquare = () => {
    if (pieceSelected) {
      return handleChangePositon(piece, coordinates);
    } else {
      setActive(true);
      return handleMove(piece, coordinates);
    }
  };

  return (
    <div
      className={`square ${isWhite} ${givePointer}`}
      // style={{ background: `${activeClass}` }}
      onClick={() => handleSquare()}
      draggable="true"
    >
      {setCurrentPiece(piece)}
    </div>
  );
};

export default Square;
