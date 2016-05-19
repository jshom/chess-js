var cur = {
  color : "",
  type : "",
  pos : {
    raw : "",
    x : 0,
    y : 0
  },
  max : {
    x : 0,
    y : 0
  },
  min : {
    x : 0,
    y : 0
  },
  diag : {
    positive : {
      left : {
        x : 0,
        y : 0
      },
      right : {
        x : 0,
        y : 0
      }
    },
    negative : {
      left : {
        x : 0,
        y : 0
      },
      right : {
        x : 0,
        y : 0
      }
    }
  }
};

var dest = {
  color : "",
  pos : {
    raw : "",
    x : 0,
    y : 0
  }
};

var selected = false;
var movenum = 1;
