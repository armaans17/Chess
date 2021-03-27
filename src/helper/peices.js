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

let isWhite = false;

export const getCurrentPiece = (code) => {
  let piece = pieces[code];

  let color = isWhite ? "piece-light" : "piece-dark";

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
      return (isWhite = true);
  }
};
