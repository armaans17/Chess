import React from "react";
import Square from "./Square";
import "./Row.css";

const Row = ({ row, rowNum }) => {
  //   console.log(row);

  return (
    <div className="row">
      {row.map((square, i) => (
        <Square key={i} parity={i} rowNum={rowNum} />
      ))}
    </div>
  );
};

export default Row;
