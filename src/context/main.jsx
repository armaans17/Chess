import React, { createContext, useState } from "react";
import handleValidation from "../pieceLogic/pieceLogic";

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [mainBoard, setMainBoard] = useState([]);
  const [showBoard, setShowBoard] = useState(false);
  const [totalMoves, setTotalMoves] = useState(1);

  const [player, setPlayer] = useState(true);
  const WB = player ? "white" : "black";
  const [firstMoveDone, setFirstMoveDone] = useState(false);

  const handleStartButton = () => {
    setMainBoard(
      [...Array(8)].map((e, i) => {
        switch (i) {
          case 0:
            return [
              { name: "rook", color: "black" },
              { name: "knight", color: "black" },
              { name: "bishop", color: "black" },
              { name: "queen", color: "black" },
              { name: "king", color: "black" },
              { name: "bishop", color: "black" },
              { name: "knight", color: "black" },
              { name: "rook", color: "black" },
            ];
          case 1:
            return Array(8)
              .fill({})
              .map((pawn, i) => {
                return {
                  id: i,
                  name: "pawn",
                  color: "black",
                  firstMove: false,
                };
              });
          case 7:
            return [
              { name: "rook", color: "white" },
              { name: "knight", color: "white" },
              { name: "bishop", color: "white" },
              { name: "queen", color: "white" },
              { name: "king", color: "white" },
              { name: "bishop", color: "white" },
              { name: "knight", color: "white" },
              { name: "rook", color: "white" },
            ];
          case 6:
            return Array(8)
              .fill({})
              .map((pawn, i) => {
                return {
                  id: i,
                  name: "pawn",
                  color: "white",
                  firstMove: false,
                };
              });
          default:
            return Array(8).fill("");
        }
      })
    );
    setShowBoard(true);
  };

  const [pieceSelected, setPieceSelected] = useState(false);
  const [currentPiece, setCurrentPiece] = useState({});
  const [currentPieceLocation, setCurrentPieceLocation] = useState([]);

  const [capturedWhitePieces, setCapturedWhitePieces] = useState([]);
  const [capturedBlackPieces, setCapturedBlackPieces] = useState([]);

  const handleMove = (piece, coordinates) => {
    if (piece === "") return;

    if (piece.color !== WB) {
      alert(`${WB}'s move!`);
      return;
    }

    if (!firstMoveDone && piece.color !== "white") return;

    setPieceSelected(true);
    setCurrentPiece(piece);
    setCurrentPieceLocation(coordinates);
    console.log(firstMoveDone, WB);
    setFirstMoveDone(true);
  };

  const handleCapturedPiece = (capturedPiece) => {
    capturedPiece.color === "white"
      ? setCapturedWhitePieces([...capturedWhitePieces, capturedPiece])
      : setCapturedBlackPieces([...capturedBlackPieces, capturedPiece]);
  };

  const handleChangePositon = (dropLocationPiece, dropLocation) => {
    if (dropLocationPiece.color === currentPiece.color) {
      setCurrentPiece(dropLocationPiece);
      setCurrentPieceLocation(dropLocation);
      return;
    }

    mainBoard.map((row, i) => {
      if (i !== dropLocation[0]) {
        return mainBoard[i];
      } else {
        row.map((square, y) => {
          if (y !== dropLocation[1]) {
            return row[y];
          } else {
            if (
              handleValidation(
                currentPiece,
                currentPieceLocation,
                dropLocationPiece,
                dropLocation
              )
            ) {
              if (dropLocationPiece !== "") {
                handleCapturedPiece(dropLocationPiece);
              }
              row[y] = currentPiece;
              let [a, b] = currentPieceLocation;
              mainBoard[a][b] = "";
              setPlayer(!player);
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
    setShowBoard(false);
    setMainBoard([]);
    setCapturedWhitePieces([]);
    setCapturedBlackPieces([]);
    setFirstMoveDone(false);
    setTotalMoves(1);
    setPieceSelected(false);
    setPlayer(true);
  };

  return (
    <MainContext.Provider
      value={{
        mainBoard,
        handleStartButton,
        showBoard,
        handleReset,
        player,
        handleMove,
        pieceSelected,
        handleChangePositon,
        capturedBlackPieces,
        capturedWhitePieces,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
