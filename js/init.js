//Firebase config
//var fireConfig = {
//    apiKey: "AIzaSyC2yIm0pWutAVj7jWnT2AMS0G27Fuw6NWk",
//    authDomain: "chesserino.firebaseapp.com",
//    databaseURL: "https://chesserino.firebaseio.com"
//  };

//firebase.initializeApp(fireConfig);

//var fire = firebase.database();

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
