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
    console.log(currentPieceLocation, dropLocation);
    return piece.color === "white" ? handleWhitePawn() : handleBlackPawn();

    function handleWhitePawn() {
      // Double Move
      if (
        currentPieceLocation[0] - dropLocation[0] === 2 &&
        currentPieceLocation[1] === dropLocation[1] &&
        !piece.firstMove &&
        dropLocationPiece === ""
      ) {
        piece.firstMove = true;
        return true;
      }
      // Single Move
      else if (currentPieceLocation[0] - dropLocation[0] === 1) {
        if (dropLocation[1] === currentPieceLocation[1]) {
          piece.firstMove = true;
          return true;
        }
        if (
          dropLocation[1] === currentPieceLocation[1] + 1 ||
          dropLocation[1] === currentPieceLocation[1] - 1
        ) {
          if (dropLocationPiece === "") {
            alert("invalid move");
            return false;
          } else {
            return true;
          }
        }
      }
    }

    function handleBlackPawn() {
      return true;
    }
  }
};

export default handleValidation;
