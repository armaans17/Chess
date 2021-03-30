const handleValidation = (currentPiece, dropSquare, dropLocation) => {
  let piece = currentPiece.slice(0, currentPiece.length - 1);

  switch (piece) {
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
    currentPiece[currentPiece.length - 1] === "W"
      ? handleWhitePawn()
      : handleBlackPawn();

    function handleWhitePawn() {
      console.log("white Pawn");
    }

    function handleBlackPawn() {
      console.log("black Pawn");
    }

    return true;
  }
};

export default handleValidation;
