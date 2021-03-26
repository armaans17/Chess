import React, { useState } from "react";
import "./Square.css";

const Square = ({ parity, rowNum }) => {
  const checkRowNum = rowNum % 2 === 0 ? true : false;
  const oddEven = parity % 2 === 0 ? true : false;
  return (
    <div className={`square ${oddEven || checkRowNum ? "white" : "black"}`}>
      square
    </div>
  );
};

export default Square;
