import React, { useContext } from "react";
import { MainContext } from "../context/main";
import "./Board.css";
import Row from "./Row";

const Board = () => {
  const { mainBoard, handleStartButton, resetBoard } = useContext(MainContext);

  return (
    <div className="board-container">
      <div className="board">
        {resetBoard ? (
          <div>
            {mainBoard.map((row, i) => (
              <Row key={i} row={row} rowNum={i} />
            ))}
          </div>
        ) : (
          <div className="start">
            <h1>Welcome!</h1>
            <h3>Lets Play.</h3>
            <button onClick={() => handleStartButton()}>
              {resetBoard ? "Reset" : "Start"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Board;
