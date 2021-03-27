import React, { useContext } from "react";
import { MainContext } from "../context/main";
import "./Board.css";
import Row from "./Row";

const Board = () => {
  const { mainBoard, handleStartButton, showBoard, handleReset } = useContext(
    MainContext
  );

  return (
    <div className="board-container">
      <div className="board">
        {showBoard ? (
          <div>
            {mainBoard.map((row, i) => (
              <Row key={i} row={row} rowNum={i} />
            ))}
          </div>
        ) : (
          <div className="start">
            <h1>Welcome!</h1>
            <h3>Lets Play.</h3>
            <button className="btn" onClick={() => handleStartButton()}>
              Start
            </button>
          </div>
        )}
      </div>
      {showBoard && (
        <button className="btn" onClick={() => handleReset()}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Board;
