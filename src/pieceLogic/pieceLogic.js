const canEnPassant = false;

const handleValidation = (
  piece,
  currentPieceLocation,
  dropLocationPiece,
  dropLocation
) => {
  switch (piece.name) {
    case "pawn":
      return handlePawnMove();
    case "bishop":
      return handleBishopMove();
    default:
      return false;
  }

  // Situations to take care when handling pawn move
  // Check White or Black
  // Check Drop Location
  // If unvalid return false else continue with validation
  function handlePawnMove() {
    let moveDistance =
      piece.color === "white"
        ? currentPieceLocation[0] - dropLocation[0]
        : dropLocation[0] - currentPieceLocation[0];

    return handlePawnValidation();

    function handlePawnValidation() {
      // Double Move
      if (
        moveDistance === 2 &&
        currentPieceLocation[1] === dropLocation[1] &&
        !piece.firstMove &&
        dropLocationPiece === ""
      ) {
        // en passant
        piece.firstMove = true;
        return true;
      }
      // Single Move
      else if (moveDistance === 1) {
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
      } else {
        alert("invalid move");
        return false;
      }
    }
  }

  function handleBishopMove() {
    console.log(piece, currentPieceLocation, dropLocationPiece, dropLocation);
    let rowDistance = currentPieceLocation[0] - dropLocation[0];
    let colDistance = currentPieceLocation[1] - dropLocation[1];

    if (Math.abs(rowDistance) !== Math.abs(colDistance)) {
      alert("Invalid Move");
      return false;
    }

    let rowDifference = 0;
    let colDifference = 0;

    console.log(rowDistance, colDistance);
    for (let i = 0; i < Math.abs(rowDistance); i++) {}

    while (rowDistance) {
      return false;
    }
  }
};

export default handleValidation;
