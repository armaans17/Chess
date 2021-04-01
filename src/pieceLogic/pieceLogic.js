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
    piece.color === "white" ? handleWhitePawn() : handleBlackPawn();

    function handleWhitePawn() {
      console.log(
        "white Pawn",
        piece,
        "from",
        currentPieceLocation,
        "to",
        dropLocation
      );
    }

    function handleBlackPawn() {
      console.log("black Pawn");
    }

    return true;
  }
};

export default handleValidation;
