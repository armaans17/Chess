import React, { createContext, useState } from "react";

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [mainBoard, setMainBoard] = useState([]);
  const [showBoard, setShowBoard] = useState(false);

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

  // Game Logic

  const [pieceSelected, setPieceSelected] = useState(false);
  let currentPiece;
  let currentPieceLocation;

  const handleMove = (code, coordinates) => {
    setPieceSelected(true);
    currentPiece = code;
    currentPieceLocation = coordinates;
  };

  const handleChangePositon = (code, coordinates) => {
    console.log(currentPiece, currentPieceLocation, code, coordinates);

    setPieceSelected(true);
  };

  // Reset Board
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
