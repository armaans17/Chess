import React, { createContext, useState } from "react";

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [mainBoard, setMainBoard] = useState([]);
  const [showBoard, setShowBoard] = useState(false);
  const [isWhite, setIsWhite] = useState(false);

  const handleStartButton = () => {
    setMainBoard(
      [...Array(8)].map((e, i) => {
        if (i === 0 || i === 7) {
          return [0, 1, 2, 3, 4, 2, 1, 0];
        } else if (i === 1 || i === 6) {
          return Array(8).fill(5);
        } else {
          return Array(8).fill(6);
        }
      })
    );
    setShowBoard(true);
  };

  const handleReset = () => {
    setMainBoard([]);
    setShowBoard(false);
    setIsWhite(false);
  };

  const handleColorChange = () => {
    setIsWhite(true);
  };

  return (
    <MainContext.Provider
      value={{
        mainBoard,
        handleStartButton,
        showBoard,
        handleReset,
        isWhite,
        handleColorChange,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
