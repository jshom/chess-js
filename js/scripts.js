/* Jacob Shomstein */

//var initial

var cur_pos_raw = "",
    cur_x = 0,
    cur_y = 0,
    dest_pos_raw = "",
    dest_x = 0,
    dest_y = 0;

var pieces = {
  black : {
    pawn_1 : 'a8',
  },
  white : {

  }
}

function alphanum(letter) {
  switch (letter) {
    case 'a':
      return 1;
      break;
    case 'b':
      return 2;
      break;
    case 'c':
      return 3;
      break;
    case 'd':
      return 4;
      break;
    case 'e':
      return 5;
      break;
    case 'f':
      return 6;
      break;
    case 'g':
      return 7;
      break;
    case 'h':
      return 8;
      break;
    default:
      return 0;
  }
}

var inuse = false;

setInterval(checkclicks(), 10);
function checkclicks() {
  if (inuse === false) {
    $('#chess').children().children().click(function() {
      cur_pos_raw = $(this).attr('id');
      cur_x = alphanum(cur_pos_raw.substring(0,1));
      cur_y = cur_pos_raw.substring(1,2);
      console.log("Current: raw: " + cur_pos_raw + ", x: " + cur_x + ", y: " + cur_y);
      inuse = true;
      console.log(inuse);
    });
  }
  if (inuse) {
    $('#chess').children().children().click(function() {
      dest_pos_raw = $(this).attr('id');
      dest_x = alphanum(dest_pos_raw.substring(0,1));
      dest_y = dest_pos_raw.substring(1,2);
      console.log("Destination: raw: " + dest_pos_raw + ", x: " + dest_x + ", y: " + dest_y);
      inuse = false;
      console.log(inuse);
    });
  }
}
