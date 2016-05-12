/* Jacob Shomstein */

//Pieces init

//Alphabet to numbers
var a=1,
    b=2,
    c=3,
    d=4,
    e=5,
    f=6,
    g=7,
    h=8;

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

console.log(alphanum('h'));
if (inuse == false) {
  $('#chess').children().children().click(function() {
    var cur_pos_raw = $(this).attr('id');
    var x = alphanum(cur_pos_raw.substring(0,1));
    var y = cur_pos_raw.substring(1,2);
    console.log("raw: " + cur_pos_raw + ", x: " + x + ", y: " + y);
  });
}
