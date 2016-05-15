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

function numalpha(number) {
  switch (number) {
    case 1:
      return 'a';
    case 2:
      return 'b';
    case 3:
      return 'c';
    case 4:
      return 'd';
    case 5:
      return 'e';
    case 6:
      return 'f';
    case 7:
      return 'g';
    case 8:
      return 'h';
    default:
      return 0;
  }
}

function error() {
  alert('invalid move');
  selected = false;
}

//move function
function move() {
  if (cur.color != dest.color) {
    if (exists(dest.pos.raw)) {
      //Remove existing piece
      $('#'+dest.pos.raw).children().remove();
      //Move to taken piece
      $('#'+cur.pos.raw).has('img').children().empty().appendTo('#'+dest.pos.raw);
    }
    $('#'+cur.pos.raw).has('img').children().empty().appendTo('#'+dest.pos.raw);
  }
}

function exists(location) {
  if ($('#'+location).children().length >= 1) {
    return true;
  } else {
    return false;
  }
}

//function for pawn
function pawncheck() {
  if (cur.color == "white") {
    if (dest.pos.y - cur.pos.y == 1 && cur.pos.x == dest.pos.x && !exists(dest.pos.raw)) {
      return true;
    } else if (dest.pos.y - cur.pos.y == 2 && cur.pos.x == dest.pos.x && cur.pos.y == 2 && !exists(dest.pos.raw)) {
      return true;
    } else if (dest.pos.y - cur.pos.y == 1 && (dest.pos.x - cur.pos.x == 1 || dest.pos.x - cur.pos.x == -1) && exists(dest.pos.raw)) {
      return true;
    } else {
      return false;
    }
  } else {
    if (cur.pos.y - dest.pos.y == 1 && cur.pos.x == dest.pos.x && !exists(dest.pos.raw)) {
      return true;
    } else if (cur.pos.y - dest.pos.y == 2 && cur.pos.x == dest.pos.x && cur.pos.y == 7 && !exists(dest.pos.raw)) {
      return true;
    } else if (cur.pos.y - dest.pos.y == 1 && (dest.pos.x - cur.pos.x == 1 || dest.pos.x - cur.pos.x == -1) && exists(dest.pos.raw)) {
      return true;
    } else {
      return false;
    }
  }
}

function kingcheck() {
  if (Math.abs(cur.pos.x - dest.pos.x) <= 1 && Math.abs(cur.pos.y - dest.pos.y) <= 1) {
    return true;
  } else {
    return false;
  }
}

function rookcheck() {
  if (cur.pos.y == dest.pos.y || cur.pos.x == dest.pos.x) {
    return true;
  } else {
    return false;
  }
}

function bishopcheck() {
 if (Math.abs((dest.pos.y - cur.pos.y)/(dest.pos.x - cur.pos.x)) == 1) {
  return true;
  } else {
    return false;
  }
}

function queencheck() {
 if (Math.abs((dest.pos.y - cur.pos.y)/(dest.pos.x - cur.pos.x)) == 1 || cur.pos.x == dest.pos.x || cur.pos.y == dest.pos.y) {
  return true;
  } else {
    return false;
  }
}

function knightcheck() {
  if ( ( (Math.abs(dest.pos.y - cur.pos.y) == 1) && (Math.abs(dest.pos.x - cur.pos.x) == 2 )) || ( (Math.abs(dest.pos.y - cur.pos.y)) == 2 && (Math.abs(dest.pos.x - cur.pos.x) == 1) ) ) {
    return true;
  } else {
    return false;
  }
}
