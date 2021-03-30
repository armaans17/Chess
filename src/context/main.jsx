import React, { createContext, useState } from "react";
import handleValidation from "../pieceLogic/pieceLogic";

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
            return [
              "rookB",
              "knightB",
              "bishopB",
              "queenB",
              "kingB",
              "bishopB",
              "knightB",
              "rookB",
            ];
          case 1:
            return Array(8).fill("pawnB");
          case 7:
            return [
              "rookW",
              "knightW",
              "bishopW",
              "queenW",
              "kingW",
              "bishopW",
              "knightW",
              "rookW",
            ];
          case 6:
            return Array(8).fill("pawnW");
          default:
            return Array(8).fill("");
        }
      })
    );
    setShowBoard(true);
  };

  const [pieceSelected, setPieceSelected] = useState(false);
  const [currentPiece, setCurrentPiece] = useState("");
  const [currentPieceLocation, setCurrentPieceLocation] = useState([]);

  const handleMove = (code, coordinates) => {
    if (code === "") return;
    setPieceSelected(true);
    setCurrentPiece(code);
    setCurrentPieceLocation(coordinates);
  };

  const handleChangePositon = (code, coordinates) => {
    if (code[code.length - 1] === currentPiece[currentPiece.length - 1]) {
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
            if (handleValidation(currentPiece, code, coordinates)) {
              row[y] = currentPiece;
              let [a, b] = currentPieceLocation;
              mainBoard[a][b] = "";
              return;
            } else {
              return row[y];
            }
          }
        });
      }
      return true;
    });

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
