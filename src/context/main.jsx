import React, { createContext, useState } from "react";

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [mainBoard, setMainBoard] = useState([]);
  const [showBoard, setShowBoard] = useState(false);
  const [totalMoves, setTotalMoves] = useState(1);

  const handleStartButton = () => {
    setMainBoard(
      [...Array(8)].map((e, i) => {
        switch (i) {
          case 0:
            return ["0B", "1B", "2B", "3B", "4B", "2B", "1B", "0B"];
          case 1:
            return Array(8).fill("5B");
          case 7:
            return ["0W", "1W", "2W", "3W", "4W", "2W", "1W", "0W"];
          case 6:
            return Array(8).fill("5W");
          default:
            return Array(8).fill(6);
        }
      })
    );
    setShowBoard(true);
  };

  const [pieceSelected, setPieceSelected] = useState(false);
  const [currentPiece, setCurrentPiece] = useState("");
  const [currentPieceLocation, setCurrentPieceLocation] = useState([]);

  const handleMove = (code, coordinates) => {
    if (code === 6) return;
    setPieceSelected(true);
    setCurrentPiece(code);
    setCurrentPieceLocation(coordinates);
  };

  const handleChangePositon = (code, coordinates) => {
    if (code[1] === currentPiece[1]) {
      setCurrentPiece(code);
      setCurrentPieceLocation(coordinates);
      return;
    }

    console.log(
      "selected",
      currentPiece,
      currentPieceLocation,
      "drop",
      code,
      coordinates
    );

    mainBoard.map((row, i) => {
      if (i !== coordinates[0]) {
        return mainBoard[i];
      } else {
        row.map((square, y) => {
          if (y !== coordinates[1]) {
            return row[y];
          } else {
            return (row[y] = currentPiece);
          }
        });
      }
    });

    let [x, y] = currentPieceLocation;
    mainBoard[x][y] = 6;

    setPieceSelected(false);
    setTotalMoves(totalMoves + 1);
  };

  const handleReset = () => {
    setMainBoard([]);
    setShowBoard(false);
  };

  return (
    <MainContext.Provider
      value={{
        mainBoard,
        handleStartButton,
        showBoard,
        handleReset,
        handleMove,
        pieceSelected,
        handleChangePositon,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
