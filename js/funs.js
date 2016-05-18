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
  console.log('invalid move');
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

//Done
function kingcheck() {
  if (Math.abs(cur.pos.x - dest.pos.x) <= 1 && Math.abs(cur.pos.y - dest.pos.y) <= 1) {
    return true;
  } else {
    return false;
  }
}

//Restrict
function rookcheck() {
  if ((cur.pos.y == dest.pos.y || cur.pos.x == dest.pos.x) && (dest.pos.y >= cur.min.y && dest.pos.y <= cur.max.y) && (dest.pos.x >= cur.min.x && dest.pos.x <= cur.max.x)) {
    return true;
  } else {
    return false;
  }
}

//Restrict
function bishopcheck() {
 if (Math.abs((dest.pos.y - cur.pos.y)/(dest.pos.x - cur.pos.x)) == 1) {
  return true;
  } else {
    return false;
  }
}

//Restrict
function queencheck() {
  if (Math.abs((dest.pos.y - cur.pos.y)/(dest.pos.x - cur.pos.x)) == 1 || cur.pos.x == dest.pos.x || cur.pos.y == dest.pos.y) {
    if (dest.pos.y >= cur.min.y && dest.pos.y <= cur.max.y && dest.pos.x >= cur.min.x && dest.pos.x <= cur.max.x) {
      //checks only for horizantal and vertical
      return true;
    } else if (1 == 1) {
      //checks only for horizantal and vertical
      return true;
    }
  } else {
    return false;
  }
}

//Done
function knightcheck() {
  if (((Math.abs(dest.pos.y - cur.pos.y) == 1) && (Math.abs(dest.pos.x - cur.pos.x) == 2)) || ( (Math.abs(dest.pos.y - cur.pos.y)) == 2 && (Math.abs(dest.pos.x - cur.pos.x) == 1) ) ) {
    return true;
  } else {
    return false;
  }
}

//generates maximum Y value going up the board
function MaxY(Y) {
  //initiaze after +1 so it doesnt catch itself
  var temploc = numalpha(cur.pos.x)+(Y+1);
  console.log(temploc);
  if (exists(temploc)) {
    console.log("end");
    cur.max.y = Y+1;
    console.log(cur.max.y);
    return;
  } else if (Y >= 8) {
    cur.max.y = 8;
    return;
  }
  MaxY(Y + 1);
}

//generates minimum Y value going down the board
function MinY(Y) {
  //initiaze after +1 so it doesnt catch itself
  var temploc = numalpha(cur.pos.x)+(Y-1);
  console.log(temploc);
  if (exists(temploc)) {
    console.log("end");
    cur.min.y = Y-1;
    console.log(cur.min.y);
    return;
  } else if (Y <= 1) {
    cur.min.y = 1;
    return;
  }
  MinY(Y - 1);
}

//generates maximum X value striaght across to the right of the board
function MaxX(X) {
  //initiaze after +1 so it doesnt catch itself
  var temploc = numalpha(X + 1) + cur.pos.y;
  console.log(temploc);
  if (exists(temploc)) {
    console.log("end");
    cur.max.x = X+1;
    console.log(cur.max.x);
    return;
  } else if (X >= 8) {
    cur.max.x = 8;
    console.log(cur.max.x);
    return;
  }
  MaxX(X + 1);
}

//generates minimum X value striaght cross to the left of the board
function MinX(X) {
  //initiaze after +1 so it doesnt catch itself
  var temploc = numalpha(X - 1) + cur.pos.y;
  console.log(temploc);
  if (exists(temploc)) {
    console.log("end");
    cur.min.x = X-1;
    console.log(cur.min.x);
    return;
  } else if (X <= 1) {
    cur.min.x = 1;
    console.log(cur.min.x);
    return;
  }
  MinX(X - 1);
}

//generates coordinates for maximum positive slope right
function MaxDiagPositiveRight(X, Y) {
  var temploc = numalpha(X + 1) + (Y + 1);
  console.log(temploc);
  if (exists(temploc)) {
    console.log("end");
    cur.diag.positive.right.x = X + 1;
    cur.diag.positive.right.y = Y + 1;
    console.log(cur.diag.positive.right);
    return;
  }
  if (X >= 8) {
    cur.diag.positive.right.x = 8;
    cur.diag.positive.right.y = Y;
    return;
  } else if (Y >= 8) {
    cur.diag.positive.right.x = X;
    cur.diag.positive.right.y = 8;
    return;
  }
  MaxDiagPositiveRight(X + 1, Y + 1);
}

//generates coordinates for maximum positive slope left
function MaxDiagPositiveLeft(X, Y) {
  var temploc = numalpha(X - 1) + (Y - 1);
  console.log(temploc);
  if (exists(temploc)) {
    console.log("end");
    cur.diag.positive.left.x = X - 1;
    cur.diag.positive.left.y = Y - 1;
    console.log(cur.diag.positive.left);
    return;
  }
  if (X <= 1) {
    cur.diag.positive.left.x = 1;
    cur.diag.positive.left.y = Y;
    console.log(cur.diag.positive.left);
    return;
  } else if (Y <= 1) {
    cur.diag.positive.left.x = X;
    cur.diag.positive.left.y = 1;
    console.log(cur.diag.positive.left);
    return;
  }
  MaxDiagPositiveLeft(X - 1, Y - 1);
}

//generates coordinates for maximum positive slope left
function MaxDiagPositiveLeft(X, Y) {
  var temploc = numalpha(X - 1) + (Y - 1);
  console.log(temploc);
  if (exists(temploc)) {
    console.log("end");
    cur.diag.positive.left.x = X - 1;
    cur.diag.positive.left.y = Y - 1;
    console.log(cur.diag.positive.left);
    return;
  }
  if (X <= 1) {
    cur.diag.positive.left.x = 1;
    cur.diag.positive.left.y = Y;
    console.log(cur.diag.positive.left);
    return;
  } else if (Y <= 1) {
    cur.diag.positive.left.x = X;
    cur.diag.positive.left.y = 1;
    console.log(cur.diag.positive.left);
    return;
  }
  MaxDiagPositiveLeft(X - 1, Y - 1);
}

//generates coordinates for maximum negative slope right
function MaxDiagNegativeRight(X, Y) {
  var temploc = numalpha(X + 1) + (Y - 1);
  console.log(temploc);
  if (exists(temploc)) {
    console.log("end");
    cur.diag.negative.right.x = X + 1;
    cur.diag.negative.right.y = Y - 1;
    console.log(cur.diag.negative.right);
    return;
  }
  if (X >= 8) {
    cur.diag.negative.right.x = 8;
    cur.diag.negative.right.y = Y;
    console.log(cur.diag.negative.right);
    return;
  } else if (Y <= 1) {
    cur.diag.negative.right.x = X;
    cur.diag.negative.right.y = 1;
    console.log(cur.diag.negative.right);
    return;
  }
  MaxDiagNegativeRight(X + 1, Y - 1);
}

//generates coordinates for maximum negative slope left
function MaxDiagNegativeLeft(X, Y) {
  var temploc = numalpha(X - 1) + (Y + 1);
  console.log(temploc);
  if (exists(temploc)) {
    console.log("end");
    cur.diag.negative.left.x = X - 1;
    cur.diag.negative.left.y = Y + 1;
    console.log(cur.diag.negative.left);
    return;
  }
  if (X <= 1) {
    cur.diag.negative.left.x = 1;
    cur.diag.negative.left.y = Y;
    console.log(cur.diag.negative.left);
    return;
  } else if (Y >= 8) {
    cur.diag.negative.left.x = X;
    cur.diag.negative.left.y = 8;
    console.log(cur.diag.negative.left);
    return;
  }
  MaxDiagNegativeLeft(X - 1, Y + 1);
}
