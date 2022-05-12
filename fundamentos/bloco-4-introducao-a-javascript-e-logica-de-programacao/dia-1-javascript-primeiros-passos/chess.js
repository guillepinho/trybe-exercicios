const piece = "KNIGHT";
const pieceToCheck = piece.toLowerCase();

if (pieceToCheck == "bishop") {
    console.log("diagonals");
}
else if (pieceToCheck == "king") {
    console.log("one square horizontal, vertical or diagonal");
}
else if (pieceToCheck == "queen") {
    console.log("horizontal, vertical or diagonal");
}
else if (pieceToCheck == "rook") {
    console.log("horizontal or vertical");
}
else if (pieceToCheck == "knight") {
    console.log("two squares horizontal or vertical, and one more of the other type. L shaped move");
}
else if (pieceToCheck == "pawn") {
    console.log("one square vertical");
}

