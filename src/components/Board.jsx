import React, { useContext } from "react";
import { MainContext } from "../context/main";
import { setCurrentPiece } from "../pieceLogic/peices";
import "./Board.css";
import Row from "./Row";

const Board = () => {
  const {
    mainBoard,
    handleStartButton,
    showBoard,
    handleReset,
    capturedBlackPieces,
    capturedWhitePieces,
  } = useContext(MainContext);
  console.log(mainBoard, capturedBlackPieces);

  return (
    <div className="board-container">
      {showBoard && (
        <div className="piece-container align-bottom">
          {capturedBlackPieces.map((capturedPiece, i) => (
            <div key={i}>{setCurrentPiece(capturedPiece)}</div>
          ))}
        </div>
      )}
      <div className="board">
        {showBoard ? (
          <div>
            {mainBoard.map((row, i) => (
              <Row key={i} row={row} rowNum={i} />
            ))}
            {/* {showBoard && (
              <button className="btn" onClick={() => handleReset()}>
                Reset
              </button>
            )} */}
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
        <div className="piece-container">
          {capturedWhitePieces.map((capturedPiece, i) => (
            <div key={i} className="captured-piece">
              {setCurrentPiece(capturedPiece)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Board;
