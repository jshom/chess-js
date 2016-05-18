/* (c) Jacob Shomstein */

$('#chess').children().children().click(function() {
  if (selected === false) {

    //Selected Piece -> cur object
    cur.color = $(this).children().attr('data-color');
    cur.type = $(this).children().attr('class');
    cur.pos.raw = $(this).attr('id');
    cur.pos.x = alphanum(cur.pos.raw.substring(0,1));
    cur.pos.y = Number(cur.pos.raw.substring(1,2));
    if ((cur.type == 'rook' || 'queen') && (cur.pos.x != 8 || 0) && (cur.pos.y != 8 || 0)) {
      if (cur.pos.x != 8) {
        MaxX(cur.pos.x);
      } else {
        cur.max.x = 8;
        cur.max.y = cur.pos.y;
      }
      if (cur.pos.y != 8) {
        MaxY(cur.pos.y);
      } else {
        cur.max.y = 8;
        cur.max.x = cur.pos.x;
      }
      if (cur.pos.x != 1) {
        MinX(cur.pos.x);
      } else {
        cur.min.x = 1;
        cur.max.y = cur.pos.y;
      }
      if (cur.pos.y != 1) {
        MinY(cur.pos.y);
      } else {
        cur.min.y = 1;
        cur.min.x = cur.pos.x;
      }
    }
    if (cur.type == 'bishop' || 'queen') {
      MaxDiagPositiveRight();
      MaxDiagPositiveLeft();
      MaxDiagNegativeLeft();
      MaxDiagNegativeRight();
    }
    console.log(cur);

    //check if selected piece
    if (!cur.type) {
      //later put id or person check to white/black to make sure they are not using wrong pieces
      error();
    } else {
      selected = true;
    }

  } else {

    //Destination -> dest object
    dest.color = $(this).children().attr('data-color');
    dest.type = $(this).children().attr('class');
    dest.pos.raw = $(this).attr('id');
    dest.pos.x = alphanum(dest.pos.raw.substring(0,1));
    dest.pos.y = Number(dest.pos.raw.substring(1,2));

    console.log(dest);

    //check for piece type and perform specific action *highlight possible and apply move
    switch (cur.type) {
      case 'pawn':
        if (pawncheck()) {move();} else {error();}
        break;
      case 'rook':
        if (rookcheck()) {move();} else {error();}
        break;
      case 'king':
        if (kingcheck()) {move();} else {error();}
        break;
      case 'bishop':
        if (bishopcheck()) {move();} else {error();}
        break;
      case 'queen':
        if (queencheck()) {move();} else {error();}
        break;
      case 'knight':
        if (knightcheck()) {move();} else {error();}
        break;
      default:
        break;
    }
    //Basic Move
    //$('#'+cur_pos_raw).has('img').children().empty().appendTo('#'+dest_pos_raw);

    //Say its now unselected
    selected = false;
  }
});
