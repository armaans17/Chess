import React, { useContext } from "react";
import { MainContext } from "../context/main";
import "./Board.css";
import Row from "./Row";

const Board = () => {
  const { mainBoard, handleStartButton, resetBoard } = useContext(MainContext);

  return (
    <div>
      <div className="board">
        {mainBoard.map((row, i) => (
          <Row key={i} row={row} rowNum={i} />
        ))}
      </div>

      <button onClick={() => handleStartButton()}>
        {resetBoard ? "Reset" : "Start"}
      </button>
    </div>
  );
};

export default Board;
