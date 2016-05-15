//convert letter to number
function alphanum(letter) {
  switch (letter) {
    case 'a':
      return 1;
    case 'b':
      return 2;
    case 'c':
      return 3;
    case 'd':
      return 4;
    case 'e':
      return 5;
    case 'f':
      return 6;
    case 'g':
      return 7;
    case 'h':
      return 8;
    default:
      return 0;
  }
}

//function for pawn
function pawncheck() {
  if (dest.pos.y - cur.pos.y == 1 && cur.pos.x == dest.pos.x) {
    return true;
  } else {
    return false;
  }
}
