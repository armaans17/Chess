const handleValidation = (
  piece,
  currentPieceLocation,
  dropLocationPiece,
  dropLocation
) => {
  switch (piece.name) {
    case "pawn":
      return handlePawnMove();
    default:
      return false;
  }

  // Situations to take care when handling pawn move
  // Check White or Black
  // Check Drop Location
  // If unvalid return false else continue with validation
  function handlePawnMove() {
    return piece.color === "white" ? handleWhitePawn() : handleBlackPawn();

    function handleWhitePawn() {
      if (
        currentPieceLocation[0] - dropLocation[0] === 2 &&
        currentPieceLocation[1] === dropLocation[1] &&
        !piece.firstMove
      ) {
        console.log(piece.firstMove);
        piece.firstMove = true;
        return true;
      }
    }

    function handleBlackPawn() {
      console.log("black Pawn");
    }
  }
};

export default handleValidation;
