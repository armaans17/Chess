import { GiChessRook, GiChessQueen } from "react-icons/gi";
import {
  FaChessKing,
  FaChessKnight,
  FaChessBishop,
  FaChessPawn,
} from "react-icons/fa";

export const pieces = ["rook", "knight", "bishop", "queen", "king", "pawn"];

export const getCurrentPiece = (code) => {
  let piece = pieces[code];
  switch (piece) {
    case "rook":
      return <GiChessRook />;
    case "knight":
      return <FaChessKnight />;
    case "bishop":
      return <FaChessBishop />;
    case "queen":
      return <GiChessQueen />;
    case "king":
      return <FaChessKing />;
    case "pawn":
      return <FaChessPawn />;
    default:
      return;
  }
};
