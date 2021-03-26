import React, { createContext, useState } from "react";

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [mainBoard, setMainBoard] = useState([]);
  const [showBoard, setShowBoard] = useState(false);

  const handleStartButton = () => {
    setMainBoard([...Array(8)].map((e) => Array(8).fill(0)));
    setShowBoard(true);
  };

  const handleReset = () => {
    setMainBoard([]);
    setShowBoard(false);
  };

  return (
    <MainContext.Provider
      value={{ mainBoard, handleStartButton, showBoard, handleReset }}
    >
      {children}
    </MainContext.Provider>
  );
};
