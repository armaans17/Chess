const handleValidation = (currentPiece, dropSquare, dropLocation) => {
  console.log(currentPiece[0]);
  switch (currentPiece[0]) {
    case "5":
      return handlePawnMove();
    default:
      return false;
  }

  function handlePawnMove() {
    console.log("drop", dropLocation);
    return true;
  }
};

export default handleValidation;
