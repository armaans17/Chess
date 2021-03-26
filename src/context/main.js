import React, { createContext, useState } from "react";

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [mainBoard, setMainBoard] = useState([]);
  const [resetBoard, setResetBoard] = useState(false);

  const handleStartButton = () => {
    if (!resetBoard) {
      setMainBoard([...Array(8)].map((e) => Array(8).fill(0)));
    } else {
      setMainBoard([]);
    }
    setResetBoard(!resetBoard);
  };

  return (
    <MainContext.Provider value={{ mainBoard, handleStartButton, resetBoard }}>
      {children}
    </MainContext.Provider>
  );
};
