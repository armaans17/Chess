import { GiChessRook, GiChessQueen } from "react-icons/gi";
import {
  FaChessKing,
  FaChessKnight,
  FaChessBishop,
  FaChessPawn,
} from "react-icons/fa";
import "../components/Square.css";

export const pieces = [
  "rook",
  "knight",
  "bishop",
  "queen",
  "king",
  "pawn",
  "space",
];

export const setCurrentPiece = (code) => {
  let piece = pieces[parseInt(code[0])];

  let color = code[1] === "W" ? "piece-light" : "piece-dark";

  switch (piece) {
    case "rook":
      return <GiChessRook className={color} />;
    case "knight":
      return <FaChessKnight className={color} />;
    case "bishop":
      return <FaChessBishop className={color} />;
    case "queen":
      return <GiChessQueen className={color} />;
    case "king":
      return <FaChessKing className={color} />;
    case "pawn":
      return <FaChessPawn className={color} />;
    default:
      return;
  }
};
