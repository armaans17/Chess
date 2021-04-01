import { GiChessRook, GiChessQueen } from "react-icons/gi";
import {
  FaChessKing,
  FaChessKnight,
  FaChessBishop,
  FaChessPawn,
} from "react-icons/fa";
import "../components/Square.css";

export const setCurrentPiece = ({ name, color }) => {
  let pieceColor = color === "white" ? "piece-light" : "piece-dark";

  switch (name) {
    case "rook":
      return <GiChessRook className={pieceColor} />;
    case "knight":
      return <FaChessKnight className={pieceColor} />;
    case "bishop":
      return <FaChessBishop className={pieceColor} />;
    case "queen":
      return <GiChessQueen className={pieceColor} />;
    case "king":
      return <FaChessKing className={pieceColor} />;
    case "pawn":
      return <FaChessPawn className={pieceColor} />;
    default:
      return;
  }
};
