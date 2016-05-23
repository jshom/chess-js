/* (c) Jacob Shomstein */

$('#chess').children().children().click(function() {
  if (selected === false) {

    //Selected Piece -> cur object
    cur.color = $(this).children().attr('data-color');
    cur.type = $(this).children().attr('class');
    cur.pos.raw = $(this).attr('id');
    cur.pos.x = alphanum(cur.pos.raw.substring(0,1));
    cur.pos.y = Number(cur.pos.raw.substring(1,2));
    if ((cur.type === 'rook' || cur.type === 'queen')) {
      MaxX(cur.pos.x);
      MaxY(cur.pos.y);
      MinX(cur.pos.x);
      MinY(cur.pos.y);
    }
    if (cur.type === 'queen' || cur.type === 'bishop') {
      MaxDiagPositiveRight(cur.pos.x, cur.pos.y);
      MaxDiagPositiveLeft(cur.pos.x, cur.pos.y);
      MaxDiagNegativeLeft(cur.pos.x, cur.pos.y);
      MaxDiagNegativeRight(cur.pos.x, cur.pos.y);
    }
    console.log(cur);
    if (!cur.type || (movenum % 2 == 1 && cur.color != 'white') || (movenum % 2 === 0 && cur.color != 'black')) {
      error();
    } else {
      console.log(movenum);
      selected = true;
      movenum++;
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

    //firebase.ref("cur").update([cur]);
    //firebase.ref("dest").update([dest]);

    //LOOK IF KING IS IN RANGE
    if ((movenum - 1) % 2 == 1) {
      $('h4:first').html('BLACK');
    } else {
      $('h4:first').html('WHITE');
    }
  }
});
