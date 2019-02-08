// the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
// a function which takes a ROT13 encoded string as input and returns a decoded string.

function rot13(str) { // LBH QVQ VG!
  var solved = "";
  for(var i=0; i < str.length; i++){
      var asciiNum = str[i].charCodeAt();
      if (asciiNum >= 65 && asciiNum <= 77) {
        solved += String.fromCharCode(asciiNum + 13);
      } else if (asciiNum >= 78 && asciiNum <= 90) {
        solved += String.fromCharCode(asciiNum - 13);
      } else {
        solved += str[i];
      }
  }
  return solved;
}

rot13("YBIR SERR CVMMN!"); // return Love Free PIZZA!
